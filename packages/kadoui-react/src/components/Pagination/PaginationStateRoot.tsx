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
    setPage(page < correctPagesLength ? page + 1 : page);

  const prevPage = () => setPage(page > 1 ? page - 1 : page);

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
