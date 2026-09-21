// Mirrors the @theme tokens in globals.css, for SVG fills and generated patterns.
export const palette = {
  sand50: "#FBF7EF",
  sand100: "#F5EDE0",
  sand200: "#ECE0CC",
  sand300: "#DFCFB2",
  khaki400: "#C9B690",
  khaki500: "#AD9A72",
  khaki600: "#8C7B57",
  ink: "#3A322A",
  inkSoft: "#6B5F52",
  turq100: "#E2F1EE",
  turq200: "#C6E3DE",
  turq300: "#9ACFC7",
  turq500: "#5E9E97",
  turq700: "#3B6B66",
  cobalt100: "#E6EBF5",
  cobalt200: "#CCD6EA",
  cobalt300: "#A9B9DA",
  cobalt500: "#6F86B5",
  cobalt700: "#45598A",
  rose100: "#F8E8E5",
  rose200: "#F2D3CE",
  rose300: "#E8B2AA",
  rose500: "#C98379",
  rose700: "#9A5A52",
  sage100: "#EBF0E4",
  sage200: "#D8E2CF",
  sage300: "#B8CCA9",
  sage500: "#86A07A",
  sage700: "#56704B",
} as const;

export type Tone = "turq" | "cobalt" | "rose" | "sage" | "khaki";

export const tones: Record<
  Tone,
  { soft: string; mid: string; deep: string; strong: string; ink: string }
> = {
  turq: {
    soft: palette.turq100,
    mid: palette.turq200,
    deep: palette.turq300,
    strong: palette.turq500,
    ink: palette.turq700,
  },
  cobalt: {
    soft: palette.cobalt100,
    mid: palette.cobalt200,
    deep: palette.cobalt300,
    strong: palette.cobalt500,
    ink: palette.cobalt700,
  },
  rose: {
    soft: palette.rose100,
    mid: palette.rose200,
    deep: palette.rose300,
    strong: palette.rose500,
    ink: palette.rose700,
  },
  sage: {
    soft: palette.sage100,
    mid: palette.sage200,
    deep: palette.sage300,
    strong: palette.sage500,
    ink: palette.sage700,
  },
  khaki: {
    soft: "#F3ECDD",
    mid: palette.sand200,
    deep: palette.sand300,
    strong: palette.khaki500,
    ink: palette.khaki600,
  },
};
