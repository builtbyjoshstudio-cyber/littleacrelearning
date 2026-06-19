"use client";

import { useEffect, useState } from "react";
import type { Printable } from "@/lib/types";
import { AgeBadge } from "./AgeBadge";
import { EmailSignup } from "./EmailSignup";
import { Blob } from "./Blob";

const STORAGE_KEY = "lal_printables_unlocked";

function DocIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        fill="white"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M9 12h6M9 15h6M9 18h4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="10" width="14" height="10" rx="2" fill="#46604E" />
      <path
        d="M8 10V8a4 4 0 0 1 8 0v2"
        stroke="#46604E"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PrintableCard({
  item,
  unlocked,
  onUnlockRequest,
}: {
  item: Printable;
  unlocked: boolean;
  onUnlockRequest: () => void;
}) {
  const isLocked = item.gated && !unlocked;

  return (
    <div className="flex flex-col rounded-card border border-[#ece6d8] bg-white p-4 shadow-card transition-all duration-150 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative">
        <div
          className="flex aspect-[4/3] items-center justify-center rounded-tile"
          style={{ backgroundImage: item.gradient, opacity: isLocked ? 0.55 : 1 }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-tile bg-white/85 shadow-card">
            <DocIcon color="#46604E" />
          </span>
        </div>
        {isLocked && (
          <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-pill bg-white/95 shadow-card">
            <LockIcon />
          </span>
        )}
      </div>

      <div className="mt-3.5 flex flex-1 flex-col">
        <AgeBadge band={item.ageBand} className="self-start" />
        <h3 className="mt-2 font-display text-[16px] font-extrabold leading-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-1 text-[13px] font-semibold text-muted">
          PDF · {item.pages} pages · {isLocked ? "Unlock with email" : "Free"}
        </p>

        <div className="mt-4">
          {isLocked ? (
            <button
              onClick={onUnlockRequest}
              className="flex w-full items-center justify-center gap-2 rounded-pill border-2 border-forest bg-white px-4 py-2.5 font-sans text-[14px] font-bold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              <LockIcon />
              Unlock with email
            </button>
          ) : (
            <a
              href={item.fileUrl}
              className="flex w-full items-center justify-center gap-2 rounded-pill bg-forest px-4 py-2.5 font-sans text-[14px] font-bold text-white transition-colors hover:bg-[#3a5142]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PrintablesClient({ items }: { items: Printable[] }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY) === "1"
    ) {
      setUnlocked(true);
    }
  }, []);

  const unlock = () => {
    setUnlocked(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage may be unavailable; in-session unlock still applies */
    }
  };

  const scrollToSignup = () => {
    document
      .getElementById("printables-signup")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {/* Signup hero */}
      <section
        id="printables-signup"
        className="relative overflow-hidden rounded-card-lg bg-sage px-6 py-10 md:px-12 md:py-14"
      >
        <Blob className="left-[-60px] bottom-[-80px] h-[280px] w-[280px]" color="#ffffff" opacity={0.18} />
        <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="text-center md:text-left">
            <p className="eyebrow text-white/80">Free download</p>
            <h1 className="mt-2 font-display text-[28px] font-extrabold text-white md:text-[44px]">
              The free printable pack
            </h1>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/90 md:mx-0 md:text-[17px]">
              Coloring pages, activity sheets, and reward charts to go with your
              favorite Little Acre stories. Enter your email and we&apos;ll send the
              whole pack — and unlock every printable below.
            </p>
          </div>
          {unlocked ? (
            <div className="flex items-center gap-3 rounded-card bg-white p-6 shadow-card">
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
                You&apos;re all set — every printable is unlocked below.
              </p>
            </div>
          ) : (
            <EmailSignup
              variant="card"
              submitLabel="Send my free pack"
              successMessage="Pack sent! Every printable is unlocked below."
              onSuccess={unlock}
            />
          )}
        </div>
      </section>

      {/* Browse grid */}
      <section className="mt-12 md:mt-16">
        <h2 className="font-display text-[22px] font-extrabold text-ink md:text-[30px]">
          Browse printables
        </h2>
        <p className="mt-2 text-[15px] text-body-soft">
          {items.filter((i) => !i.gated).length} free now ·{" "}
          {items.filter((i) => i.gated).length} unlock with email
        </p>
        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((item) => (
            <PrintableCard
              key={item.slug}
              item={item}
              unlocked={unlocked}
              onUnlockRequest={scrollToSignup}
            />
          ))}
        </div>
      </section>
    </>
  );
}
