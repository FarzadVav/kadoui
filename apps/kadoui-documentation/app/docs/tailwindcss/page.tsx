import type { Metadata } from "next";
import Link from "next/link";
import { tailwindSlugs, tailwindDocs } from "@/lib/docs/tailwindcss";

export const metadata: Metadata = {
  title: "Tailwind CSS",
  description: "KadoUI Tailwind CSS utilities reference.",
};

export default function TailwindOverviewPage() {
  return (
    <article>
      <h1>Tailwind CSS</h1>
      <p className="text-lg text-foreground/70">
        KadoUI Tailwind provides composable utility classes built on Tailwind CSS
        v4. Import once and style with semantic, theme-aware classes.
      </p>

      <h2 id="import">Import</h2>
      <pre className="card card-sm bg-card text-sm overflow-x-auto mb-6">
        <code>{`@import "@kadoui/tailwindcss";
@import "tailwindcss";`}</code>
      </pre>

      <h2 id="utilities">Utilities</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {tailwindSlugs.map((slug) => {
          const doc = tailwindDocs[slug];
          return (
            <Link
              key={slug}
              href={`/docs/tailwindcss/${slug}`}
              className="card card-sm card-y border border-foreground/10 transition-colors hover:border-primary/30"
            >
              <span className="font-semibold">{doc.title}</span>
              <span className="text-sm text-foreground/60">{doc.description}</span>
            </Link>
          );
        })}
      </div>

      <h2 id="composition">Composition pattern</h2>
      <p>
        Utilities follow a consistent pattern: <strong>base + variant + color +
        size</strong>. Example:
      </p>
      <pre className="card card-sm bg-card text-sm overflow-x-auto">
        <code>btn btn-fill btn-primary btn-lg</code>
      </pre>
    </article>
  );
}
