import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="process section" id="methode" aria-label="Méthode de travail">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <p className="section-label" data-fx="fade">
              <span className="section-num">03</span>
              Méthode
            </p>
            <h2 className="h2" data-fx="words">
              De l'idée à <em>la production</em>
            </h2>
          </div>
          <p className="section-desc" data-fx="words-scrub">
            Un déroulé simple, du premier échange à l'usage réel, sans effet
            tunnel : vous voyez quelque chose de fonctionnel bien avant la mise
            en production.
          </p>
        </div>

        <ol className="process-list" data-fx-stagger>
          {processSteps.map((step, i) => (
            <li className="process-step" key={step.title}>
              <span className="process-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="process-body">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
