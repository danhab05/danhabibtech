import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      className="skills section"
      id="competences"
      aria-label="Compétences techniques"
    >
      <div className="container-wide">
        <div className="section-head">
          <div>
            <p className="section-label" data-fx="fade">
              <span className="section-num">07</span>
              Compétences
            </p>
            <h2 className="h2" data-fx="words">
              Boîte à <em>outils</em>
            </h2>
          </div>
          <p className="section-desc" data-fx="words-scrub">
            Je n'ai pas d'avis religieux sur les technologies. Voici celles que
            je maîtrise assez bien pour savoir quand il vaut mieux ne pas les
            utiliser.
          </p>
        </div>

        <div className="skills-rows">
          {skills.map((group, gi) => (
            <div className="skill-row" key={group.title}>
              <span className="skill-row-line" data-fx="line" aria-hidden="true" />
              <div className="skill-row-head">
                <span className="skill-row-num" aria-hidden="true">
                  0{gi + 1}
                </span>
                <h3 className="skill-row-title">{group.title}</h3>
              </div>
              <ul className="skill-chips" data-fx-stagger>
                {group.items.map((item) => (
                  <li className="skill-chip" key={item.name}>
                    <span className="skill-chip-name">{item.name}</span>
                    <span className="skill-chip-level">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
