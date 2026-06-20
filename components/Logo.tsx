import Link from "next/link";

/**
 * Finalized brand sprout mark (assets/mark.svg) — colored glyph for light
 * surfaces (nav, inline UI). Inlined so it scales crisply and recolors.
 */
export function LogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 96c10-9 24-13 44-13s34 4 44 13" stroke="#46604E" strokeWidth="7" strokeLinecap="round" />
      <path d="M60 88V46" stroke="#46604E" strokeWidth="7" strokeLinecap="round" />
      <path d="M60 64C50 64 40 58 35 47c12-4 22-1 25 9" fill="#88A98C" />
      <path d="M60 56C72 54 83 46 87 33c-13-3-24 2-27 14" fill="#46604E" />
      <circle cx="60" cy="40" r="6" fill="#B5654A" />
    </svg>
  );
}

/**
 * Reversed mark (assets/mark-reversed.svg) — cream/sand glyph for dark/forest
 * surfaces (footer).
 */
export function LogoMarkReversed({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 96c10-9 24-13 44-13s34 4 44 13" stroke="#F3ECDD" strokeWidth="7" strokeLinecap="round" />
      <path d="M60 88V46" stroke="#F3ECDD" strokeWidth="7" strokeLinecap="round" />
      <path d="M60 64C50 64 40 58 35 47c12-4 22-1 25 9" fill="#DDB48A" />
      <path d="M60 56C72 54 83 46 87 33c-13-3-24 2-27 14" fill="#F3ECDD" />
      <circle cx="60" cy="40" r="6" fill="#DDB48A" />
    </svg>
  );
}

export function Logo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const mark = size === "sm" ? 30 : 36;
  const word = size === "sm" ? "text-[18px]" : "text-[21px]";

  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Little Acre Learning — home"
    >
      <LogoMark size={mark} className="shrink-0" />
      <span
        className={`font-display font-extrabold text-forest tracking-[-0.01em] ${word}`}
      >
        Little Acre Learning
      </span>
    </Link>
  );
}
