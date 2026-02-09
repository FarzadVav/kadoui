import type { ComponentProps, Dispatch, SetStateAction } from "react";

export type SpoilerContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type SpoilerRootProps = ComponentProps<"span">;

export type SpoilerBlurPropsT = ComponentProps<"span">;
