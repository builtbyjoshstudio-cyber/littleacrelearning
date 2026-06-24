import type { MetadataRoute } from "next";
import { books } from "@/content/books";
import { posts } from "@/content/posts";

const BASE = "https://littleacrelearning.com";

// Generated from the real route list so it stays accurate as the catalog
// changes. Static-export-safe (evaluated at build time). Excludes /404. Blog
// posts are included once content/posts.ts is non-empty. URLs use trailing
// slashes to match next.config trailingSlash: true.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE}/books/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...books.map((b) => ({
      url: `${BASE}/books/${b.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/printables/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/parents/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
