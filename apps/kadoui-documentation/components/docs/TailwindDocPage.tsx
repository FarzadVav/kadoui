import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocSections } from "@/components/docs/DocSections";
import { PropsTable } from "@/components/docs/PropsTable";
import { tailwindDocs } from "@/lib/docs/tailwindcss";

type TailwindDocPagePropsT = {
  slug: string;
};

export function getTailwindDoc(slug: string) {
  return tailwindDocs[slug] ?? null;
}

export function generateTailwindMetadata(slug: string): Metadata {
  const doc = getTailwindDoc(slug);
  if (!doc) return { title: "Not Found" };
  return {
    title: doc.title,
    description: doc.description,
  };
}

export function TailwindDocPage({ slug }: TailwindDocPagePropsT) {
  const doc = getTailwindDoc(slug);
  if (!doc) notFound();

  return (
    <article>
      <p className="text-sm font-medium text-primary mb-2">Tailwind CSS</p>
      <h1>{doc.title}</h1>
      <p className="text-lg text-foreground/70">{doc.description}</p>
      <p className="mt-4">{doc.overview}</p>

      {doc.cssVariables?.length ? (
        <>
          <h2 id="css-variables">CSS Variables</h2>
          <PropsTable rows={doc.cssVariables} />
        </>
      ) : null}

      <h2 id="utilities">Utilities</h2>
      <PropsTable rows={doc.utilities} />

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
