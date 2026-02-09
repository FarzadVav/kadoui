import type { ComponentProps, ReactNode } from "react";

export type BreadcrumbsContextT = {
  separator: ReactNode;
};

export type BreadcrumbsRootPropsT = ComponentProps<"nav"> & {
  separator: ReactNode;
};

export type BreadcrumbsItemPropsT = ComponentProps<"div"> & {
  isLastItem?: boolean;
};
