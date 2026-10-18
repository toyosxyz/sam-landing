import { HeroButtons } from "@/components/site/Buttons";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { container } from "@/components/site/layout";
import { HeroBackdrop, HeroCopy } from "@/components/site/PageHero";
import {
  CardRow,
  ImageCard,
  InlineHeading,
  NumberedItems,
  SectionHeading,
  SplitRow,
} from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/json-ld";
import { productCards, products, type ProductSlug } from "./product-data";

const heroFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 70%) 0%, oklab(18.4% -0.004 0.003 / 35%) 35%, oklab(18.4% -0.004 0.003 / 60%) 70%, oklab(18.4% -0.004 0.003) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 85%) 0%, oklab(18.4% -0.004 0.003 / 40%) 50%, oklab(18.4% -0.004 0.003 / 0%) 100%)";

export function ProductPage({ slug }: { slug: ProductSlug }) {
  const { name, hero, highlights, split, definition, faqs, more } = products[slug];
  const Visual = hero.Visual;
  const SplitVisual = split.Visual;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product/funnel" },
    { name, href: `/product/${slug}` },
  ];

  return (
    <main className="w-full overflow-x-clip bg-background">
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <section className="relative flex flex-col overflow-clip">
        <HeroBackdrop
          image="/images/hero-shire.png"
          position={hero.imagePosition}
          painting={{ height: 760 }}
          fade={{ height: 760 }}
          gradient={heroFade}
          mobilePainting={{ height: 560 }}
          mobileFade={{ height: 560 }}
        />
        <SiteNav />
        <div className={`${container} relative pt-6 lg:pt-10`}>
          <Breadcrumbs items={crumbs} />
        </div>
        <HeroCopy
          chip={`Product · ${name}`}
          title={hero.title}
          muted={hero.muted}
          lead={hero.lead}
          className="pt-8 lg:pt-16"
        >
          <HeroButtons />
        </HeroCopy>
        <div className={`${container} relative ${hero.visualGap}`}>
          <Visual />
        </div>
      </section>

      <div
        className={`${container} flex flex-col gap-[72px] py-[72px] lg:gap-32 lg:pt-32 lg:pb-[120px]`}
      >
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="font-body text-[24px] leading-[30px] tracking-[-0.02em] text-foreground lg:text-[32px] lg:leading-10">
            {definition.question}
          </h2>
          <p className="font-body text-body leading-[26px] text-mist">{definition.answer}</p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading chip="What you get" title={highlights.title} muted={highlights.muted} />
          <NumberedItems items={highlights.items} />
        </div>

        <SplitRow chip={split.chip} title={split.title} body={split.body}>
          <SplitVisual />
        </SplitRow>

        <Faq items={faqs} title="Questions about this view." subtitle="Short answers." />

        <div className="flex flex-col gap-8 lg:gap-10">
          <InlineHeading title="More of Sam." muted="Same install." />
          <CardRow>
            {more.map((s) => (
              <ImageCard key={s} href={`/product/${s}`} {...productCards[s]} />
            ))}
          </CardRow>
        </div>
      </div>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
