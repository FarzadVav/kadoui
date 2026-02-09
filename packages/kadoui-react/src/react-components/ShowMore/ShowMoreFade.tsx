"use client";

import { use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import type { ShowMoreFadePropsT } from "./showMoreTypes";

export function ShowMoreFade(p: ShowMoreFadePropsT) {
  const { shouldShowMore, isShowMore } = use(ShowMoreContext);

  return (
    shouldShowMore && !isShowMore ? (
      <div {...p} />
    ) : null
  )
}