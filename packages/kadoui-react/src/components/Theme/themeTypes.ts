import type {
  DetailedHTMLProps,
  PropsWithChildren,
  ScriptHTMLAttributes,
} from "react";

export type ThemeT = "dark" | "light" | "system";

export type ThemeValueObjectT = Record<string, string>;

export type ThemeDataAttributeT = `data-${string}`;

export type ThemeAttributeT = ThemeDataAttributeT | "class";

export type ThemeScriptPropsT = DetailedHTMLProps<
  ScriptHTMLAttributes<HTMLScriptElement>,
  HTMLScriptElement
> & {
  [dataAttribute: ThemeDataAttributeT]: unknown;
};

export type UseThemeReturnT = {
  themes: string[];
  forcedTheme?: string;
  setTheme: (theme: string) => void;
  theme?: string;
  resolvedTheme?: string;
  systemTheme?: "dark" | "light";
  mounted: boolean;
};

export type ThemeProviderPropsT = PropsWithChildren & {
  themes?: string[];
  forcedTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  enableColorScheme?: boolean;
  storageKey?: string;
  defaultTheme?: string;
  attribute?: ThemeAttributeT | ThemeAttributeT[];
  value?: ThemeValueObjectT;
  nonce?: string;
  scriptProps?: ThemeScriptPropsT;
};

export type ThemeScriptComponentPropsT = Omit<
  ThemeProviderPropsT,
  "children"
> & {
  defaultTheme: string;
};
