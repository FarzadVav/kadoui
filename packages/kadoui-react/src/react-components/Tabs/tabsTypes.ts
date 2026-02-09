import type { ComponentProps, Dispatch, PropsWithChildren, SetStateAction } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type TabsContextT = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export type TabsRootPropsT = PropsWithChildren & {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export type TabsListPropsT = AccessNavigationPropsT;

export type TabsTabPropsT = ComponentProps<"button"> & {
  value: string;
};

export type TabsPanelPropsT = ComponentProps<"div"> & {
  value: string;
};
