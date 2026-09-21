"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex flex-col justify-between gap-6 rounded-[1.75rem] border-2 border-dashed border-cobalt-300 bg-sand-50 p-6">
      <span className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt-700">Email</span>
        <a
          href={`mailto:${email}`}
          className="text-xs font-semibold text-ink-soft underline decoration-khaki-400 underline-offset-4 hover:text-cobalt-700"
        >
          Open mail app
        </a>
      </span>
      <span>
        <span className="block break-all font-display text-[1.45rem] font-semibold leading-tight text-ink">{email}</span>
        <button
          type="button"
          onClick={copy}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-cobalt-100 px-4 py-2 text-sm font-semibold text-cobalt-700 transition-colors hover:bg-cobalt-200"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
            {copied ? (
              <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M5.5 5.5V3h7.5v7.5h-2.5M3 5.5h7.5V13H3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            )}
          </svg>
          <span aria-live="polite">{copied ? "Copied, see you soon" : "Copy my email"}</span>
        </button>
      </span>
    </div>
  );
}
