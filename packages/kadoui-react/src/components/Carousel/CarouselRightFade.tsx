"use client";

import { type ComponentProps, use } from "react";

import { CarouselContext } from "./CarouselContext";

type CarouselRightFadePropsT = ComponentProps<"div">;

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
