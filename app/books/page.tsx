import { Suspense } from "react";
import type { Metadata } from "next";
import { books } from "@/content/books";
import { BooksBrowser } from "@/components/BooksBrowser";

export const metadata: Metadata = {
  title: "All books",
  description:
    "Browse Little Acre Learning coloring & activity books by age band and series — for children ages 2 to 10.",
  alternates: { canonical: "/books/" },
  openGraph: { url: "/books/", images: ["/og.png"] },
};

export default function BooksPage() {
  return (
    <div className="shell py-10 md:py-14">
      <header className="mb-8 md:mb-10">
        <h1 className="font-display text-[28px] font-extrabold text-ink md:text-[44px]">
          All books
        </h1>
        <p className="mt-2 max-w-xl text-[15px] text-body-soft md:text-[17px]">
          {books.length} warm, wholesome coloring &amp; activity books across three
          age bands and four series — Farm Friends, Dino Friends, Ocean Friends,
          and Safari Friends.
        </p>
      </header>

      <Suspense fallback={<div className="py-12 text-muted">Loading books…</div>}>
        <BooksBrowser books={books} />
      </Suspense>
    </div>
  );
}
