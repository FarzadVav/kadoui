import type {
  ComponentProps,
  Dispatch,
  JSX,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from "react";

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
  setPage: Dispatch<SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
};

export type PaginationStateRootPropsT = PaginationPropsT & {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export type PaginationSearchParamsRootPropsT = PaginationPropsT & {
  pageKey?: string;
  sectionId?: string;
};

export type PaginationCountsPropsT = Omit<
  ComponentProps<"button">,
  "children"
> & {
  children?: (count: number) => ReactNode;
  ProgressElem?: JSX.Element;
  disableNextClick?: boolean;
  disablePrevClick?: boolean;
};

export type PaginationNextBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};

export type PaginationPrevBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};
