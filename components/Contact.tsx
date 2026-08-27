import { SITE } from "@/lib/data";

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container-wide">
        <p className="section-label section-label-center" data-fx="fade">
          <span className="section-num">06</span>
          Contact
        </p>
        <h2 className="contact-headline" data-fx="words">
          Travaillons <em>ensemble</em>
        </h2>
        <p className="contact-desc" data-fx="words-scrub">
          Besoin d'automatiser un process, de créer un outil interne ou de
          construire une application web&nbsp;? Je suis ouvert aux nouvelles
          missions — réponse sous 24h.
        </p>

        <div className="contact-cta" data-fx="fade">
          <a
            className="contact-bubble"
            href={`mailto:${SITE.email}`}
            data-magnetic="0.25"
          >
            <span>Écrivez-moi</span>
          </a>
        </div>

        <dl className="contact-grid" data-fx-stagger>
          <div className="contact-item">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </dd>
          </div>
          <div className="contact-item">
            <dt>Disponibilité</dt>
            <dd>Lun – Ven &amp; Dim · 8h – 20h</dd>
          </div>
          <div className="contact-item">
            <dt>Localisation</dt>
            <dd>Paris · Remote</dd>
          </div>
          <div className="contact-item">
            <dt>Réseaux</dt>
            <dd className="contact-socials">
              <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={SITE.links.twitter} target="_blank" rel="noopener noreferrer">
                X
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
