"use client";

import { type ComponentProps, use } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";

export type BreadcrumbsItemPropsT = ComponentProps<"div"> & {
  isLastItem?: boolean;
};

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
