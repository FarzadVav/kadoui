"use client";

import { HTMLAttributes } from "react";

export type SheetHandlebarPropsT = HTMLAttributes<HTMLDivElement>;

export function SheetHandlebar({ ...p }: SheetHandlebarPropsT) {
  return <div {...p} />;
}
