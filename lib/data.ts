export const SITE = {
  url: "https://novaor.fr",
  name: "NovaOr",
  brand: "NovaOr",
  founder: "Dan Habib",
  jobTitle: "Développeur Fullstack & Automatisation",
  email: "danhabibpro@gmail.com",
  location: "Paris, France",
  description:
    "NovaOr, studio de développement à Paris. Nous créons des logiciels et des automatisations pour les entreprises : CRM immobilier, plateforme de cours particuliers, conversion de factures en Excel, publication d'annonces, envoi d'ordonnances.",
  links: {
    github: "https://github.com/danhab05",
    linkedin: "https://www.linkedin.com/in/dan-habib-899b84232",
    twitter: "https://x.com/DanHabib05",
  },
} as const;

export type Project = {
  id:
    | "crm"
    | "cours"
    | "blg"
    | "factures"
    | "seloger"
    | "ordonnances"
    | "extractgrid"
    | "covid"
    | "ecoledirect"
    | "scripts";
  /** Nom du produit ou du client, quand il existe. */
  name?: string;
  title: string;
  /** Pour qui. */
  sector: string;
  /** Le chiffre ou le fait qui résume le gain. */
  gain: string;
  gainLabel: string;
  summary: string;
  /** Comment ça se passait avant, en une phrase. */
  before: string;
  features: string[];
  technologies: string[];
  link: string | null;
  /** Capture d'écran réelle du produit (dans /public) et, si on veut la montrer, son adresse dans la barre. */
  screenshot?: { src: string; url?: string };
};

export const projects: Project[] = [
  {
    id: "crm",
    title: "CRM immobilier",
    sector: "Agence immobilière",
    gain: "1 outil",
    gainLabel: "au lieu de 4 pour suivre l'agence",
    summary:
      "Les biens, les propriétaires, les acheteurs et les visites sont au même endroit. Quand un bien arrive, on voit tout de suite quels acheteurs le cherchent, et les relances partent seules.",
    before: "Avant, tout était réparti entre un tableur, un agenda, les mails et des carnets.",
    features: ["Biens et mandats", "Acheteurs proposés automatiquement", "Relances et visites"],
    technologies: ["Next.js", "Rust", "Docker"],
    link: null,
    screenshot: { src: "/projects/crm.webp" },
  },
  {
    id: "seloger",
    name: "Facilitimo",
    title: "Annonces SeLoger en 1 clic",
    sector: "Agence immobilière",
    gain: "1 clic",
    gainLabel: "pour mettre une annonce en ligne",
    summary:
      "Facilitimo publie les annonces sur SeLoger à la place de l'agent. L'agent remplit la fiche du bien une fois et clique sur Publier : le robot met l'annonce en ligne, photos comprises, puis envoie un mail de confirmation. Utilisé par l'agence BLG Immobilier.",
    before: "Avant, chaque annonce était ressaisie à la main sur le portail.",
    features: ["Une seule saisie", "Photos envoyées par le robot", "Mail de confirmation"],
    technologies: ["Next.js", "Python", "Docker"],
    link: null,
    screenshot: { src: "/projects/seloger.webp" },
  },
  {
    id: "cours",
    name: "Assia",
    title: "Plateforme de cours particuliers",
    sector: "Soutien scolaire",
    gain: "3 comptes",
    gainLabel: "prof, élève et parent",
    summary:
      "Pour Assia, un institut de maths et physique-chimie qui suit plus de 130 élèves. Le prof ouvre ses créneaux, l'élève réserve, le parent paie en ligne. Les devoirs sont déposés et rendus sur la plateforme.",
    before: "Avant, tout passait par SMS, virements à relancer et photos de devoirs sur WhatsApp.",
    features: ["Réservation", "Paiement en ligne", "Devoirs et suivi"],
    technologies: ["Next.js", "React", "Vercel"],
    link: "https://www.assia.school",
    screenshot: { src: "/projects/cours.webp", url: "assia.school" },
  },
  {
    id: "blg",
    name: "BLG Immobilier",
    title: "Site d'immobilier neuf",
    sector: "Agence immobilière",
    gain: "47 305",
    gainLabel: "logements neufs en ligne",
    summary:
      "Le site blgimmobilier.fr : plus de 47 000 appartements et maisons neufs de plus de 500 promoteurs, une carte pour chercher par région, et un formulaire qui transmet chaque demande à un conseiller. Les pages Marseille, Paris et Lyon sont pensées pour Google.",
    before: "Avant, l'acheteur devait appeler l'agence pour savoir quels programmes étaient disponibles.",
    features: ["Carte des programmes", "Recherche par ville et budget", "Demandes envoyées aux conseillers"],
    technologies: ["PHP"],
    link: "https://www.blgimmobilier.fr/",
    screenshot: { src: "/projects/blg.webp", url: "blgimmobilier.fr" },
  },
  {
    id: "covid",
    name: "Tests antigéniques",
    title: "Inscription et résultats automatiques",
    sector: "Une quinzaine de pharmacies",
    gain: "100 000",
    gainLabel: "tests gérés en deux ans",
    summary:
      "Pendant le Covid, les pharmacies étaient débordées. Près de 15 pharmacies ont utilisé l'outil : les patients s'inscrivaient en ligne, recevaient leur résultat par mail automatiquement, et chaque pharmacien suivait tout depuis un seul écran.",
    before: "Avant, tout se faisait au comptoir, avec la file d'attente qui va avec.",
    features: ["Inscription en ligne", "Résultat envoyé par mail", "Suivi pour chaque pharmacie"],
    technologies: ["Flutter", "Python", "Flask", "Docker"],
    link: null,
    screenshot: { src: "/projects/covid.webp" },
  },
];

/** Autres projets, affichés en bas. */
export const olderProjects: Project[] = [
  {
    id: "factures",
    title: "Factures vers Excel",
    sector: "Comptable",
    gain: "1 s",
    gainLabel: "au lieu de 10 min par facture",
    summary:
      "Le comptable glisse ses factures dans le logiciel. Il récupère un fichier Excel déjà rempli, au format qu'il utilise : date, fournisseur, HT, TVA, TTC.",
    before: "Avant, il ouvrait chaque PDF et recopiait les montants à la main.",
    features: ["Plusieurs factures d'un coup", "Son modèle Excel à lui", "Montants vérifiés"],
    technologies: ["Python", "OCR", "Excel"],
    link: null,
    screenshot: { src: "/projects/factures.webp" },
  },
  {
    id: "ordonnances",
    title: "Ordonnance à la pharmacie",
    sector: "Pharmacie",
    gain: "1 clic",
    gainLabel: "pour envoyer une ordonnance",
    summary:
      "Le patient prend son ordonnance en photo, choisit sa pharmacie et envoie. Le pharmacien la reçoit, prépare la commande et prévient quand elle est prête. Les ordonnances sont stockées en accord avec les règles d'hébergement de données de santé (HDS).",
    before: "Avant, il fallait écrire un mail avec un scan, ou attendre au comptoir.",
    features: ["Photo et envoi", "Espace pharmacien", "Alerte « commande prête »", "Hébergement HDS"],
    technologies: ["Flutter", "Python", "Flask"],
    link: null,
  },
  {
    id: "extractgrid",
    name: "ExtractGrid",
    title: "Relevés bancaires vers Excel",
    sector: "Comptables et PME",
    gain: "Multi-banques",
    gainLabel: "la banque est reconnue toute seule",
    summary:
      "On dépose un relevé bancaire en PDF, on récupère un fichier Excel propre avec les dates, les libellés, les débits et les crédits.",
    before: "Avant, on recopiait le relevé ligne par ligne dans un tableur.",
    features: ["Détection de la banque", "Débits et crédits séparés", "Export Excel"],
    technologies: ["Next.js", "TypeScript", "Node.js"],
    link: "https://github.com/danhab05/ExtractGrid",
    screenshot: { src: "/projects/extractgrid.webp" },
  },
  {
    id: "ecoledirect",
    name: "EcoleDirect",
    title: "Librairie Python open source",
    sector: "Parents et étudiants",
    gain: "3 lignes",
    gainLabel: "de Python pour avoir notes et devoirs",
    summary:
      "EcoleDirecte n'a pas d'API publique. Cette librairie permet de récupérer les devoirs, les notes et les infos d'un élève en quelques lignes. Elle est publiée sur PyPI.",
    before: "Avant, il fallait se connecter au site et tout regarder à la main.",
    features: ["Devoirs", "Notes", "Installation avec pip"],
    technologies: ["Python", "PyPI"],
    link: "https://github.com/danhab05/ecoledirect",
  },
  {
    id: "scripts",
    name: "Automatisation & scraping",
    title: "Missions sur mesure",
    sector: "Agences et back-offices",
    gain: "0 copier-coller",
    gainLabel: "les données arrivent prêtes",
    summary:
      "Remplir un back-office, récupérer des données sur des sites qui ne les fournissent pas proprement, refaire cent fois la même manipulation : des scripts qui le font à la place de l'équipe.",
    before: "Avant, quelqu'un y passait des heures chaque semaine.",
    features: ["Robots web", "Collecte de données", "Fichiers prêts à l'emploi"],
    technologies: ["Python", "Go", "Selenium"],
    link: null,
  },
];

/** Entreprises avec qui nous travaillons. `logo` : chemin dans /public, sinon logo texte. */
export const partners: {
  name: string;
  tagline: string;
  work: string;
  url: string | null;
  logo: string | null;
  /** Couleurs du logo texte : fond et trait d'accent. */
  colors: { bg: string; accent: string };
}[] = [
  {
    name: "BLG Immobilier",
    tagline: "Vivre & investir",
    work: "Site internet et publication SeLoger avec Facilitimo",
    url: "https://blgimmobilier.fr/",
    logo: null,
    colors: { bg: "#032f4a", accent: "#f68a1f" },
  },
  {
    name: "Assia",
    tagline: "Soutien scolaire",
    work: "Site et plateforme de cours particuliers",
    url: "https://www.assia.school",
    logo: null,
    colors: { bg: "#0c111b", accent: "#ff7a45" },
  },
  {
    name: "Pharmacie Centrale de l'Est",
    tagline: "Pharmacie",
    work: "Tests antigéniques : inscription en ligne et résultats par mail",
    url: null,
    logo: null,
    colors: { bg: "#0b5d45", accent: "#3ddc97" },
  },
];

export const stack = [
  "Python",
  "Next.js",
  "TypeScript",
  "React",
  "Flutter",
  "Flask",
  "Django",
  "MySQL",
  "Docker",
  "Selenium",
  "Rust",
  "Go",
] as const;

export const services = [
  {
    title: "Automatisations",
    text: "Un robot ou un script qui fait à votre place ce que vous refaites tous les jours.",
  },
  {
    title: "Logiciels métier",
    text: "CRM, back-office, outil interne : ce que vous gérez aujourd'hui dans un tableur.",
  },
  {
    title: "Plateformes web",
    text: "Comptes clients, réservation, paiement en ligne.",
  },
  {
    title: "Sites internet",
    text: "Rapides, clairs et bien référencés sur Google.",
  },
  {
    title: "Applications mobiles",
    text: "iPhone et Android, avec Flutter.",
  },
  {
    title: "Connexion entre outils",
    text: "Vos logiciels s'échangent les données, vous arrêtez de recopier.",
  },
] as const;

export const processSteps = [
  {
    title: "On s'appelle",
    text: "Vous nous montrez comment vous faites aujourd'hui. 30 minutes, gratuit.",
  },
  {
    title: "On vous fait une proposition",
    text: "Ce que nous construisons, en combien de temps et pour quel prix.",
  },
  {
    title: "On développe",
    text: "Vous testez des versions au fur et à mesure et on ajuste.",
  },
  {
    title: "Mise en ligne",
    text: "Nous nous occupons de l'installation et restons disponibles après. Le code est à vous.",
  },
] as const;

/** Options du formulaire de contact. */
export const needTypes = [
  "Automatisation",
  "Logiciel métier / CRM",
  "Plateforme web",
  "Site internet",
  "Application mobile",
  "Autre",
] as const;

export const faq = [
  {
    question: "Combien ça coûte ?",
    answer:
      "Ça dépend de ce qu'il faut construire. Après un premier appel, nous vous envoyons un prix fixe. Une petite automatisation coûte beaucoup moins cher qu'une plateforme complète.",
  },
  {
    question: "Combien de temps ça prend ?",
    answer:
      "Quelques jours pour une automatisation simple, quelques semaines pour un logiciel. Vous avez une première version à tester rapidement.",
  },
  {
    question: "Je n'y connais rien en technique, c'est un problème ?",
    answer:
      "Non. Vous nous expliquez votre travail avec vos mots, on s'occupe du reste. Vous testez l'outil et vous nous dites ce qui ne va pas.",
  },
  {
    question: "Vous travaillez à distance ?",
    answer:
      "Oui, avec des clients partout en France. Nous sommes à Paris si on doit se voir. Nous répondons du lundi au vendredi et le dimanche, de 8 h à 20 h.",
  },
  {
    question: "Qu'est-ce qui se passe après la livraison ?",
    answer:
      "Le code vous appartient. Nous restons disponibles pour corriger un problème ou ajouter quelque chose plus tard.",
  },
] as const;

export const githubRepos = [
  {
    name: "ExtractGrid",
    description: "Relevé bancaire PDF vers Excel.",
    language: "TypeScript",
    url: "https://github.com/danhab05/ExtractGrid",
  },
  {
    name: "ecoledirect",
    description: "Notes et devoirs EcoleDirecte en Python.",
    language: "Python",
    url: "https://github.com/danhab05/ecoledirect",
  },
  {
    name: "pdf2excel",
    description: "Extraire les tableaux d'un PDF.",
    language: "Python",
    url: "https://github.com/danhab05/pdf2excel",
  },
  {
    name: "PdfSplitter",
    description: "Découper des PDF dans le navigateur.",
    language: "TypeScript",
    url: "https://github.com/danhab05/PdfSplitter",
  },
] as const;
