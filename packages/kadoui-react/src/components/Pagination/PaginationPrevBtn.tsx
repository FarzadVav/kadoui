"use client";

import { HTMLAttributes, use } from "react";

import { PaginationContext } from "./PaginationContext";

export type PaginationPrevBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
}

export function PaginationPrevBtn({ onClick, disabled, ...p }: PaginationPrevBtnPropsT) {
  const { page, prevPage } = use(PaginationContext);

  return (
    <button
      disabled={disabled || page === 1}
      onClick={ev => {
        onClick?.(ev);
        prevPage();
      }}
      {...p}
    />
  )
}