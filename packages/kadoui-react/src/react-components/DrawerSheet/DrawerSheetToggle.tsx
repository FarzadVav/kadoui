"use client";

import { use } from "react";

import { DrawerSheetContext } from "./DrawerSheetContext";
import type { DrawerSheetTogglePropsT } from "./drawerSheetTypes";

export function DrawerSheetToggle({ onClick, ...p }: DrawerSheetTogglePropsT) {
  const { isOpen, setOpen } = use(DrawerSheetContext);

  return (
    <button
      type="button"
      onClick={(ev) => {
        onClick?.(ev);
        setOpen(!isOpen);
      }}
      {...p}
    />
  );
}
