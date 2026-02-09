"use client";

import { use } from "react";

import { CarouselContext } from "./CarouselContext";
import type { CarouselRightFadePropsT } from "./carouselTypes";

export function CarouselRightFade({ style, ...p }: CarouselRightFadePropsT) {
  const { rightOpacity } = use(CarouselContext);

  return (
    <div
      style={{
        opacity: rightOpacity,
        ...style
      }}
      {...p}
    />
  )
}
