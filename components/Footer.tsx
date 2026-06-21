import Link from "next/link";
import { LogoMarkReversed } from "./Logo";
import { EmailSignup } from "./EmailSignup";

const columns = [
  {
    heading: "Shop",
    links: [
      { href: "/books", label: "Books" },
      { href: "/books?age=2-4", label: "By age" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/printables", label: "Free Printables" },
      { href: "/parents", label: "For Parents" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-forest text-paper">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand + signup */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-white/10">
                <LogoMarkReversed size={22} />
              </span>
              <span className="font-display text-[20px] font-extrabold text-paper">
                Little Acre Learning
              </span>
            </div>
            {/* Tagline options — using #1; swap to taste:
                1. Color, trace, learn — one little page at a time.
                2. Little pages, big skills.
                3. Activity books that grow with your child. */}
            <p className="mt-3 max-w-xs font-display text-[18px] font-bold text-paper/80">
              Color, trace, learn — one little page at a time.
            </p>
            <div className="mt-5 max-w-sm">
              <EmailSignup
                variant="bare"
                submitLabel="Get the free pack"
                className="[&_input]:bg-white/95"
              />
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className="md:pt-1">
              <h3 className="font-display text-[15px] font-bold uppercase tracking-wider text-paper/60">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-[15px] text-paper/85 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-[13px] text-paper/60 sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} Built by Josh Studio LLC. All rights reserved.</p>
            <p>Made with care for little readers.</p>
          </div>
          <p className="mt-3 text-center text-[12px] text-paper/45 sm:text-left">
            Little Acre Learning is a brand of{" "}
            <a
              href="https://builtbyjoshstudio.com"
              target="_blank"
              rel="noopener"
              className="underline decoration-paper/30 underline-offset-2 transition-colors hover:text-paper/70"
            >
              Built by Josh Studio LLC
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
