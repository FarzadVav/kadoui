import { createContext } from "react";

import type { CarouselContextPropsT } from "./carouselTypes";

export const CarouselContext = createContext<CarouselContextPropsT>({} as CarouselContextPropsT);