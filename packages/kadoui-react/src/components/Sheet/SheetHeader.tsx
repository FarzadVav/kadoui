"use client";

import { HTMLAttributes } from "react";

export type SheetHeaderPropsT = HTMLAttributes<HTMLDivElement>;

export function SheetHeader({ ...p }: SheetHeaderPropsT) {
  return <div {...p} />;
}
