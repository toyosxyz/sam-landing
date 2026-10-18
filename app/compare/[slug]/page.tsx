import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparePage } from "@/components/compare/ComparePage";
import { compareSlugs, comparisons, isCompareSlug } from "@/components/compare/compare-data";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return compareSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/compare/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!isCompareSlug(slug)) return {};
  const c = comparisons[slug];
  return pageMetadata({
    path: `/compare/${slug}`,
    title: c.seoTitle,
    description: c.description,
  });
}

export default async function Page({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  if (!isCompareSlug(slug)) notFound();
  return <ComparePage slug={slug} />;
}
