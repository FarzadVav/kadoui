import { createContext, RefObject } from "react";

export type CarouselContextPropsT = {
  scrollRef: RefObject<HTMLDivElement | null>;
  leftOpacity: number;
  rightOpacity: number;
  childrenWidth: number;
  mouseScroll?: "auto" | "swipe";
}

export const CarouselContext = createContext<CarouselContextPropsT>({} as CarouselContextPropsT);