import { CodeBlock } from "./CodeBlock";
import { Preview } from "./Preview";
import type { DocSectionT } from "@/lib/types";

type DocSectionsPropsT = {
  sections: DocSectionT[];
};

export function DocSections({ sections }: DocSectionsPropsT) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-10">
          <h2 className="text-2xl font-bold mb-3 scroll-mt-24">{section.title}</h2>
          {section.description ? (
            <p className="text-foreground/80 mb-4">{section.description}</p>
          ) : null}
          {section.content ? (
            <p className="text-foreground/80 mb-4">{section.content}</p>
          ) : null}
          {section.preview}
          {section.code ? <CodeBlock code={section.code} /> : null}
        </section>
      ))}
    </>
  );
}

export { Preview };
