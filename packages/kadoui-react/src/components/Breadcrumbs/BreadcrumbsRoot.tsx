"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";

export type BreadcrumbsRootPropsT = HTMLAttributes<HTMLElement> & {
  separator?: ReactNode;
};

export function BreadcrumbsRoot({
  separator = <span>|</span>,
  ...p
}: BreadcrumbsRootPropsT) {
  return (
    <BreadcrumbsContext value={{ separator }}>
      <nav {...p} />
    </BreadcrumbsContext>
  );
}
