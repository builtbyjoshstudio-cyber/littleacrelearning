# Little Acre Learning

Marketing website for **Little Acre Learning**, a children's educational book brand. Warm, wholesome, mobile-first — book covers are the heroes.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Static/SSG; the only dynamic piece is the email signup API route (a stub ready for an ESP).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx            # fonts (Baloo 2 + Nunito), Nav, Footer
  page.tsx              # Home
  books/page.tsx        # Filterable grid (age band + theme, URL-synced)
  books/[slug]/page.tsx # Single book: cover, stats, "what it teaches", Amazon + cart
  printables/page.tsx   # Email-gated free/locked printable cards
  parents/page.tsx      # SEO/trust page for parents & educators
  blog/page.tsx         # Blog index (featured + grid)
  blog/[slug]/page.tsx  # Long-form post (max-w ~680px)
  api/subscribe/route.ts# Email signup stub — wire to ConvertKit/Mailchimp here
components/              # Button, AmazonButton, AgeBadge, BookCard, EmailSignup,
                         # Nav, Footer, Logo, Blob, BooksBrowser, PrintablesClient, …
content/                # Typed content model (books, printables, posts, ageBands)
lib/types.ts            # Book / Printable / Post / AgeBand types
```

## Design tokens

All defined in `tailwind.config.ts`:

- **Colors:** paper, cream, sage, forest (primary), sand, terracotta (secondary CTA), ink.
- **Age-band accents:** `sprouts` / `saplings` / `branches` (each with `bg`, `solid`, `text`), plus a `bedtime` tag variant.
- **Fonts:** `font-display` → Baloo 2, `font-sans` → Nunito (loaded via `next/font/google`).
- **Radii:** `rounded-card`, `rounded-card-lg`, `rounded-cover`, `rounded-pill`, `rounded-tile`.
- **Shadows:** `shadow-card`, `shadow-cover`, `shadow-hero`, `shadow-lift`.

## Content model

Books, printables, and posts are typed arrays in `content/` (see `lib/types.ts`). They're structured so a CMS can replace them later without touching components. Each book carries `slug, title, series, ageBand, price, descriptions, whatItTeaches[], pages, format, theme, readTime, amazonUrl, coverImage`.

## Assets

Book covers and hero/photo areas are **placeholder gradient slots** with consistent aspect ratios (4:5 covers). Drop real artwork into each item's `coverImage` (and add hosts to `next.config.mjs`) — `next/image` is already wired in `CoverPlaceholder`.

## Email signup

`EmailSignup` POSTs to `/api/subscribe`, which validates and acknowledges. To go live, forward the email to your ESP in `app/api/subscribe/route.ts` using a server-side API key. Gated printables unlock client-side on a successful signup (persisted in `localStorage`).
