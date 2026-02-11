import type { Metadata } from "next";
import { Space_Mono, Syncopate } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danhabibtech.cc"),
  title: {
    default: "Dan Habib | Développeur Fullstack & Automatisation",
    template: "%s | Dan Habib",
  },
  description:
    "Portfolio de Dan Habib, développeur fullstack spécialisé en automatisation, scraping et outils internes.",
  keywords: [
    "Dan Habib",
    "Habib Dan",
    "danhabibtech",
    "développeur fullstack",
    "automatisation",
    "scraping",
    "Python",
    "Flutter",
    "Next.js",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dan Habib | Développeur Fullstack & Automatisation",
    description:
      "Automatisation, fullstack, scraping et outils internes pour gagner du temps.",
    url: "https://danhabibtech.cc",
    siteName: "DanHabibTech",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Habib | Développeur Fullstack & Automatisation",
    description:
      "Automatisation, fullstack, scraping et outils internes pour gagner du temps.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${syncopate.variable} ${spaceMono.variable}`}>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
