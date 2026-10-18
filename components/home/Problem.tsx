import { Chip } from "@/components/site/Chip";
import { Reveal } from "@/components/site/motion";

const pains = [
  {
    quote: "Orders come in and I don't know where they came from.",
    body: "Declined cookies leave orders without a source.",
  },
  {
    quote: "I can't tell which landing actually converts.",
    body: "Reports count visits. They don't link landings to orders.",
  },
  {
    quote: "Campaign attribution is a mess.",
    body: "UTMs show clicks. You need to see who bought.",
  },
] as const;

export function Problem() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-[72px] lg:gap-14 lg:px-[104px] lg:py-[120px]">
      <Reveal stagger className="flex w-full max-w-[760px] flex-col gap-4">
        <Chip>The gap</Chip>
        <div className="flex flex-col">
          <h2 className="font-body text-h3 leading-[34px] tracking-[-0.03em] text-foreground lg:text-[40px] lg:leading-[48px]">
            You have analytics.
          </h2>
          <p className="font-body text-h3 leading-[34px] tracking-[-0.03em] text-mist lg:text-[40px] lg:leading-[48px]">
            You still can&apos;t see which landing sells.
          </p>
        </div>
      </Reveal>

      <Reveal stagger className="flex flex-col border-t border-night-line lg:flex-row">
        {pains.map((p, i) => (
          <div
            key={p.quote}
            className={`flex grow basis-0 flex-col gap-3 border-b border-night-line py-8 lg:border-b-0 lg:py-10 ${
              i < pains.length - 1 ? "lg:border-r lg:pr-10" : ""
            } ${i > 0 ? "lg:pl-10" : ""}`}
          >
            <p className="font-body text-[18px] leading-7 tracking-[-0.01em] text-foreground lg:text-[20px] lg:leading-[28px]">
              “{p.quote}”
            </p>
            <p className="font-body text-[15px] leading-[23px] text-mist">{p.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
