"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArchGlyph, RoomSign, Star8 } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { experience } from "@/content/profile";

export function Journey() {
  const routeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: routeRef, offset: ["start 75%", "end 60%"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <section id="journey" className="relative bg-sand-100 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <RoomSign tr="Yolculuk" en="The journey" />
            <Reveal>
              <h2 className="mt-7 font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.02] text-ink">
                Five stops on the road <em className="text-rose-700">so far.</em>
              </h2>
            </Reveal>
            <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
              Like a caravan crossing from inn to inn, each role added something to the saddlebags: agency craft,
              freelance ownership, Web3 products, enterprise systems and now infrastructure.
            </p>
            <div className="mt-8 hidden items-center gap-3 font-display text-2xl text-khaki-600 lg:flex">
              <span>2021</span>
              <span aria-hidden className="h-px w-16 bg-khaki-400" />
              <Star8 className="h-4 w-4 text-rose-300" />
              <span aria-hidden className="h-px w-16 bg-khaki-400" />
              <span className="italic text-turq-700">today</span>
            </div>
          </div>
        </div>

        <div ref={routeRef} className="relative lg:col-span-8">
          <div aria-hidden className="absolute bottom-6 left-[19px] top-6 border-l-2 border-dashed border-khaki-400" />
          <motion.div
            aria-hidden
            style={{ scaleY: drawn }}
            className="absolute bottom-6 left-[18px] top-6 w-1 origin-top rounded-full bg-turq-500"
          />
          <ol className="space-y-6">
            {experience.map((job) => (
              <li key={`${job.company}-${job.role}`} className="relative pl-16">
                <span
                  className={`absolute left-0 top-7 grid h-10 w-10 place-items-center rounded-full border-2 ${
                    job.current ? "border-turq-500 bg-turq-100 text-turq-700" : "border-khaki-400 bg-sand-50 text-khaki-600"
                  }`}
                  aria-hidden
                >
                  <ArchGlyph className="h-5 w-5" />
                </span>
                <Reveal>
                  <article className="rounded-[1.75rem] border border-khaki-400/55 bg-sand-50/85 p-6 shadow-[0_24px_40px_-36px_rgba(90,70,40,0.55)] md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-soft">{job.period}</p>
                      {job.current && (
                        <span className="rounded-full bg-turq-200 px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-turq-700">
                          Current stop
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-[1.9rem] font-semibold leading-tight text-ink">{job.role}</h3>
                    <p className="mt-0.5 font-semibold text-turq-700">{job.company}</p>
                    <p className="mt-4 leading-relaxed text-ink-soft">{job.summary}</p>
                    {job.points.length > 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-3 leading-relaxed text-ink-soft">
                            <Star8 className="mt-[0.45rem] h-3 w-3 shrink-0 text-rose-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.tags.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
                        {job.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-khaki-400/60 bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-soft"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
