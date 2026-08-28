import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dan Habib — Développeur Fullstack & Automatisation",
    short_name: "Dan Habib",
    description:
      "Portfolio de Dan Habib, développeur fullstack freelance à Paris : automatisation, scraping et applications web sur-mesure.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#f7f4ee",
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
