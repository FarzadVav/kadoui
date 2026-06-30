import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/docs/CodeBlock";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Install and configure @kadoui/react and @kadoui/tailwindcss.",
};

export default function GettingStartedPage() {
  return (
    <article>
      <h1>Getting Started</h1>
      <p className="text-lg text-foreground/70">
        KadoUI consists of two packages that work together: Tailwind CSS utilities
        for styling and React primitives for behavior.
      </p>

      <h2 id="install">Installation</h2>
      <CodeBlock
        title="npm"
        language="bash"
        code={`npm install @kadoui/react @kadoui/tailwindcss tailwindcss @tailwindcss/postcss`}
      />
      <CodeBlock
        title="pnpm"
        language="bash"
        code={`pnpm add @kadoui/react @kadoui/tailwindcss tailwindcss @tailwindcss/postcss`}
      />

      <h2 id="postcss">PostCSS configuration</h2>
      <p>
        KadoUI ships a PostCSS preset for Tailwind CSS v4. Create{" "}
        <code>postcss.config.mjs</code> in your project root:
      </p>
      <CodeBlock
        code={`import { kadouiPostcssConfig } from "@kadoui/tailwindcss/postcss";

export default kadouiPostcssConfig;`}
      />

      <h2 id="css">Global CSS</h2>
      <p>
        Import KadoUI styles and define your theme tokens. Tailwind v4 uses{" "}
        <code>@theme</code> to register design tokens:
      </p>
      <CodeBlock
        code={`@import "@kadoui/tailwindcss";
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #151515;
  --primary: #9100b6;
  --primary-foreground: #ffffff;
  /* ... other tokens */
}

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
}

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

[data-theme="dark"] {
  --background: #151515;
  --foreground: #efefef;
}`}
      />

      <h2 id="nextjs">Next.js setup</h2>
      <p>Wrap your app with ThemeProvider in the root layout:</p>
      <CodeBlock
        code={`import { ThemeProvider } from "@kadoui/react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
      />

      <h2 id="monorepo">Monorepo (workspace)</h2>
      <p>
        In a pnpm workspace, reference packages with{" "}
        <code>workspace:*</code> and set Turbopack root to the monorepo root in{" "}
        <code>next.config.ts</code>:
      </p>
      <CodeBlock
        code={`// next.config.ts
import path from "path";
import { fileURLToPath } from "url";

const monorepoRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

export default {
  turbopack: { root: monorepoRoot },
};`}
      />

      <h2 id="first-component">Your first component</h2>
      <CodeBlock
        code={`"use client";

import { Modal } from "@kadoui/react";

export function Demo() {
  return (
    <Modal>
      <Modal.Toggle className="btn btn-fill btn-primary">
        Open Modal
      </Modal.Toggle>
      <Modal.Portal>
        <Modal.Body className="card card-md card-y glass glass-background">
          <Modal.Content>Hello KadoUI!</Modal.Content>
        </Modal.Body>
      </Modal.Portal>
    </Modal>
  );
}`}
      />

      <h2 id="next-steps">Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/theming">Configure theming and dark mode</Link>
        </li>
        <li>
          <Link href="/docs/tailwindcss/buttons">Explore Tailwind utilities</Link>
        </li>
        <li>
          <Link href="/docs/react">Browse React components</Link>
        </li>
      </ul>
    </article>
  );
}
