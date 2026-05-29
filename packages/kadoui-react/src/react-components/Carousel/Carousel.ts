import { CarouselRoot } from "./CarouselRoot";
import { CarouselNextBtn } from "./CarouselNextBtn";
import { CarouselPrevBtn } from "./CarouselPrevBtn";
import { CarouselLeftFade } from "./CarouselLeftFade";
import { CarouselContainer } from "./CarouselContainer";
import { CarouselRightFade } from "./CarouselRightFade";

{/* TODO: prevent the link or any mouse click events on dragging the carousel in kadoui-react */ }
{/* TODO: add default gap to carousel-container in kadoui-tailwindcss */ }

export const Carousel = Object.assign(CarouselRoot, {
  Container: CarouselContainer,
  LeftFade: CarouselLeftFade,
  RightFade: CarouselRightFade,
  NextBtn: CarouselNextBtn,
  PrevBtn: CarouselPrevBtn,
});

export * from "./carouselTypes";
