import type { MetadataRoute } from "next";

const BASE = "https://littleacrelearning.com";

// Fully indexable. The wildcard already allows everyone; the named entries are
// explicit-allow for clarity and robustness (some bots only read their own
// UA block). Covers both the training crawlers and — importantly for GEO — the
// live-retrieval bots that actually drive AI answer-engine citations.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Search
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // OpenAI — training crawler + live retrieval (ChatGPT search/browse)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Anthropic — training crawler + live retrieval
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      // Perplexity — index + live retrieval
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Google AI training opt-in
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
