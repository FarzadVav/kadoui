import type { Metadata } from "next";
import Link from "next/link";
import { reactSlugs, reactDocs } from "@/lib/docs/react";

export const metadata: Metadata = {
  title: "React Components",
  description: "KadoUI React primitives reference.",
};

export default function ReactOverviewPage() {
  const withSearchParams = reactSlugs.filter(
    (slug) => reactDocs[slug].searchParamsVariant,
  );

  return (
    <article>
      <h1>React Components</h1>
      <p className="text-lg text-foreground/70">
        26 primitive compound components for React 19 and Next.js App Router.
        Each component handles behavior — you provide the styles.
      </p>

      <h2 id="import">Import</h2>
      <pre className="card card-sm bg-card text-sm overflow-x-auto mb-6">
        <code>{`import { Modal, ThemeProvider, useTheme } from "@kadoui/react";`}</code>
      </pre>

      <h2 id="patterns">Patterns</h2>
      <ul>
        <li>
          <strong>Compound components</strong> —{" "}
          <code>Modal.Toggle</code>, <code>Modal.Portal</code>,{" "}
          <code>Modal.Body</code>
        </li>
        <li>
          <strong>data-state styling</strong> — toggles expose{" "}
          <code>data-state=&quot;true&quot;</code> for Tailwind variants
        </li>
        <li>
          <strong>WithSearchParams</strong> — URL-synced variants for shareable
          UI state (9 components)
        </li>
        <li>
          <strong>AccessNavigation</strong> — built-in arrow key navigation on
          list-like components
        </li>
      </ul>

      <h2 id="search-params">URL state components</h2>
      <p>These components have a <code>WithSearchParams</code> export:</p>
      <ul className="mb-6">
        {withSearchParams.map((slug) => (
          <li key={slug}>
            <Link href={`/docs/react/${slug}`}>
              {reactDocs[slug].searchParamsVariant?.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2 id="components">All components</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {reactSlugs.map((slug) => {
          const doc = reactDocs[slug];
          return (
            <Link
              key={slug}
              href={`/docs/react/${slug}`}
              className="card card-sm card-y border border-foreground/10 transition-colors hover:border-primary/30"
            >
              <span className="font-semibold">{doc.title}</span>
              <span className="text-sm text-foreground/60">{doc.description}</span>
            </Link>
          );
        })}
      </div>
    </article>
  );
}
