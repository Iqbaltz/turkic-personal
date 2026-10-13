import type { CSSProperties } from "react";
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
export function SectionLabel({ tr, en, className = "" }: { tr: string; en: string; className?: string }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-khaki-600 ${className}`}
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
    <div aria-hidden className={`mx-auto flex max-w-6xl items-center gap-4 px-5 md:px-8 ${className}`}>
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

export function ArchOutline({ className = "absolute inset-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1 1" preserveAspectRatio="none" className={`h-full w-full ${className}`} aria-hidden focusable="false">
      <path d={ARCH_OUTLINE} fill="none" stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
