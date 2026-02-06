window.addEventListener("load", () => {
  try {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const htmlElement = document.querySelector("html")!;
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storageKey = "kadoui-theme-mode";
    type ThemeMode = "system" | "dark" | "light";

    const getSystemTheme = (ev: MediaQueryListEvent | MediaQueryList) =>
      ev.matches ? "dark" : "light";

    const setThemeAttribute = (theme: "dark" | "light") => {
      htmlElement.setAttribute("data-theme", theme);
    };

    const updateButtonText = (mode: ThemeMode) => {
      if (!themeToggleBtn) return;
      const label = mode[0].toUpperCase() + mode.slice(1);
      themeToggleBtn.textContent = `Theme: ${label}`;
    };

    const applyThemeMode = (mode: ThemeMode, ev?: MediaQueryListEvent) => {
      if (mode === "system") {
        const theme = getSystemTheme(ev || darkModeQuery);
        setThemeAttribute(theme);
      } else {
        setThemeAttribute(mode);
      }
      updateButtonText(mode);
    };

    const storedMode = (localStorage.getItem(storageKey) ||
      "system") as ThemeMode;

    applyThemeMode(storedMode);

    darkModeQuery.addEventListener("change", (ev) => {
      const mode = (localStorage.getItem(storageKey) ||
        "system") as ThemeMode;
      if (mode === "system") {
        applyThemeMode("system", ev);
      }
    });

    themeToggleBtn?.addEventListener("click", () => {
      const currentMode = (localStorage.getItem(storageKey) ||
        "system") as ThemeMode;
      const nextMode: ThemeMode =
        currentMode === "system"
          ? "dark"
          : currentMode === "dark"
            ? "light"
            : "system";
      localStorage.setItem(storageKey, nextMode);
      applyThemeMode(nextMode);
    });
  } catch (err) {
    console.log(err);
  }
});
