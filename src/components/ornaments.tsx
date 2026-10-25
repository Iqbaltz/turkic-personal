import type { ComponentProps, CSSProperties } from "react";
import { starPoints } from "@/lib/patterns";

type SvgProps = { className?: string; style?: CSSProperties };

// The same pointed arch as the #arch-clip path in the root layout, inset by half a stroke.
const ARCH_OUTLINE = "M0.004 1V0.42C0.004 0.22 0.25 0.1 0.5 0.004C0.75 0.1 0.996 0.22 0.996 0.42V1";

export function Star8({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden focusable="false">
      <polygon points={starPoints(12, 12, 11)} fill="currentColor" />
    </svg>
  );
}

export function StarOutline({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden focusable="false">
      <polygon points={starPoints(12, 12, 10.5)} fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function Monogram({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <polygon
        points={starPoints(24, 24, 22.5)}
        fill="none"
        stroke="var(--color-turq-700)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text
        x="24"
        y="28.6"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="var(--color-turq-700)"
        style={{ fontFamily: "var(--font-display)" }}
      >
        MI
      </text>
    </svg>
  );
}

/** Small label naming each section, in Turkish and English. */
export function SectionLabel({ tr, en, className = "", ...rest }: { tr: string; en: string } & ComponentProps<"p">) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-khaki-600 ${className}`}
      {...rest}
    >
      <Star8 className="h-3 w-3 text-turq-500" />
      <span lang="tr">{tr}</span>
      <span aria-hidden className="h-px w-5 bg-khaki-400" />
      <span>{en}</span>
    </p>
  );
}

/** A hairline with a star at its centre, to rest the eye between sections. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      data-reveal="divider"
      className={`mx-auto flex max-w-6xl items-center gap-4 px-5 md:px-8 ${className}`}
    >
      <span className="h-px flex-1 bg-khaki-400/45" />
      <StarOutline className="h-4 w-4 text-khaki-500" />
      <span className="h-px flex-1 bg-khaki-400/45" />
    </div>
  );
}

/** A pointed-arch window filled with a pattern, outlined in the current text colour. */
export function ArchWindow({
  pattern,
  className = "relative",
  children,
}: {
  pattern: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div aria-hidden className="clip-arch absolute inset-0 bg-sand-50" style={{ backgroundImage: pattern }} />
      <ArchOutline />
      {children}
    </div>
  );
}

// One kilij, point up: the curved blade flaring into its yelman near the tip, a ball-ended guard and a pistol-grip hilt.
const KILIJ = [
  "M80 790C80 540 100 290 168 16C180 92 184 165 179 246L156 316C131 512 121 660 120 790Z",
  "M88 792L100 762L112 792L100 822Z",
  "M52 784H148A8 8 0 0 1 148 800H52A8 8 0 0 1 52 784Z",
  "M89 799H111L109 940C109 972 90 992 68 992C58 992 54 983 61 976C75 966 88 958 90 938Z",
].join("");

// One Ottoman arrow, point up: a leaf head, a slim shaft, two swept feathers and a flared nock.
const ARROW = [
  "M100 0C112 24 118 50 113 74L105 96H95L87 74C82 50 88 24 100 0Z",
  "M96 94H104V962H96Z",
  "M94 792C84 818 76 848 74 880L72 936L94 912Z",
  "M106 792C116 818 124 848 126 880L128 936L106 912Z",
  "M93 960H107L112 992L100 982L88 992Z",
].join("");

// One Turkish recurve bow, strung: ears angled forward at the tips, limbs curving to a thickened grip.
const BOW_LIMBS = "M100 26C86 54 68 84 55 112C80 240 122 330 122 500C122 670 80 760 55 888C68 916 86 946 100 974";

/**
 * A kilij and a recurve bow crossed, with an arrow standing between them: an armoury drawn as a flat silhouette,
 * to sit quietly behind a section like a shadow on a wall.
 */
export function Armoury({ className, style }: SvgProps) {
  return (
    <svg viewBox="100 0 600 1000" className={className} style={style} fill="currentColor" aria-hidden focusable="false">
      <g transform="translate(400 520) rotate(-32) translate(-100 -560)">
        <path d={KILIJ} />
        <circle cx="42" cy="792" r="11" />
        <circle cx="158" cy="792" r="11" />
      </g>
      <g transform="translate(400 520) rotate(32) translate(-88 -500)">
        <path d={BOW_LIMBS} fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M55 112V888" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <ellipse cx="125" cy="500" rx="11" ry="60" />
      </g>
      <path d={ARROW} transform="translate(400 520) scale(0.92) translate(-100 -500)" />
    </svg>
  );
}

export function ArchOutline({ className = "absolute inset-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1 1" preserveAspectRatio="none" className={`h-full w-full ${className}`} aria-hidden focusable="false">
      <path d={ARCH_OUTLINE} fill="none" stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
