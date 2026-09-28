import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e1014",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danhabib.dev"),
  title: {
    default: "SnowTech — Automatisation & développement sur-mesure à Paris",
    template: "%s | SnowTech",
  },
  description:
    "Automatisation, assistants IA, intégrations et développement sur-mesure pour les entreprises. SnowTech, studio basé à Paris : je supprime les tâches répétitives et je construis les outils qui vont avec. Réponse sous 24h.",
  keywords: [
    "SnowTech",
    "Snow Tech",
    "snowtech",
    "SnowTech Paris",
    "Dan Habib",
    "développeur fullstack Paris",
    "développeur freelance Paris",
    "automatisation processus métier",
    "web scraping France",
    "développeur Python Paris",
    "Next.js",
    "Flutter",
    "outils internes sur-mesure",
    "API REST",
    "Docker",
    "agent IA entreprise",
    "assistant IA sur-mesure",
    "chatbot WhatsApp entreprise",
    "intégration CRM API",
    "automatisation PME",
  ],
  authors: [{ name: "SnowTech", url: "https://www.danhabib.dev" }],
  creator: "SnowTech",
  publisher: "SnowTech",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SnowTech — Automatisation & développement sur-mesure",
    description:
      "Automatisation, assistants IA, intégrations et applications sur-mesure pour les entreprises. Paris, remote partout en France.",
    url: "https://www.danhabib.dev",
    siteName: "SnowTech",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowTech — Automatisation & développement sur-mesure",
    description:
      "Automatisation, assistants IA et développement sur-mesure. Paris · Remote.",
    creator: "@DanHabib05",
    site: "@DanHabib05",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
