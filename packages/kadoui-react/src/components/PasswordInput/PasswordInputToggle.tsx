"use client";

import { ButtonHTMLAttributes, ReactNode, use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";

export type PasswordInputTogglePropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
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