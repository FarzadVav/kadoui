import type { ComponentProps, ReactNode } from "react";

export type PasswordInputContextT = {
  isVisible: boolean;
  setIsVisible: (newState: boolean) => void;
};

export type PasswordInputRootPropsT = ComponentProps<"label">;

export type PasswordInputFieldPropsT = ComponentProps<"input">;

export type PasswordInputTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  visibleChildren: ReactNode;
};
