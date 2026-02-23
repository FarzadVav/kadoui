"use client";

import { cloneElement, Fragment, use } from "react";

import { PaginationContext } from "./PaginationContext";
import type { PaginationCountsPropsT } from "./PaginationTypes";

export function PaginationCounts({ ProgressElem, children, enableNextClick, onClick, ...p }: PaginationCountsPropsT) {
  const { pagesLength, page, setPage } = use(PaginationContext);

  return (
    Array.from({ length: pagesLength }).map((_, index) => (
      <Fragment key={index}>
        <button
          data-state={(index + 1) === page}
          data-skipped={(index + 1) < page}
          onClick={(ev) => {
            onClick?.(ev);
            if (enableNextClick) {
              setPage(index + 1);
            } else {
              if ((index + 1) <= page) {
                setPage(index + 1);
              }
            }
          }}
          {...p}
        >
          {children ? children(index + 1) : index + 1}
        </button>

        {ProgressElem && (index + 1) < pagesLength ? (
          cloneElement(
            ProgressElem,
            {
              "data-state": (index + 1) === page,
              "data-skipped": (index + 1) < page,
            }
          )
        ) : null}
      </Fragment>
    ))
  );
}
