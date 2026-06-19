import Image from "next/image";

/**
 * Book cover slot. Renders supplied artwork via next/image when present,
 * otherwise a consistent gradient placeholder with the title set in it.
 * Keep the 4:5 aspect ratio so real art drops in cleanly later.
 */
export function CoverPlaceholder({
  title,
  gradient,
  image,
  className = "",
  rounded = "rounded-cover",
}: {
  title: string;
  gradient: string;
  image?: string | null;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden ${rounded} shadow-cover ${className}`}
      style={image ? undefined : { backgroundImage: gradient }}
    >
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-5 text-center">
          <span className="font-display text-[15px] font-extrabold leading-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
