"use client";

import { use } from "react";

import { PaginationContext } from "./PaginationContext";
import type { PaginationPrevBtnPropsT } from "./PaginationTypes";

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