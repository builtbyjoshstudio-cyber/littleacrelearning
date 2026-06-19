import type { AgeBand } from "@/lib/types";
import { getBandByAge } from "@/content/ageBands";

type BadgeVariant = AgeBand | "bedtime";

const bedtime = { bg: "#e6eee4", text: "#46604E", label: "Bedtime" };

export function AgeBadge({
  band,
  className = "",
}: {
  band: BadgeVariant;
  className?: string;
}) {
  const { bg, text, label } =
    band === "bedtime"
      ? bedtime
      : (() => {
          const meta = getBandByAge(band);
          return { bg: meta.bg, text: meta.text, label: meta.ages };
        })();

  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 font-sans text-[12px] font-bold ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  );
}
