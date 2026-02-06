"use client";

import type { ComponentProps } from "react";

export type SheetHandlebarPropsT = ComponentProps<"div">;

export function SheetHandlebar({ ...p }: SheetHandlebarPropsT) {
  return <div {...p} />;
}
