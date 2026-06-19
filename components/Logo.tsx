import Link from "next/link";

export function SproutGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21c0-5 0-8-3.5-10.5M12 21c0-6 1-9 5-11M12 21v-5"
        stroke="#FBF7F0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M8.5 10.5C6 9 4.5 9.5 4 10c.5 2 2 3.5 4.5 3" fill="#88A98C" />
      <path d="M17 10C19.5 8 21 8.5 21.5 9c-.5 2.2-2.2 3.8-4.9 3.2" fill="#88A98C" />
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
  const circle = size === "sm" ? "h-[30px] w-[30px]" : "h-9 w-9";
  const glyph = size === "sm" ? 18 : 22;
  const word = size === "sm" ? "text-[18px]" : "text-[21px]";

  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Little Acre Learning — home"
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-pill bg-forest ${circle}`}
      >
        <SproutGlyph size={glyph} />
      </span>
      <span
        className={`font-display font-extrabold text-forest tracking-[-0.01em] ${word}`}
      >
        Little Acre Learning
      </span>
    </Link>
  );
}
