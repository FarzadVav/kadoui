"use client";

import { ButtonHTMLAttributes, use } from "react";

import { DrawerContext } from "./DrawerContext";

export type DrawerTogglePropsT = ButtonHTMLAttributes<HTMLButtonElement>;

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