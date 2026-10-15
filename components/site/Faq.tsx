"use client";

import { useState } from "react";
import { Chip } from "./Chip";
import { Reveal } from "./motion";

export type FaqItem = { q: string; a: string };

export function Faq({
  items,
  title,
  subtitle,
  chip = "FAQ",
  asideWidth = "lg:w-[360px]",
  className = "",
}: {
  items: readonly FaqItem[];
  title: string;
  subtitle?: string;
  chip?: string;
  asideWidth?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className={`flex w-full flex-col gap-8 lg:flex-row lg:gap-24 ${className}`}>
      <Reveal stagger className={`flex w-full shrink-0 flex-col gap-4 ${asideWidth}`}>
        <Chip>{chip}</Chip>
        <div className="flex flex-col">
          <h2 className="font-body text-2xl leading-8 text-foreground">{title}</h2>
          {subtitle && (
            <p className="font-body text-2xl leading-8 text-mist">{subtitle}</p>
          )}
        </div>
      </Reveal>
      <Reveal stagger delay={120} className="flex grow flex-col border-t border-night-line">
        {items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <button
              key={faq.q}
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex flex-col border-b border-night-line py-5 text-left"
            >
              <div className="flex justify-between gap-4">
                <span
                  className={`font-body text-body leading-5 text-foreground ${
                    isOpen ? "font-medium" : ""
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 font-body text-body leading-5 text-mist transition-colors group-hover:text-foreground"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>
              {isOpen && (
                <p className="disclose mt-2.5 max-w-[620px] font-body text-[15px] leading-[23px] text-mist">
                  {faq.a}
                </p>
              )}
            </button>
          );
        })}
      </Reveal>
    </div>
  );
}
