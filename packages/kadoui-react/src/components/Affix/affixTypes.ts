import type { ComponentProps } from "react";

export type AffixPropsT = ComponentProps<"button"> & {
  viewportOffset?: number;
};
