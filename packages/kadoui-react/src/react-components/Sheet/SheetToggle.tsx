"use client";

import { use } from "react";

import { SheetContext } from "./SheetContext";
import type { SheetTogglePropsT } from "./sheetTypes";

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