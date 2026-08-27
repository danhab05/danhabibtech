import type { MetadataRoute } from "next";

/**
 * Autorise explicitement les crawlers classiques ET les crawlers IA
 * (GEO — Generative Engine Optimization) : le site a vocation à être
 * cité par les moteurs de recherche comme par les assistants IA.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://danhabib.dev/sitemap.xml",
    host: "https://danhabib.dev",
  };
}
