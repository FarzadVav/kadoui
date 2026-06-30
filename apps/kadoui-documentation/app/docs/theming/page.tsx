import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Preview } from "@/components/docs/Preview";
import { ThemeDemo } from "@/components/examples/react-demos";

export const metadata: Metadata = {
  title: "Theming",
  description: "Customize colors, dark mode, and design tokens in KadoUI.",
};

export default function ThemingPage() {
  return (
    <article>
      <h1>Theming</h1>
      <p className="text-lg text-foreground/70">
        KadoUI uses CSS custom properties for theming. Define tokens in{" "}
        <code>:root</code>, register them in <code>@theme</code>, and override
        for dark mode.
      </p>

      <h2 id="tokens">Design tokens</h2>
      <p>KadoUI expects these semantic color tokens:</p>
      <div className="overflow-x-auto rounded-xl border border-foreground/10 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card text-start">
              <th className="px-4 py-3">Token</th>
              <th className="px-4 py-3">Usage</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["background / foreground", "Page background and default text"],
              ["card / card-foreground", "Card surfaces and text"],
              ["primary / primary-foreground", "Primary brand actions"],
              ["secondary / secondary-foreground", "Secondary actions"],
              ["error / success / warning / info", "Semantic feedback colors"],
            ].map(([token, usage]) => (
              <tr key={token} className="border-t border-foreground/5">
                <td className="px-4 py-2">
                  <code>{token}</code>
                </td>
                <td className="px-4 py-2 text-foreground/80">{usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CodeBlock
        code={`:root {
  --background: #ffffff;
  --foreground: #151515;
  --card: #f5f5f5;
  --card-foreground: #202020;
  --primary: #9100b6;
  --primary-foreground: #ffffff;
  --secondary: #e800b2;
  --secondary-foreground: #ffffff;
  --error: #ff0000;
  --error-foreground: #ffffff;
  --success: #00e030;
  --success-foreground: #ffffff;
  --warning: #ffae00;
  --warning-foreground: #ffffff;
  --info: #3a3aff;
  --info-foreground: #ffffff;
}

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  /* ... map all tokens */
}`}
      />

      <h2 id="dark-mode">Dark mode</h2>
      <p>
        Use <code>data-theme</code> attribute (recommended) or class-based
        theming. Register the dark variant and override tokens:
      </p>
      <CodeBlock
        code={`@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

[data-theme="dark"] {
  --background: #151515;
  --foreground: #efefef;
  --card: #202020;
  --card-foreground: #dfdfdf;
}`}
      />

      <h2 id="theme-provider">ThemeProvider</h2>
      <Preview title="Live theme switcher">
        <ThemeDemo />
      </Preview>
      <CodeBlock
        code={`import { ThemeProvider, useTheme } from "@kadoui/react";

// In layout
<ThemeProvider
  attribute="data-theme"
  defaultTheme="system"
  enableSystem
  storageKey="kadoui-theme"
>
  {children}
</ThemeProvider>

// In components
const { theme, setTheme, resolvedTheme } = useTheme();`}
      />

      <h2 id="shadows">Shadows and z-index</h2>
      <p>
        This documentation site also defines custom shadow and z-index scales in{" "}
        <code>@theme</code>. These are optional but useful for overlays:
      </p>
      <CodeBlock
        code={`@theme {
  --z-index-small-overlay: 30;  /* popover, select-box */
  --z-index-big-overlay: 40;    /* modal, drawer-sheet */
  --shadow-md: 0 0 20px 0 #efefef25;
}`}
      />

      <h2 id="customization">Per-component customization</h2>
      <p>
        Every KadoUI utility exposes CSS variables you can override inline or via
        classes. For example, customize button height:
      </p>
      <CodeBlock
        code={`<button
  className="btn btn-fill btn-primary"
  style={{ "--btn-height": "3rem" } as React.CSSProperties}
>
  Tall Button
</button>`}
      />
      <p>
        See each utility&apos;s documentation for available CSS variables —{" "}
        <Link href="/docs/tailwindcss/buttons">Buttons</Link>,{" "}
        <Link href="/docs/tailwindcss/inputs">Inputs</Link>, etc.
      </p>
    </article>
  );
}
