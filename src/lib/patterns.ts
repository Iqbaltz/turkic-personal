import type { PatternKind } from "@/content/profile";
import { tones, type Tone } from "@/lib/palette";

// Iznik-inspired motifs, generated as tiny SVG data URIs so any element can wear them.

function toUrl(w: number, h: number, body: string) {
  const markup = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(markup)}")`;
}

export const TULIP = {
  flower:
    "M10 2C12.5 5 15.5 6.5 15.5 11C15.5 14.5 13 16.5 10 16.5C7 16.5 4.5 14.5 4.5 11C4.5 6.5 7.5 5 10 2Z",
  petals:
    "M4.5 11C2.5 9 2.2 6 3.2 3.6C5.4 5.2 6.8 7.4 7 10ZM15.5 11C17.5 9 17.8 6 16.8 3.6C14.6 5.2 13.2 7.4 13 10Z",
  stem: "M10 16.5V27",
  leaves:
    "M10 25C6.5 23.5 4 20.5 3.5 17.5C6.5 18.5 9 21 10 25ZM10 23C13.5 21.5 16 18.5 16.5 15.5C13.5 16.5 11 19 10 23Z",
};

function tulipMarkup(x: number, y: number, s: number, petal: string, deep: string, leaf: string) {
  return (
    `<g transform='translate(${x} ${y}) scale(${s})'>` +
    `<path d='${TULIP.stem}' stroke='${leaf}' stroke-width='1.4' fill='none'/>` +
    `<path d='${TULIP.leaves}' fill='${leaf}'/>` +
    `<path d='${TULIP.petals}' fill='${deep}'/>` +
    `<path d='${TULIP.flower}' fill='${petal}'/>` +
    `</g>`
  );
}

/** Eight-pointed stars on a grid; the negative space reads as crosses. */
export function starCross(fg: string, dot: string, size = 56) {
  const c = size / 2;
  const a = size * 0.42;
  const o = c - a / 2;
  const corners = [0, size]
    .flatMap((x) => [0, size].map((y) => `<circle cx='${x}' cy='${y}' r='${size * 0.06}' fill='${fg}'/>`))
    .join("");
  return toUrl(
    size,
    size,
    `<g fill='${fg}'><rect x='${o}' y='${o}' width='${a}' height='${a}'/>` +
      `<rect x='${o}' y='${o}' width='${a}' height='${a}' transform='rotate(45 ${c} ${c})'/></g>` +
      `<circle cx='${c}' cy='${c}' r='${size * 0.07}' fill='${dot}'/>` +
      corners,
  );
}

/** Overlapping circles, the lattice under so much Ottoman geometry. */
export function circleLattice(stroke: string, dot: string, size = 44) {
  const h = size / 2;
  const circles = [
    [0, 0],
    [size, 0],
    [0, size],
    [size, size],
    [h, h],
  ]
    .map(([x, y]) => `<circle cx='${x}' cy='${y}' r='${h}'/>`)
    .join("");
  return toUrl(
    size,
    size,
    `<g fill='none' stroke='${stroke}' stroke-width='1.3'>${circles}</g>` +
      `<circle cx='${h}' cy='0' r='1.8' fill='${dot}'/><circle cx='${h}' cy='${size}' r='1.8' fill='${dot}'/>` +
      `<circle cx='0' cy='${h}' r='1.8' fill='${dot}'/><circle cx='${size}' cy='${h}' r='1.8' fill='${dot}'/>`,
  );
}

/** Çintemani: three pearls over two waves, in a half-drop repeat. */
export function cintemani(fg: string, wave: string, size = 56) {
  const motif =
    `<circle cx='21' cy='10' r='3.6' fill='${fg}'/><circle cx='15' cy='18.5' r='3.6' fill='${fg}'/><circle cx='27' cy='18.5' r='3.6' fill='${fg}'/>` +
    `<path d='M9 29q3-3.5 6 0t6 0t6 0t6 0M9 34q3-3.5 6 0t6 0t6 0t6 0' fill='none' stroke='${wave}' stroke-width='1.5' stroke-linecap='round'/>`;
  const at = (x: number, y: number) => `<g transform='translate(${x} ${y})'>${motif}</g>`;
  const s = size;
  return toUrl(s, s, at(0, 0) + at(s / 2, s / 2) + at(-s / 2, s / 2) + at(s / 2, -s / 2) + at(-s / 2, -s / 2));
}

/** Tulips in a half-drop repeat. */
export function tulipField(petal: string, deep: string, leaf: string, size = 64) {
  const k = size / 64;
  return toUrl(
    size,
    size,
    tulipMarkup(22 * k, 4 * k, 1.05 * k, petal, deep, leaf) +
      tulipMarkup(-10 * k, 36 * k, 1.05 * k, petal, deep, leaf) +
      tulipMarkup(54 * k, 36 * k, 1.05 * k, petal, deep, leaf) +
      tulipMarkup(22 * k, -28 * k, 1.05 * k, petal, deep, leaf),
  );
}

/** A border band of little pointed arches, like the tile friezes on a mosque wall. */
export function archBand(fg: string, bg: string, dot: string, w = 36, h = 22) {
  return toUrl(
    w,
    h,
    `<rect width='${w}' height='${h}' fill='${bg}'/>` +
      `<path d='M4 ${h}V12C4 8 11 5 ${w / 2} 1.5C25 5 32 8 32 12V${h}' fill='none' stroke='${fg}' stroke-width='1.4'/>` +
      `<circle cx='${w / 2}' cy='13' r='2.4' fill='${dot}'/>` +
      `<path d='M0 0.7H${w}M0 ${h - 0.7}H${w}' stroke='${fg}' stroke-width='1.4'/>`,
  );
}

/** Pointed merlons, the cresting along the top of Ottoman walls. */
export function crest(fill: string, w = 36, h = 22) {
  return toUrl(
    w,
    h,
    `<path d='M0 ${h}V${h - 6}C${w * 0.22} ${h - 6} ${w * 0.4} ${h - 11} ${w / 2} 1C${w * 0.6} ${h - 11} ${w * 0.78} ${h - 6} ${w} ${h - 6}V${h}Z' fill='${fill}'/>`,
  );
}

export function noise() {
  return toUrl(
    180,
    180,
    `<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter>` +
      `<rect width='180' height='180' filter='url(#n)'/>`,
  );
}

/** The motif a tone wears, for tiles, shop windows and cards. */
export function patternFor(kind: PatternKind, tone: Tone, size?: number) {
  const t = tones[tone];
  switch (kind) {
    case "star":
      return starCross(t.deep, t.strong, size);
    case "lattice":
      return circleLattice(t.deep, t.strong, size);
    case "cintemani":
      return cintemani(t.strong, t.deep, size);
    case "tulip":
      return tulipField(t.deep, t.strong, "#B8CCA9", size);
  }
}
