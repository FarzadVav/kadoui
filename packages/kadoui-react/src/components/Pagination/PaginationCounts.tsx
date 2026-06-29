"use client";

import { usePagination } from "@mantine/hooks";
import { cloneElement, Fragment, use } from "react";

import { PaginationContext } from "./PaginationContext";
import type { PaginationCountsPropsT } from "./PaginationTypes";

export function PaginationCounts({
  onClick,
  children,
  siblings = 1,
  ProgressElem,
  disableNextClick,
  disablePrevClick,
  ...p
}: PaginationCountsPropsT) {
  const { pagesLength, page, setPage } = use(PaginationContext);

  const { range } = usePagination({
    total: pagesLength,
    page,
    siblings,
    boundaries: 1,
    onChange: setPage,
  });

  return (
    <>
      {range.map((item, index) => {
        if (item === "dots") {
          return (
            <span key={`dots-${index}`} className="px-1 select-none">
              ...
            </span>
          );
        }

        const pageNumber = item;
        const nextItem = range[index + 1];
        const showProgress =
          ProgressElem &&
          index < range.length - 1 &&
          typeof nextItem === "number" &&
          nextItem === pageNumber + 1;

        return (
          <Fragment key={pageNumber}>
            <button
              data-state={pageNumber === page}
              data-skipped={pageNumber < page}
              onClick={(ev) => {
                onClick?.(ev);
                if (!disableNextClick && pageNumber > page) {
                  setPage(pageNumber);
                } else if (!disablePrevClick && pageNumber < page) {
                  setPage(pageNumber);
                }
              }}
              {...p}
            >
              {children ? children(pageNumber) : pageNumber}
            </button>

            {showProgress
              ? cloneElement(ProgressElem, {
                  "data-state": pageNumber === page,
                  "data-skipped": pageNumber < page,
                })
              : null}
          </Fragment>
        );
      })}
    </>
  );
}
