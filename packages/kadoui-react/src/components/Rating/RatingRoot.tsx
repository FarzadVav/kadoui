"use client"

import { type ComponentProps, useState } from "react";

import { RatingContext, RatingContextT } from "./RatingContext";

export type RatingRootPropsT = ComponentProps<"div">;

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