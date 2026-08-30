"use client";

import { useState } from "react";
import { SITE, needTypes } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * Le site est statique : pas de backend pour poster le formulaire.
   * On compose donc un email pré-rempli que le visiteur n'a plus qu'à envoyer.
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Champ piège anti-robots : rempli uniquement par un script.
    if (String(data.get("website") ?? "").trim() !== "") return;

    const get = (k: string) => String(data.get(k) ?? "").trim();
    const need = get("needType") || "Non précisé";
    const subject = `Demande — ${need}`;
    const body = [
      `Prénom : ${get("firstName")}`,
      `Entreprise : ${get("company") || "—"}`,
      `Email : ${get("email")}`,
      `Téléphone : ${get("phone") || "—"}`,
      `Type de besoin : ${need}`,
      "",
      "Besoin :",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container-wide">
        <p className="section-label section-label-center" data-fx="fade">
          <span className="section-num">09</span>
          Contact
        </p>
        <h2 className="contact-headline" data-fx="words">
          Une tâche qui <em>se répète&nbsp;?</em>
        </h2>
        <p className="contact-desc" data-fx="words-scrub">
          Il y a sûrement une meilleure façon de la gérer. Expliquez-moi comment
          vous travaillez aujourd'hui : on regarde ensemble ce qui peut être
          automatisé, connecté ou construit. Réponse sous 24h.
        </p>

        <div className="contact-layout">
          <aside className="contact-side" data-fx="fade">
            <h3 className="contact-side-title">Direct</h3>
            <a className="contact-channel" href={`mailto:${SITE.email}`}>
              <span className="contact-channel-label">Email</span>
              <span className="contact-channel-value">{SITE.email}</span>
            </a>
            <a
              className="contact-channel"
              href={SITE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-channel-label">LinkedIn</span>
              <span className="contact-channel-value">Dan Habib ↗</span>
            </a>
            <a
              className="contact-channel"
              href={SITE.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-channel-label">GitHub</span>
              <span className="contact-channel-value">@danhab05 ↗</span>
            </a>
            <div className="contact-facts">
              <p>
                <strong>Disponibilité</strong>
                Lun – Ven &amp; Dim · 8h – 20h
              </p>
              <p>
                <strong>Localisation</strong>
                Paris · Remote partout en France
              </p>
            </div>
          </aside>

          <form className="contact-form" onSubmit={onSubmit} data-fx="fade">
            <div className="field-row">
              <div className="field">
                <label htmlFor="firstName">Prénom</label>
                <input id="firstName" name="firstName" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="company">Entreprise</label>
                <input id="company" name="company" type="text" />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">
                  Téléphone <span className="field-opt">(facultatif)</span>
                </label>
                <input id="phone" name="phone" type="tel" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="needType">Type de besoin</label>
              <select id="needType" name="needType" defaultValue="">
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                {needTypes.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Décrivez votre besoin</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Comment fonctionne votre activité aujourd'hui ? Qu'aimeriez-vous automatiser, connecter ou construire ?"
              />
            </div>

            {/* Piège à robots : invisible et hors du parcours clavier. */}
            <div className="field-honey" aria-hidden="true">
              <label htmlFor="website">Site web</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button className="button primary form-submit" type="submit">
              Envoyer ma demande
            </button>

            <p className="form-note" role="status">
              {sent
                ? "Votre logiciel de messagerie vient de s'ouvrir avec le message pré-rempli — il ne reste qu'à l'envoyer."
                : "Le formulaire ouvre votre messagerie avec la demande déjà rédigée."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
