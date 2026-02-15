"use client";

import { use } from "react";

import { ModalContext } from "./ModalContext";
import type { ModalTogglePropsT } from "./modalTypes";

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
