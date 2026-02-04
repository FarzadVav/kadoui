"use client";

import { HTMLAttributes, use } from "react";

import { CarouselContext } from "./CarouselContext";

export type CarouselContainerPropsT = HTMLAttributes<HTMLDivElement>;

export function CarouselContainer({ children, ...p }: CarouselContainerPropsT) {
  const { scrollRef } = use(CarouselContext);

  return (
    <div ref={scrollRef} {...p}>
      {children}
    </div>
  );
}