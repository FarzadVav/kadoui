"use client";

import { use } from "react";

import { SheetContext } from "./SheetContext";
import type { SheetTogglePropsT } from "./sheetTypes";

export function SheetToggle({ onClick, ...p }: SheetTogglePropsT) {
  const { isOpen, setOpen } = use(SheetContext);

  return (
    <button
      type="button"
      onClick={ev => {
        onClick?.(ev);
        setOpen(!isOpen);
      }}
      {...p}
    />
  )
}