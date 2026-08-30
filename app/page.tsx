import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GithubSection from "@/components/GithubSection";
import Skills from "@/components/Skills";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";
import { SITE, projects, faq, services } from "@/lib/data";
import { MEDIA } from "@/lib/media";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: "Dan Habib",
      alternateName: ["Dan Habib Tech", "DanHabibTech", "danhab05"],
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      image: `${SITE.url}/opengraph-image`,
      jobTitle: SITE.jobTitle,
      description: SITE.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      sameAs: [SITE.links.linkedin, SITE.links.github, SITE.links.twitter],
      knowsAbout: [
        "Python",
        "Next.js",
        "TypeScript",
        "Automatisation de processus",
        "Web scraping",
        "Docker",
        "Flutter",
        "API REST",
        "Flask",
        "Django",
        "MySQL",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Développeur Fullstack & Automatisation",
        occupationLocation: {
          "@type": "City",
          name: "Paris",
        },
        skills:
          "Automatisation de processus métier, web scraping, développement web fullstack, outils internes, APIs REST",
      },
      makesOffer: services
        .filter((s) => !("isCta" in s && s.isCta))
        .map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.text,
            areaServed: "FR",
            provider: { "@id": `${SITE.url}/#person` },
          },
        })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "Dan Habib — Portfolio",
      description: SITE.description,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE.url}/#person` },
      copyrightHolder: { "@id": `${SITE.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/#page`,
      url: SITE.url,
      name: "Dan Habib — Développeur Fullstack & Automatisation à Paris",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#person` },
      mainEntity: { "@id": `${SITE.url}/#person` },
      inLanguage: "fr-FR",
      primaryImageOfPage: MEDIA.heroPoster,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/#projets`,
      name: "Projets de Dan Habib",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: p.description,
          ...(p.link ? { url: p.link } : {}),
          keywords: p.technologies.join(", "),
          author: { "@id": `${SITE.url}/#person` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const marqueeItems = [
  "Automatisation",
  "Assistants IA",
  "Intégrations",
  "Chatbots",
  "Sites & applications",
  "Outils métier",
] as const;

const marqueeItems2 = [
  "Paris",
  "Remote",
  "Disponible",
  "Réponse sous 24h",
  "Production ready",
] as const;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a className="skip-link" href="#content">
        Aller au contenu
      </a>

      <Navbar />

      <main id="content">
        <Hero />
        <Marquee items={marqueeItems} variant="fill" />
        <Problem />
        <Services />
        <Process />
        <About />
        <Projects />
        <Marquee items={marqueeItems2} variant="outline" reverse />
        <GithubSection />
        <Skills />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <ScrollFx />
    </>
  );
}
