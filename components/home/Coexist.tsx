import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Chip } from "@/components/site/Chip";
import { Reveal } from "@/components/site/motion";
import { row as rowVar } from "@/components/site/motion-vars";

const rows = [
  {
    label: "Cookies",
    sam: "None",
    ga4: "First-party cookies",
    shopify: "Shopify analytics cookies",
  },
  {
    label: "Consent banner",
    sam: "Not needed for Sam",
    ga4: "Usually required in the EU",
    shopify: "Limits declined visits",
  },
  {
    label: "Purchase funnel",
    sam: "Ready on day one",
    ga4: "Built in Explorations",
    shopify: "Cart and checkout rates",
  },
  {
    label: "Orders",
    sam: "From Shopify. All counted",
    ga4: "From the browser. Gaps from consent",
    shopify: "Sales totals in admin",
  },
  {
    label: "Visit detail",
    sam: "Every event of every visit",
    ga4: "Events you configure",
    shopify: "Totals",
  },
  {
    label: "Best for",
    sam: "Shopify funnel",
    ga4: "Ads and audiences",
    shopify: "Sales and products",
  },
] as const;

export function Coexist() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-[72px] lg:gap-14 lg:px-[104px] lg:py-[120px]">
      <Reveal stagger className="flex w-full max-w-[820px] flex-col gap-4">
        <Chip>Works with what you have</Chip>
        <div className="flex flex-col">
          <h2 className="font-body text-h3 leading-[34px] tracking-[-0.03em] text-foreground lg:text-[40px] lg:leading-[48px]">
            Keep GA4 and Shopify.
          </h2>
          <p className="font-body text-h3 leading-[34px] tracking-[-0.03em] text-mist lg:text-[40px] lg:leading-[48px]">
            Sam adds the visits they lose to consent.
          </p>
        </div>
      </Reveal>

      <Reveal
        delay={100}
        className="flex flex-col rounded-2xl border border-night-line bg-[#141614] px-5 py-2 lg:px-7"
      >
        <div className="hidden border-b border-night-line py-[18px] lg:flex">
          <span className="w-[220px] shrink-0" />
          <span className="flex grow basis-0 items-center gap-2 pr-5 font-body text-[15px] leading-5 text-foreground">
            <span className="size-2 shrink-0 rounded bg-accent" />
            Sam
          </span>
          <span className="grow basis-0 pr-5 font-body text-[15px] leading-5 text-mist">
            GA4
          </span>
          <span className="grow basis-0 font-body text-[15px] leading-5 text-mist">
            Shopify Analytics
          </span>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            style={rowVar(i)}
            className={`m-row flex flex-col gap-3 py-5 lg:flex-row lg:gap-0 ${
              i < rows.length - 1 ? "border-b border-night-line" : ""
            }`}
          >
            <span className="font-body text-[15px] leading-[22px] text-mist lg:w-[220px] lg:shrink-0">
              {row.label}
            </span>
            <div className="flex grow basis-0 flex-col gap-0.5 lg:pr-5">
              <span className="flex items-center gap-1.5 font-body text-label leading-4 text-mist lg:hidden">
                <span className="size-1.5 shrink-0 rounded bg-accent" />
                Sam
              </span>
              <span className="font-body text-body leading-[22px] text-foreground">
                {row.sam}
              </span>
            </div>
            <div className="flex grow basis-0 flex-col gap-0.5 lg:pr-5">
              <span className="font-body text-label leading-4 text-mist lg:hidden">
                GA4
              </span>
              <span className="font-body text-body leading-[22px] text-mist">{row.ga4}</span>
            </div>
            <div className="flex grow basis-0 flex-col gap-0.5">
              <span className="font-body text-label leading-4 text-mist lg:hidden">
                Shopify Analytics
              </span>
              <span className="font-body text-body leading-[22px] text-mist">
                {row.shopify}
              </span>
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="flex flex-wrap gap-4">
        <Link
          href="/compare/ga4"
          className="flex items-center gap-1 font-body text-[14px] leading-[18px] text-mist"
        >
          Sam vs GA4
          <Arrow direction="up-right" size={14} />
        </Link>
        <Link
          href="/compare/shopify-analytics"
          className="flex items-center gap-1 font-body text-[14px] leading-[18px] text-mist"
        >
          Sam vs Shopify Analytics
          <Arrow direction="up-right" size={14} />
        </Link>
      </Reveal>
    </section>
  );
}
