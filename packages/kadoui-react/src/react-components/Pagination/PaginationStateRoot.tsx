"use client";

import { SetStateAction, Dispatch } from "react";

import { PaginationPropsT } from "./PaginationTypes";
import { PaginationContext } from "./PaginationContext";

type PaginationStateRootPropsT = PaginationPropsT & {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function PaginationStateRoot({ page, setPage, pages, pagesLength, ...p }: PaginationStateRootPropsT) {
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
