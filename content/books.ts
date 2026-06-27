import type { AgeBand, Book, Series } from "@/lib/types";

export const FARM_GRADIENT = "linear-gradient(135deg,#5BC6BC,#2E9D93)";
export const DINO_GRADIENT = "linear-gradient(135deg,#7FC96B,#4E9A3E)";
export const OCEAN_GRADIENT = "linear-gradient(135deg,#45A8D6,#1E76A6)";
export const SAFARI_GRADIENT = "linear-gradient(135deg,#F2B43C,#C2701F)";

// Sample interior pages live at /previews/<slug>/<n>.jpg
const previews = (slug: string, n: number): string[] =>
  Array.from({ length: n }, (_, i) => `/previews/${slug}/${i + 1}.jpg`);

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
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/33ca28e9-c433-470e-a12d-7fd1feae90e4",
    coverImage: "/covers/farm-friends-2-4.jpg",
    gradient: FARM_GRADIENT,
    previewImages: previews("farm-friends-2-4", 6),
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
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/b9ab1e61-d641-4a83-ad0f-bc6fb25afbbc",
    coverImage: "/covers/farm-friends-5-7.jpg",
    gradient: FARM_GRADIENT,
    previewImages: previews("farm-friends-5-7", 6),
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
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/3f0565aa-b96d-47bb-bd86-b856fafe7be8",
    coverImage: "/covers/farm-friends-8-10.jpg",
    gradient: FARM_GRADIENT,
    previewImages: previews("farm-friends-8-10", 6),
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
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/2774a85f-8308-4095-8461-5baa6a2e835f",
    coverImage: "/covers/dino-friends-2-4.jpg",
    gradient: DINO_GRADIENT,
    previewImages: previews("dino-friends-2-4", 10),
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
    amazonUrl: "https://www.amazon.com/dp/B0H67G4XNJ",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/95f6bf8a-f31e-4ae7-8bd8-6cac5b995699",
    coverImage: "/covers/dino-friends-5-7.jpg",
    gradient: DINO_GRADIENT,
    previewImages: previews("dino-friends-5-7", 10),
  },
  {
    slug: "dino-friends-8-10",
    title: "Little Acre Dino Friends",
    subtitle: "Read · Think · Color",
    series: "Dino Friends",
    bookNumber: 3,
    ageBand: "8-10",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Eighty detailed prehistoric scenes to color, each paired with a true fact and a find-and-color challenge.",
    longDescription:
      "Little Acre Dino Friends is back — now for big kids! Eighty richly detailed pen-and-ink scenes pair real prehistoric science with calm, focused coloring. Read a true Fact Zone, talk over a Think question, then hunt for hidden details with a Find & Color challenge.",
    whatItTeaches: [
      "80 detailed dinosaurs & prehistoric scenes to color",
      "Fact Zone — a true science fact on every page",
      "Think — a question to puzzle over together",
      "Find & Color — hunt for hidden details",
    ],
    pages: 80,
    format: "Coloring book",
    amazonUrl: "https://www.amazon.com/dp/B0H66G7FB7",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/de378864-8434-44ea-9d30-e6b55683ef47",
    coverImage: "/covers/dino-friends-8-10.jpg",
    gradient: DINO_GRADIENT,
    previewImages: previews("dino-friends-8-10", 10),
    featured: true,
  },

  // ───────────────────────── Ocean Friends ─────────────────────────
  {
    slug: "ocean-friends-2-4",
    title: "Little Acre Ocean Friends",
    subtitle: "A Speech & Counting Coloring Book",
    series: "Ocean Friends",
    bookNumber: 1,
    ageBand: "2-4",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Color 50 friendly sea animals, count along, and make splashy ocean sounds — made for little hands.",
    longDescription:
      "Dive into a whole ocean of friendly sea animals! Blow bubbles like the clownfish, wiggle your arms like the octopus, and spout water high like the whale. Every big, bold page has a splashy ocean sound to make and something fun to count together.",
    whatItTeaches: [
      "50 big, bold sea animals to color",
      "Count fins, bubbles & shells from 1 to 5",
      "Splashy ocean sounds & first words",
      "Wiggle, float & stretch along the way",
    ],
    pages: 50,
    format: "Coloring book",
    amazonUrl: "https://www.amazon.com/dp/B0H6SNTK6Q",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/94d8fc05-264a-416b-8792-d690fe3037ac",
    coverImage: "/covers/ocean-friends-2-4.jpg",
    gradient: OCEAN_GRADIENT,
    previewImages: previews("ocean-friends-2-4", 10),
    featured: true,
  },
  {
    slug: "ocean-friends-5-7",
    title: "Little Acre Ocean Friends",
    subtitle: "A Trace, Read & Learn Activity Book",
    series: "Ocean Friends",
    bookNumber: 2,
    ageBand: "5-7",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Trace a sentence and read a true ocean fact on every page while coloring 70 sea animals from reef to deep sea.",
    longDescription:
      "Dive into a whole world of sea animals — from the sunlit reef to the deep, dark ocean! Color the gentle whale shark, the eight-armed octopus, and the glowing anglerfish. Every page has a sentence to trace and a true ocean fact to read together.",
    whatItTeaches: [
      "70 big, bold sea animals to color",
      "Trace a sentence on every page",
      "A true ocean fact to read & learn",
      "Animals of reef, open sea & the deep",
    ],
    pages: 70,
    format: "Activity book",
    amazonUrl: "https://www.amazon.com/dp/B0H6LVJ4MQ",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/f1e4ed0e-b525-4c39-95dc-5a5fff870368",
    coverImage: "/covers/ocean-friends-5-7.jpg",
    gradient: OCEAN_GRADIENT,
    previewImages: previews("ocean-friends-5-7", 10),
  },
  {
    slug: "ocean-friends-8-10",
    title: "Little Acre Ocean Friends",
    subtitle: "Read · Think · Color",
    series: "Ocean Friends",
    bookNumber: 3,
    ageBand: "8-10",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Eighty detailed ocean scenes to color, each paired with a true fact and a find-and-color challenge.",
    longDescription:
      "Dive deep into the ocean's most amazing animals — the mighty blue whale, the mysterious colossal squid, and the strange anglerfish. Every detailed page pairs a true ocean fact with a question to think about as you color.",
    whatItTeaches: [
      "80 detailed sea creatures to color",
      "Fact Zone — a true ocean fact on every page",
      "Think — a question to puzzle over together",
      "Find & Color — hunt for hidden details",
    ],
    pages: 80,
    format: "Coloring book",
    amazonUrl: "https://www.amazon.com/dp/B0H6CCP4PZ",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/29238fd0-ac7b-4daf-968b-61751e109bd6",
    coverImage: "/covers/ocean-friends-8-10.jpg",
    gradient: OCEAN_GRADIENT,
    previewImages: previews("ocean-friends-8-10", 10),
  },

  // ───────────────────────── Safari Friends ─────────────────────────
  {
    slug: "safari-friends-2-4",
    title: "Little Acre Safari Friends",
    subtitle: "A Safari Speech & Counting Coloring Book",
    series: "Safari Friends",
    bookNumber: 1,
    ageBand: "2-4",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Color 50 friendly safari animals, count along, and make wild safari sounds — made for little hands.",
    longDescription:
      "Trek across a whole savanna of friendly animals! Give a great big roar with the lion, swing your trunk like the elephant, and stomp along with the wildebeest. Every big, bold page has a wild safari sound to make and something fun to count together.",
    whatItTeaches: [
      "50 big, bold safari animals to color",
      "Count spots, ears & blades of grass from 1 to 5",
      "Wild safari sounds & first words",
      "Stomp, hop & stretch along the way",
    ],
    pages: 50,
    format: "Coloring book",
    amazonUrl: "https://www.amazon.com/dp/B0H6MDP2LJ",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/de1af5c6-bd5f-4d8a-86cb-2744c3a42a9c",
    coverImage: "/covers/safari-friends-2-4.jpg",
    gradient: SAFARI_GRADIENT,
    previewImages: previews("safari-friends-2-4", 10),
    featured: true,
  },
  {
    slug: "safari-friends-5-7",
    title: "Little Acre Safari Friends",
    subtitle: "A Trace, Read & Learn Activity Book",
    series: "Safari Friends",
    bookNumber: 2,
    ageBand: "5-7",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Trace a sentence and read a true safari fact on every page while coloring 70 animals of the savanna, river, and plains.",
    longDescription:
      "Set off on an African safari and meet the animals of the savanna, river & plains! Color the mighty lion, the towering elephant, and the speedy ostrich. Every page has a sentence to trace and a true animal fact to read together.",
    whatItTeaches: [
      "70 big, bold safari animals to color",
      "Trace a sentence on every page",
      "A true safari fact to read & learn",
      "Animals of the savanna, river & plains",
    ],
    pages: 70,
    format: "Activity book",
    amazonUrl: "https://www.amazon.com/dp/B0H6GTQHYY",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/2d54745e-fc85-4c1e-b0fd-93450bfa6e57",
    coverImage: "/covers/safari-friends-5-7.jpg",
    gradient: SAFARI_GRADIENT,
    previewImages: previews("safari-friends-5-7", 10),
    featured: true,
  },
  {
    slug: "safari-friends-8-10",
    title: "Little Acre Safari Friends",
    subtitle: "Read · Think · Color",
    series: "Safari Friends",
    bookNumber: 3,
    ageBand: "8-10",
    price: null,
    byline: "Little Acre Learning",
    shortDescription:
      "Eighty detailed safari scenes to color, each paired with a true fact and a find-and-color challenge.",
    longDescription:
      "Little Acre Safari Friends is back — now for big kids! Eighty richly detailed pen-and-ink scenes pair real African safari science with calm, focused coloring. Read a true Fact Zone, talk over a Think question, then hunt for hidden details with a Find & Color challenge.",
    whatItTeaches: [
      "80 detailed safari animals & savanna scenes to color",
      "Fact Zone — a true science fact on every page",
      "Think — a question to puzzle over together",
      "Find & Color — hunt for hidden details",
    ],
    pages: 80,
    format: "Coloring book",
    amazonUrl: "https://www.amazon.com/dp/B0H6H75MY1",
    freePackUrl:
      "https://tynkrtoolsco.lemonsqueezy.com/checkout/buy/26b8eb7d-24e0-41f6-884a-9958e610122a",
    coverImage: "/covers/safari-friends-8-10.jpg",
    gradient: SAFARI_GRADIENT,
    previewImages: previews("safari-friends-8-10", 10),
    featured: true,
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
