import type { ComponentProps, ReactNode, RefObject } from "react";

import type { SearchParamsNavigationOptionsT } from "../../utils/types";

export type ShowMoreContextT = {
  contentRef: RefObject<HTMLDivElement | null>;
  shouldShowMore: boolean;
  isShowMore: boolean;
  setIsShowMore: (newState: boolean) => void;
  clampedHeight: number;
  fullHeight: number;
};

type ShowMoreBasePropsT = ComponentProps<"div"> & {
  maxLines: number;
};

export type ShowMoreStateRootPropsT = ShowMoreBasePropsT & {
  isShowMore?: boolean;
  setIsShowMore?: (newState: boolean) => void;
  defaultExpanded?: boolean;
};

export type ShowMoreSearchParamsRootPropsT = ShowMoreBasePropsT &
  SearchParamsNavigationOptionsT & {
    openKey?: string;
  };

/** @deprecated Use ShowMoreStateRootPropsT */
export type ShowMoreRootPropsT = ShowMoreStateRootPropsT;

export type ShowMoreContentPropsT = ComponentProps<"div">;

export type ShowMoreFadePropsT = ComponentProps<"div">;

export type ShowMoreTogglePropsT = Omit<
  ComponentProps<"button">,
  "children" | "type"
> & {
  children?: (isShowMore: boolean) => ReactNode;
};
