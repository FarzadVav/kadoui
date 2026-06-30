import type { Metadata } from "next";
import {
  TailwindDocPage,
  generateTailwindMetadata,
} from "@/components/docs/TailwindDocPage";
import { tailwindSlugs } from "@/lib/docs/tailwindcss";

type PagePropsT = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tailwindSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PagePropsT): Promise<Metadata> {
  const { slug } = await params;
  return generateTailwindMetadata(slug);
}

export default async function Page({ params }: PagePropsT) {
  const { slug } = await params;
  return <TailwindDocPage slug={slug} />;
}
