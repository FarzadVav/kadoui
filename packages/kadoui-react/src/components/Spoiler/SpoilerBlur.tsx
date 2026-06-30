"use client";

import { CSSProperties, use } from "react";

import { SpoilerContext } from "./SpoilerContext";
import type { SpoilerBlurPropsT } from "./spoilerTypes";

export function SpoilerBlur({ style, ...p }: SpoilerBlurPropsT) {
  const { isOpen } = use(SpoilerContext);

  const styles: CSSProperties = {
    ...(isOpen ? {} : { pointerEvents: "none" }),
    ...style,
  };

  return <span style={styles} data-state={isOpen} {...p} />;
}
