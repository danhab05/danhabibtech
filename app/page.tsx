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
    id: "extractgrid",
    title: "ExtractGrid — PDF bancaire vers Excel",
    description:
      "Application web qui convertit automatiquement les relevés bancaires PDF en fichiers Excel structurés. Détection automatique de la banque, extraction des colonnes date, libellé, débit et crédit.",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    result:
      "Outil pratique pour comptables et PME, multi-banques, déployé en production.",
    link: "https://github.com/danhab05/ExtractGrid",
    featured: false,
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
    id: "ecoledirect",
    title: "EcoleDirect — Bibliothèque Python",
    description:
      "Librairie Python installable via pip pour récupérer automatiquement les devoirs, notes et informations élèves depuis EcoléDirect (ecoledirecte.com).",
    technologies: ["Python", "pip", "Web scraping"],
    result:
      "Publiée sur PyPI, utilisée par des parents et étudiants pour accéder aux données scolaires programmatiquement.",
    link: "https://github.com/danhab05/ecoledirect",
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

const githubRepos = [
  {
    name: "ExtractGrid",
    description: "Convertit les relevés bancaires PDF en fichiers Excel structurés.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/danhab05/ExtractGrid",
  },
  {
    name: "ecoledirect",
    description: "Bibliothèque Python pour accéder aux données scolaires EcoléDirect via pip.",
    language: "Python",
    stars: 1,
    url: "https://github.com/danhab05/ecoledirect",
  },
  {
    name: "pdf2excel",
    description: "Outil de conversion PDF vers Excel avec extraction intelligente de tableaux.",
    language: "Python",
    stars: 1,
    url: "https://github.com/danhab05/pdf2excel",
  },
  {
    name: "pyswifi",
    description: "Script Python pour automatiser la gestion des réseaux WiFi.",
    language: "Python",
    stars: 1,
    url: "https://github.com/danhab05/pyswifi",
  },
  {
    name: "MorseMaster",
    description: "Application d'apprentissage du code Morse avec interface interactive.",
    language: "Vue",
    stars: 0,
    url: "https://github.com/danhab05/MorseMaster",
  },
  {
    name: "PdfSplitter",
    description: "Outil web pour découper et réorganiser des fichiers PDF.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/danhab05/PdfSplitter",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Habib",
  alternateName: ["Dan Habib Tech", "DanHabibTech", "danhab05"],
  url: "https://danhabib.dev",
  jobTitle: "Développeur Fullstack & Automatisation",
  description: "Développeur fullstack spécialisé en automatisation, scraping et outils internes. Paris.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  sameAs: [
    "https://danhabib.dev",
    "https://www.linkedin.com/in/dan-habib-899b84232",
    "https://github.com/danhab05",
    "https://twitter.com/Snowy_27_",
  ],
  knowsAbout: [
    "Python",
    "Next.js",
    "Automatisation",
    "Web scraping",
    "Docker",
    "Flutter",
    "API REST",
    "JavaScript",
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

      {/* ── Header ── */}
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <span className="brand-dot" aria-hidden="true" />
            Dan Habib
          </div>
          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#apropos">À propos</a>
            <a href="#projets">Projets</a>
            <a href="#github">GitHub</a>
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
          <div className="hero-bg-line" aria-hidden="true" />
          <span className="hero-index" aria-hidden="true">DHT</span>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Développeur Fullstack &amp; Automatisation
              </p>
              <h1>
                Dan <em>Habib</em>
              </h1>
              <p className="hero-subtitle">
                Paris · Remote · Disponible
              </p>
              <p className="lead">
                Je conçois des outils sur-mesure pour automatiser vos processus
                chronophages et construire des applications web robustes.
                De la PME au fondateur solo, je transforme les idées en solutions
                qui tournent en production.
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
                  <span className="status-dot" aria-hidden="true" />
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
              <div className="section-head-left">
                <p className="section-label">
                  <span className="section-num">01</span>
                  À propos
                </p>
                <h2>
                  Développeur
                  <br />
                  <em>pragmatique</em>
                </h2>
              </div>
              <div className="section-head-right">
                <p className="section-head-desc">
                  Spécialisé en automatisation, scraping et outils internes.
                  Je conçois des solutions fiables pour gagner du temps, réduire les erreurs
                  et accélérer les opérations — avec une obsession pour ce qui fonctionne vraiment en production.
                </p>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <span className="about-card-icon">// 01</span>
                <h3>Positionnement</h3>
                <p>
                  Automatisation métier, intégrations et applications web sur-mesure pour PME,
                  équipes opérationnelles et fondateurs qui veulent aller vite.
                </p>
              </div>
              <div className="about-card">
                <span className="about-card-icon">// 02</span>
                <h3>Valeur ajoutée</h3>
                <p>
                  Focus sur l'impact mesurable : temps gagné, flux simplifiés,
                  données plus propres. Pas de sur-ingénierie — que ce qui compte.
                </p>
              </div>
              <div className="about-card">
                <span className="about-card-icon">// 03</span>
                <h3>Stack</h3>
                <p>Python, Next.js, Docker, Selenium, scraping &amp; APIs REST. Toujours le bon outil pour le bon problème.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projets ── */}
        <section className="section" id="projets">
          <div className="container">
            <div className="section-head">
              <div className="section-head-left">
                <p className="section-label">
                  <span className="section-num">02</span>
                  Projets
                </p>
                <h2>
                  Mes
                  <br />
                  <em>réalisations</em>
                </h2>
              </div>
              <div className="section-head-right">
                <p className="section-head-desc">
                  Des projets concrets en production — automatisation de processus métier,
                  outils web et bibliothèques open-source avec des résultats mesurables.
                </p>
              </div>
            </div>
            <div className="projects-list">
              {projects.map((project, i) => (
                <div key={project.id} className="project-item">
                  <span className="project-num">0{i + 1}</span>
                  <div className="project-main">
                    <div className="project-header-row">
                      <h3>{project.title}</h3>
                      {project.featured && (
                        <span className="featured-badge">Featured</span>
                      )}
                    </div>
                    <p>{project.description}</p>
                    <p className="project-result">{project.result}</p>
                    <div className="tags">
                      {project.technologies.map((tech) => (
                        <span className="tag" key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-meta">
                    {project.link && (
                      <a
                        className="project-link-btn"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M2 10L10 2M10 2H5M10 2V7" />
                        </svg>
                        Voir le projet
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GitHub ── */}
        <section className="github-section" id="github">
          <div className="container">
            <div className="section-head">
              <div className="section-head-left">
                <p className="section-label">
                  <span className="section-num">03</span>
                  Open Source
                </p>
                <h2>
                  Sur
                  <br />
                  <em>GitHub</em>
                </h2>
              </div>
              <div className="section-head-right">
                <p className="section-head-desc">
                  50+ dépôts publics — bibliothèques Python, outils TypeScript, scripts d'automatisation.
                  Du code concret, testé en conditions réelles.
                </p>
              </div>
            </div>
            <div className="github-grid">
              {githubRepos.map((repo) => (
                <div key={repo.name} className="github-card">
                  <div className="github-card-top">
                    <span className="github-card-name">{repo.name}</span>
                    <span className="github-lang">{repo.language}</span>
                  </div>
                  <p className="github-card-desc">
                    {repo.description}
                  </p>
                  <div className="github-card-footer">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      Voir le repo →
                    </a>
                    {repo.stars > 0 && (
                      <span className="github-stars">
                        ★ {repo.stars}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="github-cta-row">
              <a
                className="button ghost"
                href="https://github.com/danhab05"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir tous les dépôts →
              </a>
            </div>
          </div>
        </section>

        {/* ── Compétences ── */}
        <section className="skills-section" id="competences">
          <div className="container">
            <div className="skills-layout">
              <div className="skills-intro">
                <p className="section-label">
                  <span className="section-num">04</span>
                  Compétences
                </p>
                <h2>
                  Ma boîte
                  <br />
                  <em>à outils</em>
                </h2>
                <p>
                  Les technologies et outils que j'utilise pour construire
                  des solutions efficaces et durables.
                </p>
              </div>
              <div className="skills-groups">
                {skills.map((group) => (
                  <div key={group.title} className="skill-group">
                    <span className="skill-group-title">{group.title}</span>
                    <div className="skill-items">
                      {group.items.map((item) => (
                        <div key={item.name} className="skill-item">
                          <span className="skill-item-name">{item.name}</span>
                          <span className="skill-item-level">{item.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="container">
            <div className="contact-inner">
              <div className="contact-left">
                <p className="section-label">
                  <span className="section-num">05</span>
                  Contact
                </p>
                <h2 className="contact-headline">
                  Parlons de
                  <br />
                  <em>votre projet</em>
                </h2>
                <p className="contact-desc">
                  Besoin d'automatiser un process, créer un outil ou construire
                  une application web ? Je suis ouvert aux nouvelles missions.
                  Réponse sous 24h.
                </p>
                <a
                  className="email-link"
                  href="mailto:danhabibpro@gmail.com"
                >
                  danhabibpro@gmail.com →
                </a>
              </div>
              <div className="contact-right">
                <div className="contact-items">
                  <div className="contact-item">
                    <span className="contact-item-label">Email</span>
                    <span className="contact-item-value">
                      <a href="mailto:danhabibpro@gmail.com">danhabibpro@gmail.com</a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">Disponibilité</span>
                    <span className="contact-item-value">Lun – Ven &amp; Dim · 8h – 20h</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">Localisation</span>
                    <span className="contact-item-value">Paris · Remote</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">LinkedIn</span>
                    <span className="contact-item-value">
                      <a
                        href="https://www.linkedin.com/in/dan-habib-899b84232"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dan Habib →
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">GitHub</span>
                    <span className="contact-item-value">
                      <a
                        href="https://github.com/danhab05"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @danhab05 →
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-label">Twitter / X</span>
                    <span className="contact-item-value">
                      <a
                        href="https://twitter.com/Snowy_27_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @Snowy_27_ →
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-brand">Dan Habib</span>
          <div className="footer-center">
            <a href="#apropos">À propos</a>
            <a href="#projets">Projets</a>
            <a href="https://github.com/danhab05" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dan-habib-899b84232" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <span className="footer-copy">
            © {new Date().getFullYear()} Dan Habib
          </span>
        </div>
      </footer>
    </>
  );
}
