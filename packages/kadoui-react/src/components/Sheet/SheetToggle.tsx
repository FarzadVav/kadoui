"use client";

import { HTMLAttributes, use } from "react";

import { SheetContext } from "./SheetContext";

export type SheetTogglePropsT = HTMLAttributes<HTMLButtonElement>;

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