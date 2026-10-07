import { needTypes } from "@/lib/data";

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

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

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

  const rows: [string, string][] = [
    ["Prénom", data.firstName],
    ["Entreprise", data.company || "—"],
    ["Email", data.email],
    ["Téléphone", data.phone || "—"],
    ["Type de besoin", need],
  ];
  const textContent = [
    ...rows.map(([k, v]) => `${k} : ${v}`),
    "",
    "Besoin :",
    data.message,
  ].join("\n");
  const htmlContent = `<table cellpadding="4">${rows
    .map(
      ([k, v]) =>
        `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table><p><strong>Besoin :</strong></p><p>${escapeHtml(
    data.message,
  ).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: SENDER,
      to: RECIPIENTS.map((email) => ({ email })),
      replyTo: { email: data.email, name: data.firstName },
      subject: `Demande — ${need} — ${data.firstName}${
        data.company ? ` (${data.company})` : ""
      }`,
      textContent,
      htmlContent,
    }),
  });

  if (!res.ok) {
    console.error("Brevo", res.status, await res.text());
    return Response.json({ error: "send" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
