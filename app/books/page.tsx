import { Suspense } from "react";
import type { Metadata } from "next";
import { books } from "@/content/books";
import { BooksBrowser } from "@/components/BooksBrowser";

export const metadata: Metadata = {
  title: "All books",
  description:
    "Browse Little Acre Learning picture and activity books by age band and theme — for readers ages 2 to 10.",
};

export default function BooksPage() {
  return (
    <div className="shell py-10 md:py-14">
      <header className="mb-8 md:mb-10">
        <h1 className="font-display text-[28px] font-extrabold text-ink md:text-[44px]">
          All books
        </h1>
        <p className="mt-2 max-w-xl text-[15px] text-body-soft md:text-[17px]">
          {books.length} warm, wholesome titles across three age bands and two
          series — Farm Friends and Dinosaur Friends.
        </p>
      </header>

      <Suspense fallback={<div className="py-12 text-muted">Loading books…</div>}>
        <BooksBrowser books={books} />
      </Suspense>
    </div>
  );
}
