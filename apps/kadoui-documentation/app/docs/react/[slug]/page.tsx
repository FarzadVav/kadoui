import type { Metadata } from "next";
import {
  ReactDocPage,
  generateReactMetadata,
} from "@/components/docs/ReactDocPage";
import { reactSlugs } from "@/lib/docs/react";

type PagePropsT = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return reactSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PagePropsT): Promise<Metadata> {
  const { slug } = await params;
  return generateReactMetadata(slug);
}

export default async function Page({ params }: PagePropsT) {
  const { slug } = await params;
  return <ReactDocPage slug={slug} />;
}
