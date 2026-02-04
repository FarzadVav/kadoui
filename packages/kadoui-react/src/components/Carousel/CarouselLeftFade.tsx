"use client";

import { HTMLAttributes, use } from "react";

import { CarouselContext } from "./CarouselContext";

type CarouselLeftFadePropsT = HTMLAttributes<HTMLDivElement>;

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
