/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (no Node server). Produces ./out.
  output: "export",
  // Clean URLs: /books/ -> out/books/index.html (Pages-friendly).
  trailingSlash: true,
  images: {
    // next/image optimization needs a server; disable it for static export.
    unoptimized: true,
    // Real cover art will be supplied later; allow remote sources when added.
    remotePatterns: [],
  },
};

export default nextConfig;
