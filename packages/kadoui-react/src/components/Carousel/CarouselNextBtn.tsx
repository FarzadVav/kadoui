"use client";

import { HTMLAttributes, use } from "react";

import { CarouselContext } from "./CarouselContext";

export type CarouselNextBtnPropsT = HTMLAttributes<HTMLButtonElement>;

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
