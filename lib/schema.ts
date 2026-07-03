import type { Book, Post, SeriesMeta } from "./types";

export const SITE_URL = "https://littleacrelearning.com";
export const ORG_ID = `${SITE_URL}/#organization`;

/**
 * Site-wide publisher entity. Little Acre Learning is both the publisher and
 * the author/imprint of every book, and a brand of Built by Josh Studio LLC.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Little Acre Learning",
  url: SITE_URL,
  email: "hello@littleacrelearning.com",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@littleacrelearning.com",
    contactType: "customer support",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Built by Josh Studio LLC",
  },
  // Brand profile URLs — apply site-wide. TODO: add Amazon brand page,
  // Instagram, Facebook when available.
  sameAs: ["https://www.pinterest.com/littleacrelearning/"],
};

const AGE_RANGE: Record<Book["ageBand"], [number, number]> = {
  "2-4": [2, 4],
  "5-7": [5, 7],
  "8-10": [8, 10],
};

/** Book entity for a product page. Identifies the book — no price/offers. */
export function bookSchema(book: Book) {
  const url = `${SITE_URL}/books/${book.slug}/`;
  const [minAge, maxAge] = AGE_RANGE[book.ageBand];
  const publisher = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Little Acre Learning",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${url}#book`,
    name: `${book.title} — ${book.subtitle}`,
    description: book.longDescription,
    bookFormat: "https://schema.org/Paperback",
    inLanguage: "en",
    numberOfPages: book.pages,
    url,
    image: `${SITE_URL}${book.coverImage}`,
    author: publisher,
    publisher,
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: minAge,
      suggestedMaxAge: maxAge,
    },
    // sameAs links the book to its live Amazon listing when one exists.
    // TODO: add Amazon URLs for titles not yet live on Amazon
    //       (Farm Friends 2-4, Dino Friends 5-7, Dino Friends 8-10).
    // TODO: add ISBN — not present in the repo for any title yet.
    ...(book.amazonUrl ? { sameAs: [book.amazonUrl] } : {}),
  };
}

/** Home → Books → [Book] breadcrumb trail for a product page. */
export function breadcrumbSchema(book: Book) {
  const url = `${SITE_URL}/books/${book.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Books", item: `${SITE_URL}/books/` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${book.title} — ${book.subtitle}`,
        item: url,
      },
    ],
  };
}

/** BlogPosting entity for a blog article. Publisher/author = the brand. */
export function blogPostingSchema(post: Post) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const org = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Little Acre Learning",
  };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    // Posts use a gradient banner (no cover image yet); fall back to the site OG.
    image: `${SITE_URL}${post.coverImage ?? "/og.png"}`,
    author: org,
    publisher: org,
  };
}

/**
 * CollectionPage for a per-series landing page, with the series' books as an
 * ItemList. One authoritative cluster page per series for category queries and
 * AI retrieval. No price/offers (Amazon is the price source of truth).
 */
export function seriesCollectionSchema(meta: SeriesMeta, seriesBooks: Book[]) {
  const url = `${SITE_URL}/series/${meta.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: `${meta.name} — coloring & activity books for ages 2–10`,
    description: meta.tagline,
    url,
    about: { "@type": "Organization", "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: seriesBooks.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/books/${b.slug}/`,
        name: `${b.title} — ${b.subtitle}`,
      })),
    },
  };
}

/** Home → Books → [Series] breadcrumb trail for a series landing page. */
export function seriesBreadcrumbSchema(meta: SeriesMeta) {
  const url = `${SITE_URL}/series/${meta.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Books", item: `${SITE_URL}/books/` },
      { "@type": "ListItem", position: 3, name: meta.name, item: url },
    ],
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQPage entity built from the SAME Q&A list rendered visibly on the page
 * (see components/Faq.tsx) — Google requires the answer text to be present
 * on-page, and AI answer engines lift these self-contained Q&A directly.
 */
export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/** Home → The Reading Nook → [Post] breadcrumb trail for a blog article. */
export function blogBreadcrumbSchema(post: Post) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "The Reading Nook",
        item: `${SITE_URL}/blog/`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
}
