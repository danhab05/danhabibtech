const services = [
  {
    title: "Développement web",
    description:
      "Sites vitrines, plateformes SaaS et e-commerce performants, pensés pour la conversion.",
  },
  {
    title: "Applications mobiles",
    description:
      "Des expériences iOS et Android fluides, centrées sur l'utilisateur et scalables.",
  },
  {
    title: "Identité & branding",
    description:
      "Une image de marque cohérente, moderne et différenciante pour votre entreprise.",
  },
  {
    title: "Automatisation",
    description:
      "Workflows, intégrations et dashboards pour gagner du temps et piloter vos équipes.",
  },
];

const projects = [
  {
    title: "Plateforme d'apprentissage",
    detail: "Design system complet + tableau de bord analytics en temps réel.",
  },
  {
    title: "Marketplace locale",
    detail: "Optimisation SEO, paiement sécurisé et gestion des vendeurs.",
  },
  {
    title: "Studio créatif",
    detail: "Site immersif avec storytelling vidéo et direction artistique sur-mesure.",
  },
];

export default function HomePage() {
  return (
    <>
      <header>
        <div className="container navbar">
          <div className="brand">DanHabibTech</div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#apropos">À propos</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div>
            <p className="pill">Agence digitale & innovation</p>
            <h1>Nous créons des expériences numériques qui font grandir votre marque.</h1>
            <p>
              DanHabibTech accompagne les startups et PME dans la conception de produits
              modernes, rapides et rentables. Notre équipe combine stratégie, design et
              développement pour lancer des solutions fiables.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Demander un devis
              </a>
              <a className="button secondary" href="#projets">
                Voir nos réalisations
              </a>
            </div>
          </div>
          <div className="hero-card">
            <ul>
              <li>
                <span>01</span>
                <div>
                  <strong>Audit & stratégie</strong>
                  <p>Analyse de votre marché, objectifs et plan d'action.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Design & prototypage</strong>
                  <p>Wireframes, UI kit et validation rapide auprès de vos clients.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Déploiement</strong>
                  <p>Livraison, monitoring et accompagnement continu.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <h2>Nos services</h2>
            <p>
              Une équipe pluridisciplinaire qui vous aide à transformer vos idées en
              expériences digitales performantes.
            </p>
            <div className="grid">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="apropos">
          <div className="container highlight">
            <h2>Pourquoi choisir DanHabibTech ?</h2>
            <p>
              Nous croyons en des solutions élégantes, rapides et mesurables. Notre
              méthodologie agile garantit des livrables en continu et une collaboration
              transparente.
            </p>
            <div className="stats">
              <div className="stat">
                <strong>5+</strong>
                <span>Années d'expérience</span>
              </div>
              <div className="stat">
                <strong>40+</strong>
                <span>Projets livrés</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Support & maintenance</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projets">
          <div className="container">
            <h2>Projets récents</h2>
            <p>
              Voici un aperçu de nos collaborations récentes. Chaque projet est conçu
              pour maximiser l'impact business.
            </p>
            <div className="grid">
              {projects.map((project) => (
                <article key={project.title} className="card">
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2>Parlons de votre projet</h2>
            <p>
              Besoin d'un accompagnement pour lancer ou améliorer votre produit ?
              Contactez-nous et recevez une proposition sous 48h.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Email</h3>
                <p>contact@danhabibtech.cc</p>
              </div>
              <div className="card">
                <h3>WhatsApp</h3>
                <p>+33 6 12 34 56 78</p>
              </div>
              <div className="card">
                <h3>Localisation</h3>
                <p>Paris • Casablanca • Remote</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <strong>DanHabibTech</strong>
            <p>Solutions digitales sur-mesure pour les entreprises ambitieuses.</p>
          </div>
          <div>
            <strong>Services</strong>
            <p>Web, Mobile, Branding, Automatisation</p>
          </div>
          <div>
            <strong>Réseaux</strong>
            <p>LinkedIn · Dribbble · Behance</p>
          </div>
          <div>
            <strong>Disponibilité</strong>
            <p>Lun - Sam : 9h00 - 19h00</p>
          </div>
        </div>
      </footer>
    </>
  );
}
