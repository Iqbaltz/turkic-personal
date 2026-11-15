"use client";

import { useLayoutEffect } from "react";

// Gap between consecutive reveals that aren't headings.
const STEP_MS = 150;
// Never hold anything back longer than this, so a fast scroll doesn't leave the page waiting.
const MAX_WAIT_MS = 4000;

/**
 * Reveals each [data-reveal] element as it scrolls into view, one after another on a shared timeline:
 * a heading holds the line until its wipe reaches the last letter, then whatever arrived with it follows.
 * Pages reached by client-side navigation mount later, under the same root layout, so it watches for them too.
 */
export function RevealObserver() {
  useLayoutEffect(() => {
    // The inline script in the root layout sets this before paint; React's dev remount clears it.
    document.documentElement.dataset.motion = "";

    // The minifier may rewrite 55ms as .055s, so accept either unit.
    const charDuration = getComputedStyle(document.documentElement).getPropertyValue("--char-duration").trim();
    const charMs = parseFloat(charDuration) * (charDuration.endsWith("ms") ? 1 : 1000) || 55;
    let timelineEnd = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const now = performance.now();
          const delay = Math.min(Math.max(timelineEnd - now, 0), MAX_WAIT_MS);
          const chars = el.querySelector<HTMLElement>(".wipe")?.style.getPropertyValue("--chars");
          const length = chars ? Number(chars) * charMs : STEP_MS;

          el.style.setProperty("--reveal-delay", `${Math.round(delay)}ms`);
          el.dataset.revealed = "";
          observer.unobserve(el);
          timelineEnd = now + delay + length;
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    const watch = (root: ParentNode) =>
      root.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => observer.observe(el));
    watch(document);

    const arrivals = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches("[data-reveal]:not([data-revealed])")) observer.observe(node);
          watch(node);
        }
      }
    });
    arrivals.observe(document.body, { childList: true, subtree: true });

    return () => {
      arrivals.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
