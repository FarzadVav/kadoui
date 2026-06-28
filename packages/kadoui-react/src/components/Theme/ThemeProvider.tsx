"use client";

import { useLayoutEffect, useState } from "react";

import { ThemeContext } from "./ThemeContext";
import type { ThemeProviderPropsT, ThemeT } from "./themeTypes";

export function ThemeProvider({ children }: ThemeProviderPropsT) {
  const [theme, setTheme] = useState<ThemeT | undefined>(undefined);

  useLayoutEffect(() => {
    try {
      let localTheme = localStorage.getItem("kadoui-theme") || "";

      if (!["light", "dark", "system"].includes(localTheme)) {
        localTheme = "system";
        localStorage.setItem("kadoui-theme", localTheme);
      }

      setTheme(localTheme as ThemeT);

      const html = document.querySelector("html");

      if (!html) {
        return;
      }

      if (["light", "dark"].includes(localTheme)) {
        html.setAttribute("data-theme", localTheme);

        return;
      }

      const themeHandler = (matches: boolean) => {
        const theme = matches ? "dark" : "light";
        html.setAttribute("data-theme", theme);
      };

      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const onSystemThemeChange = (ev: MediaQueryListEvent) =>
        themeHandler(ev.matches);

      darkModeQuery.addEventListener("change", onSystemThemeChange);
      themeHandler(darkModeQuery.matches);

      return () => {
        darkModeQuery.removeEventListener("change", onSystemThemeChange);
      };
    } catch (err) {
      console.log(err);
    }
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
    darkModeQuery.addEventListener("change", (ev) =>
      mediThemeHandler(ev.matches),
    );

    mediThemeHandler(darkModeQuery.matches);
  };

  return (
    <ThemeContext value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext>
  );
}
