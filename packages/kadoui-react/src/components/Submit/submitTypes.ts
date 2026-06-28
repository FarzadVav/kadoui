import type { ComponentProps, ReactNode } from "react";

export type SubmitPropsT = Omit<ComponentProps<"button">, "children"> & {
  children?: (isPending: boolean) => ReactNode;
};
