"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { docsNavigation } from "@/lib/navigation";
import type { NavItemT } from "@/lib/types";

function NavLink({ item, depth = 0 }: { item: NavItemT; depth?: number }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const padding = depth === 0 ? "ps-0" : "ps-3";

  return (
  <div className={padding}>
      <Link
        href={item.href}
        className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : "text-foreground/70 hover:text-foreground hover:bg-card"
        }`}
      >
        {item.title}
      </Link>
      {item.items?.length ? (
        <div className="mt-1 space-y-0.5 border-s border-foreground/10 ms-3">
          {item.items.map((child) => (
            <NavLink key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-ghost btn-foreground btn-square lg:hidden fixed top-3 left-3 z-important"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
      >
        {open ? <XIcon /> : <MenuIcon />}
      </button>

      <aside
        className={`fixed inset-y-0 start-0 z-important w-[var(--docs-sidebar-width)] border-e border-foreground/10 bg-background transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto p-4 pt-16 lg:pt-4">
          <Link href="/" className="mb-6 block">
            <span className="text-xl font-black tracking-tight">
              Kado<span className="text-primary">UI</span>
            </span>
            <span className="mt-1 block text-xs text-foreground/60">
              Documentation
            </span>
          </Link>

          <nav className="space-y-4">
            {docsNavigation.map((group) => (
              <div key={group.href}>
                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  {group.title}
                </p>
                {group.items?.map((item) => (
                  <NavLink key={item.href} item={item} depth={1} />
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-front bg-foreground/20 lg:hidden"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
