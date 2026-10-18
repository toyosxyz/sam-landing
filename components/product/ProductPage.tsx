import { HeroButtons } from "@/components/site/Buttons";
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
import { productCards, products, type ProductSlug } from "./product-data";

const heroFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 70%) 0%, oklab(18.4% -0.004 0.003 / 35%) 35%, oklab(18.4% -0.004 0.003 / 60%) 70%, oklab(18.4% -0.004 0.003) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 85%) 0%, oklab(18.4% -0.004 0.003 / 40%) 50%, oklab(18.4% -0.004 0.003 / 0%) 100%)";

export function ProductPage({ slug }: { slug: ProductSlug }) {
  const { name, hero, highlights, split, more } = products[slug];
  const Visual = hero.Visual;
  const SplitVisual = split.Visual;

  return (
    <main className="w-full overflow-x-clip bg-background">
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
        <HeroCopy
          chip={`Product · ${name}`}
          title={hero.title}
          muted={hero.muted}
          lead={hero.lead}
          className="pt-12 lg:pt-[120px]"
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
        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading chip="What you get" title={highlights.title} muted={highlights.muted} />
          <NumberedItems items={highlights.items} />
        </div>

        <SplitRow chip={split.chip} title={split.title} body={split.body}>
          <SplitVisual />
        </SplitRow>

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
