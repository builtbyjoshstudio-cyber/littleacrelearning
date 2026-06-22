import Link from "next/link";
import Image from "next/image";
import type { SeriesMeta } from "@/lib/types";
import { getBooksBySeries } from "@/content/books";

/**
 * Homepage "Explore the series" card: a fan of the series' three age-tier
 * covers on the series gradient, with name, tagline, and a count/age line.
 * Covers are pulled live from books.ts so they stay a single source of truth.
 */
export function SeriesCard({ meta }: { meta: SeriesMeta }) {
  const books = getBooksBySeries(meta.series)
    .slice()
    .sort((a, b) => a.bookNumber - b.bookNumber);

  return (
    <Link
      href={meta.href}
      aria-label={`${meta.name} — ${books.length} books, ages 2 to 10`}
      className="group flex flex-col overflow-hidden rounded-card-lg shadow-card transition-all duration-150 hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1 focus-visible:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2"
      style={{ backgroundImage: meta.gradient }}
    >
      {/* Cover fan */}
      <div className="relative flex h-[210px] items-center justify-center">
        {books.map((book, i) => {
          const pos = i - (books.length - 1) / 2; // -1 / 0 / +1 for three tiers
          // Small 520px thumbnail (public/covers/thumbs/) keeps the homepage
          // light; full covers stay the source of truth everywhere else.
          const thumb = book.coverImage.replace("/covers/", "/covers/thumbs/");
          return (
            <span
              key={book.slug}
              className="absolute aspect-[4/5] w-[104px] overflow-hidden rounded-tile bg-white shadow-cover ring-2 ring-white/70 transition-transform duration-200 group-hover:scale-[1.03]"
              style={{
                transform: `translateX(${pos * 58}px) rotate(${pos * 6}deg)`,
                zIndex: pos === 0 ? 3 : 1,
              }}
            >
              <Image
                src={thumb}
                alt=""
                fill
                sizes="120px"
                // Eager: these fan tiles are rotated/absolute, where next/image's
                // lazy IntersectionObserver is unreliable — load them up front.
                loading="eager"
                className="object-cover"
              />
            </span>
          );
        })}
      </div>

      {/* Text */}
      <div className="px-6 pb-6 pt-2 text-center">
        <h3 className="font-display text-[22px] font-extrabold text-white">
          {meta.name}
        </h3>
        <p className="mx-auto mt-2 max-w-[26ch] text-[13.5px] leading-snug text-white/90">
          {meta.tagline}
        </p>
        <p className="mt-3 text-[12px] font-bold uppercase tracking-wider text-white/75">
          {books.length} books · Ages 2–10
        </p>
      </div>
    </Link>
  );
}
