# Little Acre Learning — Website HANDOFF

Living source-of-truth for this repo. Update it as the site changes. Last updated: 2026-06-22.

---

## 1. What this is

Marketing/storefront website for **Little Acre Learning** — a children's **coloring & activity book** brand (NOT story/picture books; that framing was deliberately removed — see §7). Warm, wholesome, mobile-first; book covers are the visual heroes.

- **Live site:** https://littleacrelearning.com (apex, non-www — the one canonical domain)
- **Brand owner:** Little Acre Learning is a brand of **Built by Josh Studio LLC** (footer attribution links to https://builtbyjoshstudio.com).
- Little Acre Learning is **both publisher and author/imprint** of every book (no separate personal author name).

## 2. The catalog (9 books = 3 series × 3 age bands)

All books are coloring/activity books that follow the same per-age-band pattern:

| Age band (display name) | Subtitle / type | ~pages |
|---|---|---|
| 2–4 (Sprouts) | "A Speech & Counting Coloring Book" | ~50 |
| 5–7 (Saplings) | "Trace, Read & Learn" | ~70 |
| 8–10 (Branches) | "Read · Think · Color" | ~80 |

Three series: **Farm Friends**, **Dino Friends** (NOT "Dinosaur Friends"), **Ocean Friends**.

**Amazon status (as of last update):** `book.amazonUrl` = the ASIN URL when live; `null` ⇒ "Coming soon to Amazon" CTA.

- ✅ Live: Farm 5-7 `B0H5RMDKMR`, Farm 8-10 `B0H5TNJ4NG`, Dino 2-4 `B0H65VTNMG`, Dino 5-7 `B0H67G4XNJ`, Dino 8-10 `B0H66G7FB7`, Ocean 8-10 `B0H6CCP4PZ`
- ⏳ Coming soon (no live Amazon link yet): **Farm 2-4, Ocean 2-4, Ocean 5-7**
- **Free packs:** all 9 books have a `freePackUrl` (Lemon Squeezy free product, store `tynkrtoolsco.lemonsqueezy.com`).
- **No hardcoded prices** — Amazon is the source of truth (`book.price` stays `null`; cards show "Available on Amazon →" or "Coming soon"). No cart/checkout on-site.

## 3. Stack, hosting, deploy

- **Next.js 14 (App Router) + TypeScript + Tailwind**, **static export** (`output: 'export'`, `trailingSlash: true`, `images.unoptimized: true` in `next.config.mjs`). No basePath/assetPrefix (apex root).
- **Local clone:** `C:\Users\jotra\Downloads\littleacrelearning`
- **Repo:** github.com/builtbyjoshstudio-cyber/littleacrelearning — **PUBLIC** (required for GitHub Pages on the free plan). The GitHub identity/account for this repo is **`builtbyjoshstudio-cyber`** (not `jotra`).
- **Hosting:** GitHub Pages. **DNS at Squarespace** — apex `A` records → GitHub Pages IPs (185.199.108–111.153), `www` CNAME → `builtbyjoshstudio-cyber.github.io`. `public/CNAME` = `littleacrelearning.com`. HTTPS enforced.
  - Gotcha: Squarespace re-injects a default `HTTPS`/SVCB record that breaks the Pages domain check — if "DNS check unsuccessful" appears, delete that `HTTPS @` record (apex A + www CNAME are correct).
- **Build:** `npm run build` → `out/`. **Deploy:** `.github/workflows/deploy.yml` (push to `main` → build → deploy to Pages). **Push to `main` = live.** Josh does not deploy manually — build + publish end-to-end.

## 4. Content model (where data lives)

- **`content/books.ts`** — typed `Book[]` (the 9 books) + helpers `getBook`, `getBooksByAge`, `getBooksBySeries`, `getFeaturedBooks`, `getRelatedBooks`. Exports series gradient consts (`FARM_/DINO_/OCEAN_GRADIENT`). `previews(slug, n)` helper builds preview image paths.
- **`content/ageBands.ts`** — `ageBands` (Sprouts/Saplings/Branches meta) + `seriesList`.
- **`content/series.ts`** — `seriesMetaList` (`SeriesMeta`: series/slug/name/tagline/gradient/accent/href + optional `amazonSeriesUrl`). `href` = `/books?series=<Series>` and is the **single swap point** for Plan B per-series pages.
- **`content/posts.ts`** — blog posts, currently `[]` (empty). Originals preserved in **`content/drafts/posts.ts`** (unpublished — see §7).
- **`lib/types.ts`** — `Book`, `Series`, `AgeBand`, `AgeBandMeta`, `SeriesMeta`, `Post`.
- **`lib/schema.ts`** — JSON-LD builders (`organizationSchema`, `bookSchema`, `breadcrumbSchema`).

**`Book` shape:** `slug, title, subtitle, series, bookNumber, ageBand, price(null), byline, shortDescription, longDescription, whatItTeaches[], pages, format, amazonUrl(null|url), freePackUrl?, coverImage, gradient, previewImages?, featured?`.

## 5. Assets & image pipelines

- **Covers (source of truth):** `public/covers/<slug>.jpg` — 1100px front-cover crops extracted from the KDP wrap cover PDFs.
- **Series-card thumbnails:** `public/covers/thumbs/<slug>.jpg` — 520px, used ONLY by the homepage series fans (derived path `coverImage.replace('/covers/','/covers/thumbs/')`).
- **Hero renditions:** `public/covers/hero/<slug>.jpg` — 620px, for the 3 hero-arc covers (Ocean 2-4, Farm 8-10, Dino 5-7), `priority`-loaded.
- **Peek-inside previews:** `public/previews/<slug>/N.jpg` (Farm = 6 pages, Dino/Ocean = 10), from the per-book "preview" PDFs.
- **Brand:** `app/icon.svg` + `apple-icon.png` + `favicon.ico` + `app/manifest.ts`; `public/icon-192/512.png`; `public/og.png` (social/OG). Logo = inlined `LogoMark`/`LogoMarkReversed` in `components/Logo.tsx`.

**Rendering pipeline (Windows):** PyMuPDF (`pip install pymupdf`) + Pillow.
- Cover PDFs are KDP **wraps** (back+spine+front, ~1256×810pt). Front = crop the right ~47.5%: `clip = Rect(W*0.525+9, 9, W-9, H-9)`, render at matrix 2.6, downscale to 1100w, JPEG q88.
- Preview pages: render each at matrix 1.6, JPEG q88.
- Source PDFs: covers land in `C:\Users\jotra\Downloads\Little Acre *Cover.pdf`; previews in `G:\My Drive\Educational Books\<book folder>\*Preview.pdf`.

## 6. Homepage structure (`app/page.tsx`)

Hero (book arc) → "Find the right shelf" (3 age-band cards → `/books?age=`) → "Explore the series" (3 `SeriesCard`s → `/books?series=`) → "New this season" (6 featured `BookCard`s, `md:grid-cols-3`) → "Why parents trust us" → free-pack banner.
- **Hero "book arc":** 3 covers on a mint `#E8EFDF` panel — Ocean 2-4 (tilt −6°), Farm 8-10 (center, larger, z-2, on top), Dino 5-7 (tilt +6°), `priority` covers. Grid pinned `grid-cols-1 md:grid-cols-2`.
- **Featured set (6):** Farm 2-4/5-7/8-10, Dino 2-4, Dino 8-10, Ocean 2-4 (the `featured: true` flags in `books.ts`).

## 7. SEO / GEO / content-accuracy state

- **Content accuracy DONE:** all "picture book / stories" framing + ghost titles removed (the products are coloring/activity books). 4 placeholder blog posts (fictional authors, ghost title "Stomp, Little Dino!") were **unpublished** → `content/drafts/posts.ts`; `/blog/` is a "coming soon" route; **the `/blog/[slug]` dynamic route was deleted** (empty params break static export — restore from git history when real posts exist).
- **Indexability:** `app/sitemap.ts` (route-derived — auto-includes book pages; **series routes must be added manually** when Plan B lands), `app/robots.ts` (allows all + AI crawlers GPTBot/ClaudeBot/etc.), `public/llms.txt` (update when catalog changes — it lists every book + the series).
- **Structured data:** `Organization` (root layout, site-wide) + `Book` + `BreadcrumbList` (per book page), via `lib/schema.ts` + `components/JsonLd.tsx`. No offers/price in schema. Per-page self-canonical + per-page OG (book pages override with their cover).
- **Titles:** each book `<title>` is unique: `<series> · Ages X–Y <skill descriptor> · Little Acre Learning`.
- **Google Search Console:** verified (Domain property, DNS TXT); sitemap `https://littleacrelearning.com/sitemap.xml` submitted (Success).

## 8. Common tasks (how to do them)

- **Wire a live Amazon link:** set `amazonUrl` on the book in `content/books.ts` → flips the buy CTA to "Find on Amazon" AND auto-adds it to that book's Book JSON-LD `sameAs`. Build + push. (Amazon blocks bots/CAPTCHA — can't verify the link from the CLI; Josh confirms it's live. Do NOT add a link that's still propagating.)
- **Add a free pack:** set `freePackUrl` (Lemon Squeezy checkout) on the book → enables the "Get a free printable sample pack" link + lists it on `/printables`.
- **Add a new book/series:** render covers/previews (§5); add entries to `content/books.ts`; for a new series add it to the `Series` type (`lib/types.ts`), `seriesList` (`ageBands.ts`), and `seriesMetaList` (`series.ts`). Titles/schema/sitemap auto-generate. **Then update hardcoded series copy:** the `/books` header (`app/books/page.tsx`) and `public/llms.txt`.
- **Verify a change:** `npm run build`, then `grep` the built HTML under `out/` (e.g. confirm CTAs, JSON-LD, links). Then commit + push (deploy is automatic).

## 9. Gotchas / environment

- **Localhost/dev preview renders broken** in Josh's sessions (black/unreadable). Verify visuals by serving `out/` (`python -m http.server --directory out`) and screenshotting with **headless Chrome** (`chrome.exe --headless=new --screenshot=<ABSOLUTE windows path>`).
- **Mobile screenshots:** headless `--window-size` MISREPORTS overflow for `overflow-x-auto` scroll strips (false clipping). For true mobile, use **CDP `Emulation.setDeviceMetricsOverride`** via `websocket-client` (`--remote-allow-origins=*`).
- **Static export quirk:** dynamic routes need non-empty `generateStaticParams`; an empty one fails the export (that's why `/blog/[slug]` was removed when posts went to zero).
- next/image lazy `IntersectionObserver` is unreliable for **rotated/absolute** elements — use `loading="eager"`/`priority` for the series fans + hero arc.

## 10. Outstanding work

- **3 Amazon links pending:** Farm 2-4, Ocean 2-4, Ocean 5-7 — wire each as it goes live (also clears the Book-schema `sameAs` TODOs).
- **Plan B — per-series landing pages** (`/series/<slug>/`): one indexable page per series listing its 3 tiers, with `CollectionPage`+`ItemList` JSON-LD, `app/sitemap.ts` additions, and book→series back-links so they aren't orphaned. Series cards' `href` is the single swap point. A "shop the whole series on Amazon" CTA can use `SeriesMeta.amazonSeriesUrl` (Dino = `amazon.com/dp/B0H6C5GSF1`, stored, verify live first; Farm/Ocean series URLs TBD). Wants the Ocean line fully live on Amazon first.
- **JSON-LD TODOs** (`lib/schema.ts`): Organization `sameAs: []` (need Amazon brand page + social profile URLs); ISBNs (none in repo).
- **`/books` catalog is client-rendered** (`BooksBrowser`, `?age=`/`?series=` filters) → empty to non-JS crawlers. SEO improvement opportunity.
- **For Parents page** still has a "reading-together photo coming soon" placeholder slot.
- **Email capture:** the footer `EmailSignup` is a non-functional stub (captures nothing). Real capture happens via Lemon Squeezy on free packs. A general newsletter would need an ESP wired.
- Minor: dead `bedtime` `AgeBadge` variant + tailwind token (unused; cleanup).
- Parents meta description is slightly reading-centric (flagged, left as-is).

## 11. Working style

Josh is terse/directive — no preamble. He hands a task (often "here's the Amazon link for X" or a zip), expects it wired + built + pushed live end-to-end, verified, with a tight report. Surface tradeoffs and flag conflicts (esp. anything that would reintroduce removed "stories" framing or surface a still-propagating Amazon link) rather than guessing.
