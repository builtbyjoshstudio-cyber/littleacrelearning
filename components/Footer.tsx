import Link from "next/link";
import { SproutGlyph } from "./Logo";
import { EmailSignup } from "./EmailSignup";

const columns = [
  {
    heading: "Shop",
    links: [
      { href: "/books", label: "Books" },
      { href: "/books?age=2-4", label: "By age" },
      { href: "/books", label: "Bundles" },
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
                <SproutGlyph size={20} />
              </span>
              <span className="font-display text-[20px] font-extrabold text-paper">
                Little Acre Learning
              </span>
            </div>
            <p className="mt-3 max-w-xs font-display text-[18px] font-bold text-paper/80">
              Stories that take root.
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-[13px] text-paper/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Little Acre Learning. All rights reserved.</p>
          <p>Made with care for little readers.</p>
        </div>
      </div>
    </footer>
  );
}
