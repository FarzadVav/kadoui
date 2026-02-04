"use client";

import { HTMLAttributes, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreFadePropsT = HTMLAttributes<HTMLDivElement>;

export function ShowMoreFade(p: ShowMoreFadePropsT) {
  const { shouldShowMore, isShowMore } = use(ShowMoreContext);

  return (
    shouldShowMore && !isShowMore ? (
      <div {...p} />
    ) : null
  )
}