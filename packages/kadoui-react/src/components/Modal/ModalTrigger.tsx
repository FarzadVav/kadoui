"use client";

import { ButtonHTMLAttributes, use } from "react";

import { ModalContext } from "./ModalContext";

export type ModalTogglePropsT = ButtonHTMLAttributes<HTMLButtonElement>;

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
