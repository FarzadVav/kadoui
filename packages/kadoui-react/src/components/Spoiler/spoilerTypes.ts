import type { ComponentProps } from "react";

export type SpoilerContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
};

export type SpoilerRootProps = ComponentProps<"span"> & {
  isOpen?: boolean;
  setOpen?: (newState: boolean) => void;
  defaultOpen?: boolean;
};

export type SpoilerBlurPropsT = ComponentProps<"span">;
