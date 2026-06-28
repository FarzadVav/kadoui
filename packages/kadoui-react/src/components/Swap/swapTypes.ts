import type { ComponentProps, PropsWithChildren, ReactNode } from "react";

import type { SearchParamsNavigationOptionsT } from "../shared/searchParamsNavigationTypes";

export type SwapContextT = {
  keys: string[];
  activeKey: string;
  setActiveKey: (newKey: string) => void;
};

export type SwapStateRootPropsT = PropsWithChildren & SwapContextT;

export type SwapSearchParamsRootPropsT = PropsWithChildren &
  SearchParamsNavigationOptionsT & {
    keys: string[];
    activeKeyKey?: string;
    defaultActiveKey?: string;
  };

/** @deprecated Use SwapStateRootPropsT */
export type SwapRootPropsT = SwapStateRootPropsT;

export type SwapBtnPropsT = Omit<ComponentProps<"button">, "children"> & {
  btnKey: string;
  children?: (btnKey: string) => ReactNode;
};
