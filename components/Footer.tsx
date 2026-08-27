"use client";

import { useEffect, useState } from "react";
import { navLinks, SITE } from "@/lib/data";

export default function Footer() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-giant" aria-hidden="true">
        <span data-parallax="0.06">DAN HABIB</span>
      </div>
      <div className="container-wide footer-inner">
        <div className="footer-col footer-col-brand">
          <span className="footer-brand">Dan Habib</span>
          <p>
            J'automatise ce qui vous fait perdre du temps,
            <br />
            et je construis ce qui vous en fait gagner.
            <br />
            Paris — Remote.
          </p>
        </div>
        <nav className="footer-col" aria-label="Plan du site">
          <span className="footer-col-title">Menu</span>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="footer-col">
          <span className="footer-col-title">Réseaux</span>
          <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={SITE.links.twitter} target="_blank" rel="noopener noreferrer">
            X / Twitter
          </a>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Contact</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span className="footer-time">
            Paris — <span suppressHydrationWarning>{time}</span>
          </span>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} Dan Habib — Tous droits réservés
        </span>
        <span>Visuels générés avec Higgsfield AI</span>
      </div>
    </footer>
  );
}
