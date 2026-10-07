import Contact from "@/components/Contact";
import ProjectMockup from "@/components/ProjectMockup";
import Logo from "@/components/Logo";
import {
  SITE,
  projects,
  faq,
  services,
  processSteps,
  stack,
  githubRepos,
  olderProjects,
  partners,
} from "@/lib/data";
import type { Project } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: "Dan Habib",
      alternateName: ["danhab05"],
      worksFor: { "@id": `${SITE.url}/#organization` },
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
        "Rust",
        "Go",
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
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.text,
          areaServed: "FR",
          provider: { "@id": `${SITE.url}/#organization` },
        },
      })),
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.brand,
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      logo: `${SITE.url}/icon.png`,
      description: SITE.description,
      founder: { "@id": `${SITE.url}/#person` },
      sameAs: [SITE.links.linkedin, SITE.links.github, SITE.links.twitter],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "NovaOr",
      description: SITE.description,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE.url}/#organization` },
      copyrightHolder: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/#page`,
      url: SITE.url,
      name: "NovaOr — Automatisation & développement sur-mesure à Paris",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#organization` },
      mainEntity: { "@id": `${SITE.url}/#organization` },
      inLanguage: "fr-FR",
      primaryImageOfPage: `${SITE.url}/opengraph-image`,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/#projets`,
      name: "Projets NovaOr",
      itemListElement: [...projects, ...olderProjects].map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name ? `${p.name} — ${p.title}` : p.title,
          description: p.summary,
          ...(p.link ? { url: p.link } : {}),
          ...(p.year ? { dateCreated: p.year } : {}),
          keywords: p.technologies.join(", "),
          author: { "@id": `${SITE.url}/#organization` },
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
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#accueil" className="logo" aria-label="NovaOr, accueil">
            <Logo />
          </a>
          <nav aria-label="Navigation principale">
            <a href="#projets">Projets</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-small" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main id="content">
        <section className="hero wrap" id="accueil" aria-labelledby="hero-title">
          <p className="kicker">
            <span className="dot" aria-hidden="true" />
            Studio de développement · Paris
          </p>
          <h1 id="hero-title">
            Nous créons les outils qui font le travail répétitif à votre place.
          </h1>
          <p className="lead">
            Logiciels sur mesure et automatisations pour les entreprises, aux
            côtés de partenaires reconnus qui nous confient leurs outils.
          </p>

          <div className="hero-partners" role="group" aria-labelledby="partners-title">
            <p className="label" id="partners-title">
              Ils nous font confiance
            </p>
            <ul className="partner-list">
              {partners.map((pt) => {
                const inner = (
                  <>
                    {pt.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="partner-logo"
                        src={pt.logo}
                        alt={`Logo ${pt.name}`}
                        width={280}
                        height={130}
                      />
                    ) : (
                      <span
                        className="partner-wordmark"
                        aria-label={pt.name}
                        style={
                          {
                            "--pbg": pt.colors.bg,
                            "--paccent": pt.colors.accent,
                          } as React.CSSProperties
                        }
                      >
                        <b>{pt.name}</b>
                        <small>{pt.tagline}</small>
                      </span>
                    )}
                    <span className="partner-work">
                      {pt.work}
                      {pt.url && (
                        <em>
                          {pt.url
                            .replace(/^https?:\/\/(www\.)?/, "")
                            .replace(/\/$/, "")}{" "}
                          ↗
                        </em>
                      )}
                    </span>
                  </>
                );
                return (
                  <li key={pt.name}>
                    {pt.url ? (
                      <a
                        className="partner-card"
                        href={pt.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="partner-card">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hero-actions">
            <a className="btn" href="#projets">
              Explorer nos projets <span aria-hidden="true">↓</span>
            </a>
            <a className="btn btn-outline" href="#contact">
              Parler de mon besoin
            </a>
          </div>
        </section>


        <section className="projects wrap" id="projets" aria-labelledby="projets-title">
          <div className="section-head">
            <p className="label">Projets</p>
            <h2 id="projets-title">Ce que nous avons construit</h2>
          </div>

          <div className="project-list">
            {projects.map((p, i) => (
              <ProjectCard project={p} index={i} key={p.id} />
            ))}
          </div>

          <div className="older">
            <div className="section-head">
              <p className="label">Et aussi</p>
              <h2>Nos autres projets</h2>
            </div>
            <div className="older-grid">
              {olderProjects.map((p, i) => (
                <ProjectCard
                  project={p}
                  index={projects.length + i}
                  compact
                  key={p.id}
                />
              ))}
            </div>
            <details className="open-source">
              <summary>Nos autres projets open source</summary>
              <ul>
                {githubRepos.map((r) => (
                  <li key={r.name}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      <strong>{r.name} ↗</strong>
                      <span>{r.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section className="band" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-head">
              <p className="label">Services</p>
              <h2 id="services-title">Ce que nous pouvons faire pour vous</h2>
            </div>
            <ul className="services">
              {services.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
            <p className="stack">
              <span>Avec</span> {stack.join(", ")}.
            </p>
          </div>
        </section>

        <section className="wrap steps-section" id="methode" aria-labelledby="methode-title">
          <div className="section-head">
            <p className="label">Méthode</p>
            <h2 id="methode-title">Comment ça se passe</h2>
          </div>
          <ol className="steps">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span aria-hidden="true">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-head">
            <p className="label">FAQ</p>
            <h2 id="faq-title">Questions fréquentes</h2>
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

      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="logo" href="#accueil" aria-label="NovaOr, accueil">
            <Logo height={72} />
          </a>
          <p>NovaOr · Paris · © {new Date().getFullYear()}</p>
          <div>
            <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={SITE.links.twitter} target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function ProjectCard({
  project: p,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
      className={`project-card tint-${p.id}${compact ? " compact" : ""}`}
      id={`p-${p.id}`}
      aria-labelledby={`t-${p.id}`}
    >
      <div className="project-text">
        <p className="project-meta">
          <span>{num}</span> {p.sector}
          {p.year && <time className="project-year">{p.year}</time>}
        </p>
        <h3 id={`t-${p.id}`}>
          {p.name ?? p.title}
          {p.name && <small>{p.title}</small>}
        </h3>
        <p className="project-gain">
          <strong>{p.gain}</strong>
          <span>{p.gainLabel}</span>
        </p>
        <p className="project-summary">{p.summary}</p>
        <p className="project-before">{p.before}</p>
        <ul className="project-features">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="project-foot">
          <span className="project-tech">{p.technologies.join(" · ")}</span>
          {p.link && (
            <a
              className="project-link"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir ${p.name ?? p.title} (nouvel onglet)`}
            >
              {p.link.includes("github.com") ? "Voir sur GitHub ↗" : "Voir en ligne ↗"}
            </a>
          )}
        </div>
      </div>
      <div className="project-visual">
        <ProjectMockup id={p.id} screenshot={p.screenshot} />
      </div>
    </article>
  );
}
