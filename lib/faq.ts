import type { AgeBand, Book, Series, SeriesMeta } from "@/lib/types";
import type { FaqItem } from "@/lib/schema";
import { getBandByAge } from "@/content/ageBands";

// Per-band phrasing. Answers are definition-first and self-contained (the shape
// AI answer engines lift) and must never use "story"/"stories" framing, never
// name a personal author, and never state a price (Amazon is the price source
// of truth). Keep the coloring/activity framing throughout.
const SKILL_FOCUS: Record<AgeBand, string> = {
  "2-4": "first words, animal sounds, and counting",
  "5-7": "tracing sentences, early reading, and handwriting",
  "8-10": "reading true facts, thinking through a question, and detailed coloring",
};

const INSIDE: Record<AgeBand, string> = {
  "2-4":
    "a big, bold picture to color, with a sound to make and something to count",
  "5-7":
    "a picture to color with a sentence to trace and a true fact to read",
  "8-10":
    "a detailed scene to color with a true fact to read, a question to think about, and a find-and-color challenge",
};

const SERIES_SUBJECT: Record<Series, string> = {
  "Farm Friends": "farm animal",
  "Dino Friends": "dinosaur",
  "Ocean Friends": "sea creature",
  "Safari Friends": "safari animal",
  "Jungle Friends": "rainforest animal",
  "Trace & Learn": "handwriting", // workbook line — uses the TL branch below, not this noun
};

// Trace & Learn is a workbook line (handwriting / pre-writing), NOT an animal
// coloring series, so its FAQ copy is written separately from the maps above.
const TL_FOCUS: Record<AgeBand, string> = {
  "2-4": "pencil control and pre-writing — tracing big lines, curves, corners, and first shapes before letters begin",
  "5-7": "print handwriting — tracing and then writing the alphabet, the numbers 0 to 20, and first sight words",
  "8-10": "joined-up cursive — every cursive letter, the joins between them, and copying real dinosaur facts",
};
const TL_INSIDE: Record<AgeBand, string> = {
  "2-4": "a big start-dot, a follow-the-arrow path, and a chunky dashed line to trace",
  "5-7": "a letter, number, or word to trace on handwriting guidelines, then a space to write it themselves",
  "8-10": "cursive letters, joins, or a dinosaur fact to trace on guidelines, then copy in their own hand",
};

/** Q&A for a single book detail page. */
export function bookFaqs(book: Book): FaqItem[] {
  if (book.series === "Trace & Learn") return traceLearnBookFaqs(book);
  const band = getBandByAge(book.ageBand);
  const ages = band.ages.toLowerCase(); // "ages 2–4"
  const teaches = book.whatItTeaches
    .filter((t) => !/^just right for/i.test(t))
    .map((t) => t.replace(/\s+$/, ""))
    .join("; ");
  const hasFreePack = Boolean(book.freePackUrl);

  return [
    {
      question: `What age is ${book.title} for?`,
      answer: `${book.title} is made for children ${ages} — our ${band.name} age band. At this stage the pages focus on ${SKILL_FOCUS[book.ageBand]}, so the activities meet a child right where they are instead of pushing them ahead.`,
    },
    {
      question: `Is ${book.title} a coloring book or a story book?`,
      answer: `It's a coloring and activity book, not a story book. There is no storyline to follow — instead, every page gives your child ${INSIDE[book.ageBand]}. The goal is learning that feels like play, one little page at a time.`,
    },
    {
      question: `What will my child learn from ${book.title}?`,
      answer: `It is built to grow real skills, not just fill an afternoon. The pages practice ${teaches}. Everything is pitched to ${ages} so your child can succeed on their own and build confidence as they go.`,
    },
    {
      question: `How many pages does ${book.title} have?`,
      answer: `${book.title} has ${book.pages} pictures to color. It is a paperback ${book.format.toLowerCase()} with a clean, uncluttered layout on every page, sized for comfortable coloring at ${ages}.`,
    },
    {
      question: `Where can I buy ${book.title}?`,
      answer: book.amazonUrl
        ? `${book.title} is available now on Amazon as a paperback. We link straight to the Amazon listing, so you always see the current price there.${hasFreePack ? " You can also download a free printable sample pack from this page to try a few pages first." : ""}`
        : `${book.title} is coming soon to Amazon as a paperback. You can preview sample pages on this page now, and it will be available to buy shortly.${hasFreePack ? " A free printable sample pack is available in the meantime." : ""}`,
    },
  ];
}

/** Q&A for a per-series landing page. `books` = the series' three age-band books. */
export function seriesFaqs(meta: SeriesMeta, books: Book[]): FaqItem[] {
  if (meta.series === "Trace & Learn") return traceLearnSeriesFaqs(meta, books);
  const subject = SERIES_SUBJECT[meta.series];
  const total = books.length;
  const live = books.filter((b) => b.amazonUrl).length;
  const anyFreePack = books.some((b) => b.freePackUrl);

  let buyAnswer: string;
  if (live === 0) {
    buyAnswer = `The ${meta.name} series is coming soon to Amazon. You can preview sample pages from each book here on the site now, and the paperbacks will be available shortly.`;
  } else if (live === total) {
    buyAnswer = `All ${total} ${meta.name} books are available now on Amazon as paperbacks. We link straight to each Amazon listing so you always see the current price there.${anyFreePack ? " Free printable sample packs are available here on the site too." : ""}`;
  } else {
    buyAnswer = `${live} of the ${total} ${meta.name} books are available now on Amazon as paperbacks, and the rest are coming soon. You can preview every book here on the site.${anyFreePack ? " Free printable sample packs are available for the titles that are live." : ""}`;
  }

  return [
    {
      question: `What ages is the ${meta.name} series for?`,
      answer: `The ${meta.name} series is made for children ages 2 to 10. It comes as three books, one for each stage: Sprouts (ages 2–4), Saplings (ages 5–7), and Branches (ages 8–10). Every book keeps the same friendly ${subject} theme but pitches the activities to that age.`,
    },
    {
      question: `Are the ${meta.name} books coloring books or story books?`,
      answer: `They are coloring and activity books, not story books. Each one is full of ${subject}s to color, paired with age-right activities — counting and first words for the youngest, tracing and reading in the middle, and true facts to read and think about for the oldest.`,
    },
    {
      question: `What will my child learn from the ${meta.name} series?`,
      answer: `Each age band builds different skills. Ages 2–4 practice ${SKILL_FOCUS["2-4"]}. Ages 5–7 work on ${SKILL_FOCUS["5-7"]}. Ages 8–10 focus on ${SKILL_FOCUS["8-10"]}. Because they share a theme, the series grows with your child.`,
    },
    {
      question: `How many books are in the ${meta.name} series?`,
      answer: `Three — one book for each age band: ages 2–4, ages 5–7, and ages 8–10. They share the same ${subject} theme, so a child can move up to the next book as they grow while staying with animals they already love.`,
    },
    {
      question: `Where can I buy the ${meta.name} series?`,
      answer: buyAnswer,
    },
  ];
}

/** Q&A for a Trace & Learn workbook (handwriting line, not a coloring series). */
function traceLearnBookFaqs(book: Book): FaqItem[] {
  const band = getBandByAge(book.ageBand);
  const ages = band.ages.toLowerCase();
  const teaches = book.whatItTeaches.map((t) => t.replace(/\s+$/, "")).join("; ");
  const hasFreePack = Boolean(book.freePackUrl);
  return [
    {
      question: `What age is ${book.title} for?`,
      answer: `${book.title} is made for children ${ages}. It focuses on ${TL_FOCUS[book.ageBand]}, so the practice meets a child right where they are.`,
    },
    {
      question: `Is ${book.title} a coloring book?`,
      answer: `No — it's a handwriting workbook, not a coloring book. Every page is tracing and writing practice: your child gets ${TL_INSIDE[book.ageBand]}. There are clear guidelines to follow and no wrong answers, so wobbles are welcome.`,
    },
    {
      question: `What will my child learn from ${book.title}?`,
      answer: `It builds real handwriting skills, step by step. The pages practice ${teaches}. Everything is pitched to ${ages}, so your child can succeed on their own and build confidence with every page.`,
    },
    {
      question: `How many pages does ${book.title} have?`,
      answer: `${book.title} has ${book.pages} pages of tracing and writing practice. It is a paperback workbook, printed single-sided so pencil and marker never bleed through onto the next activity, and sized for comfortable writing at ${ages}.`,
    },
    {
      question: `Where can I buy ${book.title}?`,
      answer: book.amazonUrl
        ? `${book.title} is available now on Amazon as a paperback. We link straight to the Amazon listing, so you always see the current price there.${hasFreePack ? " You can also download a free printable sample pack from this page to try a few pages first." : ""}`
        : `${book.title} is coming soon to Amazon as a paperback. You can preview sample pages on this page now, and it will be available to buy shortly.${hasFreePack ? " A free printable sample pack is available in the meantime." : ""}`,
    },
  ];
}

/** Q&A for the Trace & Learn series landing page. */
function traceLearnSeriesFaqs(meta: SeriesMeta, books: Book[]): FaqItem[] {
  const total = books.length;
  const live = books.filter((b) => b.amazonUrl).length;
  const anyFreePack = books.some((b) => b.freePackUrl);

  let buyAnswer: string;
  if (live === 0) {
    buyAnswer = `The ${meta.name} series is coming soon to Amazon. You can preview sample pages from each workbook here on the site now, and the paperbacks will be available shortly.`;
  } else if (live === total) {
    buyAnswer = `All ${total} ${meta.name} workbooks are available now on Amazon as paperbacks. We link straight to each Amazon listing so you always see the current price there.${anyFreePack ? " Free printable sample packs are available here on the site too." : ""}`;
  } else {
    buyAnswer = `${live} of the ${total} ${meta.name} workbooks are available now on Amazon as paperbacks, and the rest are coming soon. You can preview every one here on the site.${anyFreePack ? " Free printable sample packs are available for the titles that are live." : ""}`;
  }

  return [
    {
      question: `What ages is the ${meta.name} series for?`,
      answer: `The ${meta.name} series is made for children ages 2 to 10, as three workbooks — one for each stage: pre-writing pen control at ages 2–4, print handwriting (letters, numbers, and sight words) at ages 5–7, and joined-up cursive at ages 8–10.`,
    },
    {
      question: `Are the ${meta.name} books coloring books?`,
      answer: `No — they are handwriting and pre-writing workbooks, not coloring books. Each one is tracing and writing practice on clear guidelines, with a start dot and arrow so every letter is formed the right way from the start.`,
    },
    {
      question: `What will my child learn from the ${meta.name} series?`,
      answer: `Each stage builds on the last. Ages 2–4 practice ${TL_FOCUS["2-4"]}. Ages 5–7 work on ${TL_FOCUS["5-7"]}. Ages 8–10 move on to ${TL_FOCUS["8-10"]}. Together they carry a child from first pencil strokes to confident cursive.`,
    },
    {
      question: `How many books are in the ${meta.name} series?`,
      answer: `Three — one workbook for each stage: ages 2–4, ages 5–7, and ages 8–10, so a child's handwriting can grow from first marks to joined-up cursive.`,
    },
    {
      question: `Where can I buy the ${meta.name} series?`,
      answer: buyAnswer,
    },
  ];
}
