import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
