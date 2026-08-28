import type { Metadata, Viewport } from "next";
import { Anton, Space_Grotesk, DM_Mono, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dmmono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danhabib.dev"),
  title: {
    default:
      "Dan Habib — Développeur Fullstack & Automatisation à Paris",
    template: "%s | Dan Habib",
  },
  description:
    "Dan Habib, développeur fullstack freelance à Paris. J'automatise les tâches répétitives qui coûtent des heures à vos équipes et je construis les applications web et outils internes qui vont avec. Python, Next.js, TypeScript, Docker. Réponse sous 24h.",
  keywords: [
    "Dan Habib",
    "DanHabib",
    "danhabib.dev",
    "danhabibtech",
    "Dan Habib Tech",
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
  ],
  authors: [{ name: "Dan Habib", url: "https://www.danhabib.dev" }],
  creator: "Dan Habib",
  publisher: "Dan Habib",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dan Habib — Développeur Fullstack & Automatisation",
    description:
      "J'automatise les tâches répétitives et je construis les outils web qui vont avec. Paris, remote partout en France.",
    url: "https://www.danhabib.dev",
    siteName: "Dan Habib — Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Habib — Développeur Fullstack & Automatisation",
    description:
      "J'automatise les tâches répétitives et je construis les outils web qui vont avec. Paris · Remote.",
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
    <html
      lang="fr"
      className={`${anton.variable} ${grotesk.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Preloader />
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
