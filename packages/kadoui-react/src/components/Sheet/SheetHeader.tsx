"use client";

import type { ComponentProps } from "react";

export type SheetHeaderPropsT = ComponentProps<"div">;

export function SheetHeader({ ...p }: SheetHeaderPropsT) {
  return <div {...p} />;
}
