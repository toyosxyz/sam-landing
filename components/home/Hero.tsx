import type { CSSProperties } from "react";
import Link from "next/link";
import { DashboardPreview } from "./DashboardPreview";
import { heroDelay } from "@/components/site/motion-vars";
import { SiteNav } from "@/components/site/SiteNav";

const heroFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 0%) 0%, oklab(18.4% -0.004 0.003 / 0%) 18%, oklab(18.4% -0.004 0.003) 19.4%, oklab(18.4% -0.004 0.003) 22%, oklab(18.4% -0.004 0.003 / 70%) 33%, oklab(18.4% -0.004 0.003 / 15%) 50%, oklab(18.4% -0.004 0.003 / 10%) 68%, oklab(18.4% -0.004 0.003 / 75%) 88%, oklab(18.4% -0.004 0.003) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 60%) 0%, oklab(18.4% -0.004 0.003 / 0%) 18%, oklab(18.4% -0.004 0.003 / 0%) 82%, oklab(18.4% -0.004 0.003 / 60%) 100%)";

const heroFadeMobile =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 0%) 0%, oklab(18.4% -0.004 0.003 / 0%) 27%, oklab(18.4% -0.004 0.003) 29.5%, oklab(18.4% -0.004 0.003) 33%, oklab(18.4% -0.004 0.003 / 55%) 46%, oklab(18.4% -0.004 0.003 / 10%) 62%, oklab(18.4% -0.004 0.003 / 70%) 88%, oklab(18.4% -0.004 0.003) 100%)";

export function Hero() {
  return (
    <section className="flex w-full flex-col">
      <SiteNav />
      <div className="relative overflow-clip pt-12 pb-[72px] lg:pt-24 lg:pb-[120px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[860px] overflow-clip lg:hidden">
          <div
            className="absolute top-[250px] left-0 h-[610px] w-full bg-cover bg-[60%]"
            style={{ backgroundImage: "url(/images/hero-shire.png)" }}
          />
          <div className="absolute inset-0" style={{ backgroundImage: heroFadeMobile }} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[1329px] overflow-clip lg:block">
          <div
            className="absolute top-[260px] left-0 h-[1069px] w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-shire.png)" }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: heroFade }}
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-5 lg:gap-[120px] lg:px-[104px]">
          <div className="relative flex w-full max-w-[680px] flex-col gap-7 lg:gap-8">
            <div data-reveal="load" className="flex flex-col gap-[18px]">
              <h1 className="font-body text-[38px] leading-[42px] tracking-[-0.035em] text-foreground lg:text-[56px] lg:leading-[62px]">
                Every path through your store, watched live
              </h1>
              <p className="max-w-[540px] font-body text-body leading-6 tracking-[-0.005em] text-mist lg:text-[20px] lg:leading-[30px]">
                Sam walks every session with your shoppers, spots where they
                leave the trail and tells you what it costs. No cookies, no
                banners.
              </p>
            </div>
            <div
              data-reveal="load-one"
              style={{ "--reveal-delay": "180ms" } as CSSProperties}
              className="flex gap-2.5"
            >
              <Link
                href="#install"
                className="flex items-center gap-2 rounded-[8px] bg-foreground px-4 py-2.5 font-body text-[15px] font-medium leading-[18px] text-night-bg"
              >
                Start 7-day trial
                <span aria-hidden className="font-normal">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div data-reveal="load-one" style={heroDelay} className="relative">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
