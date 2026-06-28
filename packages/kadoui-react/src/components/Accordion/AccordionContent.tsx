"use client";

import { CSSProperties } from "react";

import { AccordionContentPropsT } from "./accordionTypes";

export function AccordionContent({ style, ...p }: AccordionContentPropsT) {
  const styles: CSSProperties = {
    paddingTop: 4,
    ...style,
  };

  return <div style={styles} {...p} />;
}
