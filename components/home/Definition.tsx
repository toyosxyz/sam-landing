import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Chip } from "@/components/site/Chip";
import { Reveal } from "@/components/site/motion";

export const cookielessDefinition =
  "Cookieless Shopify analytics is session tracking that measures visits, landings, campaigns and orders without cookies or browser storage. Sam records every Shopify visit, including shoppers who decline a cookie banner, and matches purchases from Shopify webhooks. Visitor IDs reset every day, so Sam does not follow returning customers across days.";

export function Definition() {
  return (
    <section
      id="what-is-cookieless-shopify-analytics"
      className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-[72px] lg:px-[104px] lg:py-[120px]"
    >
      <Reveal
        stagger
        className="flex max-w-[760px] flex-col gap-5 border-t border-night-line pt-10 lg:pt-14"
      >
        <Chip>Definition</Chip>
        <h2 className="font-body text-[24px] leading-[30px] tracking-[-0.02em] text-foreground lg:text-[32px] lg:leading-10">
          What is cookieless Shopify analytics?
        </h2>
        <p className="font-body text-body leading-[26px] text-mist lg:text-[18px] lg:leading-[28px]">
          {cookielessDefinition}
        </p>
        <Link
          href="/guides/cookieless-shopify-analytics"
          className="flex items-center gap-1 font-body text-[14px] leading-[18px] text-mist"
        >
          Read the full guide
          <Arrow direction="up-right" size={14} />
        </Link>
      </Reveal>
    </section>
  );
}
