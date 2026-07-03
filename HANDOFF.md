# Little Acre Learning — Website HANDOFF

Living source-of-truth for this repo. Update it as the site changes. Last updated: 2026-07-01.

---

## 1. What this is

Marketing/storefront website for **Little Acre Learning** — a children's **coloring & activity book** brand (NOT story/picture books; that framing was deliberately removed — see §7). Warm, wholesome, mobile-first; book covers are the visual heroes.

- **Live site:** https://littleacrelearning.com (apex, non-www — the one canonical domain)
- **Brand owner:** Little Acre Learning is a brand of **Built by Josh Studio LLC** (footer attribution links to https://builtbyjoshstudio.com).
- Little Acre Learning is **both publisher and author/imprint** of every book (no separate personal author name).

## 1a. Repository architecture — TWO repos (read this first if reconstructing on a new machine)

Little Acre Learning is deliberately split across **two GitHub repos**:

**1. Public site repo — the CODE (this repo).** `github.com/builtbyjoshstudio-cyber/littleacrelearning`
- Serves **littleacrelearning.com** via **GitHub Pages** → **must stay PUBLIC** (Pages on the free plan only serves public repos; making it private takes the live site down).
- Clone: `git clone https://github.com/builtbyjoshstudio-cyber/littleacrelearning.git`
- Local: `C:\Users\jotra\OneDrive\Desktop\Little Acre Learning\littleacrelearning`
- `graphify-out/` here is **gitignored** ("local-only, not published") — never commit it to this public repo.

**2. Private workspace repo — the MEMORY LAYER + assets.** `github.com/builtbyjoshstudio-cyber/little-acre-learning-workspace`
- **Private.** Holds `WIKI.md`, `MARKETING.md`, `docs/graph` + `docs/wiki` + `docs/vault` (the Graphify graph / agent-wiki / Obsidian vault), the Pinterest Kit video pins, the static pins, and the Design Assets brand pack.
- Clone: `git clone https://github.com/builtbyjoshstudio-cyber/little-acre-learning-workspace.git`
- Local: `C:\Users\jotra\OneDrive\Desktop\Little Acre Learning` — the **parent** of this repo (the site repo is a gitignored subfolder of it).

**End of session = commit + push BOTH repos:**
- Code changes → the **public** site repo (normal `git commit` + push to `main`).
- Wiki / vault / graph / docs → the **private** workspace repo: run **`.\backup.ps1`** from the workspace root — it regenerates the memory layer and commits + pushes the private repo in one step (see the workspace's `CLAUDE.md`).

**Reconstruct on a new machine:** clone BOTH repos so the site repo sits at `<workspace>\littleacrelearning`; `pip install graphifyy` and run `graphify update .` once inside the site repo; then `.\backup.ps1` from the workspace keeps the memory layer current. (Book production is separate — Google Drive `G:\My Drive\Educational Books`, its own HANDOFF.)

**This project is the reference implementation of the standard two-repo *workspace pattern*** (private `<project>-workspace` + a nested, gitignored public product repo + `backup.ps1` as the auto-push mechanism). Reusable template: **`github.com/builtbyjoshstudio-cyber/project-workspace-template`** (private — see its `SETUP.md` to stamp the pattern onto a new project).

## 2. The catalog (15 books = 5 series × 3 age bands)

All books are coloring/activity books that follow the same per-age-band pattern:

| Age band (display name) | Subtitle / type | ~pages |
|---|---|---|
| 2–4 (Sprouts) | "A Speech & Counting Coloring Book" | ~50 |
| 5–7 (Saplings) | "Trace, Read & Learn" | ~70 |
| 8–10 (Branches) | "Read · Think · Color" | ~80 |

Five series: **Farm Friends**, **Dino Friends** (NOT "Dinosaur Friends"), **Ocean Friends**, **Safari Friends** (savanna animals; added 2026-06-23), **Jungle Friends** (Amazon-rainforest animals; added 2026-06-29 — all 3 coming-soon, no Amazon links yet).

**Amazon status (as of last update):** `book.amazonUrl` = the ASIN URL when live; `null` ⇒ "Coming soon to Amazon" CTA.

- ✅ Live: Farm 5-7 `B0H5RMDKMR`, Farm 8-10 `B0H5TNJ4NG`, Dino 2-4 `B0H65VTNMG`, Dino 5-7 `B0H67G4XNJ`, Dino 8-10 `B0H66G7FB7`, Ocean 8-10 `B0H6CCP4PZ`, Ocean 5-7 `B0H6LVJ4MQ`, Ocean 2-4 `B0H6SNTK6Q`, Safari 2-4 `B0H6MDP2LJ`, Safari 5-7 `B0H6GTQHYY`, Safari 8-10 `B0H6H75MY1`
- ⏳ Coming soon (no live Amazon link yet): **Farm 2-4**, **Jungle 2-4 / 5-7 / 8-10**
- **Free packs:** 12 of the 15 books have a `freePackUrl` (Lemon Squeezy free product, store `tynkrtoolsco.lemonsqueezy.com`) — the 3 Jungle books do NOT yet (coming soon). Josh keeps the canonical link list in a "Lemon Squeezy Product links" spreadsheet (sheet "Little Acre Learning Previews").
- **No hardcoded prices** — Amazon is the source of truth (`book.price` stays `null`; cards show "Available on Amazon →" or "Coming soon"). No cart/checkout on-site.

## 3. Stack, hosting, deploy

- **Next.js 14 (App Router) + TypeScript + Tailwind**, **static export** (`output: 'export'`, `trailingSlash: true`, `images.unoptimized: true` in `next.config.mjs`). No basePath/assetPrefix (apex root).
- **Local clone:** `C:\Users\jotra\OneDrive\Desktop\Little Acre Learning\littleacrelearning` (moved here 06/2026 — the consolidated LAL home; old Downloads clone removed). The parent `…\Little Acre Learning\` folder now also holds all marketing assets (Pinterest Kit, static pins, Design Assets brand pack); book-production source PDFs stay on `G:\My Drive\Educational Books`. ⚠ Exclude `node_modules/` + `out/` from OneDrive sync.
- **Repo:** github.com/builtbyjoshstudio-cyber/littleacrelearning — **PUBLIC** (required for GitHub Pages on the free plan). The GitHub identity/account for this repo is **`builtbyjoshstudio-cyber`** (not `jotra`).
- **Hosting:** GitHub Pages. **DNS at Squarespace** — apex `A` records → GitHub Pages IPs (185.199.108–111.153), `www` CNAME → `builtbyjoshstudio-cyber.github.io`. `public/CNAME` = `littleacrelearning.com`. HTTPS enforced.
  - Gotcha: Squarespace re-injects a default `HTTPS`/SVCB record that breaks the Pages domain check — if "DNS check unsuccessful" appears, delete that `HTTPS @` record (apex A + www CNAME are correct).
- **Build:** `npm run build` → `out/`. **Deploy:** `.github/workflows/deploy.yml` (push to `main` → build → deploy to Pages). **Push to `main` = live.** Josh does not deploy manually — build + publish end-to-end.

## 4. Content model (where data lives)

- **`content/books.ts`** — typed `Book[]` (the 15 books) + helpers `getBook`, `getBooksByAge`, `getBooksBySeries`, `getFeaturedBooks`, `getRelatedBooks`. Exports series gradient consts (`FARM_/DINO_/OCEAN_/SAFARI_/JUNGLE_GRADIENT`; Safari = `linear-gradient(135deg,#F2B43C,#C2701F)`, savanna gold→amber; Jungle = `linear-gradient(135deg,#5BA668,#1E5631)`, rainforest green). `previews(slug, n)` helper builds preview image paths.
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
- **Peek-inside previews:** `public/previews/<slug>/N.jpg` (Farm = 6 pages, Dino/Ocean/Safari/Jungle = 10), from the per-book "preview" PDFs. The preview PDFs' page 1 is the book's title page — kept as image `1.jpg` (matches existing convention), with content pages 2–N after it.
- **Brand:** `app/icon.svg` + `apple-icon.png` + `favicon.ico` + `app/manifest.ts`; `public/icon-192/512.png`; `public/og.png` (social/OG). Logo = inlined `LogoMark`/`LogoMarkReversed` in `components/Logo.tsx`.

**Rendering pipeline (Windows):** PyMuPDF (`pip install pymupdf`) + Pillow.
- Cover PDFs are KDP **wraps** (back+spine+front, ~1256×810pt). Front = crop the right ~47.5%: `clip = Rect(W*0.525+9, 9, W-9, H-9)`, render at matrix 2.6, downscale to 1100w, JPEG q88.
- Preview pages: render each at matrix 1.6, JPEG q88.
- Source PDFs: covers land in `C:\Users\jotra\Downloads\Little Acre *Cover.pdf`; previews in `G:\My Drive\Educational Books\<book folder>\*Preview.pdf`.

## 6. Homepage structure (`app/page.tsx`)

Hero (book arc) → "Find the right shelf" (3 age-band cards → `/books?age=`) → "Explore the series" (5 `SeriesCard`s → `/books?series=`, grid `sm:grid-cols-2 lg:grid-cols-5` — 5-up single row on desktop is the only orphan-free layout for 5; tablet is 2-col with a trailing single) → "New this season" (12 featured `BookCard`s, `md:grid-cols-3` = 4 rows) → "Why parents trust us" → free-pack banner.
- **Hero "book arc":** 3 covers on a mint `#E8EFDF` panel — Ocean 2-4 (tilt −6°), Farm 8-10 (center, larger, z-2, on top), Dino 5-7 (tilt +6°), `priority` covers. Grid pinned `grid-cols-1 md:grid-cols-2`. (Safari is **not** in the hero arc — Josh's call when it launched.)
- **Featured set (12):** Farm 2-4/5-7/8-10, Dino 2-4, Dino 8-10, Ocean 2-4, Safari 2-4/5-7/8-10, Jungle 2-4/5-7/8-10 (the `featured: true` flags in `books.ts`). All 3 Jungle were featured to keep the grid a clean multiple of 3 (12 = 4 rows) and spotlight the newest series; they sit last in catalog order (4th row).

## 7. SEO / GEO / content-accuracy state

- **Content accuracy DONE:** all "picture book / stories" framing + ghost titles removed (the products are coloring/activity books). The 4 original placeholder posts (fictional authors, ghost title "Stomp, Little Dino!") stay **unpublished** in `content/drafts/posts.ts`. **Blog is now live (2026-06-23):** 3 real posts in `content/posts.ts`, the `/blog/[slug]` route is restored, and `/blog/` auto-switches from its "coming soon" state to the real index whenever `posts` is non-empty (so emptying `posts` again would re-break the export — keep ≥1 post or re-delete the route).
- **Indexability:** `app/sitemap.ts` (route-derived — auto-includes book pages and blog posts; **series routes must be added manually** when Plan B lands), `app/robots.ts` (allows all + AI crawlers GPTBot/ClaudeBot/etc.), `public/llms.txt` (update when the catalog or blog changes — it lists every book, the series, and each blog post).
- **Structured data:** `Organization` (root layout, site-wide) + `Book` + `BreadcrumbList` (per book page) + `BlogPosting` + `BreadcrumbList` (per blog post), via `lib/schema.ts` + `components/JsonLd.tsx`. No offers/price in schema. Per-page self-canonical + per-page OG (book pages override with their cover; blog posts use `/og.png`).
- **Titles:** each book `<title>` is unique: `<series> · Ages X–Y <skill descriptor> · Little Acre Learning`.
- **Google Search Console:** verified (Domain property, DNS TXT); sitemap `https://littleacrelearning.com/sitemap.xml` submitted (Success).

## 8. Common tasks (how to do them)

- **Wire a live Amazon link:** set `amazonUrl` on the book in `content/books.ts` → flips the buy CTA to "Find on Amazon" AND auto-adds it to that book's Book JSON-LD `sameAs`. Build + push. (Amazon blocks bots/CAPTCHA — can't verify the link from the CLI; Josh confirms it's live. Do NOT add a link that's still propagating.)
- **Add a free pack:** set `freePackUrl` (Lemon Squeezy checkout) on the book → enables the "Get a free printable sample pack" link + lists it on `/printables`.
- **Add a new book/series:** render covers/previews (§5); add entries to `content/books.ts`; for a new series add it to the `Series` type (`lib/types.ts`), `seriesList` (`ageBands.ts`), and `seriesMetaList` (`series.ts`). Titles/schema/sitemap auto-generate. **Then update hardcoded series copy:** the `/books` header (`app/books/page.tsx`) and `public/llms.txt`.
- **Publish a blog post (Josh hands markdown):** posts live as a typed `Post[]` in `content/posts.ts` (NOT markdown/MDX). Body = `PostBlock[]` rendered as PLAIN TEXT by `app/blog/[slug]/page.tsx` — 4 block types only: `lead` (intro), `p`, `h2`, `callout` (title+text). No inline markdown (bold/links/lists won't render). Convention for Josh's `.md`: YAML frontmatter (`title, category, date, excerpt`, optional `featured: true` on one) + body where the first paragraph = lead, `## ` = h2, and a blockquote whose first line is `**Bold title.**` = a callout. Claude converts → `Post` object (auto-derives `slug` from filename, `readTime` from word count, picks an on-brand `gradient`; `author` = `{name:"Little Acre Learning", role:"The Little Acre team"}` — **never fictional authors**; `coverImage: null` ⇒ gradient banner). `getFeaturedPost` shows the `featured` post large on `/blog/`. Sitemap + `BlogPosting`/breadcrumb JSON-LD auto-generate; **update the `public/llms.txt` blog section manually**. Keep ≥1 post or the static export breaks (empty `generateStaticParams`).
- **Verify a change:** `npm run build`, then `grep` the built HTML under `out/` (e.g. confirm CTAs, JSON-LD, links). Then commit + push (deploy is automatic).

## 9. Gotchas / environment

- **Localhost/dev preview renders broken** in Josh's sessions (black/unreadable). Verify visuals by serving `out/` (`python -m http.server --directory out`) and screenshotting with **headless Chrome** (`chrome.exe --headless=new --screenshot=<ABSOLUTE windows path>`).
- **Mobile screenshots:** headless `--window-size` MISREPORTS overflow for `overflow-x-auto` scroll strips (false clipping). For true mobile, use **CDP `Emulation.setDeviceMetricsOverride`** via `websocket-client` (`--remote-allow-origins=*`).
- **Static export quirk:** dynamic routes need non-empty `generateStaticParams`; an empty one fails the export (that's why `/blog/[slug]` was removed when posts went to zero).
- next/image lazy `IntersectionObserver` is unreliable for **rotated/absolute** elements — use `loading="eager"`/`priority` for the series fans + hero arc.
- **In-app webview hardening (book pages, 06/2026):** Pinterest/IG/FB in-app browsers showed a broken *first paint* on book detail pages — hero image overflowing right, a blank-looking "Find on Amazon" pill, body text not wrapping — that self-corrected after a beat. Fixed defensively: `text-size-adjust:100%` + `overflow-x:clip` on `html`/`body` in `app/globals.css` (`clip`, NOT `hidden`, so the sticky nav still works) + explicit `viewport` (`viewport-fit:cover`) in `app/layout.tsx` + `min-w-0` on the book-page grid columns. The CTA label is **static HTML** (not JS-populated), so it was never truly empty — the blank look was the overflow artifact. Steady-state has **0 horizontal overflow** at 390px. ⚠ Headless Chrome renders the page correctly and can't reproduce the webview first-paint glitch — don't remove these without re-testing in a real in-app browser.

## 10. Outstanding work

> **⚠ Staged on branch `seo-geo-buildout` (2026-07-03) — NOT merged, `main`/live untouched.** A full SEO/GEO buildout is committed on that feature branch awaiting Josh's review + merge (per the brief in `Downloads/files.zip/SEO-GEO-BRIEF.md`). What it does: **P1** `/books` now renders all 15 books + descriptions as static HTML (`BooksBrowser` filters via mount-synced state instead of the `useSearchParams()` static-export bailout; `?age=`/`?series=` preserved) — this **resolves the "/books client-rendered" item below**. **P3** `faqPageSchema()` + `lib/faq.ts` generators + `components/Faq.tsx` → visible "Common questions" matching FAQPage JSON-LD on every book + series page. **P4** new `/series/<slug>/` pages (5 static slugs) with `CollectionPage`+`ItemList`+`BreadcrumbList` schema, Amazon "shop the series" CTA only on Dino/Ocean/Safari, series↔book links, `seriesHref` repointed, 5 routes added to `app/sitemap.ts` — this **implements the Plan B item below**. **P5** explicit AI live-retrieval bot allows in `robots.ts`. **P6** 5 series URLs added to `public/llms.txt`. Build passes (37 static pages); no price/story-framing/pen-name introduced. **Judgment calls flagged for Josh:** (a) the "How many pages?" FAQ uses `book.pages` (the cover coloring-page count the page already shows), not the physical interior count (not in the repo, would contradict the on-page "Pages" stat); (b) `/books` cards now show `shortDescription` to put descriptions in the static HTML. **Manual follow-ups (Josh, out of scope for the branch):** submit sitemap to **Bing Webmaster Tools** (unlocks ChatGPT citation via Bing) + verify domain in **Brave Search Webmaster** (unlocks Claude citation via Brave); merge the branch when satisfied.
- **4 Amazon links pending:** Farm 2-4 and Jungle 2-4 / 5-7 / 8-10 — wire each when live (also clears the Book-schema `sameAs` TODO). Jungle was added as a coming-soon 5th series (covers + 520px thumbs + 10-page previews staged; gradient `JUNGLE_GRADIENT` = `linear-gradient(135deg,#5BA668,#1E5631)`, accent `#1E5631`). Jungle has **no free packs** yet (no `freePackUrl`) and **no `amazonSeriesUrl`** — add both when available. Jungle book covers were designed in a design tool (jungle-green / marigold palette, reusing the Safari layout) and are **RGB** — the on-site cover JPGs are fine, but the print covers may need **CMYK conversion before KDP print**.
- **Plan B — per-series landing pages** (`/series/<slug>/`): one indexable page per series listing its 3 tiers, with `CollectionPage`+`ItemList` JSON-LD, `app/sitemap.ts` additions, and book→series back-links so they aren't orphaned. Series cards' `href` is the single swap point. A "shop the whole series on Amazon" CTA can use `SeriesMeta.amazonSeriesUrl` (Dino = `amazon.com/dp/B0H6C5GSF1`, Safari = `amazon.com/dp/B0H6H9QT1F`, Ocean = `amazon.com/dp/B0H6CB7SS8`, all stored, not surfaced yet; Farm series URL TBD). Wants the Ocean line fully live on Amazon first. **→ Built on branch `seo-geo-buildout` (see note above); pending merge.**
- **JSON-LD TODOs** (`lib/schema.ts`): Organization `sameAs` now has the Pinterest profile (`pinterest.com/littleacrelearning`); still add Amazon brand page + other socials (Instagram/Facebook) when available. ISBNs (none in repo).
- **`/books` catalog is client-rendered** (`BooksBrowser`, `?age=`/`?series=` filters) → empty to non-JS crawlers. SEO improvement opportunity. **→ Fixed on branch `seo-geo-buildout` (see note above); pending merge.**
- **For Parents page** still has a "reading-together photo coming soon" placeholder slot.
- **Email capture:** the footer `EmailSignup` is a non-functional stub (captures nothing). Real capture happens via Lemon Squeezy on free packs. A general newsletter would need an ESP wired.
- **Confirm the in-app-webview book-page fix (§9) on a real Pinterest/IG in-app browser** — verified locally (0 overflow) but the actual webview first-paint glitch couldn't be reproduced in headless Chrome.
- Minor: dead `bedtime` `AgeBadge` variant + tailwind token (unused; cleanup).
- Parents meta description is slightly reading-centric (flagged, left as-is).

## 11. Working style

Josh is terse/directive — no preamble. He hands a task (often "here's the Amazon link for X" or a zip), expects it wired + built + pushed live end-to-end, verified, with a tight report. Surface tradeoffs and flag conflicts (esp. anything that would reintroduce removed "stories" framing or surface a still-propagating Amazon link) rather than guessing.
