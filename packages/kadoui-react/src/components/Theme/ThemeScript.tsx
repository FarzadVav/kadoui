"use client";

import { memo } from "react";

import { themeScript } from "./themeScript";
import type { ThemeScriptComponentPropsT } from "./themeTypes";

export const ThemeScript = memo(function ThemeScript({
  forcedTheme,
  storageKey,
  attribute,
  enableSystem,
  enableColorScheme,
  defaultTheme,
  value,
  themes,
  nonce,
  scriptProps,
}: ThemeScriptComponentPropsT) {
  if (typeof window !== "undefined") {
    return null;
  }

  const scriptArgs = JSON.stringify([
    attribute,
    storageKey,
    defaultTheme,
    forcedTheme,
    themes,
    value,
    enableSystem,
    enableColorScheme,
  ]).slice(1, -1);

  return (
    <script
      {...scriptProps}
      suppressHydrationWarning
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `(${themeScript.toString()})(${scriptArgs})`,
      }}
    />
  );
});
