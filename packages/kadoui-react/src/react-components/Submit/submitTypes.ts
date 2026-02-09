import type { ComponentProps, PropsWithChildren, ReactNode } from "react";

export type SubmitContextT = {
  pending: boolean;
};

export type SubmitRootPropsT = ComponentProps<"button"> & {
  loader?: ReactNode;
};

export type SubmitLoaderPropsT = PropsWithChildren & {
  loader: ReactNode;
};
