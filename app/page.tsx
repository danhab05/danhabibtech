const projects = [
  {
    title: "Automatisation d'annonces immobilières",
    description:
      "Automatisation complète du processus de dépôt d'annonce pour une agence. Gestion des formulaires, upload de photos et notifications email.",
    technologies: ["Python", "Flutter", "JavaScript", "PHP"],
    result:
      "Outil utilisé au quotidien par l'équipe, résultant en un gain de temps considérable.",
  },
  {
    title: "Formulaire de test antigénique COVID",
    description:
      "Formulaire web d'inscription avec envoi automatique du résultat par mail. Suivi centralisé pour le pharmacien et le patient.",
    technologies: ["HTML", "PHP", "MySQL"],
    result:
      "A permis d'éviter le contact physique et d'améliorer le flux des patients.",
  },
  {
    title: "Scripts d'automatisation et de scraping",
    description:
      "Développement de divers scripts pour automatiser des tâches web répétitives et scraper des données ciblées pour des agences et back-offices.",
    technologies: ["API", "Batch Processing", "Email Automation"],
    result:
      "Fourniture de données qualifiées et optimisation des processus internes.",
  },
];

const skills = [
  {
    title: "Langages de programmation",
    items: [
      { name: "Python", level: "Avancé" },
      { name: "Dart/Flutter", level: "Avancé" },
      { name: "JavaScript", level: "Intermédiaire+" },
      { name: "PHP", level: "Intermédiaire" },
      { name: "Go", level: "En apprentissage" },
      { name: "C++", level: "Débutant" },
      { name: "HTML/CSS", level: "Intermédiaire" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Flask", level: "Solide" },
      { name: "Django", level: "Solide" },
      { name: "Next.js", level: "Débutant" },
      { name: "React", level: "Intermédiaire" },
    ],
  },
  {
    title: "Bases de données",
    items: [{ name: "MySQL", level: "Avancé" }],
  },
  {
    title: "Déploiement & Outils",
    items: [
      { name: "Linux", level: "Utilisation" },
      { name: "VPS", level: "Utilisation" },
      { name: "Docker", level: "Bonne maîtrise" },
      { name: "Git", level: "Quotidien" },
      { name: "API REST", level: "Création & Consommation" },
    ],
  },
  {
    title: "Spécialisations",
    items: [
      { name: "Automatisation", level: "Avancé" },
      { name: "Scraping", level: "Solide" },
      { name: "Scripting", level: "Avancé" },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Habib",
  alternateName: ["Habib Dan", "DanHabibTech"],
  url: "https://danhabibtech.cc",
  jobTitle: "Développeur Fullstack & Automatisateur de tâches",
  sameAs: ["https://danhabibtech.cc"],
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
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              ⟟
            </span>
            danhabibtech
          </div>
          <nav className="nav-links">
            <a href="#projets">Projets</a>
            <a href="#competences">Compétences</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="theme-toggle" type="button">
            Changer le thème
          </button>
        </div>
      </header>

      <main id="content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Dan Habib / Habib Dan</p>
              <h1>
                Développeur Fullstack &amp; Automatisateur de tâches
              </h1>
              <p className="lead">
                Développeur polyvalent passionné par l'optimisation des processus manuels grâce
                à la programmation. J'aide les entreprises à gagner du temps en automatisant
                les tâches chronophages.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projets">
                  Voir mes projets
                </a>
                <a className="button ghost" href="#contact">
                  Me contacter
                </a>
              </div>
              <div className="pulse-line" aria-hidden="true"></div>
            </div>
            <div className="hero-panel">
              <div className="panel-top">
                <div>
                  <p className="panel-title">Disponibilité</p>
                  <h2>Ouvert aux missions automation &amp; fullstack</h2>
                </div>
                <span className="status">Disponible</span>
              </div>
              <div className="panel-metrics">
                <div>
                  <strong>40+</strong>
                  <span>Projets livrés</span>
                </div>
                <div>
                  <strong>5+</strong>
                  <span>Années d'expérience</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Support &amp; maintenance</span>
                </div>
              </div>
              <div className="panel-tags">
                <span>Automatisation</span>
                <span>Scraping</span>
                <span>APIs</span>
                <span>Fullstack</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projets">
          <div className="container">
            <div className="section-head">
              <h2>Mes Projets</h2>
              <p>Quelques exemples de mon travail en automatisation et développement.</p>
            </div>
            <div className="grid projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="card project-card">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tag-list">
                    <span className="tag-label">Technologies utilisées :</span>
                    <div className="tags">
                      {project.technologies.map((tech) => (
                        <span className="tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="result">
                    <span>Résultat :</span>
                    <p>{project.result}</p>
                  </div>
                </article>
              ))}
            </div>
            <button className="button outline" type="button">
              Générer une image de projet avec l'IA
            </button>
          </div>
        </section>

        <section className="section" id="competences">
          <div className="container">
            <div className="section-head">
              <h2>Compétences Techniques</h2>
              <p>Ma boîte à outils pour construire des solutions efficaces.</p>
            </div>
            <div className="grid">
              {skills.map((group) => (
                <article key={group.title} className="card skill-card">
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        <strong>{item.level}</strong>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="blog">
          <div className="container">
            <div className="section-head">
              <h2>Blog &amp; Notes</h2>
              <p>
                Un espace pour partager des idées et des découvertes sur l'automatisation et le
                développement.
              </p>
            </div>
            <article className="card blog-card">
              <div>
                <p className="eyebrow">25 juillet 2024</p>
                <h3>Bienvenue sur le Blog</h3>
                <p>
                  Ceci est le premier article de votre nouveau blog basé sur des fichiers
                  Markdown.
                </p>
              </div>
              <a className="button ghost" href="#contact">
                Lire la suite
              </a>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="section-head">
              <h2>Parlons de votre projet</h2>
              <p>Je suis toujours ouvert à de nouvelles opportunités. N'hésitez pas à me contacter.</p>
            </div>
            <div className="grid contact-grid">
              <div className="card">
                <h3>Email</h3>
                <p>danhabibpro@gmail.com</p>
              </div>
              <div className="card">
                <h3>Disponibilité</h3>
                <p>Lun - Ven : 9h00 - 19h00</p>
              </div>
              <div className="card">
                <h3>Base</h3>
                <p>Paris • Remote</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Dan Habib</strong>
            <p>Développeur Fullstack &amp; automatisation.</p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>danhabibpro@gmail.com</p>
          </div>
          <div>
            <strong>Réseaux</strong>
            <p>
              <a href="https://www.linkedin.com/in/dan-habib-899b84232">LinkedIn</a>
            </p>
          </div>
          <div>
            <strong>Disponibilité</strong>
            <p>Lun - Ven : 9h00 - 19h00</p>
          </div>
        </div>
        <div className="footer-bottom">© 2025 Dan Habib. Tous droits réservés.</div>
      </footer>
    </>
  );
}
