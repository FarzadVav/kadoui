import { HTMLAttributes, ReactNode } from "react";

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

export type PaginationPropsT = HTMLAttributes<HTMLDivElement> & MergedPaginationT;
