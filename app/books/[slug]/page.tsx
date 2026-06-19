import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, getBook, getRelatedBooks } from "@/content/books";
import { getBandByAge } from "@/content/ageBands";
import { AgeBadge } from "@/components/AgeBadge";
import { CoverPlaceholder } from "@/components/CoverPlaceholder";
import { AmazonButton } from "@/components/AmazonButton";
import { AddToCartButton } from "@/components/AddToCartButton";
import { BookCard } from "@/components/BookCard";

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
  return {
    title: book.title,
    description: book.shortDescription,
  };
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBook(params.slug);
  if (!book) notFound();

  const band = getBandByAge(book.ageBand);
  const related = getRelatedBooks(book);

  const stats = [
    { label: "Pages", value: String(book.pages) },
    { label: "Format", value: book.format },
    { label: "Theme", value: book.theme },
    { label: "Read time", value: book.readTime },
  ];

  return (
    <div className="shell py-8 md:py-12">
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
        <div>
          <div className="mx-auto max-w-[360px] md:max-w-none">
            <CoverPlaceholder
              title={book.title}
              gradient={book.gradient}
              image={book.coverImage}
              rounded="rounded-card"
            />
          </div>
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
        </div>

        {/* Right: details */}
        <div>
          <AgeBadge band={book.ageBand} />
          <h1 className="mt-3 font-display text-[28px] font-extrabold leading-tight text-ink md:text-[40px]">
            {book.title}
          </h1>
          <p className="mt-1.5 text-[15px] text-muted">
            {book.series} · {book.byline}
          </p>
          <p className="mt-4 font-display text-[30px] font-extrabold text-terracotta">
            {book.price}
          </p>
          <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-body-soft md:text-[17px]">
            {book.longDescription}
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <div className="sm:flex-1">
              <AddToCartButton title={book.title} />
            </div>
            <AmazonButton href={book.amazonUrl} fullWidth className="sm:flex-1" />
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
            More in this age range
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
