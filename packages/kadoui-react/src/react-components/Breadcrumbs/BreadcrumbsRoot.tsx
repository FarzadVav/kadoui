"use client";

import { CSSProperties } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";
import type { BreadcrumbsRootPropsT } from "./breadcrumbsTypes";

export function BreadcrumbsRoot({
  separator,
  style,
  ...p
}: BreadcrumbsRootPropsT) {
  const styles: CSSProperties = {
    display: "flex",
    ...style,
  };

  return (
    <BreadcrumbsContext value={{ separator }}>
      <nav style={styles} {...p} />
    </BreadcrumbsContext>
  );
}
