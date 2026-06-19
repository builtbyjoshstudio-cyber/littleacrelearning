import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Blob } from "@/components/Blob";
import { ageBands } from "@/content/ageBands";

export const metadata: Metadata = {
  title: "For Parents & Educators",
  description:
    "How Little Acre Learning books are leveled by age to support reading development from ages 2 to 10 — plus bulk orders for educators and libraries.",
};

const features = [
  {
    title: "Leveled by age",
    body: "Every title is sorted into one of three bands — Sprouts, Saplings, and Branches — so the words, length, and themes meet your child exactly where they are.",
    band: ageBands[0],
  },
  {
    title: "Gentle themes",
    body: "Friendship, feelings, nature, and bedtime calm. Our stories handle big emotions with a soft touch, giving children a safe way to understand their world.",
    band: ageBands[1],
  },
  {
    title: "Free guides",
    body: "Each book pairs with printable activities and read-aloud tips, so the learning continues long after the last page is turned.",
    band: ageBands[2],
  },
];

const develops = [
  {
    band: ageBands[0],
    points: [
      "First vocabulary and naming",
      "Page-turning and book handling",
      "Comfort with bedtime routines",
    ],
  },
  {
    band: ageBands[1],
    points: [
      "Early decoding and sight words",
      "Story sequencing and prediction",
      "Naming and managing feelings",
    ],
  },
  {
    band: ageBands[2],
    points: [
      "Reading fluency and stamina",
      "Inference and critical thinking",
      "Empathy through richer characters",
    ],
  },
];

export default function ParentsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Blob className="right-[-120px] top-[-60px] h-[380px] w-[380px]" color="#F8EBCF" opacity={0.7} />
        <div className="shell grid items-center gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-16">
          <div>
            <p className="eyebrow text-sage">For parents &amp; educators</p>
            <h1 className="mt-3 font-display text-[30px] font-extrabold leading-tight text-ink md:text-[48px]">
              Books designed to grow right alongside your child
            </h1>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-body-soft md:text-[19px]">
              We believe the right book at the right moment can turn a reluctant
              reader into a lifelong one. Here&apos;s how our books are built to
              support every stage of the journey.
            </p>
          </div>
          <div
            className="aspect-[4/3] w-full rounded-card-lg shadow-hero"
            style={{ backgroundImage: "linear-gradient(135deg,#8FB6A5,#3F7A6B)" }}
          >
            <div className="flex h-full w-full items-center justify-center p-8 text-center">
              <span className="font-display text-[20px] font-extrabold text-white/95">
                Reading-together photo coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="shell py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-3 md:gap-7">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-card-lg border border-[#ece6d8] bg-white p-7 shadow-card"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-tile"
                style={{ backgroundColor: f.band.bg }}
              >
                <span
                  className="h-5 w-5 rounded-pill"
                  style={{ backgroundColor: f.band.solid }}
                />
              </span>
              <h2 className="mt-4 font-display text-[20px] font-extrabold text-ink">
                {f.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-body-soft">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* What each band develops */}
      <section className="shell py-6 md:py-10">
        <div className="text-center">
          <h2 className="font-display text-[26px] font-extrabold text-ink md:text-[34px]">
            What each age band develops
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] leading-relaxed text-body-soft">
            Our three bands map to the milestones early readers move through.
            Use them as a starting point — every child grows at their own pace.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {develops.map(({ band, points }) => (
            <div
              key={band.id}
              className="rounded-card-lg p-7"
              style={{ backgroundColor: band.bg }}
            >
              <h3
                className="font-display text-[22px] font-extrabold"
                style={{ color: band.text }}
              >
                {band.name}
              </h3>
              <p className="text-[14px] font-bold" style={{ color: band.text, opacity: 0.8 }}>
                {band.ages}
              </p>
              <ul className="mt-4 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
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
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Educator & library CTA */}
      <section className="shell py-12 md:py-16">
        <div className="rounded-card-lg bg-cream p-8 text-center md:p-14 md:text-left">
          <div className="md:flex md:items-center md:justify-between md:gap-10">
            <div className="md:max-w-2xl">
              <h2 className="font-display text-[24px] font-extrabold text-ink md:text-[32px]">
                Educator &amp; library orders
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-body-soft md:text-[18px]">
                Building a classroom library or stocking shelves? We offer bulk
                pricing, leveled bundles by age band, and free educator guides for
                schools, libraries, and reading programs.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:shrink-0">
              <ButtonLink href="mailto:hello@littleacrelearning.com" variant="primary" size="lg">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
