import type { Metadata } from "next";
import { Bricolage_Grotesque, Prata } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Dan Habib | Fullstack & Automatisation",
  description:
    "Développeur fullstack spécialisé dans l'automatisation des tâches et l'optimisation des processus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${bricolage.variable} ${prata.variable}`}>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
