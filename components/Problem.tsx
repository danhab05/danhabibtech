import { painPoints } from "@/lib/data";

export default function Problem() {
  return (
    <section
      className="problem section"
      id="probleme"
      aria-label="Les tâches qui vous coûtent du temps"
    >
      <div className="container-wide">
        <div className="section-head">
          <div>
            <p className="section-label" data-fx="fade">
              <span className="section-num">01</span>
              Le constat
            </p>
            <h2 className="h2" data-fx="words">
              Ça tourne encore <em>à la main</em>
            </h2>
          </div>
          <p className="section-desc" data-fx="words-scrub">
            Une partie de votre activité fonctionne encore manuellement. Ce ne
            sont jamais les gros dossiers qui coûtent du temps, mais les mêmes
            petits gestes répétés cinquante fois par semaine.
          </p>
        </div>

        <ul className="pain-list" data-fx-stagger>
          {painPoints.map((p, i) => (
            <li className="pain-item" key={p.title}>
              <span className="pain-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="pain-title">{p.title}</h3>
              <p className="pain-text">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
