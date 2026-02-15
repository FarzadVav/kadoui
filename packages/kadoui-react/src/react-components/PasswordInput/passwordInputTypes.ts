import type { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";

export type PasswordInputContextT = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export type PasswordInputRootPropsT = ComponentProps<"label">;

export type PasswordInputFieldPropsT = ComponentProps<"input">;

export type PasswordInputTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  visibleChildren: ReactNode;
};
