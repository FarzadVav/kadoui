import type { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";

export type RatingContextT = {
  hoverValue: number | null;
  setHoverValue: Dispatch<SetStateAction<number | null>>;
};

export type RatingRootPropsT = ComponentProps<"div">;

export type RatingItemsPropsT = ComponentProps<"button"> & {
  count: number;
  value: number;
  onValueChange: (newValue: number) => void;
  element: ReactNode;
  activeElement: ReactNode;
};
