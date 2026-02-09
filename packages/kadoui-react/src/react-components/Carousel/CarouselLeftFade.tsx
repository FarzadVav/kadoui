"use client";

import { use } from "react";

import { CarouselContext } from "./CarouselContext";
import type { CarouselLeftFadePropsT } from "./carouselTypes";

export function CarouselLeftFade({ style, ...p }: CarouselLeftFadePropsT) {
  const { leftOpacity } = use(CarouselContext);

  return (
    <div
      style={{
        opacity: leftOpacity,
        ...style
      }}
      {...p}
    />
  )
}
