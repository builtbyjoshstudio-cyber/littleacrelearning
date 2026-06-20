import type { Metadata } from "next";
import Image from "next/image";
import { books } from "@/content/books";
import { AgeBadge } from "@/components/AgeBadge";
import { Blob } from "@/components/Blob";

export const metadata: Metadata = {
  title: "Free Sample Packs",
  description:
    "Download a free printable sample pack from any Little Acre Learning book — coloring, tracing, and activity pages for ages 2–10, sent to your inbox.",
};

export default function PrintablesPage() {
  const packs = books.filter((b) => b.freePackUrl);

  return (
    <div className="shell py-8 md:py-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-card-lg bg-sage px-6 py-10 md:px-12 md:py-14">
        <Blob className="left-[-60px] bottom-[-80px] h-[280px] w-[280px]" color="#ffffff" opacity={0.18} />
        <div className="relative max-w-2xl text-center md:text-left">
          <p className="eyebrow text-white/80">Free downloads</p>
          <h1 className="mt-2 font-display text-[28px] font-extrabold text-white md:text-[44px]">
            Free printable sample packs
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/90 md:mx-0 md:text-[17px]">
            Try real pages from inside any Little Acre book before you buy. Pick a
            title below and we&apos;ll send the free sample pack straight to your
            inbox — coloring, tracing, and activity pages your little one can start
            on today.
          </p>
        </div>
      </section>

      {/* Pack grid */}
      <section className="mt-12 md:mt-16">
        <h2 className="font-display text-[22px] font-extrabold text-ink md:text-[30px]">
          Pick your free pack
        </h2>
        <p className="mt-2 text-[15px] text-body-soft">
          One free sample for every book — {packs.length} in all.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {packs.map((book) => (
            <div
              key={book.slug}
              className="flex flex-col rounded-card border border-[#ece6d8] bg-white p-3.5 shadow-card"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-cover shadow-cover">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3.5 flex flex-1 flex-col">
                <AgeBadge band={book.ageBand} className="self-start" />
                <h3 className="mt-2 font-display text-[16px] font-extrabold leading-tight text-ink">
                  {book.title}
                </h3>
                <p className="mt-1 text-[12.5px] font-semibold leading-snug text-muted-soft">
                  {book.subtitle}
                </p>
                <a
                  href={book.freePackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-pill bg-forest px-4 py-2.5 font-sans text-[14px] font-bold text-white transition-colors hover:bg-[#3a5142]"
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
                  Get the free pack
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[13px] text-muted-soft">
          Free PDF samples, delivered to your email by Lemon Squeezy. No spam —
          unsubscribe anytime.
        </p>
      </section>
    </div>
  );
}
