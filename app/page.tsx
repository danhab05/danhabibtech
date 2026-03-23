const projects = [
  {
    id: "immo",
    title: "Site & automatisation — BLG Immobilier",
    description:
      "Développement complet du site vitrine blgimmobilier.fr pour l'agence BLG Immobilier, couplé à une automatisation du processus de dépôt d'annonces. Gestion des formulaires, upload de photos et notifications email.",
    technologies: ["Next.js", "Python", "Docker", "Selenium"],
    result:
      "Site en production, outil d'automatisation utilisé quotidiennement — gain de temps considérable pour l'équipe.",
    link: "https://blgimmobilier.fr/",
    featured: true,
  },
  {
    id: "covid",
    title: "Formulaire de test antigénique COVID",
    description:
      "Formulaire web d'inscription avec envoi automatique du résultat par mail. Suivi centralisé pour le pharmacien et le patient.",
    technologies: ["Flutter", "Python", "Flask", "Docker"],
    result:
      "~100 000 tests gérés en 2 ans, contact physique réduit, flux patients optimisé.",
    link: null,
    featured: false,
  },
  {
    id: "scripts",
    title: "Scripts d'automatisation & scraping",
    description:
      "Développement de scripts pour automatiser des tâches web répétitives et scraper des données ciblées pour des agences et back-offices.",
    technologies: ["Python", "Go"],
    result: "Données qualifiées livrées, processus internes optimisés.",
    link: null,
    featured: false,
  },
];

const skills = [
  {
    title: "Langages",
    items: [
      { name: "Python", level: "Avancé" },
      { name: "Dart / Flutter", level: "Avancé" },
      { name: "JavaScript", level: "Intermédiaire+" },
      { name: "PHP", level: "Intermédiaire" },
      { name: "Go", level: "En apprentissage" },
      { name: "HTML / CSS", level: "Solide" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Flask", level: "Solide" },
      { name: "Django", level: "Solide" },
      { name: "Next.js", level: "Intermédiaire" },
      { name: "React", level: "Intermédiaire" },
    ],
  },
  {
    title: "Bases de données",
    items: [
      { name: "MySQL", level: "Avancé" },
    ],
  },
  {
    title: "Déploiement & outils",
    items: [
      { name: "Docker", level: "Bonne maîtrise" },
      { name: "Linux / VPS", level: "Utilisation" },
      { name: "Git", level: "Quotidien" },
      { name: "API REST", level: "Création & Conso." },
    ],
  },
  {
    title: "Spécialisations",
    items: [
      { name: "Automatisation", level: "Avancé" },
      { name: "Web scraping", level: "Solide" },
      { name: "Scripting", level: "Avancé" },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Habib Tech",
  alternateName: ["Dan Habib", "Habib Dan", "DanHabibTech"],
  url: "https://danhabibtech.cc",
  jobTitle: "Développeur Fullstack & Automatisateur de tâches",
  sameAs: [
    "https://danhabibtech.cc",
    "https://www.linkedin.com/in/dan-habib-899b84232",
    "https://github.com/danhab05",
  ],
  worksFor: {
    "@type": "Organization",
    name: "DanHabibTech",
  },
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

      {/* ── Header ── */}
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">◈</span>
            Dan Habib Tech
          </div>
          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#apropos">À propos</a>
            <a href="#projets">Projets</a>
            <a href="#competences">Compétences</a>
          </nav>
          <div className="nav-right">
            <a className="button ghost nav-cta" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="content">

        {/* ── Hero ── */}
        <section className="hero">
          <span className="hero-bg-glyph" aria-hidden="true">DHT</span>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Développeur Fullstack &amp; Automatisation</p>
              <h1>Dan Habib Tech</h1>
              <p className="lead">
                Je conçois des outils sur-mesure pour automatiser vos processus
                chronophages et construire des applications web robustes.
                De la PME au fondateur, je transforme les idées en solutions qui tournent.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projets">
                  Voir mes projets
                </a>
                <a className="button ghost" href="#contact">
                  Me contacter
                </a>
              </div>
            </div>

            <aside className="hero-aside" aria-label="Statistiques">
              <div className="stat-card">
                <strong>40+</strong>
                <span>Projets livrés</span>
              </div>
              <div className="stat-card">
                <strong>5+</strong>
                <span>Ans d'expérience</span>
              </div>
              <div className="avail-card">
                <div className="status-badge">
                  <span className="status-dot" aria-hidden="true"></span>
                  Disponible
                </div>
                <p>Ouvert aux missions automation &amp; fullstack</p>
                <div className="tags-row">
                  <span className="tag">Automatisation</span>
                  <span className="tag">Scraping</span>
                  <span className="tag">APIs</span>
                  <span className="tag">Fullstack</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── À propos ── */}
        <section className="section" id="apropos">
          <div className="container">
            <div className="section-head">
              <p className="section-label">
                <span className="section-num">01</span>
                À propos
              </p>
              <h2>Qui suis-je ?</h2>
              <p>
                Développeur fullstack spécialisé en automatisation, scraping et outils internes.
                Je conçois des solutions fiables pour gagner du temps, réduire les erreurs
                et accélérer les opérations.
              </p>
            </div>
            <div className="about-grid">
              <div className="card">
                <span className="card-icon" aria-hidden="true">🎯</span>
                <h3>Positionnement</h3>
                <p>
                  Automatisation métier, intégrations et applications web sur-mesure pour PME,
                  équipes opérationnelles et fondateurs qui veulent aller vite.
                </p>
              </div>
              <div className="card">
                <span className="card-icon" aria-hidden="true">⚡</span>
                <h3>Valeur</h3>
                <p>
                  Focus sur l'impact mesurable : temps gagné, flux simplifiés,
                  données plus propres.
                </p>
              </div>
              <div className="card">
                <span className="card-icon" aria-hidden="true">🛠️</span>
                <h3>Technos clés</h3>
                <p>Python, Next.js, Docker, Selenium, scraping &amp; APIs REST.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projets ── */}
        <section className="section" id="projets">
          <div className="container">
            <div className="section-head">
              <p className="section-label">
                <span className="section-num">02</span>
                Projets
              </p>
              <h2>Mes réalisations</h2>
              <p>Quelques exemples concrets de mon travail en automatisation et développement.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className={`project-card${project.featured ? " featured" : ""}`}
                >
                  <div className="project-inner">
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-footer">
                      <div className="tags">
                        {project.technologies.map((tech) => (
                          <span className="tag" key={tech}>{tech}</span>
                        ))}
                      </div>
                      <div className="result-block">
                        <span className="result-label">Résultat</span>
                        <p>{project.result}</p>
                      </div>
                    </div>
                  </div>
                  {project.link && (
                    <div className="project-link-bar">
                      <span>Site en production</span>
                      <a
                        className="button link-btn"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir le site →
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Compétences ── */}
        <section className="section" id="competences">
          <div className="container">
            <div className="section-head">
              <p className="section-label">
                <span className="section-num">03</span>
                Compétences
              </p>
              <h2>Ma boîte à outils</h2>
              <p>Les technologies et outils que j'utilise pour construire des solutions efficaces.</p>
            </div>
            <div className="skills-grid">
              {skills.map((group) => (
                <article key={group.title} className="skill-card">
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        <strong className="skill-level">{item.level}</strong>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-inner">
              <div className="contact-cta">
                <p className="section-label">
                  <span className="section-num">04</span>
                  Contact
                </p>
                <h2>Parlons de votre projet</h2>
                <p>
                  Je suis toujours ouvert à de nouvelles opportunités.
                  N'hésitez pas à me contacter pour discuter de vos besoins.
                </p>
                <a
                  className="email-link"
                  href="mailto:danhabibpro@gmail.com"
                >
                  danhabibpro@gmail.com →
                </a>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email</strong>
                  <p>danhabibpro@gmail.com</p>
                </div>
                <div className="contact-item">
                  <strong>Disponibilité</strong>
                  <p>Lun – Ven · 9h00 – 19h00</p>
                </div>
                <div className="contact-item">
                  <strong>Localisation</strong>
                  <p>Paris · Remote</p>
                </div>
                <div className="contact-item">
                  <strong>Réseaux</strong>
                  <p>
                    <a href="https://www.linkedin.com/in/dan-habib-899b84232">
                      LinkedIn
                    </a>
                    {" · "}
                    <a href="https://github.com/danhab05">GitHub</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <strong>Dan Habib Tech</strong>
            <p>Développeur fullstack spécialisé en automatisation, scraping et outils internes.</p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>danhabibpro@gmail.com</p>
          </div>
          <div>
            <strong>Réseaux</strong>
            <p>
              <a href="https://www.linkedin.com/in/dan-habib-899b84232">LinkedIn</a>
              <br />
              <a href="https://github.com/danhab05">GitHub</a>
            </p>
          </div>
          <div>
            <strong>Disponibilité</strong>
            <p>Lun – Ven · 9h – 19h</p>
          </div>
        </div>
        <div className="container footer-bottom">
          © {new Date().getFullYear()} Dan Habib. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
