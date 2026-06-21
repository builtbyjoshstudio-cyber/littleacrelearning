import Link from "next/link";
import type { Metadata } from "next";
import { posts, getFeaturedPost } from "@/content/posts";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "The Reading Nook — Blog",
  description:
    "Practical tips and activity ideas for parents and educators using Little Acre Learning's coloring & activity books for ages 2–10 — new guides coming soon.",
  alternates: { canonical: "/blog/" },
  openGraph: { url: "/blog/", images: ["/og.png"] },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const featured = getFeaturedPost();
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : [];

  return (
    <div className="shell py-10 md:py-14">
      <header className="text-center">
        <h1 className="font-display text-[30px] font-extrabold text-ink md:text-[46px]">
          The Reading Nook
        </h1>
        <p className="mt-2 text-[16px] text-body-soft md:text-[19px]">
          Little ideas for big readers.
        </p>
      </header>

      {!featured ? (
        /* No posts yet — coming-soon state */
        <div className="mx-auto mt-10 max-w-xl rounded-card-lg border border-[#ece6d8] bg-white p-8 text-center shadow-card md:mt-14 md:p-12">
          <h2 className="font-display text-[24px] font-extrabold text-ink md:text-[28px]">
            New posts are on the way
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-body-soft md:text-[16px]">
            We&apos;re putting together practical guides for parents, teachers,
            and little learners. Check back soon — in the meantime, explore the
            books and grab a free printable sample pack.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <ButtonLink href="/books" variant="primary" size="lg">
              Browse the books
            </ButtonLink>
            <ButtonLink href="/printables" variant="outline" size="lg">
              Free sample packs
            </ButtonLink>
          </div>
        </div>
      ) : (
        <>
      {/* Featured post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mt-10 grid overflow-hidden rounded-card-lg border border-[#ece6d8] bg-white shadow-card transition-all duration-150 hover:-translate-y-1 hover:shadow-lift md:grid-cols-2"
      >
        <div
          className="aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[280px]"
          style={{ backgroundImage: featured.gradient }}
        />
        <div className="p-7 md:p-10">
          <p className="eyebrow text-sage">
            {featured.category} · {featured.readTime}
          </p>
          <h2 className="mt-2 font-display text-[24px] font-extrabold leading-tight text-ink md:text-[30px]">
            {featured.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-body-soft md:text-[16px]">
            {featured.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-pill border-2 border-forest px-6 py-3 font-sans text-[15px] font-bold text-forest transition-colors group-hover:bg-forest group-hover:text-white">
            Read the post →
          </span>
        </div>
      </Link>

      {/* Post grid */}
      <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-7">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-card border border-[#ece6d8] bg-white shadow-card transition-all duration-150 hover:-translate-y-1 hover:shadow-lift"
          >
            <div
              className="aspect-[16/10] w-full"
              style={{ backgroundImage: post.gradient }}
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="font-sans text-[12px] font-bold uppercase tracking-wider text-sage">
                {post.category} · {post.readTime}
              </p>
              <h3 className="mt-2 font-display text-[19px] font-extrabold leading-tight text-ink">
                {post.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-body-soft">
                {post.excerpt}
              </p>
              <p className="mt-auto pt-4 text-[13px] font-semibold text-muted-soft">
                {formatDate(post.date)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="font-display text-[20px] font-extrabold text-ink">
          Want activity books to go with the tips?
        </p>
        <div className="mt-4">
          <ButtonLink href="/books" variant="primary" size="lg">
            Browse the books
          </ButtonLink>
        </div>
      </div>
        </>
      )}
    </div>
  );
}
