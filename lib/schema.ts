import type { Book } from "./types";

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
  // TODO: add real profile URLs (Amazon author/brand page, Instagram, Facebook,
  // Pinterest, etc.). Drop them into this array and they apply site-wide.
  sameAs: [] as string[],
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
