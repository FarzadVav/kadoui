"use client";

import { usePagination } from "@mantine/hooks";
import { cloneElement, Fragment, use } from "react";

import { PaginationContext } from "./PaginationContext";
import type { PaginationCountsPropsT } from "./PaginationTypes";

type PaginationCountsItemsPropsT = Omit<
  PaginationCountsPropsT,
  "responsive" | "siblings"
> & {
  range: (number | "dots")[];
  page: number;
  setPage: (page: number) => void;
};

function PaginationCountsItems({
  range,
  onClick,
  children,
  ProgressElem,
  disableNextClick,
  disablePrevClick,
  page,
  setPage,
  ...p
}: PaginationCountsItemsPropsT) {
  return (
    <>
      {range.map((item, index) => {
        if (item === "dots") {
          return (
            <span key={`dots-${index}`}>
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

function PaginationCountsStatic(
  props: Omit<PaginationCountsPropsT, "responsive" | "siblings">,
) {
  const { pagesLength, page, setPage } = use(PaginationContext);
  const range = Array.from({ length: pagesLength }, (_, index) => index + 1);

  return (
    <PaginationCountsItems
      range={range}
      page={page}
      setPage={setPage}
      {...props}
    />
  );
}

function PaginationCountsResponsive({
  siblings = 1,
  ...props
}: Omit<PaginationCountsPropsT, "responsive"> & { siblings?: number }) {
  const { pagesLength, page, setPage } = use(PaginationContext);

  const { range } = usePagination({
    total: pagesLength,
    page,
    siblings,
    boundaries: 1,
    onChange: setPage,
  });

  return (
    <PaginationCountsItems
      range={range}
      page={page}
      setPage={setPage}
      {...props}
    />
  );
}

export function PaginationCounts(props: PaginationCountsPropsT) {
  if (props.responsive) {
    const { responsive, siblings, ...rest } = props;

    return (
      <PaginationCountsResponsive siblings={siblings} {...rest} />
    );
  }

  const { responsive, ...rest } = props;

  return <PaginationCountsStatic {...rest} />;
}
