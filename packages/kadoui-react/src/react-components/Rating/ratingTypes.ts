import type { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";

import { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type RatingContextT = {
  hoverValue: number | null;
  setHoverValue: Dispatch<SetStateAction<number | null>>;
};

export type RatingRootPropsT = AccessNavigationPropsT;

export type RatingItemsPropsT = ComponentProps<"button"> & {
  count: number;
  value: number;
  onValueChange: (newValue: number) => void;
  element: ReactNode;
  activeElement: ReactNode;
};
