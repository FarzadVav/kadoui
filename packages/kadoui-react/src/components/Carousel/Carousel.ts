import { CarouselRoot } from "./CarouselRoot";
import { CarouselNextBtn } from "./CarouselNextBtn";
import { CarouselPrevBtn } from "./CarouselPrevBtn";
import { CarouselLeftFade } from "./CarouselLeftFade";
import { CarouselContainer } from "./CarouselContainer";
import { CarouselRightFade } from "./CarouselRightFade";

export const Carousel = Object.assign(CarouselRoot, {
  Container: CarouselContainer,
  LeftFade: CarouselLeftFade,
  RightFade: CarouselRightFade,
  NextBtn: CarouselNextBtn,
  PrevBtn: CarouselPrevBtn,
});
