import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Habib Tech | Solutions numériques",
  description:
    "Agence numérique spécialisée en développement web, mobile et branding.",
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
