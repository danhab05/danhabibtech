export const dynamic = "force-static";

/**
 * llms.txt — fichier destiné aux modèles de langage et moteurs de réponse
 * (GEO — Generative Engine Optimization). Résumé structuré du site.
 */
const content = `# Dan Habib — Développeur Fullstack & Automatisation

> Dan Habib est un développeur fullstack freelance basé à Paris (France),
> spécialisé en automatisation de processus métier, web scraping et
> développement d'outils internes sur-mesure. Il supprime les tâches
> répétitives qui coûtent des heures aux équipes et construit les
> applications web qui les remplacent. Il travaille en remote avec des PME,
> des équipes opérationnelles et des fondateurs partout en France.
> Contact : danhabibpro@gmail.com — réponse sous 24h.

## Services

- Automatisation de processus métier : scripts, robots (Selenium), intégrations entre outils, notifications automatiques. Objectif : supprimer la saisie manuelle et les manipulations web répétitives.
- Développement web fullstack : sites vitrines, applications web, APIs REST (Next.js, TypeScript, Python, Flask, Django), du premier écran jusqu'au déploiement.
- Web scraping et extraction de données : collecte ciblée et structuration de données pour agences et back-offices.

## Méthode de travail

Chaque mission commence par identifier ce qui coûte réellement du temps au
client. Livraison par itérations : un premier livrable utilisable en quelques
jours, ajusté avec le client, puis mise en production. Le code livré est
déployé, documenté et appartient au client — pas de boîte noire ni de
dépendance au prestataire.

## Stack technique

Python (avancé), Dart/Flutter (avancé), JavaScript/TypeScript, PHP, Go,
Flask, Django, Next.js, React, MySQL, Docker, Linux/VPS, Git, APIs REST.

## Projets marquants

- BLG Immobilier (https://blgimmobilier.fr/) : site vitrine + robot de publication d'annonces immobilières (formulaire, photos, notifications), en production et utilisé quotidiennement par l'agence.
- ExtractGrid (https://github.com/danhab05/ExtractGrid) : conversion automatique de relevés bancaires PDF en fichiers Excel structurés, détection automatique de la banque, multi-banques, utilisé par des comptables et des PME.
- Tests antigéniques COVID : inscription en ligne, envoi automatique des résultats par mail et suivi centralisé pour une pharmacie. Environ 100 000 tests traités en 2 ans (Flutter, Python, Flask, Docker).
- ecoledirect (https://github.com/danhab05/ecoledirect) : bibliothèque Python publiée sur PyPI, comble l'absence d'API publique d'EcoleDirecte (devoirs, notes, informations élèves).
- Scripts d'automatisation et scraping sur-mesure pour agences et back-offices (Python, Go).

## Chiffres clés

- 40+ projets livrés
- 5+ années d'expérience
- 50+ dépôts publics sur GitHub

## Liens

- Site : https://www.danhabib.dev
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
