"use client";

import { useState } from "react";
import { Button } from "./Button";

/**
 * Stub cart action — no commerce backend yet. Shows brief confirmation so the
 * primary CTA reads as functional in the prototype.
 */
export function AddToCartButton({ title }: { title: string }) {
  const [added, setAdded] = useState(false);

  return (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      onClick={() => {
        setAdded(true);
        window.setTimeout(() => setAdded(false), 2000);
      }}
      aria-label={`Add ${title} to cart`}
    >
      {added ? "Added to cart ✓" : "Add to cart"}
    </Button>
  );
}
