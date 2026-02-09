import type { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";

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

export type PaginationPropsT = ComponentProps<"div"> & MergedPaginationT;

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
};

export type PaginationCountsPropsT = Omit<ComponentProps<"button">, "children">;

export type PaginationNextBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};

export type PaginationPrevBtnPropsT = ComponentProps<"button"> & {
  disabled?: boolean;
};
