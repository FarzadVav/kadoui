import type {
  ComponentProps,
  Dispatch,
  JSX,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from "react";

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
  pages?: PaginationPagesT[];
  pagesLength: number;
  page: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};

export type PaginationStateRootPropsT = PaginationPropsT & {
  page: number;
  setPage: (page: number) => void;
};

export type PaginationSearchParamsRootPropsT = PaginationPropsT &
  SearchParamsNavigationOptionsT & {
    pageKey?: string;
  };

export type PaginationCountsPropsT = Omit<
  ComponentProps<"button">,
  "children"
> & {
  siblings?: number;
  ProgressElem?: JSX.Element;
  disableNextClick?: boolean;
  disablePrevClick?: boolean;
  children?: (count: number) => ReactNode;
};

export type PaginationNextBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};

export type PaginationPrevBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};
