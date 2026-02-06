"use client";

import { type ComponentProps, use } from "react";

import { CarouselContext } from "./CarouselContext";

export type CarouselContainerPropsT = ComponentProps<"div">;

export function CarouselContainer({ children, ...p }: CarouselContainerPropsT) {
  const { scrollRef } = use(CarouselContext);

  return (
    <div ref={scrollRef} {...p}>
      {children}
    </div>
  );
}