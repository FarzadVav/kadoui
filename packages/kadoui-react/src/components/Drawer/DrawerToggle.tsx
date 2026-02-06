"use client";

import { type ComponentProps, use } from "react";

import { DrawerContext } from "./DrawerContext";

export type DrawerTogglePropsT = ComponentProps<"button">;

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