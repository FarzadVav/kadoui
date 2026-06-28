import type { PropsWithChildren } from "react";

export type ThemeT = "dark" | "light" | "system";

export type ThemeContextT = {
  theme: ThemeT | undefined;
  setTheme: (theme: ThemeT) => void;
};

export type ThemeProviderPropsT = PropsWithChildren;
