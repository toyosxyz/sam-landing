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
        {items.map((faq, i) => (
          <details
            key={faq.q}
            open={i === 0}
            className="group border-b border-night-line"
          >
            <summary className="flex cursor-pointer list-none justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
              <span className="font-body text-body leading-5 text-foreground group-open:font-medium">
                {faq.q}
              </span>
              <span
                aria-hidden
                className="shrink-0 font-body text-body leading-5 text-mist group-open:hidden"
              >
                +
              </span>
              <span
                aria-hidden
                className="hidden shrink-0 font-body text-body leading-5 text-mist group-open:inline"
              >
                −
              </span>
            </summary>
            <p className="disclose mt-0 max-w-[620px] pb-5 font-body text-[15px] leading-[23px] text-mist">
              {faq.a}
            </p>
          </details>
        ))}
      </Reveal>
    </div>
  );
}
