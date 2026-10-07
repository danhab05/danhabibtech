"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, needTypes } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState({ firstName: "", email: "" });
  const doneRef = useRef<HTMLHeadingElement>(null);

  // Le formulaire disparaît : on amène le focus (et les lecteurs d'écran) sur la confirmation.
  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
  }, [status]);

  /** Le formulaire est envoyé par /api/contact (Brevo) directement dans nos boîtes. */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSentTo({
        firstName: String(payload.firstName ?? "").trim(),
        email: String(payload.email ?? "").trim(),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <p className="label">Contact</p>
          <h2 id="contact-title">Parlons de votre projet</h2>
          <p>
            Dites-nous en quelques lignes ce qui vous fait perdre du temps. Nous
            vous répondons sous 24 h, et on voit ensemble comment vous aider.
          </p>
          <div className="contact-direct">
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
          </div>
          <p className="contact-hours">
            Lun – ven et dimanche, 8 h – 20 h · Paris et à distance
          </p>
        </div>

        {status === "sent" && (
          <div className="contact-form contact-done" role="status">
            <span className="done-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            <h3 ref={doneRef} tabIndex={-1}>
              Message envoyé{sentTo.firstName ? `, merci ${sentTo.firstName}` : ""} !
            </h3>
            <p>
              Nous avons bien reçu votre demande. Vous aurez un retour
              généralement sous 24 h.
            </p>
            {sentTo.email && (
              <p className="done-mail">
                Un email de confirmation vient de partir à{" "}
                <strong>{sentTo.email}</strong>. Pensez à regarder dans vos
                spams.
              </p>
            )}
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setStatus("idle")}
            >
              Envoyer une autre demande
            </button>
          </div>
        )}

        <form
          className="contact-form"
          onSubmit={onSubmit}
          hidden={status === "sent"}
        >
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
                Choisir
              </option>
              {needTypes.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Votre besoin</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Ex. : on recopie chaque commande du site dans un tableur, ça prend une heure par jour."
            />
          </div>

          {/* Piège à robots : invisible et hors du parcours clavier. */}
          <div className="field-honey" aria-hidden="true">
            <label htmlFor="website">Site web</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button
            className="btn form-submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
          </button>

          <p className="form-note" role="status">
            {status === "error"
                ? `L’envoi n’a pas fonctionné. Réessayez, ou écrivez-nous directement à ${SITE.email}.`
                : "Votre message nous est envoyé directement, nous répondons sous 24 h."}
          </p>
        </form>
      </div>
    </section>
  );
}
