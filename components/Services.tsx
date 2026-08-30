import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="services section" id="services" aria-label="Services">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <p className="section-label" data-fx="fade">
              <span className="section-num">02</span>
              Services
            </p>
            <h2 className="h2" data-fx="words">
              Des solutions, <em>pas un catalogue</em>
            </h2>
          </div>
          <p className="section-desc" data-fx="words-scrub">
            Je pars toujours de la tâche à supprimer, jamais de l'outil à
            vendre. La technologie vient après, une fois le problème posé.
          </p>
        </div>

        <ul className="services-grid" data-fx-stagger>
          {services.map((s) => (
            <li
              className={`service-card${"isCta" in s && s.isCta ? " is-cta" : ""}`}
              key={s.title}
            >
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
              {"isCta" in s && s.isCta && (
                <a className="service-link" href="#contact">
                  En parler <span aria-hidden="true">→</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
