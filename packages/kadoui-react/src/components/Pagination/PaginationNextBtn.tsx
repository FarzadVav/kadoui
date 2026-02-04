"use client";

import { HTMLAttributes, use } from "react";

import { PaginationContext } from "./PaginationContext";

export type PaginationNextBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

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