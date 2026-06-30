import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, getBook, getRelatedBooks } from "@/content/books";
import { getBandByAge } from "@/content/ageBands";
import { AgeBadge } from "@/components/AgeBadge";
import { CoverPlaceholder } from "@/components/CoverPlaceholder";
import { AmazonButton } from "@/components/AmazonButton";
import { BookCard } from "@/components/BookCard";
import { JsonLd } from "@/components/JsonLd";
import { bookSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const book = getBook(params.slug);
  if (!book) return { title: "Book not found" };
  const url = `/books/${book.slug}/`;
  const band = getBandByAge(book.ageBand);
  // Unique, descriptive <title> per book: series · "Ages X–Y" · skill descriptor
  // (the real subtitle, stripped of its "A …Coloring/Activity Book" wrapper).
  // This distinguishes the 3 same-series books, which otherwise share a title.
  const descriptor = book.subtitle
    .replace(/^A\s+/i, "")
    .replace(/\s+(Activity\s+)?Coloring\s+Book$/i, "")
    .replace(/\s+Activity\s+Book$/i, "")
    .trim();
  const ogTitle = `${book.title} — ${book.subtitle}`;
  return {
    title: `${book.title} · ${band.ages} ${descriptor}`,
    description: book.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      // "article" so the page qualifies as a Pinterest Article Rich Pin
      // (the no-price Rich Pin type); enriches Pins of book covers.
      type: "article",
      siteName: "Little Acre Learning",
      title: ogTitle,
      description: book.shortDescription,
      url,
      images: [{ url: book.coverImage, alt: `${ogTitle} cover` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: book.shortDescription,
      images: [book.coverImage],
    },
  };
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBook(params.slug);
  if (!book) notFound();

  const band = getBandByAge(book.ageBand);
  const related = getRelatedBooks(book);
  const seriesTotal = books.filter((b) => b.series === book.series).length;

  const stats = [
    { label: "Pages", value: String(book.pages) },
    { label: "Format", value: book.format },
    { label: "Series", value: book.series },
    { label: "In series", value: `Book ${book.bookNumber} of ${seriesTotal}` },
  ];

  return (
    <div className="shell py-8 md:py-12">
      <JsonLd data={bookSchema(book)} />
      <JsonLd data={breadcrumbSchema(book)} />
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
        <Link href="/books" className="hover:text-forest">
          Books
        </Link>
        <span aria-hidden>→</span>
        <Link href={`/books?age=${book.ageBand}`} className="hover:text-forest">
          {band.name}
        </Link>
        <span aria-hidden>→</span>
        <span className="text-ink">{book.title}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-[420px_1fr] md:gap-14">
        {/* Left: cover + peek inside */}
        <div className="min-w-0">
          <div className="mx-auto max-w-[360px] md:max-w-none">
            <CoverPlaceholder
              title={book.title}
              gradient={book.gradient}
              image={book.coverImage}
              rounded="rounded-card"
            />
          </div>
          {book.previewImages?.length ? (
            <>
              <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-3 md:overflow-visible">
                {book.previewImages.map((src, i) => (
                  <a
                    key={src}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-tile bg-white shadow-card transition-shadow hover:shadow-lift md:w-auto"
                    aria-label={`View sample page ${i + 1} of ${book.title}`}
                  >
                    <Image
                      src={src}
                      alt={`${book.title} sample page ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 30vw, 130px"
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
              <p className="mt-2 text-center text-[12.5px] text-muted-soft md:text-left">
                Peek inside — tap a page to view it larger
              </p>
            </>
          ) : (
            <>
              <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-3 md:overflow-visible">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/5] w-24 shrink-0 rounded-tile shadow-card md:w-auto"
                    style={{ backgroundImage: book.gradient, opacity: 0.55 }}
                    aria-label="Peek inside preview (coming soon)"
                  />
                ))}
              </div>
              <p className="mt-2 text-center text-[12.5px] text-muted-soft md:text-left">
                Peek inside — sample pages coming soon
              </p>
            </>
          )}
        </div>

        {/* Right: details */}
        <div className="min-w-0">
          <AgeBadge band={book.ageBand} />
          <h1 className="mt-3 font-display text-[28px] font-extrabold leading-tight text-ink md:text-[40px]">
            {book.title}
          </h1>
          <p className="mt-2 font-display text-[17px] font-bold text-forest md:text-[19px]">
            {book.subtitle}
          </p>
          <p className="mt-1.5 text-[15px] text-muted">
            {book.series} · {book.byline}
          </p>
          {book.price && (
            <p className="mt-4 font-display text-[30px] font-extrabold text-terracotta">
              {book.price}
            </p>
          )}
          <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-body-soft md:text-[17px]">
            {book.longDescription}
          </p>

          {/* Buy CTA */}
          <div className="mt-7 flex flex-col items-start gap-3">
            {book.amazonUrl ? (
              <AmazonButton href={book.amazonUrl} fullWidth className="sm:w-auto sm:min-w-[280px]" />
            ) : (
              <span className="inline-flex items-center justify-center gap-2 rounded-pill border-2 border-[#e2dccb] bg-cream px-7 py-3.5 font-sans text-[15px] font-bold text-muted">
                Coming soon to Amazon
              </span>
            )}
            {book.freePackUrl && (
              <a
                href={book.freePackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[14px] font-bold text-forest hover:underline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Get a free printable sample pack
              </a>
            )}
          </div>

          {/* Stat tiles */}
          <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-tile border border-[#ece6d8] bg-white px-3 py-3.5 text-center"
              >
                <div className="font-display text-[15px] font-extrabold leading-tight text-ink">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-muted-soft">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* What it teaches */}
          <div
            className="mt-8 rounded-card p-6"
            style={{ backgroundColor: band.bg }}
          >
            <h2
              className="font-display text-[18px] font-extrabold"
              style={{ color: band.text }}
            >
              What it teaches
            </h2>
            <ul className="mt-3 space-y-2.5">
              {book.whatItTeaches.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke={band.solid}
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[15px] font-semibold text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* More in this age range */}
      {related.length > 0 && (
        <section className="mt-16 md:mt-20">
          <h2 className="mb-6 font-display text-[22px] font-extrabold text-ink md:text-[28px]">
            More from Little Acre
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((b) => (
              <BookCard key={b.slug} book={b} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
