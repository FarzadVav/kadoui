import Link from "next/link";
import { ArrowRightIcon, BookOpenIcon, PaletteIcon, ComponentIcon } from "lucide-react";
import { DocsHeader } from "@/components/docs/DocsHeader";

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <DocsHeader />

      <main>
        <section className="docs-wrapper py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            v3 React · v2 Tailwind
          </p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Build interfaces with{" "}
            <span className="text-primary">KadoUI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            A primitive-first design system for React and Tailwind CSS v4.
            Unstyled compound components paired with utility classes you fully
            control.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/docs/getting-started" className="btn btn-fill btn-primary">
              Get Started
              <ArrowRightIcon />
            </Link>
            <Link href="/docs/react" className="btn btn-soft btn-foreground">
              Browse Components
            </Link>
          </div>
        </section>

        <section className="docs-wrapper pb-20">
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/docs/getting-started"
              className="card card-md card-y border border-foreground/10 transition-colors hover:border-primary/30"
            >
              <BookOpenIcon className="text-primary" />
              <h2 className="text-lg font-bold">Getting Started</h2>
              <p className="text-sm text-foreground/70">
                Install both packages, configure PostCSS, and set up your theme
                tokens in minutes.
              </p>
            </Link>
            <Link
              href="/docs/tailwindcss"
              className="card card-md card-y border border-foreground/10 transition-colors hover:border-primary/30"
            >
              <PaletteIcon className="text-primary" />
              <h2 className="text-lg font-bold">Tailwind CSS</h2>
              <p className="text-sm text-foreground/70">
                Buttons, inputs, cards, glass effects, join groups, separators,
                and choice controls.
              </p>
            </Link>
            <Link
              href="/docs/react"
              className="card card-md card-y border border-foreground/10 transition-colors hover:border-primary/30"
            >
              <ComponentIcon className="text-primary" />
              <h2 className="text-lg font-bold">React Primitives</h2>
              <p className="text-sm text-foreground/70">
                26 compound components with optional URL state sync for Next.js
                App Router.
              </p>
            </Link>
          </div>
        </section>

        <section className="border-t border-foreground/10 bg-card/50 py-16">
          <div className="docs-wrapper docs-prose">
            <h2>Philosophy</h2>
            <p>
              KadoUI separates <strong>behavior</strong> from <strong>appearance</strong>.
              React components handle accessibility, keyboard navigation, animations,
              and state — while Tailwind utilities define how everything looks.
            </p>
            <ul>
              <li>
                <strong>Primitive components</strong> — compound APIs like{" "}
                <code>Modal.Toggle</code>, <code>Modal.Portal</code>,{" "}
                <code>Modal.Body</code>
              </li>
              <li>
                <strong>CSS utilities</strong> — composable classes like{" "}
                <code>btn btn-fill btn-primary</code>
              </li>
              <li>
                <strong>Full customization</strong> — override CSS variables or
                combine Tailwind classes freely
              </li>
              <li>
                <strong>Next.js ready</strong> — URL-synced variants for shareable
                UI state
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
