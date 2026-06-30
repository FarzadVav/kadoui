import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-important border-b border-foreground/10 bg-background/80 glass glass-background backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3 lg:ps-[calc(var(--docs-sidebar-width)+1rem)]">
        <div className="flex items-center gap-3 ms-12 lg:ms-0">
          <Link
            href="https://github.com/FarzadVav/kadoui"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-foreground btn-sm"
          >
            GitHub
          </Link>
          <Link href="/docs/getting-started" className="btn btn-soft btn-primary btn-sm">
            Get Started
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
