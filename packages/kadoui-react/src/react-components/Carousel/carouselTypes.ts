import type { ComponentProps, RefObject } from "react";

export type CarouselContextPropsT = {
  scrollRef: RefObject<HTMLDivElement | null>;
  leftOpacity: number;
  rightOpacity: number;
  childrenWidth: number;
  mouseScroll?: "auto" | "swipe";
};

export type CarouselRootPropsT = ComponentProps<"div"> & {
  mouseScroll?: "auto" | "swipe";
};

export type CarouselContainerPropsT = ComponentProps<"div">;

export type CarouselNextBtnPropsT = ComponentProps<"button">;

export type CarouselPrevBtnPropsT = ComponentProps<"button">;

export type CarouselLeftFadePropsT = ComponentProps<"div">;

export type CarouselRightFadePropsT = ComponentProps<"div">;
