"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { formatEur, PLANS, sessionsLabel, SIGNUP_URL } from "@/lib/site";
import { Reveal } from "./motion";

const planFade =
  "linear-gradient(in oklab 180deg, oklab(21.3% -0.006 0.004 / 15%) 0%, oklab(21.3% -0.006 0.004 / 55%) 45%, oklab(21.3% -0.006 0.004 / 92%) 85%)";

export function Plans({
  includes,
  header,
  className = "gap-6",
  ctaHref = SIGNUP_URL,
}: {
  includes: readonly string[];
  header?: ReactNode;
  className?: string;
  ctaHref?: string;
}) {
  const [yearly, setYearly] = useState(false);
  const [switched, setSwitched] = useState(false);

  const toggle = (
    <div className="flex gap-1 self-start rounded-[8px] border border-night-line bg-[#161916] p-1 lg:self-auto">
      {[
        { label: "Monthly", on: !yearly, value: false },
        { label: "Yearly · 2 months free", on: yearly, value: true },
      ].map((opt) => (
        <button
          key={opt.label}
          type="button"
          aria-pressed={opt.on}
          onClick={() => {
            setYearly(opt.value);
            setSwitched(true);
          }}
          className={`rounded-sm px-3.5 py-[7px] font-body text-label leading-4 transition-colors ${
            opt.on ? "bg-night-line text-foreground" : "text-mist"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className={`flex w-full flex-col ${className}`}>
      {header ? (
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          {header}
          {toggle}
        </div>
      ) : (
        <div className="flex">{toggle}</div>
      )}

      <Reveal
        stagger
        className="flex w-full flex-col overflow-clip rounded-[12px] border border-night-line bg-[#161916] lg:flex-row lg:rounded-md"
      >
        {PLANS.map((plan, i) => (
          <div
            key={plan.name}
            className={`flex grow basis-0 flex-col ${
              i < PLANS.length - 1
                ? "border-b border-night-line lg:border-r lg:border-b-0"
                : ""
            }`}
          >
            <div
              className="relative flex h-[290px] shrink-0 flex-col justify-end gap-3.5 bg-[#1A1F1A] bg-cover bg-center p-6 lg:p-8"
              style={{ backgroundImage: `url(${plan.image})` }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: planFade }} />
              <div className="relative flex items-center justify-between">
                <span className="font-body text-[15px] leading-[18px] text-foreground">{plan.name}</span>
                {plan.featured && (
                  <span className="rounded-full bg-[#A3E63524] px-2.5 py-[5px] font-body text-[12px] leading-4 text-accent">
                    Most stores pick this
                  </span>
                )}
              </div>
              <div className="relative flex items-baseline gap-1.5">
                <span
                  key={yearly ? "yearly" : "monthly"}
                  className={`font-body text-[44px] leading-[54px] tracking-[-0.03em] text-foreground ${
                    switched ? "value-swap" : ""
                  }`}
                >
                  {formatEur(yearly ? plan.yearlyEur : plan.monthlyEur)}
                </span>
                <span className="font-body text-[15px] leading-[18px] text-mist">/month</span>
              </div>
              <span className="relative font-body text-[15px] leading-[18px] text-mist">
                {sessionsLabel(plan.sessions)}
              </span>
              <Link
                href={ctaHref}
                className={`relative flex items-center justify-center gap-2 rounded-[8px] p-[13px] font-body text-[15px] leading-[18px] ${
                  plan.featured ? "bg-accent font-medium text-night-bg" : "bg-night-line text-foreground"
                }`}
              >
                Start 7-day trial
              </Link>
            </div>
            <div className="flex flex-col gap-3.5 px-6 pt-6 pb-7 lg:px-8 lg:pt-7 lg:pb-8">
              {includes.map((item) => (
                <span key={item} className="font-body text-[14px] leading-[18px] text-[#C9CCC4]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
