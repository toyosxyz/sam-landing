import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/product/ProductPage";
import {
  productSlugs,
  products,
  type ProductSlug,
} from "@/components/product/product-data";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

function isProductSlug(slug: string): slug is ProductSlug {
  return (productSlugs as readonly string[]).includes(slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!isProductSlug(slug)) return {};
  const product = products[slug];
  return { title: `${product.name} · SAM`, description: product.description };
}

export default async function Page({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  if (!isProductSlug(slug)) notFound();
  return <ProductPage slug={slug} />;
}
