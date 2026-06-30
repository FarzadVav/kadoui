import type { Metadata } from "next";
import Link from "next/link";
import { docsNavigation } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Documentation",
  description: "KadoUI documentation home.",
};

export default function DocsIndexPage() {
  return (
    <article>
      <h1>Documentation</h1>
      <p className="text-lg text-foreground/70">
        Everything you need to build with KadoUI — from installation to every
        utility class and React primitive.
      </p>

      <div className="mt-8 grid gap-6">
        {docsNavigation.map((section) => (
          <section key={section.href}>
            <h2>{section.title}</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {section.items?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="card card-sm block border border-foreground/10 transition-colors hover:border-primary/30"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
