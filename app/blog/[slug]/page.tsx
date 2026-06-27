import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost, getRelatedPosts } from "@/content/posts";
import type { PostBlock } from "@/lib/types";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema, blogBreadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  const url = `/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: "Little Acre Learning",
      title: post.title,
      description: post.excerpt,
      url,
      images: ["/og.png"],
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-[19px] font-semibold leading-[1.7] text-body md:text-[20px]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-10 font-display text-[24px] font-bold text-ink md:text-[28px]">
          {block.text}
        </h2>
      );
    case "callout":
      return (
        <aside className="my-8 rounded-card bg-cream p-6">
          <p className="font-display text-[16px] font-extrabold text-forest">
            {block.title}
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-body">{block.text}</p>
        </aside>
      );
    case "p":
    default:
      return (
        <p className="text-[18px] leading-[1.8] text-body md:text-[19px]">
          {block.text}
        </p>
      );
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <article>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd data={blogBreadcrumbSchema(post)} />
      {/* Header */}
      <div className="shell pt-8 md:pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[14px] font-bold text-forest hover:underline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          The Reading Nook
        </Link>

        <div className="mx-auto mt-6 max-w-prose text-center">
          <p className="eyebrow text-sage">
            {post.category} · {post.readTime}
          </p>
          <h1 className="mt-3 font-display text-[30px] font-extrabold leading-tight text-ink md:text-[44px]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-sand font-display text-[16px] font-extrabold text-white">
              {post.author.name[0]}
            </span>
            <div className="text-left">
              <p className="font-sans text-[14px] font-bold text-ink">
                {post.author.name}
              </p>
              <p className="text-[13px] text-muted">
                {post.author.role} · {formatDate(post.date)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="shell mt-8">
        <div
          className="h-[220px] w-full rounded-card-lg shadow-cover md:h-[380px]"
          style={{ backgroundImage: post.gradient }}
        />
      </div>

      {/* Body */}
      <div className="shell mt-10 md:mt-12">
        <div className="mx-auto flex max-w-prose flex-col gap-5">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>

      {/* Keep reading */}
      {related.length > 0 && (
        <section className="mt-16 bg-cream py-14">
          <div className="shell">
            <h2 className="mb-8 text-center font-display text-[24px] font-extrabold text-ink md:text-[30px]">
              Keep reading
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-card border border-[#ece6d8] bg-white shadow-card transition-all duration-150 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div
                    className="aspect-[16/10] w-full"
                    style={{ backgroundImage: p.gradient }}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-sans text-[12px] font-bold uppercase tracking-wider text-sage">
                      {p.category}
                    </p>
                    <h3 className="mt-2 font-display text-[18px] font-extrabold leading-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-body-soft">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
