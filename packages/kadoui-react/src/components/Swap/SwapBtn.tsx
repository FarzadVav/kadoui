"use client";

import { type ComponentProps, use } from "react";

import { SwapContext } from "./SwapContext";

export type SwapBtnPropsT = ComponentProps<"button"> & {
  btnKey: string;
};

export function SwapBtn({ btnKey, onClick, children, ...p }: SwapBtnPropsT) {
  const { keys, activeKey, setActiveKey } = use(SwapContext);

  return btnKey === activeKey ? (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        const nextKey = keys.indexOf(activeKey) + 1;

        const currentNextKey = nextKey === keys.length ? 0 : nextKey;

        const nextActiveKey = keys[currentNextKey];
        if (nextActiveKey) {
          setActiveKey(nextActiveKey);
        }
      }}
      {...p}>
      {children || keys.find((item) => item === btnKey)}
    </button>
  ) : null;
}
