"use client";

import { BreadcrumbsContext } from "./BreadcrumbsContext";
import type { BreadcrumbsRootPropsT } from "./breadcrumbsTypes";

export function BreadcrumbsRoot({
  separator,
  ...p
}: BreadcrumbsRootPropsT) {
  return (
    <BreadcrumbsContext value={{ separator }}>
      <nav {...p} />
    </BreadcrumbsContext>
  );
}
