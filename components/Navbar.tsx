"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { navLinks, SITE } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const showAnimRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const ctx = gsap.context(() => {
      const showAnim = gsap
        .from(header, { yPercent: -100, paused: true, duration: 0.35, ease: "power2.out" })
        .progress(1);
      showAnimRef.current = showAnim;

      ScrollTrigger.create({
        start: "top top-=10",
        onUpdate: (self) => {
          if (self.direction === -1 || self.scroll() < 80) showAnim.play();
          else if (!openRef.current) showAnim.reverse();
          header.classList.toggle("is-scrolled", self.scroll() > 40);
        },
      });

      // Un lien du header atteint au clavier doit être visible.
      const onFocusIn = () => showAnim.play();
      header.addEventListener("focusin", onFocusIn);
      return () => header.removeEventListener("focusin", onFocusIn);
    });
    return () => {
      ctx.revert();
      showAnimRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(overlay, { clipPath: "inset(0% 0% 100% 0%)" });
        tlRef.current = gsap
          .timeline({ paused: true })
          .to(overlay, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.7,
            ease: "power4.inOut",
          })
          .from(
            ".menu-link-mask .menu-link-inner",
            { yPercent: 130, duration: 0.7, stagger: 0.06, ease: "power4.out" },
            "-=0.25"
          )
          .from(
            ".menu-meta > *",
            { y: 22, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" },
            "-=0.45"
          );
        return () => {
          tlRef.current = null;
        };
      });

      // Sans animation : l'overlay apparaît et disparaît directement.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(overlay, { clipPath: "inset(0% 0% 100% 0%)" });
        tlRef.current = gsap
          .timeline({ paused: true })
          .set(overlay, { clipPath: "inset(0% 0% 0% 0%)" });
        return () => {
          tlRef.current = null;
        };
      });
    }, overlay);
    return () => ctx.revert();
  }, []);

  const toggle = useCallback((next: boolean) => {
    if (openRef.current === next) return;
    openRef.current = next;
    setOpen(next);

    const tl = tlRef.current;
    const main = document.getElementById("content");
    const footer = document.querySelector("footer");

    if (next) {
      window.__lenis?.stop();
      document.documentElement.classList.add("is-locked");
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      tl?.timeScale(1).play();
      showAnimRef.current?.play();
      requestAnimationFrame(() => firstLinkRef.current?.focus());
    } else {
      tl?.timeScale(1.35).reverse();
      window.__lenis?.start();
      document.documentElement.classList.remove("is-locked");
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      btnRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openRef.current) toggle(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="nav container-wide">
          <a className="brand" href="#accueil">
            <span className="brand-dot" aria-hidden="true" />
            Dan Habib
          </a>
          <nav className="nav-links" aria-label="Navigation principale">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <a className="nav-status" href="#contact">
              <span className="status-dot" aria-hidden="true" />
              Disponible
            </a>
            <button
              type="button"
              ref={btnRef}
              className={`menu-btn${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="menu-overlay"
              onClick={() => toggle(!open)}
            >
              <span className="menu-btn-label">{open ? "Fermer" : "Menu"}</span>
              <span className="menu-btn-lines" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`menu-overlay${open ? " is-open" : ""}`}
        id="menu-overlay"
        ref={overlayRef}
        aria-hidden={!open}
      >
        <div className="menu-inner container-wide">
          <nav className="menu-links" aria-label="Menu">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="menu-link"
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={() => toggle(false)}
              >
                <span className="menu-link-mask">
                  <span className="menu-link-inner">
                    <span className="menu-link-num">0{i + 1}</span>
                    {l.label}
                  </span>
                </span>
              </a>
            ))}
          </nav>
          <div className="menu-meta">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={SITE.links.twitter} target="_blank" rel="noopener noreferrer">
              X / Twitter ↗
            </a>
            <span>Paris — Remote</span>
          </div>
        </div>
      </div>
    </>
  );
}
