/**
 * Distinct, recognizable "Find on Amazon" action — warm amber, clearly
 * separate from the forest add-to-cart primary.
 */
export function AmazonButton({
  href,
  fullWidth = false,
  className = "",
}: {
  href: string;
  fullWidth?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2.5 rounded-pill border-2 border-[#E0A24B] bg-[#FCF3DF] px-7 py-3.5 font-sans text-[15px] font-bold text-[#8a5a14] transition-all duration-150 hover:bg-[#F8E8C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0A24B]/50 focus-visible:ring-offset-2",
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 4h2l2.4 12.3a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 8H6"
          stroke="#8a5a14"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 19c1.8 1.3 4.4 2 7 2s5.2-.7 7-2"
          stroke="#E0A24B"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      Find on Amazon
    </a>
  );
}
