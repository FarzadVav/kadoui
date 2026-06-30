import type { PropRowT } from "@/lib/types";

type PropsTablePropsT = {
  title?: string;
  rows: PropRowT[];
};

export function PropsTable({ title, rows }: PropsTablePropsT) {
  if (!rows.length) return null;

  return (
    <div className="mb-8">
      {title ? <h3 className="text-lg font-semibold mb-3">{title}</h3> : null}
      <div className="overflow-x-auto rounded-xl border border-foreground/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card text-start">
              <th className="px-4 py-3 font-semibold">Prop</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Default</th>
              <th className="px-4 py-3 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-t border-foreground/5">
                <td className="px-4 py-3 align-top">
                  <code>{row.name}</code>
                  {row.required ? (
                    <span className="ms-2 text-xs text-error">required</span>
                  ) : null}
                </td>
                <td className="px-4 py-3 align-top">
                  <code className="text-xs whitespace-pre-wrap">{row.type}</code>
                </td>
                <td className="px-4 py-3 align-top text-foreground/70">
                  {row.default ?? "—"}
                </td>
                <td className="px-4 py-3 align-top text-foreground/80">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
