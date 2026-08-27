"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const NAME = "DAN HABIB";

function markIntroDone() {
  if (window.__introDone) return;
  window.__introDone = true;
  // Différé hors du callback GSAP : sinon les listeners créeraient leurs
  // tweens dans le scope du contexte GSAP du préloader.
  setTimeout(() => window.dispatchEvent(new Event("intro:done")), 0);
}

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.display = "none";
      markIntroDone();
      return;
    }

    document.documentElement.classList.add("is-locked");
    window.__lenis?.stop();

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const countEl = el.querySelector<HTMLElement>(".preloader-count");

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          el.style.display = "none";
          document.documentElement.classList.remove("is-locked");
          window.__lenis?.start();
          // La barre de scroll réapparaît au déverrouillage : les positions
          // des triggers doivent être recalculées avec la vraie largeur.
          ScrollTrigger.refresh();
          markIntroDone();
        },
      });

      tl.to(
        counter,
        {
          v: 100,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            if (countEl) {
              countEl.textContent = String(Math.round(counter.v)).padStart(3, "0");
            }
          },
        },
        0
      )
        .to(".preloader-bar-fill", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0)
        .to(
          ".preloader-letter",
          { yPercent: -110, duration: 0.9, stagger: 0.045, ease: "power4.inOut" },
          0.15
        )
        .to(".preloader-inner", { opacity: 0, duration: 0.35, ease: "power2.in" }, 1.7)
        .to(el, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, 1.85);
    }, el);

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("is-locked");
      window.__lenis?.start();
    };
  }, []);

  return (
    <>
      <div className="preloader" ref={rootRef} aria-hidden="true">
        <div className="preloader-inner">
          <div className="preloader-name">
            {NAME.split("").map((c, i) => (
              <span className="preloader-mask" key={i}>
                <span className="preloader-letter">{c === " " ? " " : c}</span>
              </span>
            ))}
          </div>
          <div className="preloader-meta">
            <span className="preloader-count">000</span>
            <span className="preloader-tag">Portfolio — Paris</span>
          </div>
          <div className="preloader-bar">
            <span className="preloader-bar-fill" />
          </div>
        </div>
      </div>
      <noscript>
        <style>{`.preloader{display:none!important}`}</style>
      </noscript>
    </>
  );
}
