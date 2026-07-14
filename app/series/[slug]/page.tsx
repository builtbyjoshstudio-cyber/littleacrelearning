import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { AgeBand } from "@/lib/types";
import { getBooksBySeries } from "@/content/books";
import { seriesMetaList, getSeriesMetaBySlug } from "@/content/series";
import { ageBands } from "@/content/ageBands";
import { BookCard } from "@/components/BookCard";
import { AmazonButton } from "@/components/AmazonButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  seriesCollectionSchema,
  seriesBreadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";
import { seriesFaqs } from "@/lib/faq";

const BAND_ORDER: Record<AgeBand, number> = { "2-4": 0, "5-7": 1, "8-10": 2 };

// Trace & Learn is a workbook line, so its age-band blurbs differ from the
// coloring-series band descriptions in content/ageBands.ts.
const TL_BAND_DESC: Record<AgeBand, string> = {
  "2-4": "First pencil control — trace big lines, curves, corners, and shapes before letters begin.",
  "5-7": "Trace and write the alphabet, numbers 0–20, and 40 first sight words on handwriting lines.",
  "8-10": "Joined-up cursive — every letter, the joins between them, and real dinosaur facts to copy.",
};

export function generateStaticParams() {
  return seriesMetaList.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const meta = getSeriesMetaBySlug(params.slug);
  if (!meta) return { title: "Series not found" };
  const url = `/series/${meta.slug}/`;
  const title = `${meta.name} — Coloring & Activity Books, Ages 2–10`;
  return {
    title,
    description: meta.tagline,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Little Acre Learning",
      title,
      description: meta.tagline,
      url,
      images: ["/og.png"],
    },
  };
}

export default function SeriesPage({ params }: { params: { slug: string } }) {
  const meta = getSeriesMetaBySlug(params.slug);
  if (!meta) notFound();

  const seriesBooks = getBooksBySeries(meta.series).sort(
    (a, b) => BAND_ORDER[a.ageBand] - BAND_ORDER[b.ageBand],
  );
  const faqs = seriesFaqs(meta, seriesBooks);

  return (
    <div className="shell py-8 md:py-12">
      <JsonLd data={seriesCollectionSchema(meta, seriesBooks)} />
      <JsonLd data={seriesBreadcrumbSchema(meta)} />
      <JsonLd data={faqPageSchema(faqs)} />

      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
        <Link href="/books" className="hover:text-forest">
          Books
        </Link>
        <span aria-hidden>→</span>
        <span className="text-ink">{meta.name}</span>
      </nav>

      {/* Hero */}
      <header
        className="rounded-card-lg p-7 text-white shadow-cover md:p-10"
        style={{ backgroundImage: meta.gradient }}
      >
        <p className="font-sans text-[13px] font-bold uppercase tracking-wider text-white/80">
          The {meta.name} series
        </p>
        <h1 className="mt-2 max-w-3xl font-display text-[30px] font-extrabold leading-tight md:text-[44px]">
          {meta.name}
        </h1>
        <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-white/90 md:text-[18px]">
          {meta.tagline}
        </p>
        {meta.amazonSeriesUrl && (
          <div className="mt-6">
            <AmazonButton
              href={meta.amazonSeriesUrl}
              label={`Shop the ${meta.name} series on Amazon`}
            />
          </div>
        )}
      </header>

      {/* Intro */}
      <p className="mx-auto mt-8 max-w-2xl text-center text-[16px] leading-relaxed text-body-soft md:text-[17px]">
        {meta.series === "Trace & Learn" ? (
          <>
            The {meta.name} line comes as three workbooks — one for every stage
            from ages 2 to 10. Handwriting that grows with your child: first
            pencil control for the littlest, tracing and writing letters,
            numbers, and sight words in the middle years, and joined-up cursive
            for older kids.
          </>
        ) : (
          <>
            The {meta.name} series comes as three coloring &amp; activity books —
            one for every stage from ages 2 to 10. The animals stay familiar
            while the activities grow with your child: first words and counting
            for the littlest, tracing and reading in the middle years, and true
            facts to read, think about, and color for older children.
          </>
        )}
      </p>

      {/* The three books */}
      <section className="mt-10 md:mt-12">
        <h2 className="mb-5 font-display text-[22px] font-extrabold text-ink md:text-[28px]">
          The three books
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {seriesBooks.map((book) => (
            <BookCard key={book.slug} book={book} showDescription />
          ))}
        </div>
      </section>

      {/* Age-band explainer */}
      <section className="mt-14 md:mt-16">
        <h2 className="mb-5 font-display text-[22px] font-extrabold text-ink md:text-[28px]">
          A book for every stage
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {ageBands.map((band) => (
            <div
              key={band.id}
              className="rounded-card p-6"
              style={{ backgroundColor: band.bg }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-3.5 w-3.5 rounded-pill"
                  style={{ backgroundColor: band.solid }}
                />
                <h3
                  className="font-display text-[18px] font-extrabold"
                  style={{ color: band.text }}
                >
                  {band.name}
                </h3>
                <span className="font-sans text-[13px] font-semibold text-muted-soft">
                  {band.ages}
                </span>
              </div>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-body">
                {meta.series === "Trace & Learn"
                  ? TL_BAND_DESC[band.ageBand]
                  : band.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Common questions (visible copy matches the FAQPage JSON-LD above) */}
      <Faq
        items={faqs}
        heading={`Common questions about the ${meta.name} series`}
        className="mt-14 md:mt-16"
      />

      {/* Browse all */}
      <div className="mt-12 text-center">
        <Link
          href="/books"
          className="font-sans text-[15px] font-bold text-forest hover:underline"
        >
          Browse all Little Acre books →
        </Link>
      </div>
    </div>
  );
}
