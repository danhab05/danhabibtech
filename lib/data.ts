import { MEDIA } from "./media";

export const SITE = {
  url: "https://danhabib.dev",
  name: "Dan Habib",
  brand: "Dan Habib",
  jobTitle: "Développeur Fullstack & Automatisation",
  email: "danhabibpro@gmail.com",
  location: "Paris, France",
  description:
    "Dan Habib est un développeur fullstack freelance basé à Paris, spécialisé en automatisation de processus métier, web scraping et développement d'outils internes sur-mesure. Python, Next.js, TypeScript, Docker.",
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
    id: "immo",
    title: "BLG Immobilier",
    category: "Site vitrine & automatisation",
    description:
      "Développement complet du site vitrine blgimmobilier.fr pour l'agence BLG Immobilier, couplé à une automatisation du processus de dépôt d'annonces : formulaires, upload de photos et notifications email.",
    result:
      "Site en production, outil d'automatisation utilisé quotidiennement — gain de temps considérable pour l'équipe.",
    technologies: ["Next.js", "Python", "Docker", "Selenium"],
    link: "https://blgimmobilier.fr/",
    image: MEDIA.projects.immo,
    imageAlt:
      "Visuel abstrait généré par IA : façades architecturales se dissolvant en fil de fer ambré sur fond noir",
  },
  {
    id: "extractgrid",
    title: "ExtractGrid",
    category: "PDF bancaire → Excel",
    description:
      "Application web qui convertit automatiquement les relevés bancaires PDF en fichiers Excel structurés. Détection automatique de la banque, extraction des colonnes date, libellé, débit et crédit.",
    result:
      "Outil pratique pour comptables et PME, multi-banques, déployé en production.",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    link: "https://github.com/danhab05/ExtractGrid",
    image: MEDIA.projects.extractgrid,
    imageAlt:
      "Visuel abstrait généré par IA : grille de cellules de données lumineuses émergeant d'un document scanné",
  },
  {
    id: "covid",
    title: "Tests antigéniques",
    category: "Formulaire & suivi patient",
    description:
      "Formulaire web d'inscription aux tests COVID avec envoi automatique du résultat par email. Suivi centralisé pour le pharmacien et le patient.",
    result:
      "≈100 000 tests gérés en 2 ans, contact physique réduit, flux patients optimisé.",
    technologies: ["Flutter", "Python", "Flask", "Docker"],
    link: null,
    image: MEDIA.projects.covid,
    imageAlt:
      "Visuel abstrait généré par IA : réseau de nœuds lumineux et formes de laboratoire en verre sur fond noir",
  },
  {
    id: "ecoledirect",
    title: "EcoleDirect",
    category: "Bibliothèque Python open source",
    description:
      "Librairie Python installable via pip pour récupérer automatiquement les devoirs, notes et informations élèves depuis EcoleDirecte, de façon programmatique.",
    result:
      "Publiée sur PyPI, utilisée par des parents et étudiants pour accéder aux données scolaires.",
    technologies: ["Python", "pip", "Web scraping"],
    link: "https://github.com/danhab05/ecoledirect",
    image: MEDIA.projects.ecoledirect,
    imageAlt:
      "Visuel abstrait généré par IA : cascades de particules de code lumineux formant un livre ouvert",
  },
  {
    id: "scripts",
    title: "Automatisation & scraping",
    category: "Scripts sur-mesure",
    description:
      "Développement de scripts pour automatiser des tâches web répétitives et scraper des données ciblées pour des agences et back-offices.",
    result: "Données qualifiées livrées, processus internes optimisés.",
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
  { value: 100, suffix: "K", label: "Tests COVID gérés" },
  { value: 50, suffix: "+", label: "Dépôts GitHub" },
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
      "Convertit les relevés bancaires PDF en fichiers Excel structurés.",
    language: "TypeScript",
    url: "https://github.com/danhab05/ExtractGrid",
  },
  {
    name: "ecoledirect",
    description:
      "Bibliothèque Python pour accéder aux données scolaires EcoleDirecte via pip.",
    language: "Python",
    url: "https://github.com/danhab05/ecoledirect",
  },
  {
    name: "pdf2excel",
    description:
      "Outil de conversion PDF vers Excel avec extraction intelligente de tableaux.",
    language: "Python",
    url: "https://github.com/danhab05/pdf2excel",
  },
  {
    name: "pyswifi",
    description: "Script Python pour automatiser la gestion des réseaux WiFi.",
    language: "Python",
    url: "https://github.com/danhab05/pyswifi",
  },
  {
    name: "MorseMaster",
    description:
      "Application d'apprentissage du code Morse avec interface interactive.",
    language: "Vue",
    url: "https://github.com/danhab05/MorseMaster",
  },
  {
    name: "PdfSplitter",
    description: "Outil web pour découper et réorganiser des fichiers PDF.",
    language: "TypeScript",
    url: "https://github.com/danhab05/PdfSplitter",
  },
] as const;

export const faq = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Trois grandes familles : l'automatisation de processus métier (scripts, robots, intégrations entre outils), le développement web fullstack (sites vitrines, applications web, APIs) et le web scraping avec extraction de données structurées. De la PME au fondateur solo, je conçois des outils sur-mesure qui tournent réellement en production.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Principalement Python (Flask, Django, Selenium) pour l'automatisation et le scraping, Next.js / TypeScript pour le web, Flutter pour le mobile, MySQL pour les données et Docker pour le déploiement sur VPS Linux. Je choisis toujours le bon outil pour le bon problème, sans sur-ingénierie.",
  },
  {
    question: "Comment se déroule une mission ?",
    answer:
      "On commence par un échange pour cadrer le besoin et identifier ce qui vous fait perdre du temps. Je propose ensuite une solution simple avec un devis clair. Le développement est itératif : vous voyez le résultat rapidement, et je livre un outil déployé, documenté et maintenable.",
  },
  {
    question: "Travaillez-vous à distance ?",
    answer:
      "Oui. Je suis basé à Paris et je travaille en remote avec des clients partout en France. Des points réguliers en visio et une communication réactive : réponse sous 24h, du lundi au vendredi et le dimanche, de 8h à 20h.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Écrivez-moi à danhabibpro@gmail.com en décrivant votre besoin en quelques lignes : le processus à automatiser ou l'outil à créer, votre contexte et vos délais. Je réponds sous 24h avec une première estimation.",
  },
] as const;

export const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#github", label: "Open Source" },
  { href: "#competences", label: "Compétences" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
