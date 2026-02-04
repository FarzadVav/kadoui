import { PaginationPages } from "./PaginationPages";
import { PaginationCounts } from "./PaginationCounts";
import { PaginationNextBtn } from "./PaginationNextBtn";
import { PaginationPrevBtn } from "./PaginationPrevBtn";
import { PaginationStateRoot } from "./PaginationStateRoot";
import { PaginationSearchParamsRoot } from "./PaginationSearchParamsRoot";

const baseComponents = {
  Pages: PaginationPages,
  Counts: PaginationCounts,
  NextBtn: PaginationNextBtn,
  PrevBtn: PaginationPrevBtn,
};

export const PaginationWithState = Object.assign(PaginationStateRoot, baseComponents);

export const PaginationWithSearchParams = Object.assign(
  PaginationSearchParamsRoot,
  baseComponents,
);
