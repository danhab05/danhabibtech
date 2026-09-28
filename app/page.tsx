import Contact from "@/components/Contact";
import ProjectMockup from "@/components/ProjectMockup";
import {
  SITE,
  projects,
  faq,
  services,
  processSteps,
  skills,
  githubRepos,
  otherWork,
} from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: "Dan Habib",
      alternateName: ["Dan Habib Tech", "DanHabibTech", "danhab05"],
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      image: `${SITE.url}/opengraph-image`,
      jobTitle: SITE.jobTitle,
      description: SITE.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      sameAs: [SITE.links.linkedin, SITE.links.github, SITE.links.twitter],
      knowsAbout: [
        "Python",
        "Next.js",
        "TypeScript",
        "Automatisation de processus",
        "Web scraping",
        "Docker",
        "Flutter",
        "API REST",
        "Flask",
        "Django",
        "MySQL",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Développeur Fullstack & Automatisation",
        occupationLocation: {
          "@type": "City",
          name: "Paris",
        },
        skills:
          "Automatisation de processus métier, web scraping, développement web fullstack, outils internes, APIs REST",
      },
      makesOffer: services
        .filter((s) => !("isCta" in s && s.isCta))
        .map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.text,
            areaServed: "FR",
            provider: { "@id": `${SITE.url}/#person` },
          },
        })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "Dan Habib — Portfolio",
      description: SITE.description,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE.url}/#person` },
      copyrightHolder: { "@id": `${SITE.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/#page`,
      url: SITE.url,
      name: "Dan Habib — Développeur Fullstack & Automatisation à Paris",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#person` },
      mainEntity: { "@id": `${SITE.url}/#person` },
      inLanguage: "fr-FR",
      primaryImageOfPage: `${SITE.url}/opengraph-image`,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/#projets`,
      name: "Projets de Dan Habib",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: `${p.pitch} ${p.solution}`,
          ...(p.link ? { url: p.link } : {}),
          keywords: p.technologies.join(", "),
          author: { "@id": `${SITE.url}/#person` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#content">
        Aller au contenu
      </a>
      <header className="site-header">
        <a href="#accueil" className="wordmark" aria-label="Dan Habib, accueil">
          dan habib<span>.</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#services">Services</a>
          <a href="#methode">Méthode</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-dark header-contact" href="#contact">
          On en parle <span aria-hidden="true">→</span>
        </a>
      </header>
      <main id="content">
        <section className="hero" id="accueil" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="pill">
                <i aria-hidden="true" /> Disponible pour de nouveaux projets
              </p>
              <h1 id="hero-title">
                Moins de tâches.
                <br />
                <em>Plus de possibles.</em>
              </h1>
              <p className="hero-intro">
                Développeur indépendant à Paris. J’automatise ce qui vous
                ralentit et je construis les outils qui vous manquent : CRM,
                plateformes, robots et logiciels métier.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#projets">
                  Explorer mes projets <span aria-hidden="true">↓</span>
                </a>
                <a className="button button-ghost" href="#contact">
                  Décrire mon besoin
                </a>
              </div>
            </div>
            <div className="hero-feed" aria-label="Exemples d’automatisations">
              <div className="feed-head">
                <span>Aujourd’hui, sans y toucher</span>
                <small>5 tâches</small>
              </div>
              <ul>
                {[
                  ["Facture_0342.pdf convertie en Excel", "1 s", "Comptabilité"],
                  ["Annonce T3 Paris 11e publiée sur SeLoger", "1 clic", "Immobilier"],
                  ["Ordonnance transmise à la pharmacie", "1 clic", "Santé"],
                  ["Cours de maths réservé et payé", "mar. 18h", "Éducation"],
                  ["3 acquéreurs relancés pour une visite", "auto", "CRM"],
                ].map(([label, meta, tag]) => (
                  <li key={label}>
                    <span className="feed-check" aria-hidden="true">
                      ✓
                    </span>
                    <span className="feed-label">
                      {label}
                      <small>{tag}</small>
                    </span>
                    <span className="feed-meta">{meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="wrap hero-proof">
            <p>
              <strong>10 min → 1 s</strong> par facture
            </p>
            <p>
              <strong>1 clic</strong> pour publier une annonce
            </p>
            <p>
              <strong>100 000</strong> tests gérés en pharmacie
            </p>
            <p>
              <strong>24 h</strong> pour une réponse
            </p>
          </div>
        </section>

        <section className="section wrap" id="projets">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 · Réalisations</p>
              <h2>
                Des outils qui <em>travaillent</em> pour vous.
              </h2>
            </div>
            <p>
              Cinq produits, cinq métiers. Chaque fois, une tâche pénible qui
              disparaît et du temps qui revient.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-card project-${project.id}`}
                key={project.id}
                aria-labelledby={`project-${project.id}`}
              >
                <div className="project-visual">
                  <ProjectMockup id={project.id} />
                </div>
                <div className="project-info">
                  <p className="project-meta">
                    <span>0{index + 1}</span>
                    {project.category}
                  </p>
                  <h3 id={`project-${project.id}`}>{project.title}</h3>
                  <p className="project-pitch">{project.pitch}</p>
                  <div className="project-gain">
                    <span className="before">{project.gain.before}</span>
                    <span aria-hidden="true">→</span>
                    <strong>{project.gain.after}</strong>
                    <small>{project.gain.label}</small>
                  </div>
                  <dl className="project-story">
                    <div>
                      <dt>Avant</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>Maintenant</dt>
                      <dd>{project.solution}</dd>
                    </div>
                  </dl>
                  <ul className="project-features">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="project-foot">
                    <div className="tags">
                      {project.technologies.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        className="text-link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir ${project.title} en ligne (nouvel onglet)`}
                      >
                        Voir en ligne ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="other-work">
            <h3>Et aussi</h3>
            <div>
              {otherWork.map((w) => {
                const inner = (
                  <>
                    <strong>
                      {w.title}
                      {w.link && " ↗"}
                    </strong>
                    <span>{w.text}</span>
                  </>
                );
                return w.link ? (
                  <a
                    key={w.title}
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <p key={w.title}>{inner}</p>
                );
              })}
            </div>
          </div>
          <details className="open-source">
            <summary>Explorer les projets open source sur GitHub</summary>
            <div className="repo-grid">
              {githubRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{repo.name} ↗</strong>
                  <span>{repo.description}</span>
                  <small>{repo.language}</small>
                </a>
              ))}
            </div>
          </details>
        </section>

        <section className="section services-section" id="services">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 · Services</p>
                <h2>
                  Du sur-mesure, <em>sans usine à gaz.</em>
                </h2>
              </div>
              <p>
                Relier vos outils, alléger vos journées, donner forme à votre
                prochain projet.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, i) =>
                "isCta" in service ? (
                  <a
                    className="service service-cta"
                    href="#contact"
                    key={service.title}
                  >
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="text-link">Décrire mon besoin →</span>
                  </a>
                ) : (
                  <article className="service" key={service.title}>
                    <span className="service-index">0{i + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="method-section section" id="methode">
          <div className="wrap method-layout">
            <div>
              <p className="eyebrow">03 · Méthode</p>
              <h2>
                Un seul interlocuteur, <em>du début à la suite.</em>
              </h2>
              <p>
                Un périmètre clair, des versions que vous pouvez essayer et du
                code qui vous appartient.
              </p>
              <a className="text-link" href="#contact">
                Parlons de votre besoin ↗
              </a>
            </div>
            <ol className="method-list">
              {processSteps.map((step, i) => (
                <li key={step.title}>
                  <span aria-hidden="true">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section wrap skills-section" id="competences">
          <p className="eyebrow">04 · Boîte à outils</p>
          <h2>
            La technique, <em>au service du besoin.</em>
          </h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.map((item) => item.name).join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap faq-section" id="faq">
          <div>
            <p className="eyebrow">05 · Questions</p>
            <h2>
              Quelques <em>réponses.</em>
            </h2>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <footer className="site-footer wrap">
        <a className="wordmark" href="#accueil">
          dan habib.
        </a>
        <p>Du code utile, fait à Paris · © {new Date().getFullYear()}</p>
        <div>
          <a
            href={SITE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a
            href={SITE.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            X ↗
          </a>
          <a href="#accueil" aria-label="Retour en haut">
            ↑
          </a>
        </div>
      </footer>
    </>
  );
}
