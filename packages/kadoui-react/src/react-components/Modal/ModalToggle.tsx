"use client";

import { use } from "react";

import { ModalContext } from "./ModalContext";
import type { ModalTogglePropsT } from "./modalTypes";

export function ModalToggle({ onClick, ...p }: ModalTogglePropsT) {
  const { setOpen } = use(ModalContext);

  return (
    <button
      type="button"
      onClick={(ev) => {
        onClick?.(ev);
        setOpen((prev) => !prev);
      }}
      {...p}
    />
  );
}
