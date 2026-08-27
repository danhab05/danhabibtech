"use client";

import { useState } from "react";
import { faq } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq section" id="faq" aria-label="Questions fréquentes">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <p className="section-label" data-fx="fade">
              <span className="section-num">05</span>
              FAQ
            </p>
            <h2 className="h2" data-fx="words">
              Questions <em>fréquentes</em>
            </h2>
          </div>
          <p className="section-desc" data-fx="words-scrub">
            Tout ce qu'il faut savoir avant de lancer votre projet
            d'automatisation ou d'application web.
          </p>
        </div>

        <div className="faq-list" data-fx-stagger>
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq-item${open ? " is-open" : ""}`} key={i}>
                <h3 className="faq-question">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
