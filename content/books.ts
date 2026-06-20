import type { AgeBand, Book, Series } from "@/lib/types";

const FARM_GRADIENT = "linear-gradient(135deg,#5BC6BC,#2E9D93)";
const DINO_GRADIENT = "linear-gradient(135deg,#7FC96B,#4E9A3E)";

export const books: Book[] = [
  // ───────────────────────── Farm Friends ─────────────────────────
  {
    slug: "farm-friends-2-4",
    title: "Little Acre Farm Friends",
    subtitle: "A Speech & Counting Coloring Book",
    series: "Farm Friends",
    bookNumber: 1,
    ageBand: "2-4",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "A big, bright first coloring book — color friendly farm animals, count to ten, and practice happy first words.",
    longDescription:
      "A big, bright coloring book for the littlest learners. Color in friendly farm animals, count out loud from one to ten, and practice happy first words together — moo, oink, baa! Every page is built for little hands just beginning to explore crayons, colors, and sounds.",
    whatItTeaches: [
      "40+ big, bold pictures to color",
      "Count along from 1 to 10",
      "First words & silly animal sounds",
      "Just right for ages 2–4",
    ],
    pages: 40,
    format: "Coloring book",
    amazonUrl: null,
    coverImage: "/covers/farm-friends-2-4.jpg",
    gradient: FARM_GRADIENT,
    featured: true,
  },
  {
    slug: "farm-friends-5-7",
    title: "Little Acre Farm Friends",
    subtitle: "Trace, Read & Learn",
    series: "Farm Friends",
    bookNumber: 2,
    ageBand: "5-7",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Trace true sentences about 40 farm animals to grow reading, handwriting, and curiosity.",
    longDescription:
      "Little Acre Farm Friends is back — now for big-kid learning! Trace fun, true sentences about forty farm animals and places, then read each fact aloud together to grow reading, handwriting, and a whole lot of curiosity.",
    whatItTeaches: [
      "40 farm animals & places — each with a true fact",
      "Trace whole sentences for neat handwriting",
      "Read facts aloud to build vocabulary",
      "Just right for ages 5–7",
    ],
    pages: 40,
    format: "Activity book",
    amazonUrl: "https://www.amazon.com/dp/B0H5RMDKMR",
    coverImage: "/covers/farm-friends-5-7.jpg",
    gradient: FARM_GRADIENT,
    featured: true,
  },
  {
    slug: "farm-friends-8-10",
    title: "Little Acre Farm Friends",
    subtitle: "Read · Think · Color",
    series: "Farm Friends",
    bookNumber: 3,
    ageBand: "8-10",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Forty detailed farm scenes to color, each paired with a true fact and a find-and-color challenge.",
    longDescription:
      "Little Acre Farm Friends is back — now for big kids! Forty richly detailed pen-and-ink scenes pair real farm science with calm, focused coloring. Read a true Fact Zone, talk over a Think question, then hunt for hidden details with a Find & Color challenge.",
    whatItTeaches: [
      "40 detailed animals & farm scenes to color",
      "Fact Zone — a true science fact on every page",
      "Think — a question to puzzle over together",
      "Find & Color — hunt for hidden details",
    ],
    pages: 40,
    format: "Coloring book",
    amazonUrl: "https://www.amazon.com/dp/B0H5TNJ4NG",
    coverImage: "/covers/farm-friends-8-10.jpg",
    gradient: FARM_GRADIENT,
    featured: true,
  },

  // ───────────────────────── Dino Friends ─────────────────────────
  {
    slug: "dino-friends-2-4",
    title: "Little Acre Dino Friends",
    subtitle: "A Speech & Counting Activity Coloring Book",
    series: "Dino Friends",
    bookNumber: 1,
    ageBand: "2-4",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Color 50 friendly dinosaurs, count along, and make happy dino sounds — made for little hands.",
    longDescription:
      "Meet a whole valley of gentle, friendly dinosaurs! Reach up tall with Brachiosaurus, stomp like Triceratops, and swish your tail like Stegosaurus. Every big, bold page has a happy dinosaur sound to make and something fun to count together.",
    whatItTeaches: [
      "50 big, bold dinosaurs to color",
      "Count horns, plates & leaves from 1 to 5",
      "Dino sounds & first words to say aloud",
      "Wiggle, stomp & stretch along the way",
    ],
    pages: 50,
    format: "Activity coloring book",
    amazonUrl: "https://www.amazon.com/dp/B0H65VTNMG",
    coverImage: "/covers/dino-friends-2-4.jpg",
    gradient: DINO_GRADIENT,
    featured: true,
  },
  {
    slug: "dino-friends-5-7",
    title: "Little Acre Dino Friends",
    subtitle: "A Trace, Read & Learn Activity Book",
    series: "Dino Friends",
    bookNumber: 2,
    ageBand: "5-7",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Trace a sentence and read a true dino fact on every page while coloring 70 dinosaurs of land, sea, and sky.",
    longDescription:
      "Explore a whole world of dinosaurs — on land, in the sea, and up in the sky! Color the mighty Tyrannosaurus, the long-necked Diplodocus, and the soaring Quetzalcoatlus. Every page has a sentence to trace and a true dino fact to read together.",
    whatItTeaches: [
      "70 big, bold dinosaurs to color",
      "Trace a sentence on every page",
      "A true dino fact to read & learn",
      "Dinos of land, sea & sky",
    ],
    pages: 70,
    format: "Activity book",
    amazonUrl: null,
    coverImage: "/covers/dino-friends-5-7.jpg",
    gradient: DINO_GRADIENT,
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getBooksByAge(ageBand: AgeBand): Book[] {
  return books.filter((b) => b.ageBand === ageBand);
}

export function getBooksBySeries(series: Series): Book[] {
  return books.filter((b) => b.series === series);
}

export function getFeaturedBooks(): Book[] {
  return books.filter((b) => b.featured);
}

export function getRelatedBooks(book: Book, limit = 4): Book[] {
  return books
    .filter((b) => b.series === book.series && b.slug !== book.slug)
    .concat(books.filter((b) => b.series !== book.series && b.slug !== book.slug))
    .slice(0, limit);
}
