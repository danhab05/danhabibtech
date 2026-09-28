# SnowTech

Site de SnowTech (studio de Dan Habib) — automatisation, IA et développement sur-mesure.

## Design
Hero sombre avec un fil d’« automatisations du jour », puis sections claires. Chaque projet est illustré par une maquette de l’outil dessinée en HTML/CSS (`components/ProjectMockup.tsx`) : aucune image, aucune vidéo, aucune animation imposée. Polices Geist, Geist Mono et Instrument Serif via `next/font`.

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
