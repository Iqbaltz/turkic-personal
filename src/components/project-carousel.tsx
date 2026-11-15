"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { ProjectImage } from "@/content/profile";

const arrow =
  "absolute top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-khaki-400/60 bg-sand-50/90 text-sm text-ink opacity-0 shadow-sm transition-opacity hover:text-turq-700 focus-visible:opacity-100 group-hover/carousel:opacity-100";

/**
 * A swipeable strip of a project's screenshots for its card. Each slide links through to the project's page;
 * the arrows and dots step through the set without leaving.
 */
export function ProjectCarousel({
  name,
  href,
  images,
  sizes,
  className = "",
}: {
  name: string;
  href: string;
  images: ProjectImage[];
  sizes: string;
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = images.length;

  const show = (index: number) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: ((index + count) % count) * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={`group/carousel relative aspect-16/10 overflow-hidden bg-sand-100 ${className}`}>
      <div
        ref={track}
        onScroll={(e) => setActive(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
      >
        {images.map((image) => (
          <Link
            key={image.src}
            href={href}
            tabIndex={-1}
            className={`relative block h-full w-full shrink-0 snap-start ${image.fit ? "bg-ink" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              className={image.fit ? "object-contain" : "object-cover object-top"}
            />
          </Link>
        ))}
      </div>

      {count > 1 && (
        <>
          <button type="button" onClick={() => show(active - 1)} aria-label={`Previous ${name} screenshot`} className={`${arrow} left-3`}>
            ←
          </button>
          <button type="button" onClick={() => show(active + 1)} aria-label={`Next ${name} screenshot`} className={`${arrow} right-3`}>
            →
          </button>
          {/* The dots sit on a dark pill so they read on light screenshots as well as dark ones. */}
          <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 rounded-full bg-ink/45 px-1 backdrop-blur-sm">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => show(i)}
                aria-label={`Show ${name} screenshot ${i + 1} of ${count}`}
                aria-current={i === active}
                className="grid h-5 w-5 place-items-center"
              >
                <span
                  aria-hidden
                  className={`block h-1.5 rounded-full transition-all ${i === active ? "w-4 bg-sand-50" : "w-1.5 bg-sand-50/55"}`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
