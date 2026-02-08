"use client";

import { type ComponentProps, use } from "react";

import { ModalContext } from "./ModalContext";

export type ModalTogglePropsT = ComponentProps<"button">;

export function ModalToggle({ onClick, ...props }: ModalTogglePropsT) {
  const { setOpen } = use(ModalContext);

  return (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        setOpen((prev) => !prev);
      }}
      {...props}
    />
  );
}
