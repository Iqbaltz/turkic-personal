"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CourtyardLayer, FacadeLayer } from "@/components/hero/portal-scene";
import { Star8 } from "@/components/ornaments";
import { profile } from "@/content/profile";
import { useMediaQuery } from "@/lib/use-media-query";

// The doorway's centre on the 1600×1000 stage. The camera zooms around it.
const PIVOT = { x: 800, y: 820 };

/** Maps the stage pivot to pixels, matching the SVG's `xMidYMid slice` fit. */
function useScenePivot(ref: RefObject<HTMLElement | null>) {
  const [origin, setOrigin] = useState("50% 82%");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const s = Math.max(width / 1600, height / 1000);
      setOrigin(`${width / 2 + (PIVOT.x - 800) * s}px ${height / 2 + (PIVOT.y - 500) * s}px`);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return origin;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// Function mappers keep these on the main thread: Motion's native scroll-timeline
// shortcut for plain ranges leaves opacity stuck at 1 in this layout.
const between = (a: number, b: number, from: number, to: number) => (v: number) =>
  from + (to - from) * clamp01((v - a) / (b - a));

export function PortalHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const animate = !reduce;
  const origin = useScenePivot(stageRef);

  const { scrollYProgress: p } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  // Exponential zoom reads as walking forward at a steady pace.
  const facadeScale = useTransform(p, (v) => Math.pow(11, clamp01((v - 0.04) / 0.62)));
  const facadeOpacity = useTransform(p, between(0.58, 0.68, 1, 0));
  const courtScale = useTransform(p, (v) => Math.pow(1.45, clamp01((v - 0.04) / 0.8)));
  const introY = useTransform(p, between(0, 0.22, 0, -120));
  const introOpacity = useTransform(p, between(0.02, 0.16, 1, 0));
  const introPointer = useTransform(p, (v) => (v > 0.12 ? "none" : "auto"));
  const cueOpacity = useTransform(p, between(0, 0.05, 1, 0));
  const welcomeOpacity = useTransform(p, between(0.64, 0.78, 0, 1));
  const welcomeY = useTransform(p, between(0.64, 0.84, 40, 0));

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-label="Introduction"
      className="relative h-[290vh] motion-reduce:h-[100svh]"
    >
      <div ref={stageRef} className="sticky top-0 h-[100svh] overflow-hidden bg-sand-100">
        <motion.div
          aria-hidden
          className="absolute inset-0 will-change-transform"
          style={animate ? { scale: courtScale, transformOrigin: origin } : undefined}
        >
          <CourtyardLayer />
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute inset-0 will-change-transform"
          style={animate ? { scale: facadeScale, opacity: facadeOpacity, transformOrigin: origin } : undefined}
        >
          <FacadeLayer />
        </motion.div>

        {animate && (
          <motion.div
            aria-hidden
            style={{ opacity: welcomeOpacity, y: welcomeY }}
            className="pointer-events-none absolute inset-x-0 top-[15svh] z-10 flex flex-col items-center px-6 text-center"
          >
            <p className="inline-flex items-center gap-2.5 rounded-full border border-khaki-400/70 bg-sand-50/80 py-1.5 pl-2.5 pr-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink-soft">
              <Star8 className="h-3.5 w-3.5 text-turq-500" />
              <span lang="tr">İçeri buyurun</span>
              <span className="text-khaki-500">·</span>
              <span>Come in</span>
            </p>
            <p className="mt-5 font-display text-[clamp(2.2rem,5vw,4.25rem)] font-medium leading-[1.02] text-ink">
              The courtyard is open.
              <br />
              <em className="text-turq-700">Have a look around.</em>
            </p>
          </motion.div>
        )}

        <motion.div
          style={animate ? { y: introY, opacity: introOpacity, pointerEvents: introPointer } : undefined}
          className="hero-copy absolute inset-x-0 top-0 z-20 flex flex-col items-center px-5 pt-[5.25rem] text-center min-[1200px]:inset-y-0 min-[1200px]:right-auto min-[1200px]:left-[clamp(2.5rem,4.5vw,5rem)] min-[1200px]:w-(--copy-w) min-[1200px]:items-start min-[1200px]:justify-center min-[1200px]:px-0 min-[1200px]:pt-0 min-[1200px]:text-left"
        >
          <p className="inline-flex items-center gap-2.5 rounded-full border border-khaki-400/70 bg-sand-50/80 py-1.5 pl-2.5 pr-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-ink-soft">
            <Star8 className="h-3.5 w-3.5 text-turq-500" />
            <span lang="tr">Hoş geldiniz</span>
            <span aria-hidden className="text-khaki-500">
              ·
            </span>
            <span>Welcome</span>
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.7rem,9vw,3.4rem)] font-semibold leading-[0.95] tracking-[-0.01em] text-ink min-[1200px]:mt-6 min-[1200px]:text-[clamp(3.6rem,5vw,5.6rem)]">
            Muhammad <span className="italic font-medium text-turq-700">Iqbal</span>
          </h1>

          <p className="mt-3 text-[0.95rem] font-medium text-ink-soft min-[1200px]:hidden">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-5 hidden max-w-[26rem] text-[1.05rem] leading-relaxed text-ink-soft min-[1200px]:block">
            A software engineer in {profile.location}, building dependable web apps with React, Next.js, TypeScript and
            .NET.
          </p>
          <p className="mt-2 max-w-[24rem] text-balance font-display text-[1.15rem] italic text-turq-700 min-[1200px]:mt-4 min-[1200px]:text-[1.35rem]">
            “{profile.tagline}”
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 min-[1200px]:mt-8 min-[1200px]:justify-start">
            <a
              href="#about"
              className="group inline-flex items-center gap-2.5 rounded-t-[1.6rem] rounded-b-lg bg-turq-700 px-6 pb-3 pt-3.5 text-sm font-semibold text-sand-50 shadow-[0_14px_30px_-16px_rgba(59,107,102,0.9)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink"
            >
              Step inside
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden>
                <path d="M8 3v10M3.5 8.5L8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={profile.cv}
              download
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-khaki-400 decoration-2 underline-offset-[6px] transition-colors hover:text-turq-700 hover:decoration-turq-500"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4 text-khaki-600" aria-hidden>
                <path d="M4 1.5h5.5L13 5v9.5H4z M9.5 1.5V5H13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M6.5 8.5h4M6.5 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Download CV
            </a>
          </div>
        </motion.div>

        {animate && (
          <motion.div
            aria-hidden
            style={{ opacity: cueOpacity }}
            className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-khaki-400/60 bg-sand-50/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft backdrop-blur">
              Scroll to walk through the gate
              <svg viewBox="0 0 12 16" className="bob h-3.5 w-3" aria-hidden>
                <path d="M6 1v13M1.5 9.5L6 14l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
