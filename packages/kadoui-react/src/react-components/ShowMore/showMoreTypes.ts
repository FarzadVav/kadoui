import type { ComponentProps, RefObject } from "react";

export type ShowMoreContextT = {
  contentRef: RefObject<HTMLDivElement | null>;
  shouldShowMore: boolean;
  isShowMore: boolean;
  setIsShowMore: (newState: boolean) => void;
  maxHeight: number;
};

export type ShowMoreRootPropsT = ComponentProps<"div"> & {
  maxLines: number;
  defaultExpanded?: boolean;
};

export type ShowMoreContentPropsT = ComponentProps<"div">;

export type ShowMoreFadePropsT = ComponentProps<"div">;

export type ShowMoreTogglePropsT = Omit<ComponentProps<"button">, "type">;
