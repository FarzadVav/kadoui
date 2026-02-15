"use client";

import { use } from "react";

import { CarouselContext } from "./CarouselContext";
import type { CarouselPrevBtnPropsT } from "./carouselTypes";

export function CarouselPrevBtn({ onClick, ...p }: CarouselPrevBtnPropsT) {
  const { scrollRef, childrenWidth } = use(CarouselContext);

  return (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        scrollRef.current?.scrollTo(scrollRef.current.scrollLeft - childrenWidth, 0);
      }}
      {...p}
    />
  );
}
