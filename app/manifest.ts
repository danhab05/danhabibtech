import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SnowTech — Automatisation & développement sur-mesure",
    short_name: "SnowTech",
    description:
      "SnowTech, studio basé à Paris : automatisation, scraping et applications web sur-mesure.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e1014",
    theme_color: "#0e1014",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
