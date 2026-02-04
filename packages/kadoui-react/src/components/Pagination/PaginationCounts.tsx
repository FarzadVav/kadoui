"use client";

import { ButtonHTMLAttributes, use } from "react";

import { PaginationContext } from "./PaginationContext";

export type PaginationCountsPropsT = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

export function PaginationCounts({ onClick, ...p }: PaginationCountsPropsT) {
  const { pagesLength, page, setPage } = use(PaginationContext);

  return Array.from({ length: pagesLength }).map((_, index) => (
    <button
      key={index}
      data-state={index + 1 === page}
      onClick={(ev) => {
        onClick?.(ev);
        setPage(index + 1);
      }}
      {...p}>
      {index + 1}
    </button>
  ));
}
