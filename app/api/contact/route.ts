import { needTypes } from "@/lib/data";
import { SITE } from "@/lib/data";
import {
  CONFIRMATION_SUBJECT,
  confirmationHtml,
  confirmationText,
  contactHtml,
  contactSubject,
  contactText,
} from "./email";

/** Les demandes du formulaire partent de cette adresse (domaine authentifié sur Brevo). */
const SENDER = { name: "NovaOr", email: "contact@novaor.fr" };

/** Et arrivent dans ces boîtes. */
const RECIPIENTS = [
  "danhabib011@gmail.com",
  "dan.habib@yahoo.fr",
  "ariebelhassen2005@gmail.com",
];

const LIMITS = {
  firstName: 100,
  company: 150,
  email: 200,
  phone: 40,
  needType: 100,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY manquante");
    return Response.json({ error: "config" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Champ piège anti-robots : on répond comme si tout allait bien.
  if (String(body.website ?? "").trim() !== "") {
    return Response.json({ ok: true });
  }

  const get = (k: Field) => String(body[k] ?? "").trim().slice(0, LIMITS[k]);
  const data = {
    firstName: get("firstName"),
    company: get("company"),
    email: get("email"),
    phone: get("phone"),
    needType: get("needType"),
    message: get("message"),
  };

  if (
    !data.firstName ||
    !data.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  const need = (needTypes as readonly string[]).includes(data.needType)
    ? data.needType
    : "Non précisé";

  const mail = { ...data, need };

  const res = await sendEmail(apiKey, {
    sender: SENDER,
    to: RECIPIENTS.map((email) => ({ email })),
    replyTo: { email: data.email, name: data.firstName },
    subject: contactSubject(mail),
    textContent: contactText(mail),
    htmlContent: contactHtml(mail),
  });

  if (!res.ok) {
    console.error("Brevo", res.status, await res.text());
    return Response.json({ error: "send" }, { status: 502 });
  }

  // Accusé de réception au visiteur. La demande nous est déjà parvenue : un échec ici ne bloque pas.
  const ack = await sendEmail(apiKey, {
    sender: SENDER,
    to: [{ email: data.email, name: data.firstName }],
    replyTo: { email: SITE.email, name: SENDER.name },
    subject: CONFIRMATION_SUBJECT,
    textContent: confirmationText(mail),
    htmlContent: confirmationHtml(mail),
  });
  if (!ack.ok) console.error("Brevo (confirmation)", ack.status, await ack.text());

  return Response.json({ ok: true });
}

function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
}
