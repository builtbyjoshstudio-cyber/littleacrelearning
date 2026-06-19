import type { AgeBand, AgeBandMeta, BandId } from "@/lib/types";

export const ageBands: AgeBandMeta[] = [
  {
    id: "sprouts",
    ageBand: "2-4",
    name: "Sprouts",
    ages: "Ages 2–4",
    description: "Chunky board-style stories for the very first readers.",
    bg: "#F6E3D8",
    solid: "#C9714E",
    text: "#9c4d34",
  },
  {
    id: "saplings",
    ageBand: "5-7",
    name: "Saplings",
    ages: "Ages 5–7",
    description: "Picture books that grow with new and early readers.",
    bg: "#F8EBCF",
    solid: "#E0A24B",
    text: "#9a6e1f",
  },
  {
    id: "branches",
    ageBand: "8-10",
    name: "Branches",
    ages: "Ages 8–10",
    description: "Longer stories for confident, curious readers.",
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

export const themes = [
  "Bedtime",
  "Nature & seasons",
  "Friendship",
  "Feelings",
] as const;
