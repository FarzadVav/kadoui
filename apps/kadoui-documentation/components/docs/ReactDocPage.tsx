import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocSections } from "@/components/docs/DocSections";
import { PropsTable } from "@/components/docs/PropsTable";
import { reactDocs } from "@/lib/docs/react";

type ReactDocPagePropsT = {
  slug: string;
};

export function getReactDoc(slug: string) {
  return reactDocs[slug] ?? null;
}

export function generateReactMetadata(slug: string): Metadata {
  const doc = getReactDoc(slug);
  if (!doc) return { title: "Not Found" };
  return {
    title: doc.title,
    description: doc.description,
  };
}

export function ReactDocPage({ slug }: ReactDocPagePropsT) {
  const doc = getReactDoc(slug);
  if (!doc) notFound();

  return (
    <article>
      <p className="text-sm font-medium text-primary mb-2">React</p>
      <h1>{doc.title}</h1>
      <p className="text-lg text-foreground/70">{doc.description}</p>
      <p className="mt-4">{doc.overview}</p>

      <h2 id="installation">Import</h2>
      <CodeBlock code={doc.importCode} language="tsx" />

      {doc.parts?.length ? (
        <>
          <h2 id="anatomy">Anatomy</h2>
          <PropsTable rows={doc.parts} />
        </>
      ) : null}

      <h2 id="api">API Reference</h2>
      <PropsTable rows={doc.props} />

      {doc.searchParamsVariant ? (
        <>
          <h2 id="search-params">{doc.searchParamsVariant.name}</h2>
          <p className="text-foreground/80 mb-4">
            URL-synced variant for Next.js App Router. Syncs component state to
            search params for shareable, bookmarkable UI state.
          </p>
          <PropsTable rows={doc.searchParamsVariant.props} />
          {doc.searchParamsVariant.notes?.length ? (
            <ul>
              {doc.searchParamsVariant.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
          <CodeBlock
            code={`import { ${doc.searchParamsVariant.name} } from "@kadoui/react";

// Wrap in Suspense for Next.js App Router
<Suspense>
  <${doc.searchParamsVariant.name} ...>
    ...
  </${doc.searchParamsVariant.name}>
</Suspense>`}
          />
        </>
      ) : null}

      <h2 id="examples">Examples</h2>
      <DocSections sections={doc.sections} />

      {doc.notes?.length ? (
        <>
          <h2 id="notes">Notes</h2>
          <ul>
            {doc.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </>
      ) : null}
    </article>
  );
}
