import type { ComponentProps, JSX, PropsWithChildren, ReactNode } from "react";

import type { SearchParamsNavigationOptionsT } from "../../utils/types";

export type PaginationPagesT = {
  name: string;
  component: ReactNode;
};

type PaginationWithLengthT = {
  pagesLength: number;
  pages?: never;
};

type PaginationWithPagesT = {
  pages: PaginationPagesT[];
  pagesLength?: never;
};

type MergedPaginationT = PaginationWithLengthT | PaginationWithPagesT;

export type PaginationPropsT = PropsWithChildren & MergedPaginationT;

export type PaginationContextT = {
  page: number;
  pagesLength: number;
  nextPage: () => void;
  prevPage: () => void;
  pages?: PaginationPagesT[];
  setPage: (page: number) => void;
};

export type PaginationStateRootPropsT = PaginationPropsT & {
  page: number;
  setPage: (page: number) => void;
};

export type PaginationSearchParamsRootPropsT = PaginationPropsT &
  SearchParamsNavigationOptionsT & {
    pageKey?: string;
  };

type PaginationCountsBasePropsT = Omit<
  ComponentProps<"button">,
  "children"
> & {
  ProgressElem?: JSX.Element;
  disableNextClick?: boolean;
  disablePrevClick?: boolean;
  children?: (count: number) => ReactNode;
};

type PaginationCountsNonResponsivePropsT = PaginationCountsBasePropsT & {
  responsive?: false;
  siblings?: never;
};

type PaginationCountsResponsivePropsT = PaginationCountsBasePropsT & {
  responsive: true;
  siblings?: number;
};

export type PaginationCountsPropsT =
  | PaginationCountsNonResponsivePropsT
  | PaginationCountsResponsivePropsT;

export type PaginationNextBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};

export type PaginationPrevBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};
