"use client";

import { use } from "react";

import { SheetContext } from "./SheetContext";
import type { SheetTogglePropsT } from "./sheetTypes";

export function SheetToggle({ onClick, ...p }: SheetTogglePropsT) {
  const { setOpen } = use(SheetContext);

  return (
    <button
      type="button"
      onClick={ev => {
        onClick?.(ev)
        setOpen(prev => !prev)
      }}
      {...p}
    />
  )
}