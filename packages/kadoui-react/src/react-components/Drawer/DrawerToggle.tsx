"use client";

import { use } from "react";

import { DrawerContext } from "./DrawerContext";
import type { DrawerTogglePropsT } from "./drawerTypes";

export function DrawerToggle({ onClick, ...p }: DrawerTogglePropsT) {
  const { isOpen, setOpen } = use(DrawerContext);

  return (
    <button
      type="button"
      onClick={(ev) => {
        onClick?.(ev);
        setOpen(isOpen);
      }}
      {...p}
    />
  );
}