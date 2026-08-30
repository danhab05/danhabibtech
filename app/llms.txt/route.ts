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

- Automatisations : robots et scripts qui remplissent, publient, trient et relancent automatiquement, déclenchés par un formulaire, un mail ou un horaire (Python, Selenium).
- Intégrations : connexion des outils entre eux via APIs (CRM, facturation, site) pour supprimer la double saisie.
- Assistants IA : assistants branchés sur les documents et données de l'entreprise, pour répondre aux questions internes récurrentes.
- Chatbots et WhatsApp : premier niveau de réponse automatique qui qualifie la demande avant qu'elle n'arrive sur le bureau du client.
- Sites internet : sites rapides et bien référencés, du premier écran jusqu'à la mise en ligne (Next.js, TypeScript).
- Applications web et mobile : applications sur-mesure quand aucun outil du marché ne convient (Next.js, Flutter).
- Outils métier et back-office : remplacement des tableurs bricolés par un vrai outil avec accès et historique.
- Extraction de données : collecte et structuration de données web ou documentaires, livrées exploitables.

## Problèmes traités

Double saisie entre outils, demandes clients oubliées dans une boîte mail,
relances envoyées à la main, données dispersées dans plusieurs logiciels,
copier-coller à rallonge pour extraire et reformater de l'information.

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

- Assia (https://www.assia.school) : site vitrine et espace élèves d'un institut de cours de maths et de physique-chimie (cours particuliers, petits groupes, stages). Présentation de la méthode et des tarifs, création de compte et demande de cours en ligne. En production, pour un institut qui accompagne plus de 130 élèves du collège à la terminale (Next.js, React, Vercel).
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
