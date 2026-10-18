import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { JsonLd } from "@/components/site/JsonLd";
import { container } from "@/components/site/layout";
import { CompactHero } from "@/components/site/PageHero";
import { NumberedItems } from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Sam",
  description:
    "Sam is cookieless Shopify analytics. EU-hosted, built for stores that need funnel and campaign conversion without a cookie banner for Sam.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const facts = [
  { label: "Product", value: "Sam" },
  { label: "Data hosted", value: "European Union" },
  { label: "Contact", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
];

const why = [
  {
    title: "Shopify first",
    body: "Sam exists to show where a Shopify store loses buyers: funnel, landing and campaign, with orders from Shopify.",
  },
  {
    title: "Hosted in the EU",
    body: "Merchant and shopper analytics data is hosted in the European Union.",
  },
  {
    title: "Honest limits",
    body: "Visitor IDs reset daily. Sam does not follow shoppers across days. If you need that, keep GA4.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteNav />
      <CompactHero
        image="/images/plan-garden.png"
        chip="About"
        title="Sam is cookieless Shopify analytics."
        titleWidth={920}
        lead="Funnel, landings and campaigns, hosted in the EU. No cookie banner for Sam."
      />

      <div className={`${container} flex flex-col gap-[72px] pb-10 lg:gap-32`}>
        <section className="flex flex-col gap-8 lg:flex-row lg:gap-24">
          <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[360px]">
            <h2 className="font-body text-2xl leading-8 text-foreground">Who we are.</h2>
            <p className="font-body text-[15px] leading-[23px] text-mist">
              Sam is for Shopify merchants who need to see conversion by landing and campaign when
              cookie consent removes a slice of GA4 and Shopify Analytics.
            </p>
          </div>
          <dl className="flex grow flex-col overflow-clip rounded-2xl border border-night-line bg-[#141614]">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex flex-wrap items-baseline justify-between gap-2 px-5 py-4 lg:px-7 ${
                  i < facts.length - 1 ? "border-b border-night-line" : ""
                }`}
              >
                <dt className="font-body text-[15px] leading-5 text-mist">{fact.label}</dt>
                <dd className="font-body text-[15px] leading-5 text-foreground">
                  {fact.href ? (
                    <Link href={fact.href} className="text-accent">
                      {fact.value}
                    </Link>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-10">
          <h2 className="font-body text-[26px] leading-8 tracking-[-0.02em] text-foreground lg:text-[32px] lg:leading-10">
            How we work.
          </h2>
          <NumberedItems items={why} numbered={false} />
        </section>

        <section className="flex flex-col gap-4 border-t border-night-line pt-10">
          <h2 className="font-body text-[22px] leading-7 text-foreground">Documents</h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
            {[
              { label: "Privacy policy", href: "/legal/privacy" },
              { label: "Terms of service", href: "/legal/terms" },
              { label: "Trust center", href: "/trust" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 font-body text-[15px] leading-5 text-mist hover:text-foreground"
              >
                {link.label}
                <Arrow direction="up-right" size={14} />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
