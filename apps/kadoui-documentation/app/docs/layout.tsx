import { ChevronUpIcon } from "lucide-react";
import { Affix } from "@kadoui/react";
import { Sidebar } from "@/components/docs/Sidebar";
import { DocsHeader } from "@/components/docs/DocsHeader";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh">
      <Sidebar />
      <div className="lg:ps-[var(--docs-sidebar-width)]">
        <DocsHeader />
        <main className="docs-wrapper docs-prose py-8 pb-20">{children}</main>
      </div>

      <Affix
        className="btn btn-fill btn-primary btn-square bottom-4 right-4"
        viewportOffset={0.15}
      >
        <ChevronUpIcon />
      </Affix>
    </div>
  );
}
