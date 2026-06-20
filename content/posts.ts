import type { Post } from "@/lib/types";

// Live blog posts. Empty for now: the original placeholder posts were
// unpublished (they framed the catalog as "stories/picture books", used
// fictional authors, and referenced books that don't exist). They are
// preserved in ./drafts/posts.ts for a possible future, product-aligned rewrite.
export const posts: Post[] = [];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts.filter((p) => p.slug !== post.slug).slice(0, limit);
}
