"use client";

import { CSSProperties, use } from "react";

import { BreadcrumbsContext } from "./BreadcrumbsContext";
import type { BreadcrumbsItemPropsT } from "./breadcrumbsTypes";

export function BreadcrumbsItem({
  isLastItem = false,
  style,
  children,
  ...p
}: BreadcrumbsItemPropsT) {
  const { separator } = use(BreadcrumbsContext);

  const styles: CSSProperties = {
    display: "flex",
    ...style,
  };

  return (
    <>
      <div style={styles} {...p}>
        {children}
      </div>

      {!isLastItem && separator}
    </>
  );
}
