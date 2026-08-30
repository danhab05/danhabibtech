import { MEDIA } from "./media";

export const SITE = {
  url: "https://www.danhabib.dev",
  name: "Dan Habib",
  brand: "Dan Habib",
  jobTitle: "Développeur Fullstack & Automatisation",
  email: "danhabibpro@gmail.com",
  location: "Paris, France",
  description:
    "Dan Habib, développeur fullstack freelance à Paris. J'automatise les tâches répétitives et je construis les applications web et les outils internes qui vont avec. Python, Next.js, TypeScript, Docker.",
  links: {
    github: "https://github.com/danhab05",
    linkedin: "https://www.linkedin.com/in/dan-habib-899b84232",
    twitter: "https://x.com/DanHabib05",
  },
} as const;

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  technologies: string[];
  link: string | null;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "assia",
    title: "Assia",
    category: "Site vitrine & espace élèves",
    description:
      "Un institut de cours de maths et de physique-chimie qui gérait ses demandes au téléphone et par messages. J'ai construit assia.school : la présentation de la méthode, des formats et des tarifs, et l'espace où les familles créent un compte et demandent un cours en quelques minutes.",
    result:
      "En ligne et utilisé par l'institut, qui accompagne plus de 130 élèves du collège à la terminale.",
    technologies: ["Next.js", "React", "Animations", "Vercel"],
    link: "https://www.assia.school",
    image: MEDIA.projects.assia,
    imageAlt:
      "Visuel abstrait : courbes mathématiques et constructions géométriques lumineuses ambrées sur fond noir",
  },
  {
    id: "immo",
    title: "BLG Immobilier",
    category: "Site vitrine + robot de publication",
    description:
      "L'agence ressaisissait chaque annonce à la main : le même bien, les mêmes photos, encore et encore. J'ai livré le site vitrine blgimmobilier.fr et le robot qui prend le relais — formulaire, upload des photos, notifications par mail.",
    result:
      "Le site est en ligne, le robot tourne tous les jours. La publication d'une annonce ne monopolise plus personne.",
    technologies: ["Next.js", "Python", "Docker", "Selenium"],
    link: "https://blgimmobilier.fr/",
    image: MEDIA.projects.immo,
    imageAlt:
      "Visuel abstrait généré par IA : façades architecturales se dissolvant en fil de fer ambré sur fond noir",
  },
  {
    id: "extractgrid",
    title: "ExtractGrid",
    category: "Relevés bancaires PDF → Excel",
    description:
      "Recopier un relevé bancaire dans un tableur, c'est une heure perdue et deux fautes de frappe. ExtractGrid reconnaît la banque tout seul, sort les dates, libellés, débits et crédits, et rend un fichier Excel propre.",
    result:
      "En production, compatible multi-banques, adopté par des comptables et des PME.",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    link: "https://github.com/danhab05/ExtractGrid",
    image: MEDIA.projects.extractgrid,
    imageAlt:
      "Visuel abstrait généré par IA : grille de cellules de données lumineuses émergeant d'un document scanné",
  },
  {
    id: "covid",
    title: "Tests antigéniques",
    category: "Inscription et résultats automatisés",
    description:
      "Une pharmacie débordée par le flux de tests. Les patients s'inscrivent en ligne, reçoivent leur résultat par mail automatiquement, et le pharmacien suit tout depuis une seule interface.",
    result:
      "Environ 100 000 tests traités en deux ans, moins d'attente au comptoir et moins de contacts physiques.",
    technologies: ["Flutter", "Python", "Flask", "Docker"],
    link: null,
    image: MEDIA.projects.covid,
    imageAlt:
      "Visuel abstrait généré par IA : réseau de nœuds lumineux et formes de laboratoire en verre sur fond noir",
  },
  {
    id: "ecoledirect",
    title: "EcoleDirect",
    category: "Bibliothèque Python, open source",
    description:
      "EcoleDirecte n'expose aucune API publique. Cette librairie comble le trou : trois lignes de Python suffisent pour récupérer les devoirs, les notes et les informations d'un élève.",
    result:
      "Publiée sur PyPI, installable via pip, utilisée par des parents et des étudiants.",
    technologies: ["Python", "pip", "Web scraping"],
    link: "https://github.com/danhab05/ecoledirect",
    image: MEDIA.projects.ecoledirect,
    imageAlt:
      "Visuel abstrait généré par IA : cascades de particules de code lumineux formant un livre ouvert",
  },
  {
    id: "scripts",
    title: "Automatisation & scraping",
    category: "Missions sur-mesure",
    description:
      "Remplir un back-office, collecter des données que personne ne fournit proprement, répéter la même manipulation web cent fois : tout ce que vos équipes n'ont aucune envie de faire à la main.",
    result:
      "Des données livrées prêtes à l'emploi et des process internes nettement allégés.",
    technologies: ["Python", "Go"],
    link: null,
    image: MEDIA.projects.scripts,
    imageAlt:
      "Visuel abstrait généré par IA : engrenages d'horlogerie en traits de lumière ambrée au-dessus d'un terminal",
  },
];

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
