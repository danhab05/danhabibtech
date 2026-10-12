"use client";

import { useEffect } from "react";

/** Titre de l'onglet sur danhabib.dev (le script de layout.tsx y pose data-brand="dan"). */
export default function BrandTitle() {
  useEffect(() => {
    if (document.documentElement.dataset.brand === "dan") {
      document.title = "Dan Habib — Automatisation & développement sur-mesure à Paris";
    }
  }, []);
  return null;
}
