import type { ComponentProps, Dispatch, RefObject, SetStateAction } from "react";

export type ShowMoreContextT = {
  contentRef: RefObject<HTMLDivElement | null>;
  shouldShowMore: boolean;
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
  maxHeight: number;
};

export type ShowMoreRootPropsT = ComponentProps<"div"> & {
  maxLines: number;
  defaultExpanded?: boolean;
};

export type ShowMoreContentPropsT = ComponentProps<"div">;

export type ShowMoreFadePropsT = ComponentProps<"div">;

export type ShowMoreTogglePropsT = Omit<ComponentProps<"button">, "type">;
