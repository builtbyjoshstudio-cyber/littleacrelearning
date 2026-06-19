import Link from "next/link";
import type { Book } from "@/lib/types";
import { AgeBadge } from "./AgeBadge";
import { CoverPlaceholder } from "./CoverPlaceholder";

export function BookCard({
  book,
  showDescription = false,
  className = "",
}: {
  book: Book;
  showDescription?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className={`group flex flex-col rounded-card border border-[#ece6d8] bg-white p-3.5 shadow-card transition-all duration-150 hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1 focus-visible:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/30 ${className}`}
    >
      <CoverPlaceholder
        title={book.title}
        gradient={book.gradient}
        image={book.coverImage}
      />
      <div className="mt-3.5 flex flex-1 flex-col">
        <AgeBadge band={book.ageBand} className="self-start" />
        <h3 className="mt-2 font-display text-[17px] font-extrabold leading-tight text-ink">
          {book.title}
        </h3>
        <p className="mt-1 text-[12.5px] font-semibold leading-snug text-muted-soft">
          {book.subtitle}
        </p>
        {showDescription && (
          <p className="mt-1.5 text-[13.5px] leading-snug text-muted">
            {book.shortDescription}
          </p>
        )}
        <p className="mt-auto pt-2 font-sans text-[15px] font-bold text-terracotta">
          {book.price ?? "Coming soon"}
        </p>
      </div>
    </Link>
  );
}
