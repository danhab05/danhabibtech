# Refonte illustrée et calme

Référence : https://x.com/orseliyas/status/2097307376143773730.
Hero illustré original, contenu éditorial ivoire/vert forêt, aucune animation imposée. Six projets, services, méthode, compétences, FAQ, contacts et routes SEO conservés. Statistiques et niveaux de compétence retirés pour alléger la présentation.

- [x] Référence inspectée et branche dédiée depuis origin/main.
- [x] Illustration locale optimisée et refonte responsive.
- [x] GSAP, Lenis, préloader, vidéo et curseur custom retirés.
- [x] Test anti-animation RED puis GREEN ; contact honnête RED puis GREEN.
- [x] Build, lint, test structurel et 8 tests Playwright réussis.
- [x] Captures desktop/mobile, formulaire rempli et résultat inspectés.
- [x] Revue indépendante : passed=true, aucun blocage.
- [ ] PR, checks distants, merge et vérification production.

## Review
Next.js mis à jour vers 15.5.25 ; PostCSS 8.5.28 en override pour corriger les vulnérabilités transitives. npm audit : zéro vulnérabilité. Aucun envoi serveur dans le formulaire : préparation mailto et message de statut explicite. Tests avec et sans JavaScript, mode mouvement réduit et viewport 320 px. Lien canonical et endpoints SEO validés. Captures : test-results/captures/ (hors Git). Livraison distante en cours.
