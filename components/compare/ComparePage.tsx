import { HeroButtons, PrimaryButton } from "@/components/site/Buttons";
import { container } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";
import { row as rowVar } from "@/components/site/motion-vars";
import { CompactHero } from "@/components/site/PageHero";
import { NumberedItems } from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { comparisons, type CompareSlug } from "./compare-data";

const useBothFade =
  "linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 92%) 0%, oklab(18.4% -0.004 0.003 / 78%) 55%, oklab(18.4% -0.004 0.003 / 40%) 100%)";

const heading =
  "font-body text-[26px] leading-8 tracking-[-0.02em] lg:text-[32px] lg:leading-10";

function Heading({ title, muted }: { title: string; muted: string }) {
  return (
    <Reveal>
      <h2 className="flex flex-col">
        <span className={`${heading} text-foreground`}>{title}</span>
        <span className={`${heading} text-mist`}>{muted}</span>
      </h2>
    </Reveal>
  );
}

export function ComparePage({ slug }: { slug: CompareSlug }) {
  const c = comparisons[slug];

  return (
    <main className="w-full overflow-x-clip bg-background">
      <SiteNav />

      <CompactHero
        image={c.heroImage}
        chip="Compare"
        title={`Sam vs ${c.rival}`}
        titleWidth={900}
        lead={c.lead}
      >
        <div className="pt-2">
          <HeroButtons />
        </div>
      </CompactHero>

      <div className={`${container} flex flex-col gap-[72px] pb-10 lg:gap-32`}>
        <section className="flex flex-col gap-8 lg:gap-10">
          <Heading title="Side by side." muted="For a Shopify store in Europe." />

          <Reveal
            delay={100}
            className="flex flex-col rounded-2xl border border-night-line bg-[#141614] px-5 py-2 lg:px-7"
          >
            <div className="hidden border-b border-night-line py-[18px] lg:flex">
              <span className="w-[300px] shrink-0" />
              <span className="flex grow basis-0 items-center gap-2 pr-6 font-body text-[15px] leading-5 text-foreground">
                <span className="size-2 shrink-0 rounded bg-accent" />
                Sam
              </span>
              <span className="grow basis-0 font-body text-[15px] leading-5 text-mist">
                {c.rival}
              </span>
            </div>
            {c.rows.map((row, i) => (
              <div
                key={row.label}
                style={rowVar(i)}
                className={`m-row flex flex-col gap-3 py-5 lg:flex-row lg:gap-0 ${
                  i < c.rows.length - 1 ? "border-b border-night-line" : ""
                }`}
              >
                <span className="font-body text-[15px] leading-[22px] text-mist lg:w-[300px] lg:shrink-0">
                  {row.label}
                </span>
                <div className="flex grow basis-0 flex-col gap-0.5 lg:pr-6">
                  <span className="flex items-center gap-1.5 font-body text-label leading-4 text-mist lg:hidden">
                    <span className="size-1.5 shrink-0 rounded bg-accent" />
                    Sam
                  </span>
                  <span className="font-body text-body leading-[22px] text-foreground">
                    {row.sam}
                  </span>
                </div>
                <div className="flex grow basis-0 flex-col gap-0.5">
                  <span className="font-body text-label leading-4 text-mist lg:hidden">
                    {c.rival}
                  </span>
                  <span className="font-body text-body leading-[22px] text-mist">{row.rival}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </section>

        <section id="fair-take" className="flex scroll-mt-8 flex-col gap-8 lg:gap-12">
          <Heading title={c.fairTake.title} muted="Sam isn't for everyone." />
          <NumberedItems items={c.fairTake.reasons} numbered={false} />
        </section>

        <Reveal
          as="section"
          className="relative flex flex-col items-start gap-6 overflow-clip rounded-2xl border border-night-line bg-[#141614] px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-cover"
            style={{ backgroundImage: `url(${c.useBoth.image})`, backgroundPosition: "50% 60%" }}
          />
          <div aria-hidden className="absolute inset-0" style={{ backgroundImage: useBothFade }} />
          <div className="relative flex flex-col gap-3 lg:w-[620px] lg:shrink-0">
            <h2 className="font-body text-[22px] leading-7 tracking-[-0.01em] text-foreground lg:text-2xl lg:leading-[30px]">
              Or keep both.
            </h2>
            <p className="font-body text-[15px] leading-[23px] text-mist">{c.useBoth.body}</p>
          </div>
          <div className="relative">
            <PrimaryButton />
          </div>
        </Reveal>
      </div>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
