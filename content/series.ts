import type { Series, SeriesMeta } from "@/lib/types";
import {
  FARM_GRADIENT,
  DINO_GRADIENT,
  OCEAN_GRADIENT,
  SAFARI_GRADIENT,
  JUNGLE_GRADIENT,
} from "./books";

// Series cards point at the per-series landing page (the SEO/GEO cluster hub).
const seriesHref = (slug: string) => `/series/${slug}/`;

export const seriesMetaList: SeriesMeta[] = [
  {
    series: "Farm Friends",
    slug: "farm-friends",
    name: "Farm Friends",
    tagline:
      "Friendly farm animals to color and learn about — a book for every stage, ages 2–10.",
    gradient: FARM_GRADIENT,
    accent: "#2E9D93",
    href: seriesHref("farm-friends"),
  },
  {
    series: "Dino Friends",
    slug: "dino-friends",
    name: "Dino Friends",
    tagline:
      "Dinosaurs to color and learn about — a book for every stage, ages 2–10.",
    gradient: DINO_GRADIENT,
    accent: "#4E9A3E",
    href: seriesHref("dino-friends"),
    amazonSeriesUrl: "https://www.amazon.com/dp/B0H6C5GSF1",
  },
  {
    series: "Ocean Friends",
    slug: "ocean-friends",
    name: "Ocean Friends",
    tagline:
      "Sea creatures to color and learn about — a book for every stage, ages 2–10.",
    gradient: OCEAN_GRADIENT,
    accent: "#1E76A6",
    href: seriesHref("ocean-friends"),
    amazonSeriesUrl: "https://www.amazon.com/dp/B0H6CB7SS8",
  },
  {
    series: "Safari Friends",
    slug: "safari-friends",
    name: "Safari Friends",
    tagline:
      "Safari animals to color and learn about — a book for every stage, ages 2–10.",
    gradient: SAFARI_GRADIENT,
    accent: "#C2701F",
    href: seriesHref("safari-friends"),
    amazonSeriesUrl: "https://www.amazon.com/dp/B0H6H9QT1F",
  },
  {
    series: "Jungle Friends",
    slug: "jungle-friends",
    name: "Jungle Friends",
    tagline:
      "Rainforest animals to color and learn about — a book for every stage, ages 2–10.",
    gradient: JUNGLE_GRADIENT,
    accent: "#1E5631",
    href: seriesHref("jungle-friends"),
  },
];

const bySeries: Record<Series, SeriesMeta> = seriesMetaList.reduce(
  (acc, s) => {
    acc[s.series] = s;
    return acc;
  },
  {} as Record<Series, SeriesMeta>,
);

export function getSeriesMeta(series: Series): SeriesMeta {
  return bySeries[series];
}

export function getSeriesMetaBySlug(slug: string): SeriesMeta | undefined {
  return seriesMetaList.find((s) => s.slug === slug);
}
