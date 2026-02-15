"use client";

import { use } from "react";

import { CarouselContext } from "./CarouselContext";
import type { CarouselNextBtnPropsT } from "./carouselTypes";

export function CarouselNextBtn({ onClick, ...p }: CarouselNextBtnPropsT) {
  const { scrollRef, childrenWidth } = use(CarouselContext);

  return (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        scrollRef.current?.scrollTo(scrollRef.current.scrollLeft + childrenWidth, 0);
      }}
      {...p}
    />
  );
}
