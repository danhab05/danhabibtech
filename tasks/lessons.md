# Leçons

- La refonte précédente contient trop d’animations pour Dan. Pour ce site, privilégier une image fixe forte et une lecture immédiate : pas de préloader, curseur custom, scroll piloté ou textes révélés au scroll. La référence visuelle explicite prime sur les effets démonstratifs.
- Chrome force le HTTPS sur tout domaine `.dev` (HSTS préchargé) : impossible de tester danhabib.dev en HTTP local via `--host-resolver-rules`. Servir la vraie page via `page.route` en remplaçant l’hôte dans le script. Et `addInitScript` tourne avant que `<html>` existe : ne pas l’utiliser pour poser un attribut sur `documentElement`.
- Ne jamais merger sur un simple « N passed » : comparer au total attendu et chercher les ✘. Ici 14/16 a masqué un échec mergé.
- Next 15 (App Router) réécrit `<title>` après coup : changer `document.title` côté client ne tient pas. Le titre par domaine se fait côté serveur (middleware + variante de page avec sa propre `metadata`).
