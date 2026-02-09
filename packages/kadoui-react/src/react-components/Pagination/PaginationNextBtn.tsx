"use client";

import { use } from "react";

import { PaginationContext } from "./PaginationContext";
import type { PaginationNextBtnPropsT } from "./PaginationTypes";

export function PaginationNextBtn({ onClick, disabled, ...p }: PaginationNextBtnPropsT) {
  const { page, pagesLength, nextPage } = use(PaginationContext);

  return (
    <button
      disabled={disabled || page === pagesLength}
      onClick={ev => {
        onClick?.(ev);
        nextPage();
      }}
      {...p}
    />
  )
}