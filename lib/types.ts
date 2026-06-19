export type AgeBand = "2-4" | "5-7" | "8-10";

export type BandId = "sprouts" | "saplings" | "branches";

export type Series = "Farm Friends" | "Dinosaur Friends";

export type Theme = "Bedtime" | "Nature & seasons" | "Friendship" | "Feelings";

export interface AgeBandMeta {
  id: BandId;
  ageBand: AgeBand;
  name: string;
  ages: string; // e.g. "Ages 2–4"
  description: string;
  bg: string;
  solid: string;
  text: string;
}

export interface Book {
  slug: string;
  title: string;
  series: Series;
  ageBand: AgeBand;
  price: string;
  byline: string;
  shortDescription: string;
  longDescription: string;
  whatItTeaches: string[];
  pages: number;
  format: string;
  theme: Theme;
  readTime: string;
  amazonUrl: string;
  /** Real cover art dropped in later; null uses the gradient placeholder. */
  coverImage: string | null;
  /** Tailwind-safe inline gradient used for the placeholder cover slot. */
  gradient: string;
  featured?: boolean;
}

export interface Printable {
  slug: string;
  title: string;
  ageBand: AgeBand;
  pages: number;
  gated: boolean;
  fileUrl: string;
  /** Inline gradient used for the document thumbnail tint. */
  gradient: string;
}

export interface PostAuthor {
  name: string;
  role: string;
  avatar: string | null;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: PostAuthor;
  date: string; // ISO
  excerpt: string;
  coverImage: string | null;
  gradient: string;
  featured?: boolean;
  /** Long-form body as ordered blocks (swap for MDX later). */
  body: PostBlock[];
}

export type PostBlock =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "callout"; title: string; text: string };
