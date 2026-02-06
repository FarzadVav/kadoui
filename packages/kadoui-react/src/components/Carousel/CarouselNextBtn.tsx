"use client";

import { type ComponentProps, use } from "react";

import { CarouselContext } from "./CarouselContext";

export type CarouselNextBtnPropsT = ComponentProps<"button">;

export function CarouselNextBtn({ onClick, ...props }: CarouselNextBtnPropsT) {
  const { scrollRef, childrenWidth } = use(CarouselContext);

  return (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        scrollRef.current?.scrollTo(scrollRef.current.scrollLeft + childrenWidth, 0);
      }}
      {...props}
    />
  );
}
