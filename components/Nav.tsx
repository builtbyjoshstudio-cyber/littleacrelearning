"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/books", label: "Books" },
  { href: "/printables", label: "Free Printables" },
  { href: "/parents", label: "For Parents" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ece6d8] bg-paper/90 backdrop-blur">
      <nav className="shell flex h-[68px] items-center justify-between">
        <Logo size="sm" />

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-[15px] font-bold transition-colors ${
                isActive(link.href)
                  ? "text-forest [text-decoration:underline_2px] underline-offset-8 decoration-forest"
                  : "text-ink hover:text-forest"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/printables"
            className="rounded-pill bg-terracotta px-5 py-2.5 font-sans text-[14px] font-bold text-white transition-colors hover:bg-[#9f5440]"
          >
            Free pack
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-pill text-forest md:hidden"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-[68px] z-40 bg-ink/20"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative z-50 border-b border-[#ece6d8] bg-paper px-[18px] pb-6 pt-2">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b border-[#ece6d8] py-3.5 font-sans text-[16px] font-bold ${
                    isActive(link.href) ? "text-forest" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/printables"
              className="mt-5 flex items-center justify-center rounded-pill bg-terracotta px-5 py-3.5 font-sans text-[15px] font-bold text-white"
            >
              Get the free pack
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
