import { createContext, RefObject } from "react";

export type CarouselContextPropsT = {
  scrollRef: RefObject<HTMLDivElement | null>;
  leftOpacity: number;
  rightOpacity: number;
  childrenWidth: number;
}

export const CarouselContext = createContext<CarouselContextPropsT>({} as CarouselContextPropsT);