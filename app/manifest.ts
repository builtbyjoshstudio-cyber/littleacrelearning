import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Little Acre Learning",
    short_name: "Little Acre",
    description: "Coloring & activity books for children ages 2–10.",
    start_url: "/",
    display: "standalone",
    theme_color: "#46604E",
    background_color: "#FBF7F0",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
