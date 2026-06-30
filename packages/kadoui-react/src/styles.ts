import { CSSProperties } from "react";

export const zIndexes = {
  back: -10,
  default: 0,
  front: 10,
  important: 20,
  smallOverlay: 30,
  bigOverlay: 40,
} as const;

export const ignoreElement: CSSProperties = {
  opacity: 0,
  visibility: "hidden",
  pointerEvents: "none",
};
