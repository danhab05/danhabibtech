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
      { name: "VPS", level: "Utilisation" },
      { name: "Docker", level: "Bonne maîtrise" },
      { name: "Git", level: "Quotidien" },
      { name: "API REST", level: "Création & Consommation" },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <header>
        <div className="container navbar">
          <div className="brand">danhabibtech</div>
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

      <main>
        <section className="hero container">
          <div>
            <p className="pill">Dan Habib</p>
            <h1>Développeur Fullstack & Automatisateur de tâches</h1>
            <p>
              Développeur polyvalent passionné par l'optimisation des processus manuels grâce
              à la programmation. J'aide les entreprises à gagner du temps en automatisant
              les tâches chronophages.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">
                Voir mes projets
              </a>
              <a className="button secondary" href="#contact">
                Me contacter
              </a>
            </div>
          </div>
          <div className="hero-card">
            <ul>
              <li>
                <span>01</span>
                <div>
                  <strong>Automatisation</strong>
                  <p>Workflows fiables pour réduire les tâches répétitives.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Fullstack</strong>
                  <p>Front, back et données pour livrer des solutions complètes.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Impact</strong>
                  <p>Focus sur le gain de temps et l'efficacité opérationnelle.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="projets">
          <div className="container">
            <h2>Mes Projets</h2>
            <p>Quelques exemples de mon travail en automatisation et développement.</p>
            <div className="grid">
              {projects.map((project) => (
                <article key={project.title} className="card project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
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
            <button className="button ghost" type="button">
              Générer une image de projet avec l'IA
            </button>
          </div>
        </section>

        <section className="section" id="competences">
          <div className="container">
            <h2>Compétences Techniques</h2>
            <p>Ma boîte à outils pour construire des solutions efficaces.</p>
            <div className="grid">
              {skills.map((group) => (
                <article key={group.title} className="card">
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
            <h2>Blog & Notes</h2>
            <p>Un espace pour partager des idées et des découvertes sur l'automatisation et le développement.</p>
            <article className="card blog-card">
              <div>
                <h3>Bienvenue sur le Blog</h3>
                <p className="muted">25 juillet 2024</p>
                <p>
                  Ceci est le premier article de votre nouveau blog basé sur des fichiers
                  Markdown.
                </p>
              </div>
              <a className="button secondary" href="#contact">
                Lire la suite
              </a>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2>Parlons de votre projet</h2>
            <p>Je suis toujours ouvert à de nouvelles opportunités. N'hésitez pas à me contacter.</p>
            <div className="grid">
              <div className="card">
                <h3>Email</h3>
                <p>danhabibpro@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <strong>Dan Habib</strong>
            <p>Développeur Fullstack & automatisation.</p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>danhabibpro@gmail.com</p>
          </div>
          <div>
            <strong>Disponibilité</strong>
            <p>Lun - Sam : 9h00 - 19h00</p>
          </div>
          <div>
            <strong>Réseaux</strong>
            <p>LinkedIn · Dribbble · Behance</p>
          </div>
        </div>
        <div className="footer-bottom">© 2025 Dan Habib. Tous droits réservés.</div>
      </footer>
    </>
  );
}
