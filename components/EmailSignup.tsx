"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

type Variant = "card" | "inline" | "bare";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailSignup({
  variant = "card",
  submitLabel = "Get the free printable pack",
  successMessage = "Check your inbox for the pack!",
  className = "",
  onSuccess,
}: {
  variant?: Variant;
  submitLabel?: string;
  successMessage?: string;
  className?: string;
  onSuccess?: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    // Static site (GitHub Pages) — no server route. To capture real signups,
    // POST { name, email } to an ESP/form endpoint (ConvertKit, Mailchimp,
    // Formspree) here and gate success on res.ok.
    try {
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  const onCard = variant === "card";

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 rounded-card ${
          onCard ? "bg-white p-6" : ""
        } ${className}`}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-sage/20">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 13l4 4L19 7"
              stroke="#46604E"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="font-display text-[17px] font-bold text-forest">
          {successMessage}
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-tile border border-[#e2dccb] bg-white px-4 py-3 font-sans text-[15px] text-ink placeholder:text-muted-soft focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${
        onCard ? "rounded-card bg-white p-5 shadow-card sm:p-6" : ""
      } ${className}`}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="name"
          aria-label="Your first name"
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${fieldClass} sm:flex-1`}
        />
        <input
          type="email"
          name="email"
          required
          aria-label="Email address"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${fieldClass} sm:flex-1`}
        />
      </div>
      <Button
        type="submit"
        variant="secondary"
        fullWidth
        disabled={status === "submitting"}
        className="mt-3"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
      {error && (
        <p className="mt-2 text-[13px] font-semibold text-terracotta" role="alert">
          {error}
        </p>
      )}
      <p className="mt-3 text-[12.5px] text-muted">
        Free printable pack, plus an occasional note. No spam, unsubscribe anytime.
      </p>
    </form>
  );
}
