# danhabib.dev

Portfolio de Dan Habib — automatisation, IA et développement sur-mesure.

## Design
Paysage original illustré, hébergé localement (`public/images/atelier-paris.webp`, génération IA pour ce projet), inspiré de la composition du post de Varun https://x.com/orseliyas/status/2097307376143773730. Aucun média du post réutilisé. Image fixe, navigation native, contenu visible immédiatement, détails/FAQ natifs. Pas de GSAP, Lenis, préloader, curseur personnalisé ou vidéo automatique.

## Stack et contenu
Next.js 15 App Router, React 18, TypeScript. `app/page.tsx` : page et JSON-LD ; `lib/data.ts` : contenu métier ; `components/Contact.tsx` : contact. Le formulaire **prépare un email mailto**, il ne l’envoie pas : une messagerie configurée est nécessaire. L’adresse directe reste accessible sans JavaScript.

Metadata, canonical www.danhabib.dev, Open Graph, JSON-LD, robots.txt, sitemap.xml et llms.txt conservés.

## Développement et vérification
```bash
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run start -- --hostname 127.0.0.1 --port 3147
npm run test:e2e
```
Tests navigateur avec Chrome installé à `/usr/bin/google-chrome` (surcharge `CHROME_PATH`). `TEST_BASE_URL` permet la vérification de la production. Desktop 1440×900 et mobile 390×844 ; captures dans test-results (ignoré par git).
