import { SessionsSplitVisual } from "@/components/product/visuals";
import { Arrow } from "@/components/site/Arrow";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { container } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";
import { heroDelay, row } from "@/components/site/motion-vars";
import { HeroBackdrop, HeroCopy } from "@/components/site/PageHero";
import { NumberedItems, SectionHeading, SplitRow } from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { faqPageJsonLd, howToJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/how-it-works",
  title: "How Cookieless Shopify Tracking Works | Sam",
  description:
    "How Sam counts Shopify visits and orders without cookies or browser storage. Daily visitor IDs, webhook order match, and why Sam does not need a consent banner.",
});

const heroFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 70%) 0%, oklab(18.4% -0.004 0.003 / 35%) 35%, oklab(18.4% -0.004 0.003 / 70%) 72%, oklab(18.4% -0.004 0.003) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 88%) 0%, oklab(18.4% -0.004 0.003 / 45%) 50%, oklab(18.4% -0.004 0.003 / 5%) 100%)";

const facts = [
  { value: "0", label: "cookies set" },
  { value: "0 bytes", label: "stored in the browser" },
  { value: "24h", label: "until every visitor ID resets" },
  { value: "EU", label: "where your data is hosted", accent: true },
];

const setup = [
  {
    title: "Install the Shopify app",
    body: "Log in with Shopify. The first account becomes the owner. Teammates join by invite.",
  },
  {
    title: "Sam adds its pixel",
    body: "It records page views, carts and checkouts. Nothing is stored in the browser.",
  },
  {
    title: "Orders meet visits",
    body: "Shopify sends each order by webhook. Sam links it to the visit when it saw the checkout.",
  },
];

const bridge = [
  {
    where: "IN THE BROWSER",
    title: "Checkout starts",
    body: "The pixel sends the checkout token with the visitor ID.",
  },
  {
    where: "ON SAM'S SERVER",
    title: "Token is hashed",
    body: "Only the hash is kept, and it expires soon.",
  },
  {
    where: "FROM SHOPIFY",
    title: "Order arrives",
    body: "Shopify sends the order. Sam hashes its token the same way.",
  },
  {
    where: "MATCH",
    title: "Order meets visit",
    body: "Same hash, same checkout. The order is credited to that visit and campaign.",
    match: true,
  },
];

const kept: [string, string][] = [
  ["Visitor ID", "hashed"],
  ["Page views, carts and checkouts", "per visit"],
  ["Device, OS, browser, country", "per visit"],
  ["Referrer and UTMs", "per visit"],
  ["Order amount, currency, products", "per order"],
];

const never = [
  "Cookies, localStorage, sessionStorage",
  "Raw IP address or user agent",
  "Order, checkout or cart IDs",
  "Names, emails, addresses",
  "Anything written to the cart",
];

export const howItWorksFaqs = [
  {
    q: "Do I really not need a consent banner?",
    a: "Not for Sam. It stores nothing on the device and follows nobody across days. Your other apps may still need consent, so check with your legal advisor.",
  },
  {
    q: "Can I see returning customers?",
    a: "Not across days. The visitor ID resets daily, so tomorrow's visit is a new one. That's what keeps Sam cookieless.",
  },
  {
    q: "Why isn't every order linked to a visit?",
    a: "Sam links an order when it saw that checkout earlier in the visit. That covers 90–95% of orders. The rest still count toward revenue.",
  },
  {
    q: "Does the pixel slow my store down?",
    a: "No. It runs in Shopify's sandboxed pixel and loads in the background.",
  },
  {
    q: "I don't use Shopify. Can I still send orders?",
    a: "Not yet. Sam is built around Shopify today.",
  },
];

function DataList({
  title,
  tone,
  rows,
}: {
  title: string;
  tone: string;
  rows: [string, string][];
}) {
  return (
    <div className="flex grow basis-0 flex-col rounded-2xl border border-night-line bg-[#161916] p-6 lg:p-8">
      <span className={`pb-3 font-body text-[14px] leading-[18px] ${tone}`}>{title}</span>
      {rows.map(([label, value], i) => (
        <div
          key={label}
          style={row(i)}
          className={`m-row flex justify-between gap-4 ${
            i < rows.length - 1 ? "border-b border-night-line py-4" : "pt-4"
          }`}
        >
          <span className="font-body text-[15px] leading-5 text-foreground lg:text-body">{label}</span>
          <span className="shrink-0 font-body text-[15px] leading-5 text-mist">{value}</span>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <JsonLd data={faqPageJsonLd(howItWorksFaqs)} />
      <JsonLd
        data={howToJsonLd(
          "How cookieless Shopify tracking works in Sam",
          "Install Sam, record visits without cookies, and match Shopify orders to the visit.",
          [
            {
              name: "Install the Shopify app",
              text: "Log in with Shopify. The first account becomes the owner. Teammates join by invite.",
              url: "https://samtrack.co/how-it-works",
            },
            {
              name: "Sam adds its pixel",
              text: "It records page views, carts and checkouts. Nothing is stored in the browser.",
            },
            {
              name: "Orders meet visits",
              text: "Shopify sends each order by webhook. Sam links it to the visit when it saw the checkout. About 90–95% of orders get a complete path.",
            },
          ],
        )}
      />
      <section className="relative flex flex-col overflow-clip pb-6">
        <HeroBackdrop
          image="/images/privacy-hedgerow.png"
          position="50% 55%"
          painting={{ height: 820 }}
          fade={{ height: 820 }}
          gradient={heroFade}
          mobilePainting={{ height: 640 }}
          mobileFade={{ height: 640 }}
        />
        <SiteNav />
        <HeroCopy
          chip="How it works"
          title="Analytics without the banner."
          muted="Here's how."
          leadWidth={640}
          lead="How Sam counts visits and orders without storing anything in the browser. Cookieless Shopify tracking uses a daily visitor ID, a pixel for the visit, and Shopify webhooks for every order."
          className="pt-12 lg:pt-[120px]"
        />
        <div
          data-reveal="load"
          style={heroDelay}
          className={`${container} relative grid grid-cols-2 gap-3 pt-12 lg:flex lg:gap-4 lg:pt-[88px]`}
        >
          {facts.map((f) => (
            <div
              key={f.value}
              className="flex grow basis-0 flex-col gap-1.5 rounded-md border border-[#EDEEE914] bg-[#161916B3] px-4 py-4 backdrop-blur-[12px] lg:px-6 lg:py-5"
            >
              <span
                className={`font-body text-[26px] leading-8 tracking-[-0.02em] lg:text-[32px] lg:leading-[38px] ${
                  f.accent ? "text-accent" : "text-foreground"
                }`}
              >
                {f.value}
              </span>
              <span className="font-body text-[14px] leading-5 text-mist">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={`${container} flex flex-col gap-[72px] py-[72px] lg:gap-32 lg:pt-32 lg:pb-[120px]`}>
        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            chip="1 · Setup"
            title="One install, two sources."
            muted="The pixel sees visits. Shopify sends orders."
            width={860}
          />
          <NumberedItems items={setup} />
        </div>

        <SplitRow
          chip="2 · Sessions"
          title="How a visit is counted."
          body="Sam turns IP, browser and store into an anonymous ID. The ID changes every day."
          note="Nothing is stored on the device, so there's nothing to consent to. A shopper who comes back tomorrow is a new visit."
        >
          <SessionsSplitVisual image="/images/hills-funnel.png" />
        </SplitRow>

        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            chip="3 · Orders"
            title="How an order finds its visit."
            muted="Without cookies or order IDs."
            width={900}
          />
          <Reveal className="relative flex flex-col gap-7 overflow-clip rounded-lg border border-night-line bg-[#141614] p-4 shadow-[inset_0_1px_0_#EDEEE90F] lg:p-12">
            <div
              className="absolute inset-0 bg-cover bg-[50%_60%]"
              style={{ backgroundImage: "url(/images/plan-valley.png)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 35%) 0%, oklab(18.4% -0.004 0.003 / 60%) 100%)",
              }}
            />
            <ol className="relative flex flex-col gap-3 lg:flex-row">
              {bridge.map((step, i) => (
                <li
                  key={step.where}
                  style={row(i * 2)}
                  className="m-row flex grow basis-0 flex-col items-stretch gap-3 lg:flex-row"
                >
                  <div
                    className={`flex grow basis-0 flex-col gap-2.5 rounded-md border p-5 ${
                      step.match
                        ? "border-[#A3E6354D] bg-[#A3E63514]"
                        : "border-[#2E2E2E] bg-[#1F1F1F]"
                    }`}
                  >
                    <span className="font-body text-[11px] font-medium leading-[14px] tracking-[0.06em] text-accent">
                      {step.where}
                    </span>
                    <span className="font-body text-body leading-[22px] text-[#F2F2F2]">{step.title}</span>
                    <span
                      className={`font-body text-label leading-[19px] ${
                        step.match ? "text-[#C9C9C9]" : "text-[#A0A0A0]"
                      }`}
                    >
                      {step.body}
                    </span>
                  </div>
                  {i < bridge.length - 1 && (
                    <span className="flex items-center justify-center text-mist lg:pl-0">
                      <Arrow size={18} className="rotate-90 lg:rotate-0" />
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <div className="m-fade relative flex items-start gap-2.5 self-start rounded-[10px] border border-[#2E2E2E] bg-[#1F1F1FD9] px-[18px] py-3.5">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-[3px] bg-wheat" />
              <span className="font-body text-label leading-[18px] text-[#C9C9C9]">
                No match? The order still counts. It just isn&apos;t credited to a visit.
              </span>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            chip="4 · Data"
            title="What Sam keeps."
            muted="And what it never sees."
            width={900}
          />
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <DataList title="Kept" tone="text-accent" rows={kept} />
            <DataList title="Never" tone="text-[#E5484D]" rows={never.map((n): [string, string] => [n, "—"])} />
          </Reveal>
        </div>

        <Faq items={howItWorksFaqs} title="Fair questions." subtitle="Straight answers." />
      </div>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
