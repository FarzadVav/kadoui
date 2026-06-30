"use client";

import { usePagination } from "@mantine/hooks";
import { cloneElement, Fragment, use } from "react";

import { PaginationContext } from "./PaginationContext";
import type {
  PaginationCountsPropsT,
  PaginationCountsItemsPropsT,
  PaginationCountsStaticPropsT,
  PaginationCountsResponsiveItemsPropsT,
} from "./PaginationTypes";

function PaginationCountsItems({
  page,
  range,
  onClick,
  setPage,
  children,
  ProgressElem,
  disableNextClick,
  disablePrevClick,
  ...p
}: PaginationCountsItemsPropsT) {
  return (
    <>
      {range.map((item, index) => {
        if (item === "dots") {
          return <span key={`dots-${index}`}>...</span>;
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

function PaginationCountsStatic(p: PaginationCountsStaticPropsT) {
  const { pagesLength, page, setPage } = use(PaginationContext);
  const range = Array.from({ length: pagesLength }, (_, index) => index + 1);

  return (
    <PaginationCountsItems range={range} page={page} setPage={setPage} {...p} />
  );
}

function PaginationCountsResponsiveItems({
  siblings,
  ...p
}: PaginationCountsResponsiveItemsPropsT) {
  const { pagesLength, page, setPage } = use(PaginationContext);

  const { range } = usePagination({
    total: pagesLength,
    page,
    siblings,
    boundaries: 1,
    onChange: setPage,
  });

  return (
    <PaginationCountsItems range={range} page={page} setPage={setPage} {...p} />
  );
}

export function PaginationCounts(p: PaginationCountsPropsT) {
  if (p.responsive) {
    const { responsive, siblings, ...rest } = p;

    return <PaginationCountsResponsiveItems siblings={siblings} {...rest} />;
  }

  const { responsive, ...rest } = p;

  return <PaginationCountsStatic {...rest} />;
}
