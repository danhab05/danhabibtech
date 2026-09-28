import type { Project } from "@/lib/data";

/**
 * Maquettes décoratives de chaque produit, dessinées en HTML/CSS.
 * Aucune image ni animation : elles montrent l'outil d'un coup d'œil.
 */
export default function ProjectMockup({ id }: { id: Project["id"] }) {
  return (
    <div className={`mock mock-${id}`} aria-hidden="true">
      <div className="mock-bar">
        <i />
        <i />
        <i />
        <span>{BAR_LABEL[id]}</span>
      </div>
      <div className="mock-body">{BODIES[id]}</div>
    </div>
  );
}

const BAR_LABEL: Record<Project["id"], string> = {
  crm: "crm.agence / pipeline",
  cours: "cours / espace parent",
  factures: "factures / export",
  seloger: "annonces / publier",
  ordonnances: "ordonnance / envoyer",
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
};
