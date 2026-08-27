"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { navLinks, SITE } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const ctx = gsap.context(() => {
      const showAnim = gsap
        .from(header, { yPercent: -100, paused: true, duration: 0.35, ease: "power2.out" })
        .progress(1);
      ScrollTrigger.create({
        start: "top top-=10",
        onUpdate: (self) => {
          if (self.direction === -1 || self.scroll() < 80) showAnim.play();
          else showAnim.reverse();
          header.classList.toggle("is-scrolled", self.scroll() > 40);
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const ctx = gsap.context(() => {
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
    }, overlay);
    return () => {
      ctx.revert();
      tlRef.current = null;
    };
  }, []);

  const toggle = useCallback((next: boolean) => {
    setOpen(next);
    const tl = tlRef.current;
    if (next) {
      window.__lenis?.stop();
      document.documentElement.classList.add("is-locked");
      tl?.timeScale(1).play();
    } else {
      tl?.timeScale(1.35).reverse();
      window.__lenis?.start();
      document.documentElement.classList.remove("is-locked");
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") toggle(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="nav container-wide">
          <a className="brand" href="#accueil" onClick={() => toggle(false)}>
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
