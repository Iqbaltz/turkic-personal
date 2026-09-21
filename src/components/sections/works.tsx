"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CrestEdge, RoomSign, Star8 } from "@/components/ornaments";
import { projects, type Project } from "@/content/profile";
import { palette, tones } from "@/lib/palette";
import { patternFor } from "@/lib/patterns";
import { useMediaQuery } from "@/lib/use-media-query";

function ShopWindow({ project }: { project: Project }) {
  const t = tones[project.tone];
  return (
    <div className="relative aspect-[5/4] w-full">
      <div
        className="clip-arch absolute inset-0 bg-[length:52px_52px] transition-[background-position] duration-[1.2s] ease-out group-hover:bg-[position:26px_-26px]"
        style={{ backgroundColor: t.mid, backgroundImage: patternFor(project.pattern, project.tone, 52) }}
      />
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <path
          d="M0.004 1V0.42C0.004 0.22 0.25 0.1 0.5 0.004C0.75 0.1 0.996 0.22 0.996 0.42V1"
          fill="none"
          stroke={t.strong}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-[12%] flex justify-center">
        <div className="relative grid aspect-square w-[40%] place-items-center">
          <Star8
            className="absolute inset-0 h-full w-full transition-transform duration-1000 ease-out group-hover:rotate-45"
            style={{ color: t.deep }}
          />
          <div
            className="relative grid aspect-square w-[72%] place-items-center rounded-full bg-sand-50"
            style={{ boxShadow: `inset 0 0 0 2px ${t.strong}, 0 0 0 6px ${palette.sand50}` }}
          >
            <span className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold italic" style={{ color: t.ink }}>
              {project.mark}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopCard({ project }: { project: Project }) {
  const t = tones[project.tone];
  return (
    <article className="group flex w-full shrink-0 flex-col rounded-[2rem] border border-khaki-400/60 bg-sand-50 p-4 shadow-[0_40px_60px_-50px_rgba(90,70,40,0.6)] lg:w-[min(27rem,32vw)]">
      <ShopWindow project={project} />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: t.ink }}>
          <span>No. {project.no}</span>
          <span aria-hidden className="text-khaki-400">
            ·
          </span>
          <span className="text-ink-soft">{project.kind}</span>
        </p>
        <h3 className="mt-2 font-display text-[2.1rem] font-semibold leading-none text-ink">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ background: t.soft, color: t.ink, boxShadow: `inset 0 0 0 1px ${t.mid}` }}
            >
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-between gap-3 border-t border-khaki-400/50 pt-4 text-sm font-semibold text-ink transition-colors hover:text-turq-700"
        >
          <span>
            Visit the shop <span className="font-normal text-ink-soft">· {project.host}</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45"
            style={{ background: t.mid }}
          >
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const horizontal = useMediaQuery("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!horizontal || !track) return;
    const observer = new ResizeObserver(() => {
      setDistance(Math.max(0, track.scrollWidth - document.documentElement.clientWidth));
    });
    observer.observe(track);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, [horizontal]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative bg-sand-200"
      style={horizontal ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <CrestEdge color={palette.sand200} className="absolute inset-x-0 -top-[21px]" />
      <div className={horizontal ? "sticky top-0 flex h-[100svh] items-center overflow-hidden" : "py-24 md:py-32"}>
        <motion.div
          ref={trackRef}
          style={horizontal ? { x } : undefined}
          className={
            horizontal
              ? "flex w-max items-stretch gap-7 px-[max(2.5rem,5vw)] pt-10"
              : "mx-auto flex max-w-2xl flex-col gap-8 px-5 md:px-8"
          }
        >
          <div className="flex shrink-0 flex-col justify-center lg:w-[min(28rem,30vw)] lg:pr-6">
            <RoomSign tr="Çarşı" en="The bazaar" className="self-start" />
            <h2 className="mt-7 font-display text-[clamp(2.4rem,4.6vw,4.2rem)] font-medium leading-[1.02] text-ink">
              Selected works, <em className="text-turq-700">laid out like market stalls.</em>
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
              Sites and apps I’ve built for clients, from an agency’s home to a cashier’s everyday tool. Every stall is
              live and open for a visit.
            </p>
            {horizontal && (
              <p className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-khaki-600">
                Keep scrolling to stroll the stalls
                <span aria-hidden className="h-px w-12 bg-khaki-500" />
                <span aria-hidden>→</span>
              </p>
            )}
          </div>

          {projects.map((project) => (
            <ShopCard key={project.no} project={project} />
          ))}

          <aside className="flex shrink-0 flex-col justify-center rounded-[2rem] border-2 border-dashed border-khaki-400 p-8 lg:w-[min(22rem,26vw)]">
            <Star8 className="h-8 w-8 text-rose-300" />
            <p className="mt-5 font-display text-3xl leading-tight text-ink">Behind the counter, too.</p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Much of my work lives inside companies: a store expansion ERP, HR performance management, a self-service
              cashier and a company-wide budget planner. Happy to walk you through them.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-turq-700 underline decoration-turq-300 decoration-2 underline-offset-[6px] hover:decoration-turq-700"
            >
              Ask over tea <span aria-hidden>→</span>
            </a>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
