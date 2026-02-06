import { createContext, RefObject } from "react";

export type CarouselContextPropsT = {
  scrollRef: RefObject<HTMLDivElement | null>;
  leftOpacity: number;
  rightOpacity: number;
  childrenWidth: number;
  mouseSwipe?: "auto" | "swipe";
}

export const CarouselContext = createContext<CarouselContextPropsT>({} as CarouselContextPropsT);