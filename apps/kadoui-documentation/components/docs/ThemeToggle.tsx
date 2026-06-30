"use client";

import { MoonIcon, SunIcon, MonitorIcon } from "lucide-react";
import { useTheme } from "@kadoui/react";

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="btn btn-ghost btn-foreground btn-square btn-sm opacity-50" />
    );
  }

  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  return (
    <button
      type="button"
      className="btn btn-ghost btn-foreground btn-square btn-sm"
      title={`Theme: ${theme}. Click to switch.`}
      onClick={() => setTheme(nextTheme)}
    >
      {theme === "light" ? (
        <SunIcon />
      ) : theme === "dark" ? (
        <MoonIcon />
      ) : (
        <MonitorIcon />
      )}
    </button>
  );
}
