import type { ComponentProps, ReactNode } from "react";

import { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type RatingContextT = {
  hoverValue: number | null;
  setHoverValue: (value: number | null) => void;
};

export type RatingRootPropsT = AccessNavigationPropsT;

export type RatingItemsPropsT = ComponentProps<"button"> & {
  count: number;
  value: number;
  onValueChange: (newValue: number) => void;
  element: ReactNode;
  activeElement: ReactNode;
};
