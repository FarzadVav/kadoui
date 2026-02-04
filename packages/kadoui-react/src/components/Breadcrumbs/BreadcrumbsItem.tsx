"use client";

import { type HTMLAttributes, use } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";

export type BreadcrumbsItemPropsT = HTMLAttributes<HTMLDivElement> & {
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
