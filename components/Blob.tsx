/**
 * Subtle low-opacity organic background motif. Decorative only.
 */
export function Blob({
  className = "",
  color = "#EBF0E6",
  opacity = 1,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M48.8,-63.9C62.6,-54.6,72.7,-39.9,76.9,-23.6C81.1,-7.4,79.4,10.4,72.4,25.6C65.4,40.8,53.1,53.3,38.5,61.6C23.9,69.9,7,73.9,-9.7,72.4C-26.4,70.9,-43,63.8,-55.6,52C-68.2,40.2,-76.8,23.6,-78.6,6.1C-80.4,-11.4,-75.4,-29.9,-64.6,-43.5C-53.8,-57.1,-37.2,-65.9,-20.9,-72.9C-4.6,-79.9,11.4,-85.2,26.5,-80.6C41.6,-76,55.9,-61.6,48.8,-63.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
