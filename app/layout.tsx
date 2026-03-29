import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danhabib.dev"),
  title: {
    default: "Dan Habib | Développeur Fullstack & Automatisation — Paris",
    template: "%s | Dan Habib",
  },
  description:
    "Dan Habib — Développeur fullstack basé à Paris, spécialisé en automatisation, scraping web et outils internes. Python, Next.js, Docker. Disponible pour missions.",
  keywords: [
    "Dan Habib",
    "DanHabib",
    "danhabib.dev",
    "danhabibtech",
    "Dan Habib Tech",
    "développeur fullstack Paris",
    "automatisation",
    "web scraping",
    "Python développeur",
    "Flutter",
    "Next.js",
    "développeur freelance Paris",
    "outils internes",
    "API REST",
    "Docker",
  ],
  authors: [{ name: "Dan Habib", url: "https://danhabib.dev" }],
  creator: "Dan Habib",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dan Habib | Développeur Fullstack & Automatisation",
    description:
      "Automatisation, fullstack, scraping et outils internes pour gagner du temps et optimiser vos processus.",
    url: "https://danhabib.dev",
    siteName: "Dan Habib",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Habib | Développeur Fullstack & Automatisation",
    description:
      "Automatisation, fullstack, scraping et outils internes pour gagner du temps.",
    creator: "@Snowy_27_",
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
      className={`${dmSerifDisplay.variable} ${dmMono.variable} ${dmSans.variable}`}
    >
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
