import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Chip } from "@/components/site/Chip";
import { Reveal } from "@/components/site/motion";
import { row } from "@/components/site/motion-vars";
import { TrialLink } from "@/components/site/TrialLink";

const facts = [
  { label: "Cookies", value: "None", accent: true },
  { label: "Consent banner", value: "Not needed", accent: true },
  { label: "Visitor ID", value: "Resets daily", accent: false },
  { label: "Orders counted", value: "All of them", accent: false },
  { label: "Data hosted in", value: "EU", accent: false },
] as const;

const steps = [
  {
    n: "01",
    title: "Install the app",
    body: "One click from the Shopify App Store. No code.",
  },
  {
    n: "02",
    title: "Watch sessions arrive",
    body: "Visits show up in real time.",
  },
  {
    n: "03",
    title: "Fix where it breaks",
    body: "Find the step losing buyers.",
  },
] as const;

export function Privacy() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-[88px] px-5 py-[72px] lg:gap-[140px] lg:px-[104px] lg:py-[120px]">
      <Reveal
        className="relative flex flex-col gap-9 overflow-clip rounded-2xl border border-night-line bg-[#141614] bg-origin-border px-5 py-7 shadow-[inset_0_1px_0_#EDEEE90F] lg:flex-row lg:gap-24 lg:rounded-lg lg:p-14 lg:shadow-[inset_0_1px_0_#EDEEE90F]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 45% 60% at 82% 100% in oklab, oklab(84.9% -0.130 0.161 / 14%) 0%, oklab(84.9% -0.130 0.161 / 4%) 50%, oklab(84.9% -0.130 0.161 / 0%) 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/privacy-hedgerow.png)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 88%) 0%, oklab(18.4% -0.004 0.003 / 70%) 45%, oklab(18.4% -0.004 0.003 / 40%) 100%)",
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[480px] lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/privacy-hedgerow.png)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 92%) 0%, oklab(18.4% -0.004 0.003 / 75%) 42%, oklab(18.4% -0.004 0.003 / 50%) 72%, oklab(18.4% -0.004 0.003 / 35%) 100%)",
            }}
          />
        </div>

        <div className="relative flex w-full shrink-0 flex-col justify-between gap-6 lg:w-[460px] lg:gap-10">
          <div className="flex flex-col gap-4">
            <Chip>Privacy</Chip>
            <div className="flex flex-col">
              <h2 className="font-body text-[24px] leading-[30px] tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-foreground">
                Private by default.
              </h2>
              <p className="font-body text-[24px] leading-[30px] tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-mist">
                No cookie banner needed.
              </p>
            </div>
          </div>
          <p className="font-body text-body leading-[25px] text-mist">
            Each visit gets an anonymous ID that resets every day. Nothing is
            stored in the shopper&apos;s browser.
          </p>
          <Link
            href="/how-it-works"
            className="flex items-center gap-1 font-body text-[14px] leading-[18px] text-mist"
          >
            How tracking works
            <Arrow direction="up-right" size={14} />
          </Link>
        </div>

        <div className="relative flex grow flex-col justify-center">
          {facts.map((f, i) => (
            <div
              key={f.label}
              style={row(i)}
              className={`m-row flex justify-between gap-4 py-4 lg:py-5 ${
                i < facts.length - 1 ? "border-b border-night-line" : ""
              }`}
            >
              <span className="font-body text-[14px] leading-[18px] text-foreground lg:text-body lg:leading-5">
                {f.label}
              </span>
              <span
                className={`text-right font-body text-[14px] leading-[18px] lg:text-body lg:leading-5 ${
                  f.accent ? "text-accent" : "text-foreground"
                }`}
              >
                {f.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="flex flex-col gap-10 lg:gap-14">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <Chip>How it works</Chip>
            <div className="flex flex-col">
              <h2 className="font-body text-[24px] leading-[30px] tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-foreground">
                Install in a minute.
              </h2>
              <p className="font-body text-[24px] leading-[30px] tracking-[-0.02em] lg:text-[32px] lg:leading-10 text-mist">
                Data starts flowing right away.
              </p>
            </div>
          </div>
          <TrialLink className="flex items-center gap-2 rounded-[8px] bg-foreground px-4 py-2.5 font-body text-[15px] font-medium leading-[18px] text-night-bg">
            Start 7-day trial
          </TrialLink>
        </Reveal>
        <Reveal stagger className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex grow basis-0 flex-col gap-3.5 border-t border-night-line pt-6"
            >
              <span className="font-body text-[14px] leading-[18px] text-accent">
                {s.n}
              </span>
              <h3 className="font-body text-[20px] leading-6 text-foreground">
                {s.title}
              </h3>
              <p className="font-body text-[15px] leading-[23px] text-mist">
                {s.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
