"use client";

import Link from "next/link";
import { useState } from "react";
import { Chip } from "./Chip";

const includes = [
  "✓ Funnel, sessions and orders",
  "✓ Revenue by channel and campaign",
  "✓ UTM campaign builder",
  "✓ Invite your team",
  "✓ Cookieless, EU-hosted, DPA",
] as const;

const plans = [
  {
    name: "Garden",
    price: "€29",
    sessions: "Up to 25,000 sessions a month",
    image: "/images/plan-garden.png",
    featured: false,
  },
  {
    name: "Meadow",
    price: "€59",
    sessions: "Up to 100,000 sessions a month",
    image: "/images/plan-meadow.png",
    featured: true,
  },
  {
    name: "Valley",
    price: "€119",
    sessions: "Up to 300,000 sessions a month",
    image: "/images/plan-valley.png",
    featured: false,
  },
] as const;

const planFade =
  "linear-gradient(in oklab 180deg, oklab(21.3% -0.006 0.004 / 15%) 0%, oklab(21.3% -0.006 0.004 / 55%) 45%, oklab(21.3% -0.006 0.004 / 92%) 85%)";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-[72px] lg:gap-14 lg:px-[104px] lg:py-[120px]"
    >
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <Chip>Pricing</Chip>
          <div className="flex flex-col">
            <h2 className="font-body text-[24px] leading-[30px] tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-foreground">
              Pay for sessions, not features.
            </h2>
            <p className="font-body text-[24px] leading-[30px] tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-mist">
              Every plan includes everything. 14 days free.
            </p>
          </div>
        </div>
        <div className="flex gap-1 rounded-[8px] border border-night-line bg-[#161916] p-1">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-sm px-3.5 py-[7px] font-body text-label leading-4 ${
              !yearly ? "bg-night-line text-foreground" : "text-mist"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-sm px-3.5 py-[7px] font-body text-label leading-4 ${
              yearly ? "bg-night-line text-foreground" : "text-mist"
            }`}
          >
            Yearly · 2 months free
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col overflow-clip rounded-[12px] border border-night-line bg-[#161916] lg:flex-row lg:rounded-md">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`flex grow basis-0 flex-col ${
              i < plans.length - 1 ? "border-b border-night-line lg:border-r lg:border-b-0" : ""
            }`}
          >
            <div
              className="relative flex h-[290px] shrink-0 flex-col justify-end gap-3.5 bg-[#1A1F1A] bg-cover bg-center p-6 lg:p-8"
              style={{ backgroundImage: `url(${plan.image})` }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: planFade }} />
              {plan.featured ? (
                <div className="relative flex items-center justify-between">
                  <span className="font-body text-[15px] leading-[18px] text-foreground">
                    {plan.name}
                  </span>
                  <span className="rounded-full bg-[#A3E63524] px-2.5 py-[5px] font-body text-[12px] leading-4 text-accent">
                    Most stores pick this
                  </span>
                </div>
              ) : (
                <span className="relative font-body text-[15px] leading-[18px] text-foreground">
                  {plan.name}
                </span>
              )}
              <div className="relative flex items-baseline gap-1.5">
                <span className="font-body text-[44px] leading-[54px] tracking-[-0.03em] text-foreground">
                  {yearly
                    ? plan.price === "€29"
                      ? "€24"
                      : plan.price === "€59"
                        ? "€49"
                        : "€99"
                    : plan.price}
                </span>
                <span className="font-body text-[15px] leading-[18px] text-mist">
                  /month
                </span>
              </div>
              <span className="relative font-body text-[15px] leading-[18px] text-mist">
                {plan.sessions}
              </span>
              <Link
                href="#install"
                className={`relative flex justify-center rounded-[8px] p-[13px] font-body text-[15px] leading-[18px] ${
                  plan.featured
                    ? "bg-accent font-medium text-night-bg"
                    : "bg-night-line text-foreground"
                }`}
              >
                Start free trial
              </Link>
            </div>
            <div className="flex flex-col gap-3.5 px-6 pt-6 pb-7 lg:px-8 lg:pt-7 lg:pb-8">
              {includes.map((item) => (
                <span
                  key={item}
                  className="font-body text-[14px] leading-[18px] text-[#C9CCC4]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
