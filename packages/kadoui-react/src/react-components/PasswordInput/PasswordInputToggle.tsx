"use client";

import { type ComponentProps, ReactNode, use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";

export type PasswordInputTogglePropsT = ComponentProps<"button"> & {
  visibleChildren: ReactNode;
};

export function PasswordInputToggle({ visibleChildren, onClick, children, ...props }: PasswordInputTogglePropsT) {
  const { isVisible, setIsVisible } = use(PasswordInputContext);

  return (
    <button
      type="button"
      onClick={ev => {
        setIsVisible(prev => !prev);
        onClick?.(ev);
      }}
      {...props}
    >
      {isVisible ? visibleChildren : children}
    </button>
  );
}