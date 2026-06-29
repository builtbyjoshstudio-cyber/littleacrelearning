export type AgeBand = "2-4" | "5-7" | "8-10";

export type BandId = "sprouts" | "saplings" | "branches";

export type Series =
  | "Farm Friends"
  | "Dino Friends"
  | "Ocean Friends"
  | "Safari Friends"
  | "Jungle Friends";

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

export interface SeriesMeta {
  series: Series;
  slug: string; // for the future /series/<slug>/ landing page (Plan B)
  name: string; // short display name, e.g. "Farm Friends"
  tagline: string;
  gradient: string;
  accent: string; // solid accent color for text/badge on the card
  href: string;
  /**
   * Amazon "Series" page (lists all age tiers together). Stored for the Plan B
   * per-series landing page's "shop the series" CTA — NOT surfaced anywhere yet.
   * Verify it's live before surfacing.
   */
  amazonSeriesUrl?: string;
}

export interface Book {
  slug: string;
  title: string; // series title as shown on the cover
  subtitle: string; // cover subtitle / edition, e.g. "A Speech & Counting Coloring Book"
  series: Series;
  bookNumber: number; // position within its series
  ageBand: AgeBand;
  /** Price string once listed (e.g. "$7.99"); null = not yet available. */
  price: string | null;
  byline: string;
  shortDescription: string;
  longDescription: string;
  whatItTeaches: string[];
  pages: number; // coloring pages, as stated on the cover
  format: string;
  /** Amazon listing URL once live; null shows a "Coming soon" CTA. */
  amazonUrl: string | null;
  /** Lemon Squeezy checkout for the free printable sample pack. */
  freePackUrl?: string;
  coverImage: string; // /covers/<slug>.jpg
  /** Inline gradient used as a tint behind sample-page slots. */
  gradient: string;
  /** Sample interior pages for the "Peek inside" gallery (omit if none yet). */
  previewImages?: string[];
  featured?: boolean;
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
