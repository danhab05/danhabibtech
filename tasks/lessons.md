# Leçons

- La refonte précédente contient trop d’animations pour Dan. Pour ce site, privilégier une image fixe forte et une lecture immédiate : pas de préloader, curseur custom, scroll piloté ou textes révélés au scroll. La référence visuelle explicite prime sur les effets démonstratifs.
- Chrome force le HTTPS sur tout domaine `.dev` (HSTS préchargé) : impossible de tester danhabib.dev en HTTP local via `--host-resolver-rules`. Servir la vraie page via `page.route` en remplaçant l’hôte dans le script. Et `addInitScript` tourne avant que `<html>` existe : ne pas l’utiliser pour poser un attribut sur `documentElement`.
