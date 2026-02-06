"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { ThemeContext, ThemeT } from "./ThemeContext";

type ThemeProviderPropsT = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderPropsT) {
  const [theme, setTheme] = useState<ThemeT | undefined>(undefined);

  useEffect(() => {
    const localTheme = localStorage.getItem("kadoui-theme") || "";
    setTheme(localTheme as ThemeT);
  }, []);

  const mediThemeHandler = (matches: MediaQueryListEvent["matches"]) => {
    const html = document.querySelector("html")!;

    const theme = matches ? "dark" : "light";
    html.setAttribute("data-theme", theme);
  };

  const handleSetTheme = (theme: ThemeT) => {
    const html = document.querySelector("html")!;

    setTheme(theme);
    localStorage.setItem("kadoui-theme", theme);

    if (["light", "dark"].includes(theme)) {
      html.setAttribute("data-theme", theme);

      return;
    }

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeQuery.addEventListener("change", ev => mediThemeHandler(ev.matches));

    mediThemeHandler(darkModeQuery.matches);
  };

  return (
    <ThemeContext value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext>
  )
}