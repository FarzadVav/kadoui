import type { ComponentProps, PropsWithChildren, ReactNode } from "react";

export type SwapContextT = {
  keys: string[];
  activeKey: string;
  setActiveKey: (newKey: string) => void;
};

export type SwapRootPropsT = PropsWithChildren & SwapContextT;

export type SwapBtnPropsT = Omit<ComponentProps<"button">, "children"> & {
  btnKey: string;
  children?: (btnKey: string) => ReactNode;
};
