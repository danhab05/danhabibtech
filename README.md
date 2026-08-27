# danhabib.dev

Portfolio de Dan Habib — développeur fullstack & automatisation à Paris.

## Stack

- **Next.js 14** (App Router, TypeScript) — site statique pré-rendu
- **GSAP + ScrollTrigger** — animations au scroll (reveals, compteurs, section projets épinglée en défilement horizontal)
- **Lenis** — smooth scrolling
- **Higgsfield AI** — vidéo du hero et visuels des projets (générés par IA, servis depuis le CDN Higgsfield)

## Animations

- Préloader avec compteur et révélation du nom
- Hero : vidéo de fond, particules de braises en canvas, typographie géante animée lettre par lettre
- Curseur personnalisé (desktop) avec états hover / « Voir »
- Marquees infinis, reveals de mots masqués, parallaxe, boutons magnétiques
- Section projets épinglée en scroll horizontal (desktop), pile verticale (mobile)
- `prefers-reduced-motion` respecté : tout le contenu reste accessible sans animation

## SEO & GEO

- Metadata complète (Open Graph, Twitter Cards, canonical) + image OG générée (`app/opengraph-image.tsx`)
- JSON-LD `@graph` : Person, WebSite, ProfilePage, ItemList (projets), FAQPage, offres de services
- `robots.txt` autorisant explicitement les crawlers IA (GPTBot, ClaudeBot, PerplexityBot…)
- [`/llms.txt`](https://danhabib.dev/llms.txt) — résumé structuré du site pour les moteurs de réponse IA
- Sitemap, manifest PWA, favicons générés

## Développement

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de production
```
