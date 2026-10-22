import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Chip } from "@/components/site/Chip";
import { container } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";
import { heroDelay, row } from "@/components/site/motion-vars";
import { HeroBackdrop, HeroCopy } from "@/components/site/PageHero";
import { InlineHeading, NumberedItems, SectionHeading } from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/trust",
  title: "EU-Hosted Shopify Analytics and Privacy | Sam",
  description:
    "Sam hosts Shopify session data in the EU. No cookies, no shopper personal data stored, hashed on arrival. Subprocessors and retention on one page.",
});

const heroFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 70%) 0%, oklab(18.4% -0.004 0.003 / 40%) 40%, oklab(18.4% -0.004 0.003 / 80%) 78%, oklab(18.4% -0.004 0.003) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 88%) 0%, oklab(18.4% -0.004 0.003 / 45%) 50%, oklab(18.4% -0.004 0.003 / 5%) 100%)";

const facts = [
  { label: "Data location", value: "European Union" },
  { label: "Personal data from shoppers", value: "None stored" },
  { label: "Browser storage", value: "None used" },
  { label: "Visitor ID", value: "Resets daily" },
];

const subprocessors = [
  { name: "DigitalOcean", purpose: "Application hosting", region: "EU" },
  { name: "Tinybird", purpose: "Event storage and dashboard metrics", region: "EU" },
  { name: "Supabase", purpose: "Stores, team members and campaigns", region: "EU" },
  { name: "MongoDB", purpose: "Account sign-in", region: "EU" },
  {
    name: "Shopify",
    purpose: "Store connection, pixel and orders",
    region: "Your store",
    muted: true,
  },
];

const practices = [
  {
    title: "Hashed on arrival",
    body: "IPs, browsers and checkout tokens are hashed. Raw values never reach a database or log.",
  },
  {
    title: "No following across days",
    body: "Visitor IDs reset every day. It's built in, so nobody can switch it off.",
  },
  {
    title: "One owner per store",
    body: "The account that connects a store owns it. Others join by invite.",
  },
  {
    title: "Delete on request",
    body: "Delete any session from the dashboard. When you uninstall the app, Shopify's uninstall webhook deletes session data.",
  },
];

const documents = [
  { title: "Privacy policy", body: "How we handle account data", href: "/legal/privacy" },
  { title: "Terms of service", body: "The terms behind every plan", href: "/legal/terms" },
  { title: "Data processing agreement", body: "Accepted by using the service", href: "/legal/dpa" },
];

export default function TrustPage() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <section className="relative flex flex-col overflow-clip">
        <HeroBackdrop
          image="/images/plan-garden.png"
          position="50% 60%"
          painting={{ height: 640 }}
          fade={{ height: 640 }}
          gradient={heroFade}
          mobilePainting={{ height: 520 }}
          mobileFade={{ height: 520 }}
        />
        <SiteNav />
        <HeroCopy
          chip="Trust center"
          title="Your shoppers' privacy,"
          muted="in writing."
          leadWidth={640}
          lead="Where your data lives, who processes it and what we keep. One page for your legal team."
          className="pt-12 lg:pt-[120px]"
        />
        <div
          data-reveal="load"
          style={heroDelay}
          className={`${container} relative grid grid-cols-2 gap-3 pt-12 lg:flex lg:gap-4 lg:pt-[72px]`}
        >
          {facts.map((f) => {
            const content = (
              <>
                <span className="font-body text-label leading-[18px] text-mist">{f.label}</span>
                <span
                  className={`flex items-center gap-1.5 font-body text-lead leading-6 lg:text-[20px] lg:leading-[26px] ${
                    f.href ? "text-accent" : "text-foreground"
                  }`}
                >
                  {f.value}
                  {f.href && <Arrow direction="up-right" size={18} />}
                </span>
              </>
            );
            const box =
              "flex grow basis-0 flex-col gap-1.5 rounded-md border border-[#EDEEE914] bg-[#161916B3] px-4 py-4 backdrop-blur-[12px] lg:px-6 lg:py-5";
            return f.href ? (
              <Link key={f.label} href={f.href} className={box}>
                {content}
              </Link>
            ) : (
              <div key={f.label} className={box}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <div className={`${container} flex flex-col gap-[72px] py-[72px] lg:gap-32 lg:pt-32 lg:pb-[120px]`}>
        <div id="subprocessors" className="flex scroll-mt-8 flex-col gap-8 lg:flex-row lg:gap-24">
          <Reveal stagger className="flex w-full shrink-0 flex-col gap-4 lg:w-[360px]">
            <Chip>Subprocessors</Chip>
            <h2 className="flex flex-col">
              <span className="font-body text-2xl leading-8 text-foreground">Who handles the data.</span>
              <span className="font-body text-2xl leading-8 text-mist">
                Every provider is in the EU.
              </span>
            </h2>
            <p className="font-body text-[15px] leading-[23px] text-mist">
              Updated whenever a provider changes.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="flex grow flex-col overflow-clip rounded-2xl border border-night-line bg-[#141614]"
          >
            <div className="flex gap-4 border-b border-night-line bg-[#161916] px-4 py-4 lg:px-6">
              <span className="w-[120px] shrink-0 font-body text-label leading-4 text-mist lg:w-[180px]">
                Provider
              </span>
              <span className="hidden grow font-body text-label leading-4 text-mist sm:inline">Purpose</span>
              <span className="ml-auto w-[90px] shrink-0 text-right font-body text-label leading-4 text-mist lg:w-[120px]">
                Region
              </span>
            </div>
            {subprocessors.map((s, i) => (
              <div
                key={s.name}
                style={row(i)}
                className={`m-row flex flex-wrap gap-x-4 gap-y-1 px-4 py-4 lg:flex-nowrap lg:px-6 lg:py-[18px] ${
                  i < subprocessors.length - 1 ? "border-b border-night-line" : ""
                }`}
              >
                <span className="w-[120px] shrink-0 font-body text-[15px] leading-5 text-foreground lg:w-[180px]">
                  {s.name}
                </span>
                <span
                  className={`ml-auto w-[90px] shrink-0 text-right font-body text-[15px] leading-5 sm:order-last lg:w-[120px] ${
                    s.muted ? "text-mist" : "text-foreground"
                  }`}
                >
                  {s.region}
                </span>
                <span className="w-full font-body text-[15px] leading-5 text-mist sm:w-auto sm:grow">
                  {s.purpose}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            chip="Practices"
            title="Privacy is the product."
            muted="Built in from day one."
          />
          <NumberedItems items={practices} numbered={false} />
        </div>

        <div id="documents" className="flex scroll-mt-8 flex-col gap-8 lg:gap-10">
          <InlineHeading title="Documents." muted="For you and your legal team." />
          <Reveal stagger className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            {documents.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group flex grow basis-0 items-center justify-between gap-4 rounded-2xl border border-night-line bg-[#161916] p-6 transition-colors hover:border-[#3A3F38]"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-body text-[17px] leading-[22px] text-foreground">{d.title}</span>
                  <span className="font-body text-[14px] leading-5 text-mist">{d.body}</span>
                </div>
                <Arrow
                  direction="up-right"
                  className="text-mist transition-colors group-hover:text-foreground"
                />
              </Link>
            ))}
          </Reveal>
        </div>
      </div>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
