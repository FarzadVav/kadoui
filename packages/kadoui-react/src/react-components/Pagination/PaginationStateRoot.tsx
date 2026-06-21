"use client";

import { PaginationContext } from "./PaginationContext";
import type { PaginationStateRootPropsT } from "./PaginationTypes";

export function PaginationStateRoot({
  page,
  setPage,
  pages,
  pagesLength,
  children
}: PaginationStateRootPropsT) {
  const correctPagesLength = (pages?.length || pagesLength) as number;

  const nextPage = () =>
    setPage((prev) => (prev < correctPagesLength ? prev + 1 : prev));

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
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
