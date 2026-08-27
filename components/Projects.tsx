"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/lib/data";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getScroll = () =>
            Math.max(0, track.scrollWidth - window.innerWidth);

          const tween = gsap.to(track, {
            x: () => -getScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + getScroll(),
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (barRef.current) {
                  barRef.current.style.transform = `scaleX(${self.progress})`;
                }
              },
            },
          });

          gsap.utils
            .toArray<HTMLElement>(".project-panel .panel-media img")
            .forEach((img) => {
              gsap.fromTo(
                img,
                { xPercent: -7 },
                {
                  xPercent: 7,
                  ease: "none",
                  scrollTrigger: {
                    trigger: img.closest(".project-panel") as HTMLElement,
                    containerAnimation: tween,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                  },
                }
              );
            });
        }
      );

      mm.add(
        "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.utils
            .toArray<HTMLElement>(".project-panel")
            .forEach((panel) => {
              gsap.from(panel, {
                y: 70,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: panel, start: "top 88%", once: true },
              });
            });
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="projects"
      id="projets"
      ref={sectionRef}
      aria-label="Projets sélectionnés"
    >
      <div className="projects-head container-wide">
        <p className="section-label" data-fx="fade">
          <span className="section-num">02</span>
          Projets
        </p>
        <h2 className="h2" data-fx="words">
          Ce que j'ai <em>construit</em>
        </h2>
      </div>

      <div className="projects-viewport">
        <div className="projects-track" ref={trackRef}>
          {projects.map((p, i) => (
            <article className="project-panel" key={p.id}>
              <div className="panel-media" data-cursor="view">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={1200}
                  height={896}
                  loading="lazy"
                />
                <span className="panel-index" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <div className="panel-body">
                <p className="panel-cat">{p.category}</p>
                <h3 className="panel-title">{p.title}</h3>
                <p className="panel-desc">{p.description}</p>
                <p className="panel-result">{p.result}</p>
                <ul className="panel-tags" aria-label="Technologies">
                  {p.technologies.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <a
                    className="panel-link"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}

          <div className="project-panel project-panel-cta">
            <p className="panel-cta-title">
              Le vôtre <em>ensuite&nbsp;?</em>
            </p>
            <a className="button primary" href="#contact" data-magnetic="0.3">
              En parler
            </a>
          </div>
        </div>
      </div>

      <div className="projects-progress" aria-hidden="true">
        <span ref={barRef} />
      </div>
    </section>
  );
}
