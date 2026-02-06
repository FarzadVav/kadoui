"use client";

import { type ComponentProps, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreFadePropsT = ComponentProps<"div">;

export function ShowMoreFade(p: ShowMoreFadePropsT) {
  const { shouldShowMore, isShowMore } = use(ShowMoreContext);

  return (
    shouldShowMore && !isShowMore ? (
      <div {...p} />
    ) : null
  )
}