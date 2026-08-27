import { githubRepos, SITE } from "@/lib/data";

export default function GithubSection() {
  return (
    <section className="github section" id="github" aria-label="Projets open source sur GitHub">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <p className="section-label" data-fx="fade">
              <span className="section-num">03</span>
              Open Source
            </p>
            <h2 className="h2" data-fx="words">
              Sur <em>GitHub</em>
            </h2>
          </div>
          <p className="section-desc" data-fx="words-scrub">
            Une cinquantaine de dépôts publics : des bibliothèques Python, des
            outils TypeScript, des scripts qui m'ont fait gagner du temps et qui
            peuvent vous en faire gagner aussi.
          </p>
        </div>

        <div className="github-grid" data-fx-stagger>
          {githubRepos.map((repo) => (
            <a
              className="github-card"
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="github-card-top">
                <span className="github-card-name">{repo.name}</span>
                <span className="github-lang">{repo.language}</span>
              </div>
              <p className="github-card-desc">{repo.description}</p>
              <span className="github-card-cta">
                Voir le repo <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>

        <div className="github-cta-row" data-fx="fade">
          <a
            className="button ghost"
            href={SITE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.3"
          >
            Tous les dépôts <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
