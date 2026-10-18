import { Chip } from "@/components/site/Chip";
import { Reveal } from "@/components/site/motion";
import { Plans } from "@/components/site/Plans";

const includes = [
  "✓ Funnel, sessions and orders",
  "✓ Revenue by channel and campaign",
  "✓ UTM builder",
  "✓ Team invites",
  "✓ Cookieless, EU-hosted",
] as const;

export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-[72px] lg:px-[104px] lg:py-[120px]"
    >
      <Plans
        includes={includes}
        ctaHref="#install"
        className="gap-8 lg:gap-14"
        header={
          <Reveal stagger className="flex flex-col gap-4">
            <Chip>Pricing</Chip>
            <div className="flex flex-col">
              <h2 className="font-body text-[24px] leading-[30px] tracking-[-0.02em] text-foreground lg:text-[32px] lg:leading-10">
                Priced by sessions.
              </h2>
              <p className="font-body text-[24px] leading-[30px] tracking-[-0.02em] text-mist lg:text-[32px] lg:leading-10">
                All features. 7-day trial.
              </p>
            </div>
          </Reveal>
        }
      />
    </section>
  );
}
