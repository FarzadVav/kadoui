"use client";

import { CSSProperties, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import type { ShowMoreFadePropsT } from "./showMoreTypes";

export function ShowMoreFade({ style, ...p }: ShowMoreFadePropsT) {
  const { shouldShowMore, isShowMore } = use(ShowMoreContext);

  const styles: CSSProperties = {
    inset: 0,
    position: "absolute",
    background:
      "linear-gradient(to top, var(--color-background) 30%, transparent)",
    ...style,
  };

  return shouldShowMore && !isShowMore ? <div style={styles} {...p} /> : null;
}
