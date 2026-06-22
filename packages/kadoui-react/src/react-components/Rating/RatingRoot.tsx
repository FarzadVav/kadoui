"use client";

import { useState } from "react";

import { RatingContext } from "./RatingContext";
import type { RatingContextT, RatingRootPropsT } from "./ratingTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export const RatingRoot = (p: RatingRootPropsT) => {
  const [hoverValue, setHoverValue] =
    useState<RatingContextT["hoverValue"]>(null);

  return (
    <RatingContext value={{ hoverValue, setHoverValue }}>
      <AccessNavigation onMouseLeave={() => setHoverValue(null)} {...p} />
    </RatingContext>
  );
};
