"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { PaginationPropsT } from "./PaginationTypes";
import { PaginationContext } from "./PaginationContext";

export type PaginationSearchParamsRootPropsT = PaginationPropsT & {
  pageKey?: string;
};

export function PaginationSearchParamsRoot({
  pages,
  pagesLength,
  pageKey,
  ...p
}: PaginationSearchParamsRootPropsT) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const correctPagesLength = (pages?.length || pagesLength) as number;

  useEffect(() => {
    setCurrentPage(+(searchParams.get(pageKey || "page") || "1"));
  }, [pageKey, searchParams]);

  const pushRouter = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(pageKey || "page", page.toString());
    router.push("?" + params.toString());
  };

  const setPage: Dispatch<SetStateAction<number>> = (page) => {
    if (page !== currentPage) {
      pushRouter(page as number);
    }
  };

  const nextPage = () => {
    if (currentPage < correctPagesLength) {
      pushRouter(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      pushRouter(currentPage - 1);
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        pages,
        page: currentPage,
        setPage,
        pagesLength: correctPagesLength,
        nextPage,
        prevPage,
      }}>
      <div {...p} />
    </PaginationContext.Provider>
  );
}
