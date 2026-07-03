import type { FaqItem } from "@/lib/schema";

/**
 * Visible "Common questions" accordion. The answer text is server-rendered into
 * the static HTML (inside <details>, so it is present whether open or closed) —
 * this MUST stay the same Q&A list passed to faqPageSchema() so the on-page copy
 * matches the FAQPage JSON-LD, as Google requires.
 */
export function Faq({
  items,
  heading = "Common questions",
  className = "",
}: {
  items: FaqItem[];
  heading?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <section className={`rounded-card border border-[#ece6d8] bg-white p-6 md:p-8 ${className}`}>
      <h2 className="font-display text-[20px] font-extrabold text-ink md:text-[24px]">
        {heading}
      </h2>
      <div className="mt-4 divide-y divide-[#ece6d8]">
        {items.map((it) => (
          <details key={it.question} className="group py-3.5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16px] font-bold text-ink marker:content-none">
              {it.question}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="shrink-0 text-forest transition-transform duration-150 group-open:rotate-45"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <p className="mt-2.5 max-w-prose text-[15px] leading-relaxed text-body-soft md:text-[16px]">
              {it.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
