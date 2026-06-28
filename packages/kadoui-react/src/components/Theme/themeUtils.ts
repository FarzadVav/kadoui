export const COLOR_SCHEMES = ["light", "dark"] as const;

export const MEDIA_QUERY = "(prefers-color-scheme: dark)";

export const DEFAULT_THEMES = ["light", "dark"];

export const IS_SERVER = typeof window === "undefined";

export function saveThemeToStorage(storageKey: string, value: string) {
  try {
    localStorage.setItem(storageKey, value);
  } catch {
    // Unsupported
  }
}

export function getStoredTheme(key: string, fallback?: string) {
  if (IS_SERVER) {
    return fallback;
  }

  try {
    const theme = localStorage.getItem(key);

    return theme || fallback;
  } catch {
    return fallback;
  }
}

export function disableTransitionAnimations(nonce?: string) {
  const css = document.createElement("style");

  if (nonce) {
    css.setAttribute("nonce", nonce);
  }

  css.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
    ),
  );
  document.head.appendChild(css);

  return () => {
    void window.getComputedStyle(document.body);

    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
}

export function getSystemTheme(e?: MediaQueryList | MediaQueryListEvent) {
  const media = e ?? window.matchMedia(MEDIA_QUERY);

  return media.matches ? "dark" : "light";
}
