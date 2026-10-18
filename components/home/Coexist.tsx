import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Chip } from "@/components/site/Chip";
import { Reveal } from "@/components/site/motion";

const points = [
  {
    title: "Keep GA4 for ads",
    body: "Audiences and bidding stay in Google.",
  },
  {
    title: "Keep Shopify for totals",
    body: "Sales and products stay in your admin.",
  },
  {
    title: "One tradeoff",
    body: "Sam doesn't follow shoppers across days. Use GA4 for that.",
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

      <Reveal stagger className="flex flex-col gap-8 lg:flex-row lg:gap-6">
        {points.map((p, i) => (
          <div
            key={p.title}
            className="flex grow basis-0 flex-col gap-3.5 border-t border-night-line pt-6"
          >
            <span className="font-body text-[14px] leading-[18px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-body text-[20px] leading-6 text-foreground">{p.title}</h3>
            <p className="font-body text-[15px] leading-[23px] text-mist">{p.body}</p>
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
