"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { AgeBand, Book, Series } from "@/lib/types";
import { ageBands, seriesList } from "@/content/ageBands";
import { BookCard } from "./BookCard";

const ageOptions: { value: AgeBand | "all"; label: string }[] = [
  { value: "all", label: "All ages" },
  ...ageBands.map((b) => ({ value: b.ageBand, label: b.name })),
];

function bandSolid(age: AgeBand): string {
  return ageBands.find((b) => b.ageBand === age)!.solid;
}

export function BooksBrowser({ books }: { books: Book[] }) {
  const router = useRouter();
  const params = useSearchParams();

  const activeAge = (params.get("age") as AgeBand | "all") || "all";
  const activeSeries = (params.get("series") as Series | null) || null;

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params.toString());
      if (value === null) next.delete(key);
      else next.set(key, value);
      const qs = next.toString();
      router.replace(qs ? `/books?${qs}` : "/books", { scroll: false });
    },
    [params, router],
  );

  const filtered = useMemo(
    () =>
      books.filter(
        (b) =>
          (activeAge === "all" || b.ageBand === activeAge) &&
          (!activeSeries || b.series === activeSeries),
      ),
    [books, activeAge, activeSeries],
  );

  // Group by band when no specific age is selected.
  const grouped = useMemo(() => {
    if (activeAge !== "all") return null;
    return ageBands
      .map((band) => ({
        band,
        books: filtered.filter((b) => b.ageBand === band.ageBand),
      }))
      .filter((g) => g.books.length > 0);
  }, [activeAge, filtered]);

  return (
    <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-10">
      {/* ───── Mobile chip filters ───── */}
      <div className="md:hidden">
        <div className="no-scrollbar -mx-[18px] flex gap-2 overflow-x-auto px-[18px] pb-1">
          {ageOptions.map((opt) => {
            const selected = activeAge === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setParam("age", opt.value === "all" ? null : opt.value)}
                className={`shrink-0 rounded-pill px-4 py-2 font-sans text-[13px] font-bold transition-colors ${
                  selected
                    ? "bg-forest text-white"
                    : "border border-[#e2dccb] bg-white text-ink"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        <div className="no-scrollbar -mx-[18px] mt-2 flex gap-2 overflow-x-auto px-[18px] pb-1">
          {seriesList.map((series) => {
            const selected = activeSeries === series;
            return (
              <button
                key={series}
                onClick={() => setParam("series", selected ? null : series)}
                className={`shrink-0 rounded-pill border px-4 py-2 font-sans text-[13px] font-bold transition-colors ${
                  selected
                    ? "border-forest bg-forest/10 text-forest"
                    : "border-[#e2dccb] bg-white text-muted"
                }`}
              >
                {series}
              </button>
            );
          })}
        </div>
      </div>

      {/* ───── Desktop sidebar ───── */}
      <aside className="hidden md:block">
        <div className="sticky top-[84px]">
          <h2 className="font-display text-[15px] font-bold uppercase tracking-wider text-muted-soft">
            Age band
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {ageOptions.map((opt) => {
              const selected = activeAge === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setParam("age", opt.value === "all" ? null : opt.value)}
                  className={`flex items-center gap-2.5 rounded-pill px-4 py-2.5 text-left font-sans text-[14px] font-bold transition-colors ${
                    selected
                      ? "bg-forest text-white"
                      : "border border-[#e2dccb] bg-white text-ink hover:border-forest/40"
                  }`}
                >
                  {opt.value !== "all" && (
                    <span
                      className="h-3 w-3 shrink-0 rounded-pill"
                      style={{ backgroundColor: bandSolid(opt.value as AgeBand) }}
                    />
                  )}
                  {opt.label}
                </button>
              );
            })}
          </div>

          <h2 className="mt-8 font-display text-[15px] font-bold uppercase tracking-wider text-muted-soft">
            Series
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {seriesList.map((series) => {
              const selected = activeSeries === series;
              return (
                <button
                  key={series}
                  onClick={() => setParam("series", selected ? null : series)}
                  className={`rounded-pill border px-3.5 py-2 font-sans text-[13px] font-bold transition-colors ${
                    selected
                      ? "border-forest bg-forest/10 text-forest"
                      : "border-[#e2dccb] bg-white text-muted hover:border-forest/40"
                  }`}
                >
                  {series}
                </button>
              );
            })}
          </div>

          {(activeAge !== "all" || activeSeries) && (
            <button
              onClick={() => router.replace("/books", { scroll: false })}
              className="mt-6 font-sans text-[13px] font-bold text-terracotta hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </aside>

      {/* ───── Grid ───── */}
      <div>
        {filtered.length === 0 ? (
          <p className="rounded-card border border-[#ece6d8] bg-white p-8 text-center text-body-soft">
            No books match these filters yet. Try clearing a filter.
          </p>
        ) : grouped ? (
          <div className="space-y-12">
            {grouped.map(({ band, books: bandBooks }) => (
              <section key={band.id}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="h-4 w-4 rounded-pill"
                    style={{ backgroundColor: band.solid }}
                  />
                  <h2
                    className="font-display text-[22px] font-extrabold"
                    style={{ color: band.text }}
                  >
                    {band.name}
                  </h2>
                  <span className="font-sans text-[14px] font-semibold text-muted-soft">
                    {band.ages}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                  {bandBooks.map((book) => (
                    <BookCard key={book.slug} book={book} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {filtered.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
