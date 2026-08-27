"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { MEDIA } from "@/lib/media";

function Chars({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((c, i) => (
        <span className="hero-char-mask" key={i}>
          <span className="hero-char">{c}</span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 900px)").matches;
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    // Sur mobile / connexion économe, le poster suffit : pas de mp4 à décoder.
    if (!reduced && wide && !saveData) setShowVideo(true);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const chars = Array.from(section.querySelectorAll<HTMLElement>(".hero-char"));
        const fades = Array.from(section.querySelectorAll<HTMLElement>(".hero-fade"));
        const bottom = section.querySelector<HTMLElement>(".hero-bottom");

        gsap.set(chars, { yPercent: 115 });
        gsap.set(fades, { y: 38, opacity: 0 });
        if (bottom) gsap.set(bottom, { opacity: 0 });

        const intro = () => {
          const tl = gsap
            .timeline({ defaults: { ease: "power4.out" } })
            .to(chars, { yPercent: 0, duration: 1.25, stagger: 0.05 }, 0.05)
            .to(fades, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, 0.6);
          if (bottom) tl.to(bottom, { opacity: 1, duration: 0.8 }, 1.1);
        };
        if (window.__introDone) intro();
        else window.addEventListener("intro:done", intro, { once: true });

        gsap.to(".hero-media", {
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".hero-content", {
          yPercent: -16,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom 30%",
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onLeave: () => videoRef.current?.pause(),
          onEnterBack: () => {
            videoRef.current?.play().catch(() => {});
          },
        });

        return () => window.removeEventListener("intro:done", intro);
      });
    }, section);
    return () => ctx.revert();
  }, []);

  // Champ de braises en canvas — toujours actif derrière la vidéo.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = canvas.getContext("2d");
    if (!c) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let inView = true;

    type P = {
      x: number;
      y: number;
      r: number;
      s: number;
      a: number;
      ph: number;
      drift: number;
    };
    let parts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.round((w * h) / 24000));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.8,
        s: 0.15 + Math.random() * 0.55,
        a: 0.12 + Math.random() * 0.45,
        ph: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.4,
      }));
    };

    const tick = () => {
      t += 0.016;
      c.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= p.s;
        p.x += Math.sin(t * 1.3 + p.ph) * 0.22 + p.drift * 0.2;
        if (p.y < -8) {
          p.y = h + 8;
          p.x = Math.random() * w;
        }
        const tw = 0.55 + 0.45 * Math.sin(t * 2 + p.ph);
        c.beginPath();
        c.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        c.fillStyle = `rgba(240, 158, 76, ${(p.a * tw).toFixed(3)})`;
        c.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const sync = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && inView) raf = requestAnimationFrame(tick);
    };

    // Le champ de braises ne tourne que quand le hero est visible.
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <section className="hero" id="accueil" ref={sectionRef}>
      <div className="hero-media" aria-hidden="true">
        <img
          className="hero-poster"
          src={MEDIA.heroPoster}
          alt=""
          width={1376}
          height={768}
          fetchPriority="high"
        />
        {showVideo && (
          <video
            className="hero-video"
            ref={videoRef}
            src={MEDIA.heroVideo}
            poster={MEDIA.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
        <canvas className="hero-embers" ref={canvasRef} />
        <div className="hero-veil" />
      </div>

      <div className="hero-content container-wide">
        <p className="hero-eyebrow hero-fade">
          <span className="eyebrow-line" aria-hidden="true" />
          Développeur Fullstack &amp; Automatisation — Paris
        </p>
        <h1 className="hero-title">
          <span className="sr-only">Dan Habib</span>
          <span aria-hidden="true">
            <span className="hero-line">
              <Chars text="DAN" />
            </span>
            <span className="hero-line hero-line-outline">
              <Chars text="HABIB" />
            </span>
          </span>
        </h1>
        <div className="hero-under">
          <p className="hero-tag hero-fade">
            Vos équipes perdent des heures sur des tâches qu'un script règle en
            trois secondes. <em>J'écris ce script</em>, et je construis
            l'application autour.
          </p>
          <div className="hero-cta hero-fade">
            <a className="button primary" href="#projets" data-magnetic="0.3">
              Voir mes projets
            </a>
            <a className="button ghost" href="#contact" data-magnetic="0.3">
              Me contacter
            </a>
          </div>
        </div>
      </div>

      <div className="hero-bottom container-wide">
        <span className="hero-scroll" aria-hidden="true">
          Scroll
          <span className="hero-scroll-line">
            <span />
          </span>
        </span>
        <span className="hero-loc">Paris · Remote · Disponible</span>
      </div>
    </section>
  );
}
