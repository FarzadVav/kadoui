"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import { PaginationContext } from "./PaginationContext";
import { useSearchParamsNavigation } from "../../hooks/useSearchParamsNavigation";
import type { PaginationSearchParamsRootPropsT } from "./PaginationTypes";

export function PaginationSearchParamsRoot({
  pages,
  pagesLength,
  pageKey,
  scroll,
  children,
}: PaginationSearchParamsRootPropsT) {
  const searchParams = useSearchParams();
  const { pushParams } = useSearchParamsNavigation({ scroll });
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageRef = useRef(currentPage);
  currentPageRef.current = currentPage;

  const resolvedPageKey = pageKey || "page";
  const correctPagesLength = (pages?.length || pagesLength) as number;

  useEffect(() => {
    setCurrentPage(+(searchParams.get(resolvedPageKey) || "1"));
  }, [resolvedPageKey, searchParams]);

  const pushPage = useCallback(
    (page: number) => {
      pushParams((params) => {
        params.set(resolvedPageKey, page.toString());
      });
    },
    [pushParams, resolvedPageKey],
  );

  const setPage = useCallback(
    (page: number) => {
      if (page !== currentPageRef.current) {
        pushPage(page);
      }
    },
    [pushPage],
  );

  const nextPage = () => {
    if (currentPageRef.current < correctPagesLength) {
      pushPage(currentPageRef.current + 1);
    }
  };

  const prevPage = () => {
    if (currentPageRef.current > 1) {
      pushPage(currentPageRef.current - 1);
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
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
