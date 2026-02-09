"use client";

import { use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";
import type { PasswordInputTogglePropsT } from "./passwordInputTypes";

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