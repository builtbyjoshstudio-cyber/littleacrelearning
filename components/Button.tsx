import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-sans font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-paper hover:bg-[#3a5142]",
  secondary: "bg-terracotta text-white hover:bg-[#9f5440]",
  outline:
    "bg-white text-forest border-2 border-forest hover:bg-forest hover:text-paper",
};

const sizes: Record<Size, string> = {
  md: "text-[15px] px-7 py-3.5",
  lg: "text-base px-8 py-4",
};

function classes(variant: Variant, size: Size, fullWidth: boolean, extra = "") {
  return [
    base,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    extra,
  ].join(" ");
}

interface SharedProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: SharedProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={classes(variant, size, fullWidth, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  href,
  children,
  ...props
}: SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { href: string }) {
  return (
    <Link
      href={href}
      className={classes(variant, size, fullWidth, className)}
      {...props}
    >
      {children}
    </Link>
  );
}
