"use client";

import { CSSProperties, useState } from "react";

import { RatingContext } from "./RatingContext";
import type { RatingContextT, RatingRootPropsT } from "./ratingTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export const RatingRoot = ({ style, ...p }: RatingRootPropsT) => {
  const [hoverValue, setHoverValue] =
    useState<RatingContextT["hoverValue"]>(null);

  const styles: CSSProperties = {
    width: "max-content",
    maxWidth: "100%",
    height: "max-content",
    maxHeight: "100%",
    ...style,
  };

  return (
    <RatingContext value={{ hoverValue, setHoverValue }}>
      <AccessNavigation
        style={styles}
        onMouseLeave={() => setHoverValue(null)}
        {...p}
      />
    </RatingContext>
  );
};
