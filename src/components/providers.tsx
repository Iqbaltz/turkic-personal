"use client";

import { MotionConfig } from "motion/react";
import { ReactLenis } from "lenis/react";
import { useMediaQuery } from "@/lib/use-media-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  return (
    <MotionConfig reducedMotion="user">
      {!reduce && <ReactLenis root options={{ lerp: 0.11, anchors: { offset: -72 } }} />}
      {children}
    </MotionConfig>
  );
}
