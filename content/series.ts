import type { Series, SeriesMeta } from "@/lib/types";
import {
  FARM_GRADIENT,
  DINO_GRADIENT,
  OCEAN_GRADIENT,
  SAFARI_GRADIENT,
} from "./books";

// Plan B: when per-series landing pages exist, swap this to `/series/${slug}/`.
const seriesHref = (series: Series) =>
  `/books?series=${encodeURIComponent(series)}`;

export const seriesMetaList: SeriesMeta[] = [
  {
    series: "Farm Friends",
    slug: "farm-friends",
    name: "Farm Friends",
    tagline:
      "Friendly farm animals to color and learn about — a book for every stage, ages 2–10.",
    gradient: FARM_GRADIENT,
    accent: "#2E9D93",
    href: seriesHref("Farm Friends"),
  },
  {
    series: "Dino Friends",
    slug: "dino-friends",
    name: "Dino Friends",
    tagline:
      "Dinosaurs to color and learn about — a book for every stage, ages 2–10.",
    gradient: DINO_GRADIENT,
    accent: "#4E9A3E",
    href: seriesHref("Dino Friends"),
    // Plan B: Amazon series page — stored, not surfaced yet. Verify live first.
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
    href: seriesHref("Ocean Friends"),
  },
  {
    series: "Safari Friends",
    slug: "safari-friends",
    name: "Safari Friends",
    tagline:
      "Safari animals to color and learn about — a book for every stage, ages 2–10.",
    gradient: SAFARI_GRADIENT,
    accent: "#C2701F",
    href: seriesHref("Safari Friends"),
    // Plan B: Amazon series page — stored, not surfaced yet.
    amazonSeriesUrl: "https://www.amazon.com/dp/B0H6H9QT1F",
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
