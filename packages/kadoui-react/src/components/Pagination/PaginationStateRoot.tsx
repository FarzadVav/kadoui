"use client";

import { useState } from "react";

import { PaginationPropsT } from "./PaginationTypes";
import { PaginationContext } from "./PaginationContext";

export function PaginationStateRoot({ pages, pagesLength, ...p }: PaginationPropsT) {
  const [page, setPage] = useState(1);

  const correctPagesLength = (pages?.length || pagesLength) as number;

  const nextPage = () => setPage((prev) => (prev < correctPagesLength ? prev + 1 : prev));

  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <PaginationContext.Provider
      value={{
        pages,
        page,
        setPage,
        pagesLength: correctPagesLength,
        nextPage,
        prevPage,
      }}>
      <div {...p} />
    </PaginationContext.Provider>
  );
}
