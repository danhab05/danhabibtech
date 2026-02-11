import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
