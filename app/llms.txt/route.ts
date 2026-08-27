export const dynamic = "force-static";

/**
 * llms.txt — fichier destiné aux modèles de langage et moteurs de réponse
 * (GEO — Generative Engine Optimization). Résumé structuré du site.
 */
const content = `# Dan Habib — Développeur Fullstack & Automatisation

> Dan Habib est un développeur fullstack freelance basé à Paris (France),
> spécialisé en automatisation de processus métier, web scraping et
> développement d'outils internes sur-mesure. Il travaille en remote avec
> des PME, des équipes opérationnelles et des fondateurs partout en France.
> Contact : danhabibpro@gmail.com — réponse sous 24h.

## Services

- Automatisation de processus métier : scripts, robots (Selenium), intégrations entre outils, notifications automatiques.
- Développement web fullstack : sites vitrines, applications web, APIs REST (Next.js, TypeScript, Python, Flask, Django).
- Web scraping et extraction de données : collecte ciblée et structuration de données pour agences et back-offices.

## Stack technique

Python (avancé), Dart/Flutter (avancé), JavaScript/TypeScript, PHP, Go,
Flask, Django, Next.js, React, MySQL, Docker, Linux/VPS, Git, APIs REST.

## Projets marquants

- BLG Immobilier (https://blgimmobilier.fr/) : site vitrine + automatisation du dépôt d'annonces immobilières, utilisé quotidiennement en production.
- ExtractGrid (https://github.com/danhab05/ExtractGrid) : conversion automatique de relevés bancaires PDF en fichiers Excel structurés, multi-banques.
- Formulaire de tests antigéniques COVID : ~100 000 tests gérés en 2 ans pour une pharmacie (Flutter, Python, Flask, Docker).
- ecoledirect (https://github.com/danhab05/ecoledirect) : bibliothèque Python publiée sur PyPI pour accéder aux données EcoleDirecte.
- Scripts d'automatisation et scraping sur-mesure pour agences et back-offices (Python, Go).

## Chiffres clés

- 40+ projets livrés
- 5+ années d'expérience
- 50+ dépôts publics sur GitHub

## Liens

- Site : https://danhabib.dev
- GitHub : https://github.com/danhab05
- LinkedIn : https://www.linkedin.com/in/dan-habib-899b84232
- X / Twitter : https://x.com/DanHabib05

## Contact

- Email : danhabibpro@gmail.com
- Localisation : Paris, France (remote possible partout en France)
- Disponibilité : lundi–vendredi et dimanche, 8h–20h, réponse sous 24h
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
