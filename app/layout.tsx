import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4f6f9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.novaor.fr"),
  title: {
    default: "NovaOr — Automatisation & développement sur-mesure à Paris",
    template: "%s | NovaOr",
  },
  description:
    "Automatisation, assistants IA, intégrations et développement sur-mesure pour les entreprises. NovaOr, studio de développement à Paris : CRM immobilier, plateformes, factures vers Excel, robots de publication. Réponse sous 24 h.",
  keywords: [
    "NovaOr",
    "Nova Or",
    "novaor",
    "NovaOr Paris",
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
  authors: [{ name: "NovaOr", url: "https://www.novaor.fr" }],
  creator: "NovaOr",
  publisher: "NovaOr",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NovaOr — Automatisation & développement sur-mesure",
    description:
      "Automatisation, assistants IA, intégrations et applications sur-mesure pour les entreprises. Paris, remote partout en France.",
    url: "https://www.novaor.fr",
    siteName: "NovaOr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaOr — Automatisation & développement sur-mesure",
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
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
