import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { container } from "@/components/site/layout";
import { CompactHero } from "@/components/site/PageHero";
import { CardRow, ImageCard } from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { guides } from "@/lib/guides";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/guides",
  title: "Shopify Analytics Guides | Sam",
  description:
    "Guides on cookieless Shopify analytics, why GA4 misses EU orders, and how to measure landing-page conversion when shoppers decline cookies.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides" },
];

export default function GuidesIndexPage() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteNav />
      <div className={`${container} relative z-[1] pt-6 lg:pt-8`}>
        <Breadcrumbs items={crumbs} />
      </div>
      <CompactHero
        image="/images/hills-funnel.png"
        chip="Guides"
        title="Shopify analytics, explained."
        titleWidth={920}
        lead="Cookieless tracking, EU consent gaps, and landing conversion. For merchants who have to explain the numbers."
      />
      <div className={`${container} flex flex-col gap-10 pb-[72px] lg:pb-[120px]`}>
        <CardRow>
          {guides.map((guide) => (
            <ImageCard
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              title={guide.title}
              body={guide.lead}
              image={guide.image}
            />
          ))}
        </CardRow>
      </div>
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
