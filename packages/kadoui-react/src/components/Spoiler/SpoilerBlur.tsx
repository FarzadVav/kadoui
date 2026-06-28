"use client";

import { CSSProperties, use } from "react";

import { SpoilerContext } from "./SpoilerContext";
import type { SpoilerBlurPropsT } from "./spoilerTypes";

export function SpoilerBlur({ style, ...p }: SpoilerBlurPropsT) {
  const { isOpen } = use(SpoilerContext);

  const styles: CSSProperties = {
    transition: "all 150ms ease",
    ...(isOpen
      ? {}
      : { pointerEvents: "none", filter: "blur(3px)", scale: 0.9 }),
    ...style,
  };

  return <span style={styles} data-state={isOpen} {...p} />;
}
