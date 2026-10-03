// Ottoman star geometry, generated as SVG so any element can wear it.

function toUrl(w: number, h: number, body: string) {
  const markup = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(markup)}")`;
}

const round = (n: number) => Math.round(n * 100) / 100;

/** The sixteen corners of an eight-pointed star (two overlapping squares), as an SVG points list. */
export function starPoints(cx: number, cy: number, outer: number) {
  const inner = (outer * Math.cos(Math.PI / 4)) / Math.cos(Math.PI / 8);
  return Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const r = i % 2 ? inner : outer;
    return `${round(cx + r * Math.cos(a))},${round(cy + r * Math.sin(a))}`;
  }).join(" ");
}

/** Outlined eight-pointed stars joined into a net, the quiet line-work of a tiled panel. */
export function starLattice(stroke: string, size = 40) {
  const c = size / 2;
  const r = size * 0.32;
  const d = size * 0.07;
  const diamond = (x: number, y: number) => `M${x} ${y - d}L${x + d} ${y}L${x} ${y + d}L${x - d} ${y}Z`;
  return toUrl(
    size,
    size,
    `<g fill='none' stroke='${stroke}' stroke-width='1'>` +
      `<polygon points='${starPoints(c, c, r)}'/>` +
      `<path d='M${c} 0V${c - r}M${c} ${c + r}V${size}M0 ${c}H${c - r}M${c + r} ${c}H${size}'/>` +
      `<path d='${[0, size].flatMap((x) => [0, size].map((y) => diamond(x, y))).join("")}'/>` +
      `</g>` +
      `<circle cx='${c}' cy='${c}' r='${size * 0.04}' fill='${stroke}'/>`,
  );
}
