"use client";

import { HTMLAttributes, use } from "react";

import { CarouselContext } from "./CarouselContext";

type CarouselRightFadePropsT = HTMLAttributes<HTMLDivElement>;

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
