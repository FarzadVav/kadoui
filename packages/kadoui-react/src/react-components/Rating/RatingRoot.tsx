"use client";

import { useState } from "react";

import { RatingContext } from "./RatingContext";
import type { RatingContextT, RatingRootPropsT } from "./ratingTypes";

export const RatingRoot = (p: RatingRootPropsT) => {
  const [hoverValue, setHoverValue] = useState<RatingContextT["hoverValue"]>(null);

  return (
    <RatingContext value={{ hoverValue, setHoverValue }}>
      <div
        onMouseLeave={() => setHoverValue(null)}
        {...p}
      />
    </RatingContext>
  )
}