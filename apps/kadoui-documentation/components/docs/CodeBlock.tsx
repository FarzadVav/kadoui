import { CopyButton } from "./CopyButton";

type CodeBlockPropsT = {
  code: string;
  title?: string;
  language?: string;
};

export function CodeBlock({ code, title, language = "tsx" }: CodeBlockPropsT) {
  return (
    <div className="card card-y bg-card mb-6 overflow-hidden">
      {title ? (
        <div className="flex items-center justify-between gap-3 border-b border-foreground/10 pb-2">
          <span className="text-sm font-medium text-foreground/70">{title}</span>
          <CopyButton text={code} />
        </div>
      ) : (
        <div className="flex justify-end">
          <CopyButton text={code} />
        </div>
      )}
      <pre className="overflow-x-auto text-sm leading-relaxed">
        <code className="bg-transparent! p-0!" data-language={language}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}
