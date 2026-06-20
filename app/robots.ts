import type { MetadataRoute } from "next";

const BASE = "https://littleacrelearning.com";

// Fully indexable. Standard search crawlers and the major AI crawlers are
// explicitly allowed — we want this content surfaced and cited by AI engines.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
