import { MEDIA } from "@/lib/media";
import { stats } from "@/lib/data";

const principles = [
  {
    num: "01",
    title: "Positionnement",
    text: "Automatisation métier, intégrations et applications web sur-mesure pour PME, équipes opérationnelles et fondateurs qui veulent aller vite.",
  },
  {
    num: "02",
    title: "Valeur ajoutée",
    text: "Focus sur l'impact mesurable : temps gagné, flux simplifiés, données plus propres. Pas de sur-ingénierie — que ce qui compte.",
  },
  {
    num: "03",
    title: "Stack",
    text: "Python, Next.js, Docker, Selenium, scraping & APIs REST. Toujours le bon outil pour le bon problème.",
  },
];

export default function About() {
  return (
    <section className="about section" id="apropos" aria-label="À propos de Dan Habib">
      <div className="container-wide">
        <p className="section-label" data-fx="fade">
          <span className="section-num">01</span>
          À propos
        </p>
        <div className="about-grid">
          <div className="about-visual" data-fx="clip">
            <img
              src={MEDIA.aboutMonolith}
              alt="Monolithe de verre traversé de veines de lumière ambrée — visuel généré avec Higgsfield AI"
              width={896}
              height={1200}
              loading="lazy"
            />
            <span className="about-visual-caption">Visuel — Higgsfield AI</span>
          </div>
          <div className="about-copy">
            <h2 className="h2" data-fx="words">
              Développeur <em>pragmatique</em>
            </h2>
            <p className="about-lead" data-fx="words-scrub">
              Spécialisé en automatisation, scraping et outils internes, je
              conçois des solutions fiables pour gagner du temps, réduire les
              erreurs et accélérer les opérations — avec une obsession pour ce
              qui fonctionne vraiment en production.
            </p>
            <ul className="about-principles">
              {principles.map((p) => (
                <li className="about-principle" key={p.num} data-fx="fade">
                  <span className="about-principle-num">{p.num}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="stats" role="list" aria-label="Chiffres clés">
        <div className="container-wide stats-grid">
          {stats.map((s) => (
            <div className="stat" role="listitem" key={s.label}>
              <span
                className="stat-value"
                data-fx="counter"
                data-to={s.value}
                data-suffix={s.suffix}
              >
                {s.value}
                {s.suffix}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
