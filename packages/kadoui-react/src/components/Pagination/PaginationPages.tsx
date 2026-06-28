"use client";

import { use } from "react";

import { PaginationContext } from "./PaginationContext";

export function PaginationPages() {
  const { pages, page } = use(PaginationContext);

  return pages?.find((_, index) => index + 1 === page)?.component;
}
