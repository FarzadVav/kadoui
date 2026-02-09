"use client";

import { use } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";
import type { BreadcrumbsItemPropsT } from "./breadcrumbsTypes";

export function BreadcrumbsItem({
  isLastItem = false,
  children,
  ...p
}: BreadcrumbsItemPropsT) {
  const { separator } = use(BreadcrumbsContext);

  return (
    <>
      <div {...p}>{children}</div>

      {!isLastItem && separator}
    </>
  );
}
