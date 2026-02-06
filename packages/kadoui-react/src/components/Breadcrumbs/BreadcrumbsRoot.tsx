"use client";

import type { ComponentProps, ReactNode } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";

export type BreadcrumbsRootPropsT = ComponentProps<"nav"> & {
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
