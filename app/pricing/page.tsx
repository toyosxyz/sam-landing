import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { container } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";
import { row as rowVar } from "@/components/site/motion-vars";
import { HeroBackdrop, HeroCopy } from "@/components/site/PageHero";
import { PlanPricesText } from "@/components/site/PlanPricesText";
import { Plans } from "@/components/site/Plans";
import { SectionHeading } from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/json-ld";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/pricing",
  title: "Sam Pricing: Plans from €29 a Month",
  description:
    "Sam plans are priced by monthly Shopify sessions. Garden €29, Meadow €79, Valley €169, Forest €349. All features on every plan. 7-day trial with a card through Stripe.",
});

const heroFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 70%) 0%, oklab(18.4% -0.004 0.003 / 40%) 40%, oklab(18.4% -0.004 0.003 / 80%) 78%, oklab(18.4% -0.004 0.003) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 88%) 0%, oklab(18.4% -0.004 0.003 / 45%) 50%, oklab(18.4% -0.004 0.003 / 5%) 100%)";

const includes = [
  "✓ Live sessions and funnels",
  "✓ Campaigns measured to checkout",
  "✓ Revenue by channel",
  "✓ Cookieless, EU-hosted",
  "✓ Team invites",
] as const;

const planNames = ["Garden", "Meadow", "Valley", "Forest"] as const;

const rows: { label: string; values?: [string, string, string, string] }[] = [
  { label: "Sessions per month", values: ["25,000", "100,000", "300,000", "1,000,000"] },
  { label: "Funnel, sessions, orders and campaigns" },
  { label: "Device, channel and country breakdowns" },
  { label: "Cookieless tracking" },
  { label: "EU hosting and DPA" },
  { label: "Team invites" },
  { label: "Dashboard in English and Spanish" },
];

export const pricingFaqs = [
  {
    q: "What counts as a session?",
    a: "One visitor, one day. Five pages in an afternoon is one session. Coming back tomorrow is a new one.",
  },
  {
    q: "What happens if I go over my plan?",
    a: "Nothing breaks and no data is lost. If it happens two months in a row, we'll suggest the next plan before your bill changes.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, any time. Upgrades apply now. Downgrades apply on your next billing date.",
  },
  {
    q: "How does the free trial work?",
    a: "7 days with every feature. A card is required through Stripe. Cancel before it ends and you pay nothing.",
  },
  {
    q: "I run several stores. Do I pay for each?",
    a: "Each store has its own plan. From 3 stores on one account, every plan is 20% off and you get one invoice.",
  },
];

export default function PricingPage() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <JsonLd data={softwareApplicationJsonLd({ withOffers: true })} />
      <JsonLd data={faqPageJsonLd(pricingFaqs)} />
      <section className="relative flex flex-col overflow-clip">
        <HeroBackdrop
          image="/images/plan-meadow.png"
          position="50% 60%"
          painting={{ height: 640 }}
          fade={{ height: 640 }}
          gradient={heroFade}
          mobilePainting={{ height: 520 }}
          mobileFade={{ height: 520 }}
        />
        <SiteNav />
        <HeroCopy
          chip="Pricing"
          title="Priced by sessions."
          muted="All features on every plan."
          leadWidth={640}
          lead="Pick a plan by monthly visits. Start with a 7-day trial."
          className="pt-12 lg:pt-[120px]"
        />
        <div className={`${container} relative flex flex-col gap-4 pt-10 lg:gap-6 lg:pt-14`}>
          <Plans includes={includes} />
          <PlanPricesText className="relative max-w-[760px]" />

          <Reveal className="relative flex flex-col items-start gap-5 overflow-clip rounded-2xl border border-night-line px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:px-9 lg:py-8">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/plan-valley.png)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 92%) 0%, oklab(18.4% -0.004 0.003 / 55%) 100%)",
              }}
            />
            <div className="relative flex flex-col gap-1.5">
              <p className="font-body text-[22px] leading-7 text-foreground">
                More than 1,000,000 sessions a month?
              </p>
              <p className="font-body text-body leading-6 text-mist">
                Tell us about your stores. We&apos;ll build a plan that fits.
              </p>
            </div>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="relative flex items-center gap-2 rounded-[8px] border border-night-line bg-[#161916] px-4 py-2.5 font-body text-[15px] font-medium leading-[18px] text-foreground"
            >
              Talk to us
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <div className={`${container} flex flex-col gap-[72px] py-[72px] lg:gap-32 lg:pt-32 lg:pb-[120px]`}>
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionHeading
            chip="Compare plans"
            title="Plans differ in volume."
            muted="Nothing else."
            width={1000}
          />

          <Reveal className="flex flex-col overflow-clip rounded-2xl border border-night-line bg-[#141614]">
            <div className="flex border-b border-night-line bg-[#161916] px-4 py-5 lg:px-7">
              <span className="hidden grow lg:inline" />
              {planNames.map((name) => (
                <span
                  key={name}
                  className={`grow basis-0 text-center font-body text-[15px] leading-[18px] lg:w-[200px] lg:shrink-0 lg:grow-0 lg:basis-auto ${
                    name === "Meadow" ? "text-accent" : "text-foreground"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
            {rows.map((row, i) => (
              <div
                key={row.label}
                style={rowVar(i)}
                className={`m-row flex flex-col gap-3 px-4 py-4 lg:flex-row lg:gap-0 lg:px-7 lg:py-[18px] ${
                  i < rows.length - 1 ? "border-b border-night-line" : ""
                }`}
              >
                <span className="grow font-body text-[15px] leading-5 text-foreground">
                  {row.label}
                </span>
                <div className="flex">
                  {planNames.map((name, j) => (
                    <span
                      key={name}
                      className={`grow basis-0 text-center font-body text-[15px] leading-5 lg:w-[200px] lg:shrink-0 lg:grow-0 lg:basis-auto ${
                        row.values ? "text-foreground" : "text-accent"
                      }`}
                    >
                      {row.values ? row.values[j] : "✓"}
                      <span className="sr-only"> on {name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <div id="faq" className="scroll-mt-8">
          <Faq items={pricingFaqs} title="Billing questions." subtitle="Short answers." />
        </div>
      </div>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
