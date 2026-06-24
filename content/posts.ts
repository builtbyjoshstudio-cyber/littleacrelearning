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
