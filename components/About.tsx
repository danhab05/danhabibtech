import { MEDIA } from "@/lib/media";
import { stats } from "@/lib/data";

const principles = [
  {
    num: "01",
    title: "Ce que je construis",
    text: "Des robots qui remplissent les formulaires à votre place, des applications web qui remplacent trois tableurs et un classeur, des APIs qui font enfin parler vos outils entre eux.",
  },
  {
    num: "02",
    title: "Comment je travaille",
    text: "Un premier livrable utilisable en quelques jours, pas une usine à gaz en six mois. Vous testez tôt, on corrige ensemble, et ce qui part en production a déjà servi.",
  },
  {
    num: "03",
    title: "Ce qui vous reste",
    text: "Un outil déployé, documenté, dont le code vous appartient. Pas de boîte noire, pas de dépendance à vie au prestataire qui l'a écrit.",
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
              Le bon outil, <em>rien de plus</em>
            </h2>
            <p className="about-lead" data-fx="words-scrub">
              Je ne vends pas de la technologie, je supprime du travail inutile.
              Chaque projet démarre par la même question : qu'est-ce qui vous
              fait perdre le plus de temps cette semaine ? La réponse décide de
              la stack, jamais l'inverse.
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
