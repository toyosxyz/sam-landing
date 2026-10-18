import { Reveal } from "@/components/site/motion";

const stats = [
  {
    value: "100%",
    label: "Shopify orders counted",
    detail: "Revenue matches your Shopify admin.",
  },
  {
    value: "90–95%",
    label: "Orders with the full visit path",
    detail: "From landing to thank-you page.",
  },
  {
    value: "0",
    label: "Cookies",
    detail: "Nothing stored in the browser.",
  },
] as const;

export function Proof() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 lg:px-[104px]">
      <Reveal
        stagger
        className="flex flex-col gap-8 rounded-2xl border border-night-line bg-[#141614] px-5 py-8 shadow-[inset_0_1px_0_#EDEEE90F] lg:flex-row lg:items-stretch lg:gap-0 lg:rounded-lg lg:px-14 lg:py-12"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex grow basis-0 flex-col gap-2 ${
              i < stats.length - 1
                ? "border-b border-night-line pb-8 lg:border-r lg:border-b-0 lg:pb-0 lg:pr-10"
                : ""
            } ${i > 0 ? "pt-8 lg:pt-0 lg:pl-10" : ""}`}
          >
            <span className="font-body text-[40px] leading-[44px] tracking-[-0.03em] text-accent lg:text-[48px] lg:leading-[52px]">
              {s.value}
            </span>
            <span className="font-body text-[16px] leading-6 text-foreground">{s.label}</span>
            <span className="font-body text-[14px] leading-5 text-mist">{s.detail}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
