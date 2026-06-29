import type { ComponentProps, ReactNode } from "react";

export type PasswordInputContextT = {
  isVisible: boolean;
  setIsVisible: (newState: boolean) => void;
};

export type PasswordInputRootPropsT = ComponentProps<"label"> & {
  isVisible?: boolean;
  setIsVisible?: (newState: boolean) => void;
  defaultVisible?: boolean;
};

export type PasswordInputFieldPropsT = ComponentProps<"input">;

export type PasswordInputTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  visibleChildren: ReactNode;
};
