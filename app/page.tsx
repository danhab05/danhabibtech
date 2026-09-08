import Image from "next/image";
import Contact from "@/components/Contact";
import {
  SITE,
  projects,
  faq,
  services,
  processSteps,
  skills,
  githubRepos,
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
      primaryImageOfPage: `${SITE.url}/images/atelier-paris.webp`,
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
          description: p.description,
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
          <a href="#projets">Mes projets</a>
          <a href="#services">Mon approche</a>
        </nav>
        <a className="button header-contact" href="#contact">
          On en parle ? <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="content">
        <section
          className="landscape"
          id="accueil"
          aria-labelledby="hero-title"
        >
          <Image
            className="landscape-art"
            src="/images/atelier-paris.webp"
            alt=""
            fill
            unoptimized
            priority
            sizes="100vw"
          />
          <div className="landscape-shade" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">DÉVELOPPEUR INDÉPENDANT · PARIS</p>
            <h1 id="hero-title">
              Moins de tâches.
              <br />
              Plus de possibles.
            </h1>
            <p className="hero-intro">
              J’automatise ce qui vous ralentit.
              <br />
              Je construis ce qui vous manque.
            </p>
            <a className="button hero-button" href="#projets">
              Explorer mes projets <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-bottom">
            <span>
              <i aria-hidden="true" /> Ouvert aux nouveaux projets
            </span>
            <span>Automatisation · IA · Développement</span>
          </div>
        </section>

        <section
          className="intro-band wrap"
          id="a-propos"
          aria-label="À propos"
        >
          <p className="eyebrow">DU CODE. DU CONCRET.</p>
          <div>
            <h2>
              Des outils qui travaillent.
              <br />
              Du temps qui vous revient.
            </h2>
            <p>
              Moi, c’est Dan. Développeur freelance à Paris, je transforme les
              tâches répétitives et les idées en outils utiles. De la première
              discussion à la mise en ligne, vous échangez avec la personne qui
              construit.
            </p>
          </div>
        </section>

        <section className="work-section section" id="projets">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / QUELQUES RÉALISATIONS</p>
                <h2>De l’idée au quotidien.</h2>
              </div>
              <p>
                Des projets différents.
                <br />
                La même envie de faire simple.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  className={`project-card project-${project.id}`}
                  key={project.id}
                >
                  <div className="project-cover" aria-hidden="true">
                    <div className="cover-top">
                      <span>{project.category}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <div className="project-symbol">
                      {["a²", "blg.", "PDF → XLS", "+", "</>", "↻"][index]}
                    </div>
                    <span className="cover-caption">
                      {
                        [
                          "Apprendre autrement.",
                          "L’immobilier, connecté.",
                          "Les données. Sans la saisie.",
                          "Moins d’attente. Plus de soin.",
                          "L’école, accessible en Python.",
                          "Une fois suffit.",
                        ][index]
                      }
                    </span>
                  </div>
                  <div className="project-info">
                    <div className="project-title">
                      <h3>{project.title}</h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Découvrir ${project.title} (nouvel onglet)`}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    <p>{project.description}</p>
                    <details className="project-details">
                      <summary>Résultat &amp; technologies</summary>
                      <p>{project.result}</p>
                      <div className="tags">
                        {project.technologies.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
            <div className="github-strip">
              <p>J’aime aussi construire à ciel ouvert.</p>
              <a
                href={SITE.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Retrouvez-moi sur GitHub ↗
              </a>
            </div>
            <details className="open-source">
              <summary>Explorer les projets open source</summary>
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
                  </a>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="section wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / CE QUE JE PEUX FAIRE</p>
              <h2>
                Le bon outil.
                <br />
                Pas une usine à gaz.
              </h2>
            </div>
            <p>
              Relier vos outils, alléger vos journées,
              <br />
              donner forme à votre prochain projet.
            </p>
          </div>
          <div className="services-grid">
            {services
              .filter((s) => !("isCta" in s))
              .map((service, i) => (
                <article key={service.title}>
                  <span className="service-index">0{i + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
          </div>
        </section>

        <section className="method-section section" id="methode">
          <div className="wrap method-layout">
            <div>
              <p className="eyebrow">03 / ON AVANCE ENSEMBLE</p>
              <h2>
                Un interlocuteur.
                <br />
                Du début à la suite.
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
              {processSteps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section wrap skills-section" id="competences">
          <p className="eyebrow">04 / DANS LA BOÎTE À OUTILS</p>
          <h2>La technique au service du besoin.</h2>
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
            <p className="eyebrow">05 / AVANT DE SE LANCER</p>
            <h2>Quelques réponses.</h2>
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
        <p>Du code utile, fait à Paris.</p>
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
