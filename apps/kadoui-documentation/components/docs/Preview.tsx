type PreviewPropsT = {
  title?: string;
  children: React.ReactNode;
  layout?: "row" | "column" | "grid";
};

export function Preview({ title, children, layout = "row" }: PreviewPropsT) {
  const layoutClass =
    layout === "column"
      ? "flex flex-col gap-3 w-full"
      : layout === "grid"
        ? "grid gap-3 sm:grid-cols-2 w-full"
        : "flex flex-wrap items-center gap-3";

  return (
    <div className="mb-8">
      {title ? <h3 className="text-lg font-semibold mb-3">{title}</h3> : null}
      <div className="card card-md card-y border border-foreground/10 bg-background">
        <div className={layoutClass}>{children}</div>
      </div>
    </div>
  );
}

export function DemoLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-foreground/80 w-full mb-1">{children}</p>
  );
}
