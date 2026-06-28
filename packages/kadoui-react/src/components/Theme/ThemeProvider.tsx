"use client";

import {
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import { ThemeContext } from "./ThemeContext";
import { ThemeScript } from "./ThemeScript";
import type { ThemeAttributeT, ThemeProviderPropsT } from "./themeTypes";
import {
  COLOR_SCHEMES,
  DEFAULT_THEMES,
  disableTransitionAnimations,
  getStoredTheme,
  getSystemTheme,
  MEDIA_QUERY,
  saveThemeToStorage,
} from "./themeUtils";

export function ThemeProvider(props: ThemeProviderPropsT) {
  const context = use(ThemeContext);

  if (context) {
    return <>{props.children}</>;
  }

  return <ThemeRoot {...props} />;
}

function ThemeRoot({
  forcedTheme,
  disableTransitionOnChange = false,
  enableSystem = true,
  enableColorScheme = true,
  storageKey = "kadoui-theme",
  themes = DEFAULT_THEMES,
  defaultTheme = enableSystem ? "system" : "light",
  attribute = "data-theme",
  value,
  children,
  nonce,
  scriptProps,
}: ThemeProviderPropsT) {
  const [theme, setThemeState] = useState(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<
    "light" | "dark" | undefined
  >(undefined);
  const [mounted, setMounted] = useState(false);
  const attrs = value ? Object.values(value) : themes;

  const applyTheme = useCallback(
    (nextTheme: string) => {
      if (!nextTheme) {
        return;
      }

      let resolved = nextTheme;

      if (nextTheme === "system" && enableSystem) {
        resolved = getSystemTheme();
      }

      const name = value?.[resolved] ?? resolved;
      const enable = disableTransitionOnChange
        ? disableTransitionAnimations(nonce)
        : null;
      const root = document.documentElement;

      const handleAttribute = (attr: ThemeAttributeT) => {
        if (attr === "class") {
          root.classList.remove(...attrs);

          if (name) {
            root.classList.add(name);
          }
        } else if (attr.startsWith("data-")) {
          if (name) {
            root.setAttribute(attr, name);
          } else {
            root.removeAttribute(attr);
          }
        }
      };

      if (Array.isArray(attribute)) {
        attribute.forEach(handleAttribute);
      } else {
        handleAttribute(attribute);
      }

      if (enableColorScheme) {
        const fallback = COLOR_SCHEMES.includes(
          defaultTheme as (typeof COLOR_SCHEMES)[number],
        )
          ? defaultTheme
          : null;
        const colorScheme = COLOR_SCHEMES.includes(
          resolved as (typeof COLOR_SCHEMES)[number],
        )
          ? resolved
          : fallback;

        if (colorScheme) {
          root.style.colorScheme = colorScheme;
        }
      }

      enable?.();
    },
    [
      attribute,
      attrs,
      defaultTheme,
      disableTransitionOnChange,
      enableColorScheme,
      enableSystem,
      nonce,
      value,
    ],
  );

  const setTheme = useCallback<Dispatch<SetStateAction<string>>>(
    (nextValue) => {
      if (typeof nextValue === "function") {
        setThemeState((prevTheme) => {
          const newTheme = nextValue(prevTheme);

          saveThemeToStorage(storageKey, newTheme);

          return newTheme;
        });
      } else {
        setThemeState(nextValue);
        saveThemeToStorage(storageKey, nextValue);
      }
    },
    [storageKey],
  );

  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemTheme(e);

      setResolvedTheme(resolved);

      if (theme === "system" && enableSystem && !forcedTheme) {
        applyTheme("system");
      }
    },
    [applyTheme, enableSystem, forcedTheme, theme],
  );

  useEffect(() => {
    const stored = getStoredTheme(storageKey, defaultTheme)!;

    setThemeState(stored);
    setResolvedTheme(
      stored === "system" ? getSystemTheme() : (stored as "light" | "dark"),
    );
    setMounted(true);
  }, [defaultTheme, storageKey]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const media = window.matchMedia(MEDIA_QUERY);

    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery, mounted]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      if (!e.newValue) {
        setTheme(defaultTheme);
      } else {
        setThemeState(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, [defaultTheme, setTheme, storageKey]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyTheme(forcedTheme ?? theme);
  }, [applyTheme, forcedTheme, mounted, theme]);

  const providerValue = useMemo(
    () => ({
      theme: mounted ? theme : undefined,
      setTheme,
      forcedTheme,
      resolvedTheme: mounted
        ? theme === "system"
          ? resolvedTheme
          : theme
        : undefined,
      themes: enableSystem ? [...themes, "system"] : themes,
      systemTheme:
        mounted && enableSystem
          ? (resolvedTheme as "light" | "dark")
          : undefined,
      mounted,
    }),
    [
      enableSystem,
      forcedTheme,
      mounted,
      resolvedTheme,
      setTheme,
      theme,
      themes,
    ],
  );

  return (
    <ThemeContext value={providerValue}>
      <ThemeScript
        attribute={attribute}
        defaultTheme={defaultTheme}
        enableColorScheme={enableColorScheme}
        enableSystem={enableSystem}
        forcedTheme={forcedTheme}
        nonce={nonce}
        scriptProps={scriptProps}
        storageKey={storageKey}
        themes={themes}
        value={value}
      />

      {children}
    </ThemeContext>
  );
}
