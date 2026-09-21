import type { CSSProperties } from "react";
import { palette, tones, type Tone } from "@/lib/palette";
import { archBand, crest, TULIP } from "@/lib/patterns";

type SvgProps = { className?: string; style?: CSSProperties };

export function Star8({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden focusable="false">
      <g fill="currentColor">
        <rect x="5" y="5" width="14" height="14" />
        <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
      </g>
    </svg>
  );
}

export function Monogram({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <g fill={palette.turq700}>
        <rect x="10" y="10" width="28" height="28" rx="2" />
        <rect x="10" y="10" width="28" height="28" rx="2" transform="rotate(45 24 24)" />
      </g>
      <circle cx="24" cy="24" r="12.5" fill={palette.sand50} />
      <text
        x="24"
        y="28.4"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill={palette.turq700}
        style={{ fontFamily: "var(--font-display)" }}
      >
        MI
      </text>
    </svg>
  );
}

export function TulipGlyph({
  petal = palette.rose300,
  deep = palette.rose500,
  leaf = palette.sage500,
  transform,
}: {
  petal?: string;
  deep?: string;
  leaf?: string;
  transform?: string;
}) {
  return (
    <g transform={transform}>
      <path d={TULIP.stem} stroke={leaf} strokeWidth="1.4" fill="none" />
      <path d={TULIP.leaves} fill={leaf} />
      <path d={TULIP.petals} fill={deep} />
      <path d={TULIP.flower} fill={petal} />
    </g>
  );
}

/** Small plaque naming each room of the caravanserai, in Turkish and English. */
export function RoomSign({ tr, en, className = "" }: { tr: string; en: string; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 rounded-full border border-khaki-400/70 bg-sand-50/80 py-1.5 pl-2.5 pr-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink-soft ${className}`}
    >
      <Star8 className="h-3.5 w-3.5 text-turq-500" />
      <span lang="tr">{tr}</span>
      <span aria-hidden className="text-khaki-500">
        ·
      </span>
      <span>{en}</span>
    </p>
  );
}

export function TileBand({ className = "", tone = "turq" }: { className?: string; tone?: Tone }) {
  const t = tones[tone];
  return (
    <div
      aria-hidden
      className={`h-[22px] w-full ${className}`}
      style={{ backgroundImage: archBand(t.strong, t.mid, palette.rose300), backgroundSize: "36px 22px" }}
    />
  );
}

/** Pointed merlons along a section's top edge. */
export function CrestEdge({ color, className = "" }: { color: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none h-[22px] ${className}`}
      style={{ backgroundImage: crest(color), backgroundSize: "36px 22px", backgroundPosition: "center bottom" }}
    />
  );
}

export function Rosette({ className }: SvgProps) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  const dots = Array.from({ length: 32 }, (_, i) => (i * Math.PI * 2) / 32);
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden focusable="false">
      <circle cx="200" cy="200" r="196" fill={palette.sand50} stroke={palette.khaki400} strokeWidth="2" />
      {dots.map((a, i) => (
        <circle
          key={i}
          cx={200 + Math.cos(a) * 180}
          cy={200 + Math.sin(a) * 180}
          r={i % 2 ? 3 : 5}
          fill={i % 2 ? palette.rose300 : palette.turq300}
        />
      ))}
      <circle cx="200" cy="200" r="164" fill="none" stroke={palette.khaki400} strokeWidth="1.5" />
      <g fill={palette.turq200} stroke={palette.cobalt300} strokeWidth="2" strokeLinejoin="round">
        <rect x="84" y="84" width="232" height="232" rx="4" />
        <rect x="84" y="84" width="232" height="232" rx="4" transform="rotate(45 200 200)" />
      </g>
      <g fill={palette.cobalt200} stroke={palette.cobalt300} strokeWidth="1.5">
        <rect x="116" y="116" width="168" height="168" rx="3" transform="rotate(22.5 200 200)" />
        <rect x="116" y="116" width="168" height="168" rx="3" transform="rotate(67.5 200 200)" />
      </g>
      {petals.map((a) => (
        <path
          key={a}
          transform={`rotate(${a} 200 200)`}
          d="M200 84C214 104 215 128 200 146C185 128 186 104 200 84Z"
          fill={palette.rose300}
          stroke={palette.rose500}
          strokeWidth="1.2"
        />
      ))}
      <circle cx="200" cy="200" r="58" fill={palette.sand50} stroke={palette.khaki400} strokeWidth="2" />
      <circle cx="200" cy="200" r="48" fill="none" stroke={palette.turq300} strokeWidth="1.5" strokeDasharray="2 5" />
      <TulipGlyph transform="translate(176 166) scale(2.4)" />
    </svg>
  );
}

export function ArchGlyph({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false" fill="none">
      <path
        d="M5 21V12.5C5 9 8 6.4 12 3C16 6.4 19 9 19 12.5V21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 21V14.5C9 13 10.3 11.6 12 10.4C13.7 11.6 15 13 15 14.5V21" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 21H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ValueIcon({ kind, className }: { kind: "tulip" | "compass" | "steps"; className?: string }) {
  if (kind === "tulip") {
    return (
      <svg viewBox="0 0 20 28" className={className} aria-hidden focusable="false">
        <TulipGlyph />
      </svg>
    );
  }
  if (kind === "compass") {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden focusable="false" fill="none">
        <circle cx="16" cy="16" r="12.5" stroke={palette.turq700} strokeWidth="1.8" />
        <path d="M16 5.5L19 16L16 26.5L13 16Z" fill={palette.turq300} stroke={palette.turq700} strokeWidth="1.4" />
        <path d="M5.5 16L16 13L26.5 16L16 19Z" fill={palette.sand50} stroke={palette.turq700} strokeWidth="1.4" />
        <circle cx="16" cy="16" r="2" fill={palette.rose300} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden focusable="false" fill="none">
      <path
        d="M4 27H11V20H18V13H25V6"
        stroke={palette.sage700}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 6H25V10" stroke={palette.sage700} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="20" r="2" fill={palette.sage300} />
      <circle cx="18" cy="13" r="2" fill={palette.sage300} />
    </svg>
  );
}

export function TeaGlass({ className }: SvgProps) {
  const glass =
    "M80 64C76 98 86 118 97 131C105 140 105 151 95 164C87 176 87 195 97 207H143C153 195 153 176 145 164C135 151 135 140 143 131C154 118 164 98 160 64Z";
  return (
    <svg viewBox="0 0 240 250" className={className} aria-hidden focusable="false">
      <defs>
        <clipPath id="tea-glass">
          <path d={glass} />
        </clipPath>
        <linearGradient id="tea-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9B28A" />
          <stop offset="1" stopColor="#CF8C63" />
        </linearGradient>
      </defs>
      <g className="steam" fill="none" stroke={palette.khaki400} strokeWidth="3" strokeLinecap="round">
        <path d="M104 50C96 38 112 30 104 16" />
        <path d="M120 46C112 32 128 24 120 8" />
        <path d="M136 50C128 38 144 30 136 16" />
      </g>
      <ellipse cx="120" cy="214" rx="98" ry="21" fill={palette.turq200} stroke={palette.cobalt300} strokeWidth="1.6" />
      <ellipse
        cx="120"
        cy="214"
        rx="82"
        ry="15"
        fill="none"
        stroke={palette.rose300}
        strokeWidth="3"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <ellipse cx="120" cy="212" rx="60" ry="10" fill={palette.turq100} />
      <g clipPath="url(#tea-glass)">
        <rect x="70" y="86" width="100" height="130" fill="url(#tea-liquid)" />
        <rect x="70" y="84" width="100" height="5" fill="#F1C9A6" />
      </g>
      <path d={glass} fill={palette.sand50} fillOpacity="0.28" stroke={palette.khaki500} strokeWidth="1.8" />
      <path d="M88 76C86 100 94 116 102 126" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="120" cy="64" rx="40" ry="5.5" fill="none" stroke={palette.khaki500} strokeWidth="1.8" />
      <path d="M150 205L198 188" stroke={palette.khaki500} strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="203" cy="186" rx="8" ry="4.5" transform="rotate(-20 203 186)" fill={palette.sand50} stroke={palette.khaki500} strokeWidth="1.8" />
      <g fill={palette.sand50} stroke={palette.khaki400} strokeWidth="1.5">
        <rect x="36" y="194" width="18" height="16" rx="2.5" />
        <rect x="48" y="186" width="18" height="16" rx="2.5" transform="rotate(12 57 194)" />
      </g>
    </svg>
  );
}
