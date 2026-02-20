"use client";

import { use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";
import type { PasswordInputTogglePropsT } from "./passwordInputTypes";

export function PasswordInputToggle({ visibleChildren, onClick, children, ...p }: PasswordInputTogglePropsT) {
  const { isVisible, setIsVisible } = use(PasswordInputContext);

  return (
    <button
      type="button"
      data-state={isVisible}
      onClick={ev => {
        setIsVisible(isVisible);
        onClick?.(ev);
      }}
      {...p}
    >
      {isVisible ? visibleChildren : children}
    </button>
  );
}