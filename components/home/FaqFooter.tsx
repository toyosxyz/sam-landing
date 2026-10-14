"use client";

import Link from "next/link";
import { useState } from "react";
import { Chip } from "./Chip";
import { SamLogo } from "./SamLogo";

const faqs = [
  {
    q: "Do I need a cookie banner for Sam?",
    a: "No. Sam sets no cookies and writes nothing to local or session storage. Sessions come from a daily-salted hash, so nobody is followed across days.",
  },
  {
    q: "Will it slow down my store?",
    a: "No. The pixel is tiny and loads asynchronously. Checkout and storefront stay on Shopify’s critical path.",
  },
  {
    q: "How is it different from GA4 or Shopify Analytics?",
    a: "Sam is built for Shopify journeys: cookieless sessions, funnel drop-offs, and revenue by channel and campaign — without a consent banner.",
  },
  {
    q: "Does Sam change anything in my store?",
    a: "Install adds a custom pixel and webhooks. No theme edits, no checkout scripts you manage yourself.",
  },
  {
    q: "Where is my data stored?",
    a: "In the EU. You get a DPA, and nothing is written to the shopper’s browser.",
  },
] as const;

const footerCols = [
  {
    title: "Product",
    links: ["Live demo", "Pricing", "Changelog"],
  },
  {
    title: "Docs",
    links: ["Get started", "How tracking works", "Custom pixel"],
  },
  {
    title: "Support",
    links: ["Contact", "FAQ", "Billing"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA"],
  },
] as const;

const hamletFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 0%) 0%, oklab(18.4% -0.004 0.003 / 0%) 5%, oklab(18.4% -0.004 0.003) 7%, oklab(18.4% -0.004 0.003) 12%, oklab(18.4% -0.004 0.003 / 75%) 26%, oklab(18.4% -0.004 0.003 / 15%) 50%, oklab(18.4% -0.004 0.003 / 10%) 76%, oklab(18.4% -0.004 0.003 / 55%) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 50%) 0%, oklab(18.4% -0.004 0.003 / 0%) 18%, oklab(18.4% -0.004 0.003 / 0%) 82%, oklab(18.4% -0.004 0.003 / 50%) 100%)";

export function FaqFooter() {
  const [open, setOpen] = useState(0);

  return (
    <section className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pt-[72px] pb-10 lg:flex-row lg:gap-24 lg:px-[104px] lg:pt-[120px] lg:pb-14">
        <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[360px]">
          <Chip>FAQ</Chip>
          <div className="flex flex-col">
            <h2 className="font-body text-2xl leading-8 text-foreground">
              Questions, answered.
            </h2>
            <p className="font-body text-2xl leading-8 text-mist">
              Pricing, privacy and setup.
            </p>
          </div>
        </div>
        <div className="flex grow flex-col border-t border-night-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <button
                key={faq.q}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex flex-col border-b border-night-line py-5 text-left"
              >
                <div className="flex justify-between gap-4">
                  <span
                    className={`font-body text-body leading-5 text-foreground ${
                      isOpen ? "font-medium" : ""
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 font-body text-body leading-5 text-mist">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-2.5 max-w-[620px] font-body text-[15px] leading-[23px] text-mist">
                    {faq.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 px-5 pt-8 pb-10 lg:flex-row lg:items-end lg:justify-between lg:px-[104px] lg:pt-6">
        <div className="flex flex-col">
          <p className="font-body text-[26px] leading-8 tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-foreground">
            Find out where the trail breaks.
          </p>
          <p className="font-body text-[26px] leading-8 tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-mist">
            14 days free, no card needed.
          </p>
        </div>
        <Link
          href="#install"
          className="flex items-center gap-2 rounded-[8px] bg-foreground px-4 py-2.5 font-body text-[15px] font-medium leading-[18px] text-night-bg"
        >
          Install on Shopify
          <span aria-hidden className="font-normal">→</span>
        </Link>
      </div>

      <footer className="mx-auto flex w-full max-w-[1440px] flex-wrap gap-y-8 px-5 pt-10 lg:flex-nowrap lg:gap-y-0 lg:px-[104px] lg:pt-12">
        <div className="flex w-full shrink-0 items-start gap-2 lg:w-[420px]">
          <SamLogo />
          <span className="font-body text-[15px] font-semibold leading-[18px] text-foreground">
            sam
          </span>
        </div>
        {footerCols.map((col) => (
          <div key={col.title} className="flex w-1/2 flex-col gap-2.5 lg:w-auto lg:grow lg:basis-0">
            <span className="font-body text-label leading-4 text-foreground">
              {col.title}
            </span>
            {col.links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-label leading-4 text-mist"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </footer>

      <div className="relative flex h-[440px] shrink-0 flex-col justify-end overflow-clip pb-6 lg:h-[600px] lg:pb-8">
        <div className="pointer-events-none absolute inset-0 overflow-clip">
          <div
            className="absolute top-10 left-0 h-[400px] w-full bg-cover bg-[45%] lg:top-12 lg:h-[552px] lg:bg-center"
            style={{ backgroundImage: "url(/images/hamlet-night.png)" }}
          />
          <div className="absolute inset-0" style={{ backgroundImage: hamletFade }} />
        </div>
        <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 lg:px-[104px]">
          <div className="flex flex-col gap-1 rounded-[8px] border border-[#EDEEE914] bg-[#111311B8] px-3 py-2 backdrop-blur-[12px] lg:flex-row lg:justify-between lg:gap-0">
            <span className="font-body text-[12px] leading-4 text-[#C9CCC4]">
              © 2026 Sam · An Arnor Labs product
            </span>
            <span className="font-body text-[12px] leading-4 text-[#C9CCC4]">
              Made in Asturias · Hosted in the EU
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
