import type { Post } from "@/lib/types";

// Live blog posts ("The Reading Nook"). Generated from Josh's markdown drafts.
// Body uses the typed PostBlock model (lead / p / h2 / callout) rendered by
// app/blog/[slug]/page.tsx. Earlier placeholder posts (fictional authors,
// "stories" framing) remain unpublished in ./drafts/posts.ts.
export const posts: Post[] = [
  {
    slug: "why-coloring-helps-kids-count",
    title: "Why Coloring Helps Young Children Learn to Count",
    category: "Early Learning",
    readTime: "3 min read",
    author: {
      name: "Little Acre Learning",
      role: "The Little Acre team",
      avatar: null,
    },
    date: "2026-06-23",
    excerpt: "Before a child can write a number, they can point at three ducks and say \"one, two, three.\" Here is why a crayon and a coloring page are quietly some of the best counting tools you can hand a two-year-old.",
    coverImage: null,
    gradient: "linear-gradient(135deg,#E7C46A,#C99A33)",
    featured: true,
    body: [
      {
        type: "lead",
        text: "Before a child can write a number, they can point at three ducks and say \"one, two, three.\" That small act of pointing and naming is the real beginning of math, and it happens long before any worksheet does. A crayon and a simple picture turn out to be quietly some of the best counting tools you can hand a two-year-old.",
      },
      {
        type: "p",
        text: "Counting is not really about the numbers at first. It is about a skill researchers call one-to-one correspondence, which is the understanding that each thing you count gets exactly one number word, in order, and that the last word you say is how many there are. A child who recites \"one, two, three, four, five\" from memory has learned a little song. A child who touches five apples one at a time and lands on \"five\" has learned to count. Those are different things, and the second one is what coloring quietly builds.",
      },
      {
        type: "h2",
        text: "Why a coloring page works so well",
      },
      {
        type: "p",
        text: "When a child colors a picture with three pigs in it, something useful happens. They have to look at each pig, decide to color it, and move on to the next. That is one-to-one correspondence in disguise. The page slows them down and gives each item a clear job: this one, then this one, then this one. There is no rush and no wrong answer, which is exactly the low-pressure setting where a two-year-old does their best thinking.",
      },
      {
        type: "p",
        text: "The pictures matter too. A familiar farm animal or a friendly dinosaur gives the number something to hang onto. \"Three\" is abstract. \"Three ducks\" is a thing a small child can hold in their mind. When you ask \"how many cows do you see?\" and your child colors each one as they count it, the number becomes attached to objects they can point at, not just sounds they repeat back.",
      },
      {
        type: "callout",
        title: "The pointing is the lesson.",
        text: "If your child counts faster than they point, gently slow them down and count along, touching each picture as you say its number. The matching of one word to one object is the whole skill. Speed comes later on its own.",
      },
      {
        type: "h2",
        text: "What to do alongside the coloring",
      },
      {
        type: "p",
        text: "You do not need flashcards. The best counting practice at this age sounds like ordinary talk. Count the buttons as you do up a coat. Count the steps on the way up to bed. Count how many crayons are out on the table. Children learn numbers the way they learn words, by hearing them used for real things, over and over, in no particular hurry.",
      },
      {
        type: "p",
        text: "A coloring book that is built around counting gives that practice a gentle structure. Each page offers a small, finishable task with a clear number attached, and the child gets to do something they already love. The counting comes along for the ride.",
      },
      {
        type: "h2",
        text: "A note on our books",
      },
      {
        type: "p",
        text: "Our coloring and activity books are organized by age so the counting matches where a child actually is. The youngest band, for ages two to four, keeps the counts small and the pictures friendly, with familiar animals from our farm, ocean, and dinosaur series. The goal is never to push a child ahead. It is to give them a happy, unhurried place to point, count, and color until the numbers feel like old friends.",
      },
      {
        type: "p",
        text: "If you would like to try one before you buy, we offer a free preview pack so you can color a few pages together and see how your child takes to it.",
      },
    ],
  },
  {
    slug: "dinosaur-facts-for-kids-by-age",
    title: "Dinosaur Facts for Kids: A Parent's Guide by Age",
    category: "Dinosaurs",
    readTime: "3 min read",
    author: {
      name: "Little Acre Learning",
      role: "The Little Acre team",
      avatar: null,
    },
    date: "2026-06-23",
    excerpt: "A three-year-old and a nine-year-old both love dinosaurs, but they need very different facts. Here is how to pitch the wonder right for each age, including the surprising story of the dinosaur that scientists changed their minds about.",
    coverImage: null,
    gradient: "linear-gradient(135deg,#7FC96B,#4E9A3E)",
    body: [
      {
        type: "lead",
        text: "A three-year-old and a nine-year-old both love dinosaurs, but they need very different facts. The little one wants a big animal with a funny name to roar at. The older one wants to know how we could possibly know any of this from a pile of old bones. The wonder is the same. The way you serve it up is not.",
      },
      {
        type: "p",
        text: "Getting the level right matters more than getting every detail in. A fact pitched too high sails over a toddler's head. A fact pitched too low bores a curious eight-year-old, or worse, feels like you are hiding something. Below is how we think about dinosaur facts across three ages, and a real example of a fact that has to be handled differently depending on who is listening.",
      },
      {
        type: "h2",
        text: "Ages two to four: keep it simple and true",
      },
      {
        type: "p",
        text: "At this age, a dinosaur fact should be one clear idea your child can picture. \"Stegosaurus had plates on its back.\" \"Triceratops had three horns.\" \"Some dinosaurs were taller than a house.\" That is plenty. The job here is wonder and vocabulary, not accuracy in the scientific sense.",
      },
      {
        type: "p",
        text: "The one rule we follow for the youngest readers is that we never hand them a fact that scientists are actually arguing about. A two-year-old cannot hold \"well, it depends\" in their head, and they should not have to. So for this age we stick to the things everyone agrees on: big, small, horns, plates, teeth, tails. Solid ground only.",
      },
      {
        type: "h2",
        text: "Ages five to seven: room for \"scientists changed their minds\"",
      },
      {
        type: "p",
        text: "Around five, children can handle something wonderful: the idea that grown-up experts do not know everything, and that finding out is a process. This is the perfect age to introduce the fact that scientists sometimes change their minds when they find better evidence.",
      },
      {
        type: "callout",
        title: "A fact worth telling carefully.",
        text: "For about a hundred years, scientists thought Brontosaurus and Apatosaurus were the same dinosaur, and many books quietly dropped the name Brontosaurus. Then in 2015, a careful new study of the bones argued that Brontosaurus really was different enough to have its own name after all. Even now, not every scientist agrees. That is not a mistake in the science. That is the science working.",
      },
      {
        type: "p",
        text: "For a five-to-seven-year-old, that is a thrilling idea, not a confusing one. It tells them that the world still has real questions in it, and that careful looking is how we answer them. We would not put that nuance in front of a toddler, but at this age it is a gift.",
      },
      {
        type: "h2",
        text: "Ages eight to ten: let them wrestle with it",
      },
      {
        type: "p",
        text: "By eight, a curious child can handle the actual shape of the argument. How do you decide whether two skeletons belong to the same kind of animal or two different kinds? What counts as enough difference? Why would careful, honest scientists look at the same bones and disagree?",
      },
      {
        type: "p",
        text: "At this age you do not have to smooth anything over. You can tell them that the people who study these animals use detailed measurements and still reach different conclusions, and that both sides are doing real science. Children this age often find that more interesting than a tidy answer, because it respects how much they can already think.",
      },
      {
        type: "h2",
        text: "Why this matters for the books you choose",
      },
      {
        type: "p",
        text: "A good dinosaur book for a small child is not just a list of the biggest and fastest. It is a book that tells the truth at the level the child can use. Our dinosaur activity books are built in these same three age bands, so the facts a child traces and reads are pitched to where they actually are, not above or below.",
      },
      {
        type: "p",
        text: "We also check our claims before they go on the page. Records for biggest, fastest, and tallest get revisited as new fossils turn up, so we would rather give a child a fact that holds up than a flashy one that does not.",
      },
      {
        type: "p",
        text: "If you want to see how that looks in practice, our free preview pack lets you read a few pages with your child before deciding.",
      },
    ],
  },
  {
    slug: "activity-books-ages-5-to-7",
    title: "Tracing, Reading, and Coloring: What to Look For in Activity Books for Ages 5 to 7",
    category: "Early Learning",
    readTime: "3 min read",
    author: {
      name: "Little Acre Learning",
      role: "The Little Acre team",
      avatar: null,
    },
    date: "2026-06-23",
    excerpt: "The years from five to seven are when coloring quietly turns into real schoolwork: letters, words, and the first facts a child reads on their own. Here is what separates an activity book that helps from one that just fills time.",
    coverImage: null,
    gradient: "linear-gradient(135deg,#45A8D6,#1E76A6)",
    body: [
      {
        type: "lead",
        text: "The years from five to seven are a turning point. A child who was happily scribbling at three is now forming letters, sounding out words, and reading short facts on their own. The activity book that suits them is not the same one that suited them two years ago, and the difference is bigger than just smaller pictures. Here is what actually separates a book that helps from one that just fills an afternoon.",
      },
      {
        type: "h2",
        text: "Tracing that builds real handwriting",
      },
      {
        type: "p",
        text: "At this age, tracing is not busywork. It is how a child's hand learns the shapes it will write for the rest of their life. A good tracing line gives the hand a clear path to follow, wide enough to manage and consistent enough to build muscle memory. Letters should be formed the way a teacher would form them, because a child who traces a letter the wrong way is practicing a habit they will later have to unlearn.",
      },
      {
        type: "p",
        text: "Look for tracing that includes both letters and whole words, not just isolated strokes. Tracing the word \"cow\" under a picture of a cow connects the shape of the letters to a thing the child already knows, which is how reading and writing start to reinforce each other.",
      },
      {
        type: "h2",
        text: "Reading a child can actually do alone",
      },
      {
        type: "p",
        text: "The magic of this age is independent reading, and an activity book can feed it directly. A single true sentence under each picture, written in plain words, gives a child something to read on their own and feel proud of. \"The giraffe is the tallest land animal on Earth.\" Short, real, and finishable.",
      },
      {
        type: "callout",
        title: "Watch the facts, not just the words.",
        text: "A fact a child reads in a book becomes a thing they will repeat for years. That is a good reason to choose books that take their facts seriously. We word ours carefully, so a giraffe is the tallest animal on land rather than the tallest animal anywhere, because the small difference is the difference between true and almost true.",
      },
      {
        type: "p",
        text: "The reading should match the age, too. A sentence that is too long or too clever defeats the point, which is to let the child succeed on their own. The win here is not \"look how advanced this book is.\" It is \"look, I read it myself.\"",
      },
      {
        type: "h2",
        text: "Coloring that still has a job to do",
      },
      {
        type: "p",
        text: "Coloring does not stop mattering at five. It is still building the fine motor control that handwriting depends on, and it gives a child a calm, low-stakes way to stay with a page long enough to read what is on it. The best activity books at this age weave the three skills together, so a child traces a word, reads a fact, and colors the picture, all on the same friendly page.",
      },
      {
        type: "h2",
        text: "Why we build in age bands",
      },
      {
        type: "p",
        text: "Our activity books for ages five to seven are designed around exactly this combination of tracing, reading, and coloring. The animals come from series a child can follow across books, from the farm to the ocean to the African safari, and the facts are written to be both true and readable on a child's own. The middle age band is its own deliberate design, not a shrunk-down version of the toddler book or a watered-down version of the older one.",
      },
      {
        type: "p",
        text: "If you would like to see how the tracing lines and reading sentences feel in hand, our free preview pack lets you try a few pages before you commit.",
      },
    ],
  },
  {
    slug: "ocean-facts-for-kids-by-age",
    title: "Ocean Facts for Kids: A Parent's Guide by Age",
    category: "Ocean",
    readTime: "3 min read",
    author: { name: "Little Acre Learning", role: "The Little Acre team", avatar: null },
    date: "2026-07-09",
    excerpt:
      "The ocean is the easiest place in the world to spark wonder — but a fact that thrills an eight-year-old will sail right over a toddler. Here is how to pitch sea-creature facts just right for each age, from the biggest animal that ever lived to the glowing fish of the deep.",
    coverImage: null,
    gradient: "linear-gradient(135deg,#45A8D6,#1E76A6)",
    body: [
      { type: "lead", text: "The ocean is the easiest place in the world to spark wonder in a child. It is enormous, a little bit mysterious, and full of animals that look almost too strange to be real. But the fact that makes an eight-year-old lean in will sail right over a two-year-old's head, and a fact pitched too low bores an older child who is ready for something real. Here is how we think about ocean facts across three ages." },
      { type: "p", text: "The goal is never to cram in the most information. It is to hand a child one true idea they can actually hold, at the level where it lands." },
      { type: "h2", text: "Ages two to four: one big, clear idea" },
      { type: "p", text: "At this age, an ocean fact should be a single picture a child can see in their mind. \"A whale is bigger than a bus.\" \"An octopus has eight arms.\" \"A crab walks sideways.\" That is plenty. The job here is wonder and first words, not detail." },
      { type: "p", text: "The very best one for this age is also true: the blue whale is the biggest animal that has ever lived on Earth — bigger than any dinosaur. Little children love a superlative they can picture, and this one happens to be rock solid, so you never have to walk it back later." },
      { type: "callout", title: "Let them make the sound.", text: "Toddlers learn animals through their bodies. Spout like a whale, wiggle eight octopus arms, snap like a crab. The movement is doing real work — it is how a two-year-old files the animal away to remember it." },
      { type: "h2", text: "Ages five to seven: a fact with a little surprise" },
      { type: "p", text: "Around five, children are ready for a fact that makes them say \"wait, really?\" This is the perfect age for the gently surprising truth — the kind that is completely real but feels almost made up." },
      { type: "p", text: "Try this one: an octopus has three hearts and blue blood. It is true, it is strange, and it is exactly the sort of fact a five-to-seven-year-old will proudly repeat to anyone who will listen. At this age, a single true sentence under a picture — read aloud together — is worth more than a page of explanation." },
      { type: "p", text: "We are careful to keep these facts accurate, because a fact a child reads at six becomes a thing they will repeat for years. \"The blue whale is the biggest animal ever\" holds up. \"Sharks are the oldest fish\" does not, quite — so we leave the shaky ones out." },
      { type: "h2", text: "Ages eight to ten: room for the real deep" },
      { type: "p", text: "By eight, a curious child can handle the genuinely amazing part of the ocean: how much of it we still do not know. More than eighty percent of the ocean has never been mapped or explored. Somewhere down in the dark, there are animals no person has ever seen." },
      { type: "p", text: "This is the age for the anglerfish that makes its own light, for creatures that live where the sun never reaches, for the idea that scientists are still finding new species every year. Older children do not want the ocean tidied up into a few tidy facts. They want to know it is still a real frontier — and it is." },
      { type: "h2", text: "Why this matters for the books you choose" },
      { type: "p", text: "A good ocean book for a small child is not just a parade of colorful fish. It is a book that tells the truth at the level the child can use. Our Ocean Friends coloring and activity books are built in these same three age bands, so the facts a child colors, traces, and reads are pitched to where they actually are." },
      { type: "p", text: "We also check every fact before it goes on the page. Records for biggest, deepest, and fastest get revisited as scientists learn more, so we would rather give a child a fact that lasts than a flashy one that does not." },
      { type: "p", text: "If you would like to see how that looks in practice, our free preview pack lets you read a few pages with your child before deciding." },
    ],
  },
  {
    slug: "best-coloring-books-for-2-year-olds",
    title: "The Best Coloring Books for 2-Year-Olds — What Actually Matters",
    category: "Early Learning",
    readTime: "3 min read",
    author: { name: "Little Acre Learning", role: "The Little Acre team", avatar: null },
    date: "2026-07-09",
    excerpt:
      "A two-year-old does not need a perfect coloring book. They need the right one — big, simple, and forgiving. Here is what actually separates a coloring book that helps a toddler from one that just ends in frustration.",
    coverImage: null,
    gradient: "linear-gradient(135deg,#DDB48A,#B5654A)",
    body: [
      { type: "lead", text: "If you have ever handed a two-year-old a coloring book meant for a five-year-old, you already know how it goes. The pictures are too small, the lines are too fussy, and within a minute the crayon is being used on the table instead. The problem is almost never the child. It is the book." },
      { type: "p", text: "A great coloring book for a two-year-old is not a simpler version of a big-kid book. It is designed from the ground up for hands that are still learning what crayons do. Here is what actually matters when you are choosing one." },
      { type: "h2", text: "Big, bold, and one thing at a time" },
      { type: "p", text: "At two, a child is not coloring inside the lines — and they should not be expected to. What they are doing is something more important: gripping a crayon, making marks on purpose, and connecting the picture in front of them to a word in their mouth." },
      { type: "p", text: "That means the pictures need to be big and bold, with thick outlines and lots of open space. One clear subject per page beats a busy scene every time. A single friendly cow a toddler can scribble all over is a win. A detailed farmyard with twelve tiny animals is a recipe for a thrown crayon." },
      { type: "callout", title: "Forget staying in the lines.", text: "For a two-year-old, the goal of coloring is not neatness — it is the grip, the motion, and the naming. A page covered edge to edge in wild orange scribble is exactly right. Praise the effort, not the accuracy." },
      { type: "h2", text: "Look for a book that talks" },
      { type: "p", text: "The best coloring books for this age do double duty: they are also a reason to talk. A picture of a duck is a chance to say \"duck,\" to quack, to count the ducks on the page, to ask \"what color is the sun?\" This is where a huge amount of early language and early math quietly happens." },
      { type: "p", text: "Books built around first words, animal sounds, and simple counting turn a quiet activity into a back-and-forth. You are not running a lesson — you are just talking about the page. But that ordinary talk is some of the most valuable learning a two-year-old gets." },
      { type: "h2", text: "Paper you can press hard on" },
      { type: "p", text: "This one is easy to overlook. Two-year-olds press hard. Thin, shiny paper tears and bleeds; sturdy matte paper stands up to an enthusiastic fist and takes crayon well. If a book is going to survive being loved by a toddler, the paper has to be part of the plan." },
      { type: "h2", text: "Where our books fit" },
      { type: "p", text: "Our coloring and activity books for ages 2 to 4 — the Sprouts level — are designed around exactly these ideas. Big, bold single animals to color. First words and animal sounds to say out loud. Gentle counting on every page. The pictures come from friendly series a child can follow: the farm, the ocean, dinosaurs, the safari, and the jungle." },
      { type: "p", text: "The point is never to push a two-year-old ahead. It is to give them a happy, unhurried place to grip a crayon, name what they see, and count a few friendly animals — until the whole thing feels like play, because it is." },
      { type: "p", text: "If you would like to try one first, we offer a free printable sample pack so you can color a few pages together and see how your little one takes to it." },
    ],
  },
  {
    slug: "help-your-child-write-their-name",
    title: "How to Help Your Child Learn to Write Their Name",
    category: "Early Learning",
    readTime: "3 min read",
    author: { name: "Little Acre Learning", role: "The Little Acre team", avatar: null },
    date: "2026-07-09",
    excerpt:
      "Writing their own name is often the first \"real\" writing a child does — and it matters more than it looks. Here is a calm, no-pressure way to help, one letter at a time, without turning it into a battle.",
    coverImage: null,
    gradient: "linear-gradient(135deg,#88A98C,#46604E)",
    body: [
      { type: "lead", text: "For a lot of children, their name is the first real word they ever write. It is personal, it is theirs, and getting it down on paper is a genuinely big deal — the moment writing stops being scribble and starts being communication. It is also a place where well-meaning parents can accidentally add pressure. Here is a calmer way to go about it." },
      { type: "p", text: "The short version: start when they are ready, work one letter at a time, and keep it playful. Wobbly is wonderful. The goal at this stage is confidence, not perfection." },
      { type: "h2", text: "First, make sure the hand is ready" },
      { type: "p", text: "Before a child can write letters, their hand needs the strength and control to steer a pencil where they want it to go. That control does not come from writing drills — it comes from coloring, tracing, cutting, threading beads, and squishing playdough. If your child is not quite ready to form letters, that is not a delay to fix. It is a sign to spend more time on the fun stuff that builds the muscles first." },
      { type: "p", text: "A good early clue that a child is ready: they can hold a crayon in a pinch grip (not a fist) and copy simple shapes like a circle, a cross, and a line." },
      { type: "h2", text: "Start with the capital, and start with one letter" },
      { type: "p", text: "Begin with just the first letter of their name, written as a capital. Capitals are made of straight lines and simple curves, which are far easier for a young hand than lowercase. \"Sam\" starts as a single proud \"S\" — and that one letter is the whole lesson for a while. There is no rush to get to the rest." },
      { type: "p", text: "Show them how you form the letter, talking through it as you go: \"Start at the top, curve around.\" Then let them trace over it, then try beside it. Trace, then copy, then do it on their own — that gentle fade is how the shape moves from your hand into theirs." },
      { type: "callout", title: "Form the letters the right way from the start.", text: "A child who learns to draw a letter from the bottom up will have to unlearn it later. It is worth showing the proper starting point and direction now, while the habit is still forming — top-to-bottom, left-to-right, the way a teacher would." },
      { type: "h2", text: "Keep it low-stakes and short" },
      { type: "p", text: "Two minutes of happy name-writing beats ten minutes of frustration every time. Write it in shaving foam on the bath wall. Trace it big with a finger in the air. Let them decorate the letters. If it stops being fun, stop — and come back tomorrow. Children learn to write the same way they learn to talk: through relaxed, repeated, no-pressure practice." },
      { type: "p", text: "And resist the urge to correct every stroke. A name that is proudly wobbly and entirely their own is worth far more than a neat one they felt nagged into. The neatness comes on its own, later, with time." },
      { type: "h2", text: "Where practice pages help" },
      { type: "p", text: "This is exactly where a good tracing and activity book earns its place. Clear letters to trace, formed the way a teacher would form them, give a child a path to follow and a way to practice more on their own with every page. Our activity books for ages 5 to 7 build in this kind of tracing alongside reading and coloring, so handwriting practice feels like part of the fun rather than a worksheet." },
      { type: "p", text: "However you do it — foam, finger-writing, or a page to trace — the recipe is the same: start small, keep it warm, and let your child feel proud. Their name is the first thing they will ever sign. It should feel like a win." },
      { type: "p", text: "If you would like to see how the tracing lines feel in hand, our free preview pack lets you try a few pages before you commit." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts.filter((p) => p.slug !== post.slug).slice(0, limit);
}
