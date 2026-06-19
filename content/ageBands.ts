import type { AgeBand, AgeBandMeta, BandId, Series } from "@/lib/types";

export const ageBands: AgeBandMeta[] = [
  {
    id: "sprouts",
    ageBand: "2-4",
    name: "Sprouts",
    ages: "Ages 2–4",
    description: "First coloring & counting books — big, bold pages for the very littlest hands.",
    bg: "#F6E3D8",
    solid: "#C9714E",
    text: "#9c4d34",
  },
  {
    id: "saplings",
    ageBand: "5-7",
    name: "Saplings",
    ages: "Ages 5–7",
    description: "Trace, read & color — early reading and handwriting, one page at a time.",
    bg: "#F8EBCF",
    solid: "#E0A24B",
    text: "#9a6e1f",
  },
  {
    id: "branches",
    ageBand: "8-10",
    name: "Branches",
    ages: "Ages 8–10",
    description: "Detailed coloring with true facts to read, think, and color.",
    bg: "#DCEBE4",
    solid: "#3F7A6B",
    text: "#2f5a4f",
  },
];

const byAgeBand: Record<AgeBand, AgeBandMeta> = ageBands.reduce(
  (acc, band) => {
    acc[band.ageBand] = band;
    return acc;
  },
  {} as Record<AgeBand, AgeBandMeta>,
);

const byId: Record<BandId, AgeBandMeta> = ageBands.reduce(
  (acc, band) => {
    acc[band.id] = band;
    return acc;
  },
  {} as Record<BandId, AgeBandMeta>,
);

export function getBandByAge(ageBand: AgeBand): AgeBandMeta {
  return byAgeBand[ageBand];
}

export function getBandById(id: BandId): AgeBandMeta {
  return byId[id];
}

export const seriesList: Series[] = ["Farm Friends", "Dino Friends"];
