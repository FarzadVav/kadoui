"use client"

import { HTMLAttributes, useState } from "react";

import { RatingContext, RatingContextT } from "./RatingContext";

export type RatingRootPropsT = HTMLAttributes<HTMLDivElement>

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