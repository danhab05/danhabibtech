import type { Project } from "@/lib/data";

/**
 * Visuel de chaque produit : la vraie capture d'écran quand on en a une,
 * sinon une maquette dessinée en HTML/CSS.
 */
export default function ProjectMockup({
  id,
  screenshot,
}: {
  id: Project["id"];
  screenshot?: Project["screenshot"];
}) {
  if (screenshot) {
    return (
      <div className="mock mock-shot" aria-hidden="true">
        <div className="mock-bar">
          <i />
          <i />
          <i />
          {screenshot.url && <span>{screenshot.url}</span>}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={screenshot.src} alt="" width={1200} height={750} loading="lazy" decoding="async" />
      </div>
    );
  }
  return (
    <div className={`mock mock-${id}`} aria-hidden="true">
      <div className="mock-bar">
        <i />
        <i />
        <i />
        {BAR_LABEL[id] && <span>{BAR_LABEL[id]}</span>}
      </div>
      <div className="mock-body">{BODIES[id]}</div>
    </div>
  );
}

/** Pas d'adresse inventée dans la barre : seulement un nom de fichier ou de terminal. */
const BAR_LABEL: Partial<Record<Project["id"], string>> = {
  ecoledirect: "main.py",
  scripts: "terminal",
};

const BODIES: Record<Project["id"], React.ReactNode> = {
  crm: (
    <div className="crm">
      {[
        {
          col: "Nouveau",
          cards: [
            ["T3 · Paris 11e", "485 000 €"],
            ["Studio · Vincennes", "219 000 €"],
          ],
        },
        { col: "Visite", cards: [["T4 · Montreuil", "612 000 €", "hot"]] },
        { col: "Offre", cards: [["Maison · Saint-Maur", "890 000 €"]] },
        { col: "Signé", cards: [["T2 · Paris 20e", "342 000 €", "done"]] },
      ].map((c) => (
        <div className="crm-col" key={c.col}>
          <b>
            {c.col}
            <em>{c.cards.length}</em>
          </b>
          {c.cards.map(([name, price, state]) => (
            <div className={`crm-card ${state ?? ""}`} key={name}>
              <span>{name}</span>
              <small>{price}</small>
              {state === "hot" && <mark>3 acquéreurs compatibles</mark>}
              {state === "done" && <mark>Compromis signé</mark>}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  cours: (
    <div className="cours">
      <div className="cours-tabs">
        <span>Prof</span>
        <span>Élève</span>
        <span className="on">Parent</span>
      </div>
      <div className="cours-week">
        {["Lun", "Mar", "Mer", "Jeu", "Ven"].map((d, i) => (
          <div key={d}>
            <small>{d}</small>
            {i === 1 && <span className="slot booked">Maths · 18h</span>}
            {i === 3 && <span className="slot">Physique · 17h</span>}
            {i !== 1 && i !== 3 && <span className="slot empty">—</span>}
          </div>
        ))}
      </div>
      <div className="cours-row">
        <span>Cours de mardi · 1 h</span>
        <mark>Payé ✓</mark>
      </div>
      <div className="cours-row">
        <span>Devoir · Exercices 4 à 7 p. 52</span>
        <mark className="alt">Rendu</mark>
      </div>
    </div>
  ),
  factures: (
    <div className="fact">
      <div className="fact-pdf">
        <b>FACTURE</b>
        <small>N° 2026-0342</small>
        <i />
        <i />
        <i className="short" />
        <strong>1 248,00 €</strong>
      </div>
      <div className="fact-arrow">
        <span>1 s</span>
      </div>
      <div className="fact-xls">
        <div className="xls-head">
          <span>Date</span>
          <span>Fournisseur</span>
          <span>HT</span>
          <span>TVA</span>
          <span>TTC</span>
        </div>
        {[
          ["12/09", "Bureau Plus", "1 040,00", "208,00", "1 248,00", "new"],
          ["11/09", "EDF Pro", "310,50", "62,10", "372,60"],
          ["09/09", "Orange", "45,83", "9,17", "55,00"],
        ].map(([d, f, ht, tva, ttc, state]) => (
          <div className={`xls-row ${state ?? ""}`} key={f}>
            <span>{d}</span>
            <span>{f}</span>
            <span>{ht}</span>
            <span>{tva}</span>
            <span>{ttc}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  seloger: (
    <div className="annonce">
      <div className="annonce-photo">
        <span>12 photos</span>
      </div>
      <div className="annonce-info">
        <b>Appartement 3 pièces · 68 m²</b>
        <small>Paris 11e · Balcon · 4e étage</small>
        <strong>485 000 €</strong>
        <div className="annonce-action">
          <span className="publish">Publier sur SeLoger</span>
          <span className="live">● En ligne</span>
        </div>
      </div>
    </div>
  ),
  ordonnances: (
    <div className="ordo">
      <div className="ordo-phone">
        <div className="ordo-scan">
          <b>Ordonnance</b>
          <i />
          <i />
          <i className="short" />
        </div>
        <div className="ordo-pick">
          <small>Envoyer à</small>
          <span>Pharmacie du Marché</span>
        </div>
        <span className="ordo-send">Envoyer</span>
      </div>
      <div className="ordo-notif">
        <b>Pharmacie du Marché</b>
        <span>Votre commande est prête ✓</span>
      </div>
    </div>
  ),
  covid: (
    <div className="covid">
      <div className="covid-form">
        <b>Réserver un test</b>
        <span>Nom · Prénom</span>
        <span>Samedi 10 h 20</span>
        <em>Confirmer</em>
      </div>
      <div className="covid-mail">
        <small>Résultat de votre test</small>
        <mark>Négatif</mark>
        <span>Envoyé automatiquement · 10 h 38</span>
      </div>
    </div>
  ),
  extractgrid: (
    <div className="eg">
      <div className="eg-bank">
        <b>Relevé de compte · Septembre</b>
        <small>Banque détectée ✓</small>
      </div>
      <div className="fact-xls">
        <div className="xls-head eg-row">
          <span>Date</span>
          <span>Libellé</span>
          <span>Débit</span>
          <span>Crédit</span>
        </div>
        {[
          ["02/09", "Loyer bureau", "1 200,00", ""],
          ["05/09", "Virement client", "", "3 480,00"],
          ["08/09", "Abonnement logiciel", "49,00", ""],
          ["12/09", "Virement client", "", "860,00"],
        ].map(([d, l, deb, cred], i) => (
          <div className="xls-row eg-row" key={i}>
            <span>{d}</span>
            <span>{l}</span>
            <span>{deb}</span>
            <span>{cred}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  ecoledirect: (
    <pre className="code">
      <span className="c-muted">$ pip install ecoledirect</span>
      {"\n\n"}
      <span className="c-key">from</span> ecoledirect{" "}
      <span className="c-key">import</span> EcoleDirect
      {"\n\n"}
      ed = EcoleDirect(<span className="c-str">&quot;identifiant&quot;</span>,{" "}
      <span className="c-str">&quot;mdp&quot;</span>)
      {"\n"}
      devoirs = ed.devoirs()
      {"\n"}
      notes = ed.notes()
    </pre>
  ),
  scripts: (
    <pre className="code">
      <span className="c-muted">$ python robot.py --source annuaire</span>
      {"\n"}
      <span className="c-ok">✓</span> 1 250 fiches récupérées
      {"\n"}
      <span className="c-ok">✓</span> doublons retirés
      {"\n"}
      <span className="c-ok">✓</span> back-office rempli
      {"\n"}
      <span className="c-ok">✓</span> export.xlsx prêt
      {"\n\n"}
      <span className="c-muted">Terminé en 42 s</span>
    </pre>
  ),
};
