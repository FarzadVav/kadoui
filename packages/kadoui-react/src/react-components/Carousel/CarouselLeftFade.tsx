"use client";

import { type ComponentProps, use } from "react";

import { CarouselContext } from "./CarouselContext";

type CarouselLeftFadePropsT = ComponentProps<"div">;

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
