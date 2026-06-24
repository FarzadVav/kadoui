import type { ComponentProps, ReactNode, RefObject } from "react";

export type ShowMoreContextT = {
  contentRef: RefObject<HTMLDivElement | null>;
  shouldShowMore: boolean;
  isShowMore: boolean;
  setIsShowMore: (newState: boolean) => void;
  clampedHeight: number;
  fullHeight: number;
};

export type ShowMoreRootPropsT = ComponentProps<"div"> & {
  maxLines: number;
  defaultExpanded?: boolean;
};

export type ShowMoreContentPropsT = ComponentProps<"div">;

export type ShowMoreFadePropsT = ComponentProps<"div">;

export type ShowMoreTogglePropsT = Omit<
  ComponentProps<"button">,
  "children" | "type"
> & {
  children?: (isShowMore: boolean) => ReactNode;
};
