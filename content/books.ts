import type { AgeBand, Book } from "@/lib/types";

export const books: Book[] = [
  // ───────────────────────── Sprouts (Ages 2–4) ─────────────────────────
  {
    slug: "good-night-little-lamb",
    title: "Good Night, Little Lamb",
    series: "Farm Friends",
    ageBand: "2-4",
    price: "$9.99",
    byline: "by The Little Acre Studio",
    shortDescription: "A gentle bedtime tour of a sleepy farm.",
    longDescription:
      "As the sun dips behind the barn, Little Lamb says good night to every friend on the farm — the dozing ducks, the quiet cows, and the moon above the meadow. Soft, rhythmic text makes this a calming last story before sleep, with cozy scenes little ones will ask for again and again.",
    whatItTeaches: [
      "Calming bedtime routines",
      "First farm animal names",
      "Gentle rhyme & rhythm",
    ],
    pages: 24,
    format: "Board book",
    theme: "Bedtime",
    readTime: "4 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER1",
    coverImage: null,
    gradient: "linear-gradient(135deg,#88A98C,#46604E)",
    featured: true,
  },
  {
    slug: "one-little-seed",
    title: "One Little Seed",
    series: "Farm Friends",
    ageBand: "2-4",
    price: "$9.99",
    byline: "by The Little Acre Studio",
    shortDescription: "Count along as a tiny seed becomes a garden.",
    longDescription:
      "One little seed, two green leaves, three bright flowers… Count from one to ten while a single seed grows into a whole garden full of friends. Bold shapes and a satisfying repeating refrain make early counting feel like play.",
    whatItTeaches: [
      "Counting 1–10",
      "How plants grow",
      "Cause and effect",
    ],
    pages: 22,
    format: "Board book",
    theme: "Nature & seasons",
    readTime: "4 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER2",
    coverImage: null,
    gradient: "linear-gradient(135deg,#9CB87F,#5C7A4A)",
  },
  {
    slug: "stomp-little-dino",
    title: "Stomp, Little Dino!",
    series: "Dinosaur Friends",
    ageBand: "2-4",
    price: "$9.99",
    byline: "by The Little Acre Studio",
    shortDescription: "A noisy, joyful book of dinosaur movements.",
    longDescription:
      "Stomp like a big dino, flap like a winged one, and curl up small like a hatchling. This lift-and-move story invites toddlers to wiggle along with each playful page — perfect for burning a little energy before quiet time.",
    whatItTeaches: [
      "Action words & movement",
      "Body awareness",
      "Following simple directions",
    ],
    pages: 20,
    format: "Board book",
    theme: "Feelings",
    readTime: "3 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER3",
    coverImage: null,
    gradient: "linear-gradient(135deg,#E0A86B,#C9573E)",
  },

  // ───────────────────────── Saplings (Ages 5–7) ─────────────────────────
  {
    slug: "the-mossy-path",
    title: "The Mossy Path",
    series: "Farm Friends",
    ageBand: "5-7",
    price: "$12.99",
    byline: "by The Little Acre Studio",
    shortDescription: "Two friends find their way home through the woods.",
    longDescription:
      "When Hen and Hedgehog wander off the mossy path, the woods feel a little bigger and a little darker. But by working together — and remembering what they noticed on the way in — they find their way back to the warm farm gate. A reassuring story about problem-solving and the comfort of a good friend.",
    whatItTeaches: [
      "Problem-solving",
      "Working together",
      "Naming feelings like worry",
    ],
    pages: 32,
    format: "Paperback picture book",
    theme: "Friendship",
    readTime: "8 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER4",
    coverImage: null,
    gradient: "linear-gradient(135deg,#8FB6A5,#3F7A6B)",
    featured: true,
  },
  {
    slug: "when-the-leaves-turn",
    title: "When the Leaves Turn",
    series: "Farm Friends",
    ageBand: "5-7",
    price: "$12.99",
    byline: "by The Little Acre Studio",
    shortDescription: "A year on the farm, one season at a time.",
    longDescription:
      "Follow the little farm through spring rain, summer sun, autumn leaves, and the first quiet snow. Each season brings new chores, new colors, and new reasons to be grateful — a warm introduction to the year going round.",
    whatItTeaches: [
      "The four seasons",
      "Patience & change",
      "Gratitude",
    ],
    pages: 34,
    format: "Paperback picture book",
    theme: "Nature & seasons",
    readTime: "9 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER5",
    coverImage: null,
    gradient: "linear-gradient(135deg,#E7C46A,#C99A33)",
  },
  {
    slug: "the-littlest-long-neck",
    title: "The Littlest Long-Neck",
    series: "Dinosaur Friends",
    ageBand: "5-7",
    price: "$12.99",
    byline: "by The Little Acre Studio",
    shortDescription: "Being small turns out to be a big advantage.",
    longDescription:
      "Pip is the smallest long-neck in the herd, and she's tired of always being last. But when the herd needs someone who can squeeze through a narrow canyon, Pip discovers that the very thing she worried about is exactly what makes her special. A gentle story about self-worth.",
    whatItTeaches: [
      "Self-worth & confidence",
      "Big feelings, named gently",
      "Belonging",
    ],
    pages: 32,
    format: "Paperback picture book",
    theme: "Feelings",
    readTime: "8 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER6",
    coverImage: null,
    gradient: "linear-gradient(135deg,#C9A8D4,#7A5C8E)",
    featured: true,
  },

  // ───────────────────────── Branches (Ages 8–10) ─────────────────────────
  {
    slug: "the-river-that-remembered",
    title: "The River That Remembered",
    series: "Farm Friends",
    ageBand: "8-10",
    price: "$14.99",
    byline: "by The Little Acre Studio",
    shortDescription: "A summer mystery along the old farm creek.",
    longDescription:
      "When the creek behind the farm runs dry, three friends set out to find the source — and uncover the story of how the whole valley came to be. A longer chapter-style read full of wonder, teamwork, and just enough adventure for confident readers.",
    whatItTeaches: [
      "Cause & effect in nature",
      "Curiosity & research",
      "Perseverance",
    ],
    pages: 64,
    format: "Illustrated chapter book",
    theme: "Nature & seasons",
    readTime: "25 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER7",
    coverImage: null,
    gradient: "linear-gradient(135deg,#7FA8B8,#3F6E7A)",
    featured: true,
  },
  {
    slug: "fossil-finders-club",
    title: "The Fossil Finders Club",
    series: "Dinosaur Friends",
    ageBand: "8-10",
    price: "$14.99",
    byline: "by The Little Acre Studio",
    shortDescription: "Four kids, one museum, and a missing bone.",
    longDescription:
      "The Fossil Finders Club thought they'd seen every exhibit at the natural history museum — until a single dinosaur bone goes missing the night before the big opening. With careful observation and a little courage, the club pieces together what really happened. A satisfying mystery for budding scientists.",
    whatItTeaches: [
      "Observation & deduction",
      "Teamwork under pressure",
      "How fossils form",
    ],
    pages: 72,
    format: "Illustrated chapter book",
    theme: "Friendship",
    readTime: "28 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER8",
    coverImage: null,
    gradient: "linear-gradient(135deg,#9CB87F,#46604E)",
  },
  {
    slug: "the-quiet-storm",
    title: "The Quiet Storm",
    series: "Dinosaur Friends",
    ageBand: "8-10",
    price: "$14.99",
    byline: "by The Little Acre Studio",
    shortDescription: "Learning that brave and scared can live together.",
    longDescription:
      "Rex is the bravest dino in the valley — until the night of the great storm, when even he feels his heart pound. Through a long, dark night he learns that real courage isn't the absence of fear, but the choice to help your friends anyway. A thoughtful read about big emotions.",
    whatItTeaches: [
      "Emotional resilience",
      "Empathy & helping others",
      "Courage vs. fearlessness",
    ],
    pages: 68,
    format: "Illustrated chapter book",
    theme: "Feelings",
    readTime: "26 min",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER9",
    coverImage: null,
    gradient: "linear-gradient(135deg,#DDB48A,#B5654A)",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getBooksByAge(ageBand: AgeBand): Book[] {
  return books.filter((b) => b.ageBand === ageBand);
}

export function getFeaturedBooks(): Book[] {
  return books.filter((b) => b.featured);
}

export function getRelatedBooks(book: Book, limit = 4): Book[] {
  return books
    .filter((b) => b.ageBand === book.ageBand && b.slug !== book.slug)
    .concat(books.filter((b) => b.ageBand !== book.ageBand && b.slug !== book.slug))
    .slice(0, limit);
}
