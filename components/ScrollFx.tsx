"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Câble les effets de scroll génériques déclarés via data-attributes :
 *  - data-fx="words"        → mots masqués qui montent à l'entrée
 *  - data-fx="words-scrub"  → mots qui "s'allument" au fil du scroll
 *  - data-fx="fade"         → fondu + translation à l'entrée
 *  - data-fx="clip"         → révélation clip-path (images)
 *  - data-fx="line"         → trait qui se dessine (scaleX)
 *  - data-fx="counter"      → compteur (data-to, data-suffix)
 *  - data-fx-stagger        → enfants révélés en cascade
 *  - data-parallax="0.15"   → parallaxe verticale
 *  - data-magnetic="0.3"    → bouton magnétique (desktop)
 */

function splitWords(el: HTMLElement): HTMLElement[] {
  const spans: HTMLElement[] = [];
  const makeUnit = (content: Node | string) => {
    const mask = document.createElement("span");
    mask.className = "w-mask";
    const w = document.createElement("span");
    w.className = "w";
    if (typeof content === "string") w.textContent = content;
    else w.appendChild(content);
    mask.appendChild(w);
    spans.push(w);
    return mask;
  };

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      (node.textContent ?? "").split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(" "));
        else frag.appendChild(makeUnit(part));
      });
      el.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const placeholder = document.createComment("w");
      el.replaceChild(placeholder, node);
      const mask = makeUnit(node);
      el.replaceChild(mask, placeholder);
    }
  });
  return spans;
}

export default function ScrollFx() {
  useLayoutEffect(() => {
    const restore = new Map<HTMLElement, string>();
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      document.querySelectorAll<HTMLElement>("[data-fx='words']").forEach((el) => {
        restore.set(el, el.innerHTML);
        const words = splitWords(el);
        gsap.set(words, { yPercent: 145 });
        gsap.to(words, {
          yPercent: 0,
          duration: 1.15,
          stagger: 0.055,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      document
        .querySelectorAll<HTMLElement>("[data-fx='words-scrub']")
        .forEach((el) => {
          restore.set(el, el.innerHTML);
          const words = splitWords(el);
          gsap.fromTo(
            words,
            { opacity: 0.14 },
            {
              opacity: 1,
              stagger: 0.06,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                end: "top 32%",
                scrub: true,
              },
            }
          );
        });

      document.querySelectorAll<HTMLElement>("[data-fx='fade']").forEach((el) => {
        gsap.from(el, {
          y: 44,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-fx-stagger]").forEach((el) => {
        const kids = Array.from(el.children);
        if (!kids.length) return;
        gsap.from(kids, {
          y: 52,
          opacity: 0,
          duration: 1,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-fx='clip']").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(12% 7% 12% 7%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%", once: true },
          }
        );
        const img = el.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.22 },
            {
              scale: 1,
              duration: 1.7,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 84%", once: true },
            }
          );
        }
      });

      document.querySelectorAll<HTMLElement>("[data-fx='line']").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      document
        .querySelectorAll<HTMLElement>("[data-fx='counter']")
        .forEach((el) => {
          const to = parseFloat(el.dataset.to ?? "0");
          const suffix = el.dataset.suffix ?? "";
          const obj = { v: 0 };
          gsap.to(obj, {
            v: to,
            duration: 1.9,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              el.textContent = `${Math.round(obj.v)}${suffix}`;
            },
          });
        });

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = parseFloat(el.dataset.parallax ?? "0.15") * 100;
        gsap.fromTo(
          el,
          { yPercent: amt },
          {
            yPercent: -amt,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      return () => {
        restore.forEach((html, el) => {
          el.innerHTML = html;
        });
        restore.clear();
      };
    });

    mm.add(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const cleanups: Array<() => void> = [];
        document
          .querySelectorAll<HTMLElement>("[data-magnetic]")
          .forEach((el) => {
            const strength = parseFloat(el.dataset.magnetic || "0.35");
            const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
            const move = (e: MouseEvent) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - r.left - r.width / 2) * strength);
              yTo((e.clientY - r.top - r.height / 2) * strength);
            };
            const leave = () => {
              gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.35)" });
            };
            el.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", leave);
            cleanups.push(() => {
              el.removeEventListener("mousemove", move);
              el.removeEventListener("mouseleave", leave);
            });
          });
        return () => cleanups.forEach((fn) => fn());
      }
    );

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      mm.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);

  return null;
}
