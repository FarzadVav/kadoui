import type { ComponentProps, Dispatch, PropsWithChildren, SetStateAction } from "react";

export type SwapContextT = {
  keys: string[];
  activeKey: string;
  setActiveKey: Dispatch<SetStateAction<string>>;
};

export type SwapRootPropsT = PropsWithChildren & {
  keys: string[];
  activeKey: string;
  setActiveKey: Dispatch<SetStateAction<string>>;
};

export type SwapBtnPropsT = ComponentProps<"button"> & {
  btnKey: string;
};
