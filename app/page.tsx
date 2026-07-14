import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { BookCard } from "@/components/BookCard";
import { Blob } from "@/components/Blob";
import { SeriesCard } from "@/components/SeriesCard";
import { ageBands } from "@/content/ageBands";
import { seriesMetaList } from "@/content/series";
import { getFeaturedBooks } from "@/content/books";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", images: ["/og.png"] },
};

export default function HomePage() {
  const featured = getFeaturedBooks();

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden">
        <Blob className="left-[-120px] top-[-80px] h-[420px] w-[420px]" color="#EBF0E6" />
        <Blob
          className="right-[-100px] top-[120px] hidden h-[320px] w-[320px] md:block"
          color="#F8EBCF"
          opacity={0.6}
        />
        <div className="shell grid grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="text-center md:text-left">
            <p className="eyebrow text-sage">Coloring &amp; activity books for ages 2–10</p>
            <h1 className="mt-3 font-display text-[30px] font-extrabold leading-[1.08] text-ink md:text-[54px]">
              Grow a love of learning, one little page at a time
            </h1>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-body-soft md:mx-0 md:text-[19px]">
              Warm, wholesome coloring &amp; activity books — thoughtfully leveled
              for every stage, from first words to confident readers.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:justify-start">
              <ButtonLink href="/books" variant="primary" size="lg">
                Shop the books
              </ButtonLink>
              <ButtonLink href="/printables" variant="outline" size="lg">
                Free printable pack
              </ButtonLink>
            </div>
          </div>

          {/* Book arc */}
          <div className="relative">
            <div className="relative mx-auto flex h-[280px] items-center justify-center sm:h-[340px] md:h-[430px]">
              {/* Mint backdrop panel */}
              <div className="absolute left-1/2 top-[12px] h-[210px] w-[90%] max-w-[300px] -translate-x-1/2 rounded-[28px] bg-[#E8EFDF] sm:h-[260px] sm:max-w-[360px] md:top-[18px] md:h-[380px] md:max-w-[430px] md:rounded-[32px]" />
              {/* Three covers in a gentle arc — priority (above the fold), never lazy */}
              <div className="relative flex items-center justify-center">
                <span className="relative -mr-[16px] block h-[140px] w-[107px] translate-y-4 -rotate-6 overflow-hidden rounded-[9px] shadow-[0_18px_32px_rgba(46,58,48,0.24)] sm:-mr-[20px] sm:h-[176px] sm:w-[135px] md:-mr-[26px] md:h-[268px] md:w-[206px] md:translate-y-5 md:rounded-[11px]">
                  <Image
                    src="/covers/hero/ocean-friends-2-4.jpg"
                    alt="Ocean Friends, ages 2–4"
                    fill
                    sizes="(max-width: 768px) 135px, 206px"
                    priority
                    className="object-cover"
                  />
                </span>
                <span className="relative z-[2] block h-[156px] w-[120px] overflow-hidden rounded-[10px] shadow-[0_24px_42px_rgba(46,58,48,0.30)] sm:h-[192px] sm:w-[147px] md:h-[294px] md:w-[226px] md:rounded-[12px]">
                  <Image
                    src="/covers/hero/farm-friends-8-10.jpg"
                    alt="Farm Friends, ages 8–10"
                    fill
                    sizes="(max-width: 768px) 147px, 226px"
                    priority
                    className="object-cover"
                  />
                </span>
                <span className="relative -ml-[16px] block h-[140px] w-[107px] translate-y-4 rotate-6 overflow-hidden rounded-[9px] shadow-[0_18px_32px_rgba(46,58,48,0.24)] sm:-ml-[20px] sm:h-[176px] sm:w-[135px] md:-ml-[26px] md:h-[268px] md:w-[206px] md:translate-y-5 md:rounded-[11px]">
                  <Image
                    src="/covers/hero/dino-friends-5-7.jpg"
                    alt="Dino Friends, ages 5–7"
                    fill
                    sizes="(max-width: 768px) 135px, 206px"
                    priority
                    className="object-cover"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Find the right shelf ───────────── */}
      <section className="shell py-14 md:py-16">
        <div className="text-center">
          <p className="eyebrow text-sage">By stage, not just age</p>
          <h2 className="mt-2 font-display text-[24px] font-bold text-ink md:text-[30px]">
            Find the right shelf
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3 md:gap-6">
          {ageBands.map((band) => (
            <Link
              key={band.id}
              href={`/books?age=${band.ageBand}`}
              className="group flex items-center gap-4 rounded-card-lg p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-lift md:flex-col md:items-start md:gap-0"
              style={{ backgroundColor: band.bg }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill md:mb-4 md:h-14 md:w-14"
                style={{ backgroundColor: band.solid }}
              >
                <span className="font-display text-[18px] font-extrabold text-white">
                  {band.name[0]}
                </span>
              </span>
              <div className="flex-1 md:flex-none">
                <h3
                  className="font-display text-[20px] font-extrabold"
                  style={{ color: band.text }}
                >
                  {band.name}
                </h3>
                <p
                  className="text-[13px] font-semibold"
                  style={{ color: band.text, opacity: 0.8 }}
                >
                  {band.ages}
                </p>
                <p className="mt-2 hidden text-[14.5px] leading-snug text-body-soft md:block">
                  {band.description}
                </p>
              </div>
              <svg
                className="shrink-0 transition-transform group-hover:translate-x-1 md:hidden"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                style={{ color: band.text }}
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────── Explore the series ───────────── */}
      <section className="shell py-8 md:py-12">
        <div className="text-center">
          <p className="eyebrow text-sage">By series</p>
          <h2 className="mt-2 font-display text-[24px] font-bold text-ink md:text-[30px]">
            Explore the series
          </h2>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {seriesMetaList.map((meta) => (
            <SeriesCard key={meta.series} meta={meta} />
          ))}
        </div>
      </section>

      {/* ───────────── New this season ───────────── */}
      <section className="shell py-8 md:py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow text-terracotta">Fresh off the press</p>
            <h2 className="mt-2 font-display text-[24px] font-bold text-ink md:text-[30px]">
              New this season
            </h2>
          </div>
          <Link
            href="/books"
            className="hidden font-sans text-[15px] font-bold text-forest hover:underline md:inline"
          >
            See all books →
          </Link>
        </div>

        {/* Desktop grid / mobile horizontal scroll */}
        <div className="no-scrollbar mt-7 flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {featured.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
              className="w-[62vw] shrink-0 snap-start sm:w-[42vw] md:w-auto"
            />
          ))}
        </div>
        <Link
          href="/books"
          className="mt-5 inline-block font-sans text-[15px] font-bold text-forest hover:underline md:hidden"
        >
          See all books →
        </Link>
      </section>

      {/* ───────────── Why parents trust us ───────────── */}
      <section className="shell py-14 md:py-16">
        <div className="rounded-card-lg bg-cream p-8 md:p-12">
          <div className="text-center">
            <p className="eyebrow text-sage">Why parents trust us</p>
            <h2 className="mt-2 font-display text-[24px] font-bold text-ink md:text-[30px]">
              Made by people who care about little readers
            </h2>
          </div>
          <div className="mt-9 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Leveled by stage",
                body: "Every title is matched to what delights and stretches a child at each age — never too easy, never too much.",
              },
              {
                title: "Gentle, wholesome fun",
                body: "Friendly animals, first words, counting, and true facts — learning that feels like play, page after page.",
              },
              {
                title: "Free guides & printables",
                body: "Coloring pages, activity sheets, and parent prompts to extend every book beyond the last page.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <h3 className="font-display text-[20px] font-extrabold text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Signup banner ───────────── */}
      <section className="shell pb-16">
        <div className="relative overflow-hidden rounded-card-lg bg-sage px-6 py-10 md:px-12 md:py-14">
          <Blob className="right-[-60px] top-[-60px] h-[260px] w-[260px]" color="#ffffff" opacity={0.18} />
          <div className="relative grid items-center gap-7 md:grid-cols-2 md:gap-10">
            <div className="text-center md:text-left">
              <h2 className="font-display text-[24px] font-extrabold text-white md:text-[30px]">
                Free printable sample packs
              </h2>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/90 md:text-[16px]">
                Try real pages from inside any Little Acre book — free coloring,
                tracing, and activity samples, sent straight to your inbox.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <ButtonLink href="/printables" variant="primary" size="lg">
                Browse the free packs
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
