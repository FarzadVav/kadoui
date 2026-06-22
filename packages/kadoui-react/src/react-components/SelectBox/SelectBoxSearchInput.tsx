"use client";

import { CSSProperties } from "react";

import { cn } from "../../utils-exports";
import type { SelectBoxSearchInputPropsT } from "./selectBoxTypes";

export default function SelectBoxSearchInput({
  style,
  className,
  ...p
}: SelectBoxSearchInputPropsT) {
  const styles: CSSProperties = {
    position: "relative",
    ...style,
  };

  return <label className={cn("acn", className)} style={styles} {...p} />;
}
