/**
 * Emails du formulaire de contact : la demande reçue par l'équipe, et la confirmation envoyée au visiteur.
 * HTML en tableaux et styles en ligne (compatible Gmail, Yahoo, Outlook).
 */

export type ContactRequest = {
  firstName: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  message: string;
};

const LOGO_URL = "https://novaor.fr/brand/novaor-logo.png";

const GOLD = "#b8892b";
const INK = "#14161c";
const MUTED = "#6b7080";
const LINE = "#ebe7de";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/** Habillage commun : logo sur fond noir, liseré doré, carte blanche, pied de page. */
function layout(title: string, preheader: string, content: string) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f1ec;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f1ec;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(20,22,28,0.06);">
        <tr>
          <td align="center" style="background:#0b0b0d;padding:28px 24px 24px;">
            <img src="${LOGO_URL}" width="160" height="112" alt="NovaOr" style="display:block;border:0;width:160px;height:auto;">
          </td>
        </tr>
        <tr>
          <td style="height:3px;line-height:3px;font-size:0;background:linear-gradient(90deg,#8a6420,${GOLD},#e7c77a,${GOLD},#8a6420);background-color:${GOLD};">&nbsp;</td>
        </tr>
${content}      </table>
      <p style="margin:20px 0 0;font-size:12px;color:#9a9caa;">NovaOr · Paris · <a href="https://novaor.fr" style="color:#9a9caa;">novaor.fr</a></p>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function contactSubject(r: ContactRequest) {
  return `Nouvelle demande — ${r.firstName}${r.company ? ` (${r.company})` : ""} · ${r.need}`;
}

export function contactText(r: ContactRequest) {
  return [
    "Nouvelle demande depuis novaor.fr",
    "",
    `Prénom : ${r.firstName}`,
    `Entreprise : ${r.company || "—"}`,
    `Email : ${r.email}`,
    `Téléphone : ${r.phone || "—"}`,
    `Type de besoin : ${r.need}`,
    "",
    "Besoin :",
    r.message,
    "",
    "Répondez directement à cet email pour écrire à la personne.",
  ].join("\n");
}

export function contactHtml(r: ContactRequest) {
  const e = escapeHtml;
  const date = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date());

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${LINE};width:38%;font-size:13px;color:${MUTED};vertical-align:top;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid ${LINE};font-size:15px;color:${INK};font-weight:600;vertical-align:top;">${value}</td>
    </tr>`;

  const emailLink = `<a href="mailto:${e(r.email)}" style="color:${INK};text-decoration:none;">${e(r.email)}</a>`;
  const phoneLink = r.phone
    ? `<a href="tel:${e(r.phone.replace(/\s+/g, ""))}" style="color:${INK};text-decoration:none;">${e(r.phone)}</a>`
    : `<span style="color:${MUTED};font-weight:400;">Non renseigné</span>`;

  return layout(
    contactSubject(r),
    `${r.firstName} vous écrit : ${r.message.slice(0, 120)}`,
    `        <tr>
          <td style="padding:32px 32px 8px;">
            <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};font-weight:700;">Nouvelle demande</p>
            <h1 style="margin:0 0 6px;font-size:24px;line-height:1.3;color:${INK};font-weight:700;">${e(r.firstName)}${r.company ? ` <span style="color:${MUTED};font-weight:400;">· ${e(r.company)}</span>` : ""}</h1>
            <p style="margin:0;font-size:13px;color:${MUTED};">${e(date)} · via le formulaire de novaor.fr</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 8px;">
            <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:#faf4e6;border:1px solid #efdfb8;color:#8a6420;font-size:13px;font-weight:600;">${e(r.need)}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${row("Email", emailLink)}
              ${row("Téléphone", phoneLink)}
              ${row("Entreprise", r.company ? e(r.company) : `<span style="color:${MUTED};font-weight:400;">Non renseignée</span>`)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 8px;">
            <p style="margin:0 0 10px;font-size:13px;color:${MUTED};">Son besoin</p>
            <div style="padding:18px 20px;background:#faf9f6;border-left:3px solid ${GOLD};border-radius:8px;font-size:15px;line-height:1.6;color:${INK};">${e(r.message).replace(/\n/g, "<br>")}</div>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:28px 32px 36px;">
            <a href="mailto:${e(r.email)}?subject=${encodeURIComponent("Re : votre demande — NovaOr")}" style="display:inline-block;padding:14px 28px;border-radius:10px;background:${INK};color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">Répondre à ${e(r.firstName)}</a>
            <p style="margin:12px 0 0;font-size:12px;color:${MUTED};">Ou répondez simplement à cet email.</p>
          </td>
        </tr>
`,
  );
}

export const CONFIRMATION_SUBJECT = "Votre demande a bien été reçue — NovaOr";

export function confirmationText(r: ContactRequest) {
  return [
    `Bonjour ${r.firstName},`,
    "",
    "Merci pour votre message : votre demande a bien été prise en compte.",
    "Vous aurez un retour de notre part généralement sous 24 h.",
    "",
    "Rappel de votre demande :",
    `Type de besoin : ${r.need}`,
    r.message,
    "",
    "Pour ajouter une précision, répondez simplement à cet email.",
    "",
    "L'équipe NovaOr",
    "https://novaor.fr",
  ].join("\n");
}

export function confirmationHtml(r: ContactRequest) {
  const e = escapeHtml;
  return layout(
    CONFIRMATION_SUBJECT,
    "Votre demande a bien été prise en compte. Retour généralement sous 24 h.",
    `
        <tr>
          <td style="padding:36px 32px 8px;">
            <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};font-weight:700;">Demande reçue</p>
            <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:${INK};font-weight:700;">Merci ${e(r.firstName)}, c'est bien noté !</h1>
            <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:${INK};">Votre demande a bien été prise en compte. Nous l'étudions et revenons vers vous <strong>généralement sous 24&nbsp;h</strong>.</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:${INK};">Une précision à ajouter ? Répondez simplement à cet email.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 8px;">
            <p style="margin:0 0 10px;font-size:13px;color:${MUTED};">Rappel de votre demande · <span style="color:#8a6420;font-weight:600;">${e(r.need)}</span></p>
            <div style="padding:18px 20px;background:#faf9f6;border-left:3px solid ${GOLD};border-radius:8px;font-size:15px;line-height:1.6;color:${INK};">${e(r.message).replace(/\n/g, "<br>")}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 36px;">
            <p style="margin:0;font-size:15px;line-height:1.6;color:${INK};">À très vite,<br><strong>L'équipe NovaOr</strong></p>
          </td>
        </tr>
`,
  );
}
