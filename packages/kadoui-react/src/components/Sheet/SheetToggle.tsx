"use client";

import { type ComponentProps, use } from "react";

import { SheetContext } from "./SheetContext";

export type SheetTogglePropsT = ComponentProps<"button">;

export function SheetToggle({ onClick, ...props }: SheetTogglePropsT) {
  const { setOpen } = use(SheetContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev)
        setOpen(prev => !prev)
      }}
      {...props}
    />
  )
}