export const SITE = {
  url: "https://www.danhabib.dev",
  name: "SnowTech",
  brand: "SnowTech",
  founder: "Dan Habib",
  jobTitle: "Développeur Fullstack & Automatisation",
  email: "danhabibpro@gmail.com",
  location: "Paris, France",
  description:
    "SnowTech, studio d'automatisation et de développement sur-mesure à Paris, fondé par Dan Habib. J'automatise les tâches répétitives et je construis les applications web et les outils internes qui vont avec. Python, Next.js, TypeScript, Docker.",
  links: {
    github: "https://github.com/danhab05",
    linkedin: "https://www.linkedin.com/in/dan-habib-899b84232",
    twitter: "https://x.com/DanHabib05",
  },
} as const;

export type Project = {
  id: "crm" | "cours" | "factures" | "seloger" | "ordonnances";
  title: string;
  category: string;
  /** Une phrase qui résume le produit. */
  pitch: string;
  problem: string;
  solution: string;
  features: string[];
  /** Le gain mis en avant, sous forme « avant → après ». */
  gain: { before: string; after: string; label: string };
  technologies: string[];
  link: string | null;
};

export const projects: Project[] = [
  {
    id: "crm",
    title: "CRM immobilier",
    category: "Agences immobilières",
    pitch: "Tout le portefeuille de l'agence au même endroit.",
    problem:
      "Les biens dans un tableur, les acquéreurs dans un carnet, les visites dans un agenda et les relances dans la tête de chacun. Une info manque, un client passe à la trappe.",
    solution:
      "Un CRM taillé pour l'agence : fiches biens et mandats, acquéreurs et leurs critères, agenda des visites et relances qui partent toutes seules. Quand un bien entre, les bons acquéreurs ressortent.",
    features: [
      "Biens, mandats et propriétaires",
      "Rapprochement bien ↔ acquéreur",
      "Visites et relances automatiques",
    ],
    gain: { before: "4 outils", after: "1 seul", label: "pour suivre toute l'agence" },
    technologies: ["Next.js", "TypeScript", "Docker"],
    link: null,
  },
  {
    id: "cours",
    title: "Plateforme de cours particuliers",
    category: "Soutien scolaire",
    pitch: "Réserver, payer et suivre ses cours, sans un seul SMS.",
    problem:
      "Les cours se calent par message, se paient en liquide ou par virement à relancer, et les devoirs se perdent entre deux photos WhatsApp.",
    solution:
      "Une plateforme avec trois espaces. Le prof ouvre ses créneaux et dépose les devoirs. L'élève réserve et rend son travail. Le parent paie en ligne et suit la progression.",
    features: [
      "Comptes prof, élève et parent",
      "Réservation et paiement en ligne",
      "Devoirs déposés, rendus, corrigés",
    ],
    gain: { before: "10 messages", after: "1 clic", label: "pour réserver un cours" },
    technologies: ["Next.js", "React", "Paiement en ligne", "Vercel"],
    link: "https://www.assia.school",
  },
  {
    id: "factures",
    title: "Factures → Excel pour comptable",
    category: "Cabinets comptables",
    pitch: "Une facture entre, une ligne Excel au bon format sort.",
    problem:
      "Pour chaque facture, le comptable ouvre le PDF, recopie fournisseur, date, HT, TVA et TTC dans son fichier, colonne par colonne. Dix minutes, et une faute de frappe de temps en temps.",
    solution:
      "Il dépose la facture dans le logiciel. Les montants et les informations sont lus automatiquement et rangés dans l'Excel exactement au format du cabinet : mêmes colonnes, même ordre, prêt à importer.",
    features: [
      "Dépôt par glisser-déposer, une ou cent factures",
      "Lecture fournisseur, date, HT, TVA, TTC",
      "Export au modèle Excel du cabinet",
    ],
    gain: { before: "10 min", after: "1 s", label: "par facture" },
    technologies: ["Python", "OCR", "Excel"],
    link: null,
  },
  {
    id: "seloger",
    title: "Publication SeLoger en un clic",
    category: "Agences immobilières",
    pitch: "L'annonce est saisie une fois, le robot la publie.",
    problem:
      "Chaque bien était ressaisi à la main sur le portail : titre, surface, prix, description, photos une par une. Le même travail, encore et encore.",
    solution:
      "L'agent remplit sa fiche une seule fois et clique sur « Publier ». Un robot se connecte au portail, remplit chaque champ, envoie les photos et confirme la mise en ligne par mail.",
    features: [
      "Une fiche unique par bien",
      "Formulaire et photos remplis par le robot",
      "Confirmation par mail",
    ],
    gain: { before: "Saisie manuelle", after: "1 clic", label: "par annonce" },
    technologies: ["Python", "Selenium", "Docker", "Next.js"],
    link: "https://blgimmobilier.fr/",
  },
  {
    id: "ordonnances",
    title: "Ordonnance → pharmacien en un clic",
    category: "Pharmacies",
    pitch: "Photo de l'ordonnance, un clic, la pharmacie prépare.",
    problem:
      "Pour faire préparer un traitement, le patient doit écrire un mail, joindre un scan, retrouver l'adresse de la pharmacie… Personne n'a envie, alors tout le monde attend au comptoir.",
    solution:
      "Le patient photographie son ordonnance, choisit sa pharmacie et envoie. Le pharmacien la reçoit dans son espace, prépare la commande et prévient le patient quand c'est prêt.",
    features: [
      "Envoi en un clic, sans mail à rédiger",
      "Espace pharmacien pour suivre les demandes",
      "Notification « commande prête »",
    ],
    gain: { before: "Un mail à écrire", after: "1 clic", label: "pour transmettre" },
    technologies: ["Flutter", "Python", "Flask", "Docker"],
    link: null,
  },
];

/** Réalisations plus anciennes, citées plus brièvement. */
export const otherWork = [
  {
    title: "Tests antigéniques",
    text: "Inscription en ligne et résultats envoyés automatiquement pour une pharmacie : environ 100 000 tests traités en deux ans.",
    link: null,
  },
  {
    title: "ExtractGrid",
    text: "Relevés bancaires PDF convertis en Excel, avec détection automatique de la banque.",
    link: "https://github.com/danhab05/ExtractGrid",
  },
  {
    title: "EcoleDirect",
    text: "Bibliothèque Python publiée sur PyPI : devoirs et notes EcoleDirecte en trois lignes.",
    link: "https://github.com/danhab05/ecoledirect",
  },
] as const;

export const stats = [
  { value: 40, suffix: "+", label: "Projets livrés" },
  { value: 5, suffix: "+", label: "Ans d'expérience" },
  { value: 100, suffix: "K", label: "Tests traités" },
  { value: 50, suffix: "+", label: "Dépôts publics" },
] as const;

export const skills = [
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
    items: [{ name: "MySQL", level: "Avancé" }],
  },
  {
    title: "Déploiement & outils",
    items: [
      { name: "Docker", level: "Bonne maîtrise" },
      { name: "Linux / VPS", level: "Utilisation" },
      { name: "Git", level: "Quotidien" },
      { name: "API REST", level: "Création & conso." },
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
] as const;

export const githubRepos = [
  {
    name: "ExtractGrid",
    description:
      "Transforme un relevé bancaire PDF en fichier Excel exploitable.",
    language: "TypeScript",
    url: "https://github.com/danhab05/ExtractGrid",
  },
  {
    name: "ecoledirect",
    description:
      "L'API que EcoleDirecte n'a jamais publiée, en trois lignes de Python.",
    language: "Python",
    url: "https://github.com/danhab05/ecoledirect",
  },
  {
    name: "pdf2excel",
    description:
      "Extraction de tableaux depuis un PDF, sans recopie manuelle.",
    language: "Python",
    url: "https://github.com/danhab05/pdf2excel",
  },
  {
    name: "pyswifi",
    description: "Gestion des réseaux WiFi pilotée en Python.",
    language: "Python",
    url: "https://github.com/danhab05/pyswifi",
  },
  {
    name: "MorseMaster",
    description: "Apprendre le code Morse avec une interface interactive.",
    language: "Vue",
    url: "https://github.com/danhab05/MorseMaster",
  },
  {
    name: "PdfSplitter",
    description: "Découper et réorganiser des PDF directement dans le navigateur.",
    language: "TypeScript",
    url: "https://github.com/danhab05/PdfSplitter",
  },
] as const;

/** Les frictions que rencontrent les entreprises avant d'automatiser. */
export const painPoints = [
  {
    title: "Double saisie",
    text: "La même information recopiée dans le CRM, le tableur, puis la facture. Trois fois le temps, trois fois le risque d'erreur.",
  },
  {
    title: "Demandes oubliées",
    text: "Un formulaire arrive dans une boîte mail déjà pleine. Personne ne relance, et le client va voir ailleurs.",
  },
  {
    title: "Relances manuelles",
    text: "Quelqu'un passe sa semaine à renvoyer les mêmes messages, aux mêmes moments, aux mêmes personnes.",
  },
  {
    title: "Données dispersées",
    text: "Les infos vivent dans quatre outils qui ne se parlent pas. Pour un chiffre, il faut ouvrir les quatre.",
  },
  {
    title: "Copier-coller à rallonge",
    text: "Extraire, trier, reformater : des heures de manipulation qu'un script fait en quelques secondes.",
  },
] as const;

/** Ce que je conçois pour les entreprises. */
export const services = [
  {
    title: "Automatisations",
    text: "Des robots qui remplissent, publient, trient et relancent à votre place, déclenchés par un formulaire, un mail ou un horaire.",
  },
  {
    title: "Intégrations",
    text: "Vos outils reliés entre eux par des APIs : le CRM, la facturation et le site cessent d'être trois îlots séparés.",
  },
  {
    title: "Assistants IA",
    text: "Des assistants branchés sur vos propres documents et données, qui répondent aux questions internes récurrentes.",
  },
  {
    title: "Chatbots & WhatsApp",
    text: "Un premier niveau de réponse automatique qui qualifie la demande avant qu'elle n'arrive sur votre bureau.",
  },
  {
    title: "Sites internet",
    text: "Des sites rapides et bien référencés, du premier écran jusqu'à la mise en ligne, pensés pour convertir.",
  },
  {
    title: "Applications web & mobile",
    text: "Des applications sur-mesure quand aucun outil du marché ne correspond vraiment à votre façon de travailler.",
  },
  {
    title: "Outils métier",
    text: "Le back-office que vous bricolez dans un tableur, transformé en véritable outil avec des accès et un historique.",
  },
  {
    title: "Extraction de données",
    text: "Collecte et structuration de données web ou documentaires, livrées propres et exploitables.",
  },
  {
    title: "Un besoin différent ?",
    text: "Si ça se répète et que ça vous coûte du temps, c'est probablement automatisable. Décrivez-le, je vous dis si c'est faisable.",
    isCta: true,
  },
] as const;

/** Le déroulé d'une mission. */
export const processSteps = [
  {
    title: "Comprendre",
    text: "On regarde comment vous travaillez aujourd'hui et on identifie ce qui coûte réellement du temps.",
  },
  {
    title: "Cadrer",
    text: "Je reviens avec une solution simple, un périmètre clair et une estimation. Pas de devis fleuve.",
  },
  {
    title: "Construire",
    text: "Développement et branchement sur vos outils existants, par itérations courtes et visibles.",
  },
  {
    title: "Tester",
    text: "Vous manipulez l'outil sur vos vrais cas avant la mise en production. On corrige ce qui coince.",
  },
  {
    title: "Déployer",
    text: "Mise en ligne, documentation et prise en main par votre équipe. Le code vous appartient.",
  },
  {
    title: "Faire évoluer",
    text: "Une fois que ça tourne, on ajuste et on étend au fil de vos besoins réels.",
  },
] as const;

/** Options du formulaire de contact. */
export const needTypes = [
  "Automatisation",
  "Intégration entre outils",
  "Assistant IA / chatbot",
  "Site internet",
  "Application web ou mobile",
  "Outil métier / back-office",
  "Extraction de données",
  "Autre",
] as const;

export const faq = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Trois familles. L'automatisation : scripts, robots et intégrations qui font disparaître les tâches répétitives. Le web fullstack : sites, applications et APIs, du premier écran jusqu'au déploiement. Le scraping : collecte et structuration de données que personne ne vous fournit proprement. Le point commun, c'est que ça finit en production, pas dans un dossier.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Python pour l'automatisation et le scraping (Flask, Django, Selenium), Next.js et TypeScript pour le web, Flutter pour le mobile, MySQL pour les données, Docker et Linux pour le déploiement. Le choix dépend du problème et de ce que votre équipe pourra maintenir une fois la mission terminée.",
  },
  {
    question: "Comment se déroule une mission ?",
    answer:
      "On commence par un échange pour identifier ce qui vous coûte réellement du temps. Je reviens avec une proposition et un périmètre clair. Ensuite on avance par itérations : vous voyez quelque chose de fonctionnel très tôt, on ajuste au fur et à mesure, et ce qui part en production a déjà été testé par vous.",
  },
  {
    question: "Travaillez-vous à distance ?",
    answer:
      "Oui, et c'est même le cas le plus fréquent. Je suis basé à Paris et je travaille en remote avec des clients partout en France. Des points en visio quand il y a une décision à prendre, et des réponses rapides le reste du temps : du lundi au vendredi et le dimanche, de 8h à 20h.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Un mail à danhabibpro@gmail.com avec trois choses : ce que vous voulez automatiser ou construire, dans quel contexte, et pour quand. Je réponds sous 24h avec une première estimation et les questions qu'il me manque pour être précis.",
  },
] as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
