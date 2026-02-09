"use client";

import { use } from "react";

import { DrawerContext } from "./DrawerContext";
import type { DrawerTogglePropsT } from "./drawerTypes";

export function DrawerToggle({ onClick, ...props }: DrawerTogglePropsT) {
  const { setOpen } = use(DrawerContext);

  return (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        setOpen(prev => !prev);
      }}
      {...props}
    />
  );
}