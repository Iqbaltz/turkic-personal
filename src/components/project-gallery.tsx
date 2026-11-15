"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Star8 } from "@/components/ornaments";
import type { ProjectImage } from "@/content/profile";

const navButton =
  "absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-khaki-400/60 bg-sand-50/90 text-lg text-ink shadow-sm transition-colors hover:bg-sand-50 hover:text-turq-700";

/**
 * A project's screenshots in a window frame: thumbnails pick the picture, and the picture opens full size in a
 * dialog where the arrow keys step through the set.
 */
export function ProjectGallery({
  name,
  address,
  images,
  sizes,
  className = "",
}: {
  name: string;
  /** Shown in the frame's title bar, like an address bar. */
  address: string;
  images: ProjectImage[];
  /** How wide the main picture is drawn, for picking the image size. */
  sizes: string;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const count = images.length;
  const image = images[active];
  const step = (by: number) => setActive((i) => (i + by + count) % count);

  return (
    <div className={className}>
      <figure className="overflow-hidden rounded-2xl border border-khaki-400/55 bg-sand-100 shadow-[0_32px_60px_-42px_rgba(58,50,42,0.65)]">
        <div className="flex items-center gap-3 border-b border-khaki-400/45 px-4 py-2.5 text-xs text-khaki-600">
          <Star8 className="h-3 w-3 shrink-0 text-turq-500" />
          <span className="truncate">{address}</span>
          {count > 1 && (
            <span className="ml-auto tabular-nums">
              {active + 1} / {count}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => dialog.current?.showModal()}
          aria-label={`View full size: ${image.caption}`}
          className={`group relative block aspect-16/10 w-full overflow-hidden ${image.fit ? "bg-ink" : "bg-sand-50"}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className={image.fit ? "object-contain" : "object-cover object-top"}
          />
          <span
            aria-hidden
            className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-sand-50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            View full size ⤢
          </span>
        </button>
        <figcaption className="border-t border-khaki-400/45 px-4 py-3 text-sm text-ink-soft">{image.caption}</figcaption>
      </figure>

      {count > 1 && (
        <ul aria-label={`${name} screenshots`} className="mt-3 flex gap-2 overflow-x-auto p-1">
          {images.map((img, i) => (
            <li key={img.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                aria-label={`Show ${img.caption.toLowerCase()}`}
                className="relative block aspect-16/10 w-20 overflow-hidden rounded-md opacity-70 ring-1 ring-khaki-400/60 transition hover:opacity-100 aria-current:opacity-100 aria-current:ring-2 aria-current:ring-turq-700 sm:w-24"
              >
                <Image src={img.src} alt="" fill sizes="6rem" className="object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialog}
        aria-label={`${name} screenshots`}
        onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto w-[min(72rem,calc(100%-2rem))] overflow-hidden rounded-2xl border border-khaki-400/55 bg-sand-50 p-0 text-ink backdrop:bg-ink/75 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center gap-4 border-b border-khaki-400/45 px-5 py-3">
          <p className="min-w-0 flex-1 truncate text-sm">
            <span className="font-semibold">{name}</span> <span className="text-ink-soft">· {image.caption}</span>
          </p>
          {count > 1 && (
            <span className="text-xs tabular-nums text-khaki-600">
              {active + 1} / {count}
            </span>
          )}
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full text-ink-soft transition-colors hover:bg-sand-100 hover:text-ink"
          >
            ✕
          </button>
        </div>
        <div className={`relative h-[min(78dvh,48rem)] ${image.fit ? "bg-ink" : "bg-sand-100"}`}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1152px) 72rem, 100vw" className="object-contain" />
          {count > 1 && (
            <>
              <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot" className={`${navButton} left-3`}>
                ←
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next screenshot" className={`${navButton} right-3`}>
                →
              </button>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
