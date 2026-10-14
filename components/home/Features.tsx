import type { CSSProperties } from "react";
import Link from "next/link";
import { Chip } from "./Chip";

const funnelSteps = [
  { label: "Visit", pct: "100.0%", sessions: "37,150 sessions", drop: "—" },
  { label: "Product viewed", pct: "42.4%", sessions: "15,757 sessions", drop: "↘ 58%" },
  {
    label: "Added to cart",
    pct: "13.3%",
    sessions: "4,923 sessions",
    drop: "↘ 69%",
    dropAlert: true,
  },
  { label: "Checkout started", pct: "5.1%", sessions: "1,911 sessions", drop: "↘ 61%" },
  { label: "Purchase", pct: "2.9%", sessions: "1,063 sessions", drop: "↘ 44%" },
] as const;

const sessionEvents = [
  {
    event: "checkout_completed",
    category: "Purchase",
    page: "/checkouts/thank-you",
    time: "14:58:02",
    highlight: true,
  },
  {
    event: "checkout_started",
    category: "Checkout",
    page: "/checkouts/cn/information",
    time: "14:56:40",
  },
  {
    event: "add_to_cart",
    category: "Action",
    page: "/products/linen-shirt-sage",
    time: "14:55:11",
  },
  {
    event: "view_product",
    category: "View",
    page: "/products/linen-shirt-sage",
    time: "14:55:09",
  },
  {
    event: "view_collection",
    category: "View",
    page: "/collections/summer",
    time: "14:54:20",
  },
  { event: "page_viewed", category: "View", page: "/", time: "14:53:55" },
] as const;

const channels = [
  { name: "organic", sessions: "12,375", width: 340 },
  { name: "cpc", sessions: "8,279", width: 228 },
  { name: "referral", sessions: "8,001", width: 220 },
  { name: "direct", sessions: "5,856", width: 161 },
  { name: "email", sessions: "1,384", width: 60 },
  { name: "social", sessions: "1,122", width: 52 },
  { name: "unknown", sessions: "213", width: 12 },
] as const;

const campaigns = [
  {
    name: "ES_Search_Brand_Exact",
    views: "379",
    cart: "141",
    checkout: "49",
    completed: "39",
    completedUp: true,
  },
  {
    name: "META_Prospecting_AW26",
    views: "2,214",
    cart: "188",
    checkout: "52",
    completed: "17",
    completedUp: false,
  },
  {
    name: "KLAVIYO_Newsletter_Oct",
    views: "806",
    cart: "203",
    checkout: "91",
    completed: "64",
    completedUp: true,
  },
] as const;

const restRows = [
  { label: "Live sessions: who is on your store right now", trail: "↘" },
  {
    label: "Orders matched to the session and channel that brought them",
    trail: "↘",
  },
  { label: "Customer journeys from first visit to repeat order", trail: "↘" },
  { label: "Every metric split by device, OS and browser", trail: "↘" },
  {
    label: "Alerts when a step of the funnel suddenly drops",
    trail: "Soon",
    soon: true,
  },
  {
    label: "Your numbers inside Claude and ChatGPT, via MCP",
    trail: "Soon",
    soon: true,
  },
] as const;

const cardGlow =
  "radial-gradient(ellipse 45% 55% at 82% 100% in oklab, oklab(84.9% -0.130 0.161 / 14%) 0%, oklab(84.9% -0.130 0.161 / 4%) 50%, oklab(84.9% -0.130 0.161 / 0%) 100%)";
const cardGlowLeft =
  "radial-gradient(ellipse 45% 55% at 16% 100% in oklab, oklab(84.9% -0.130 0.161 / 14%) 0%, oklab(84.9% -0.130 0.161 / 4%) 50%, oklab(84.9% -0.130 0.161 / 0%) 100%)";

const featureTitle =
  "font-body text-[20px] leading-7 tracking-[-0.01em] lg:text-2xl lg:leading-8";
const blockTitle =
  "font-body text-[20px] leading-7 tracking-[-0.01em] lg:text-2xl lg:leading-[30px]";
const featureCard =
  "relative flex grow flex-col items-center overflow-clip rounded-2xl border border-night-line bg-[#141614] bg-origin-border px-9 py-6 shadow-[inset_0_1px_0_#EDEEE90F] lg:py-10";

export function Features() {
  return (
    <section
      id="product"
      className="mx-auto flex w-full max-w-[1440px] flex-col gap-[72px] px-5 py-[72px] lg:gap-32 lg:px-[104px] lg:py-[120px]"
    >
      <div className="flex w-full max-w-[760px] flex-col gap-4">
        <Chip>What Sam sees</Chip>
        <div className="flex flex-col">
          <h2 className="font-body text-h3 leading-[34px] tracking-[-0.03em] text-foreground lg:text-[40px] lg:leading-[48px]">
            From the first page to the thank-you page.
          </h2>
          <p className="font-body text-h3 leading-[34px] tracking-[-0.03em] text-mist lg:text-[40px] lg:leading-[48px]">
            Every step your shoppers take, and every step they don&apos;t.
          </p>
        </div>
      </div>

      {/* Funnel */}
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-[72px]">
        <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[400px]">
          <Chip>Funnel</Chip>
          <div className="flex flex-col">
            <h3 className={`${featureTitle} text-foreground`}>
              See exactly where the trail breaks.
            </h3>
            <p className={`${featureTitle} text-mist`}>
              Each step from visit to purchase, the drop between them, on mobile and
              desktop.
            </p>
          </div>
          <Link
            href="#funnel"
            className="pt-2 font-body text-[14px] leading-[18px] text-mist"
          >
            Explore the funnel ↗
          </Link>
        </div>
        <div className={featureCard} style={{ backgroundImage: cardGlow }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hills-funnel.png)" }}
          />
          <div className="relative flex w-full max-w-[656px] flex-col gap-5 rounded-md border border-[#2E2E2E] bg-[#1F1F1F] p-4 shadow-[0_24px_60px_#00000080] lg:p-5">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1.5">
                <span className="font-body text-[10px] font-semibold leading-3 tracking-[0.06em] text-[#A0A0A0]">
                  CONVERSION BREAKDOWN
                </span>
                <span className="font-body text-[26px] font-semibold leading-8 tracking-[-0.02em] text-[#EDEDED]">
                  2.9%
                </span>
                <span className="font-body text-[11px] leading-[14px] text-[#A0A0A0]">
                  of visitors reach a confirmed order
                </span>
              </div>
              <div className="hidden gap-1 lg:flex">
                {["Both", "Mobile", "Desktop"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-sm px-[9px] py-[5px] font-body text-[11px] leading-[14px] text-[#EDEDED] ${
                      i === 0
                        ? "border border-[#3A3A3A] bg-[#2A2A2A] font-semibold"
                        : "border border-[#2E2E2E] font-medium"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex">
              {funnelSteps.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex w-[20%] shrink-0 flex-col gap-[5px] ${
                    i > 0 ? "pl-2.5" : ""
                  } ${i < funnelSteps.length - 1 ? "border-r border-[#2E2E2E]" : ""}`}
                >
                  <span className="font-body text-[11px] leading-[14px] text-[#A0A0A0]">
                    {s.label}
                  </span>
                  <span className="font-body text-[17px] font-semibold leading-[22px] text-[#EDEDED]">
                    {s.pct}
                  </span>
                  <span className="font-body text-[10px] leading-3 text-[#A0A0A0]">
                    {s.sessions}
                  </span>
                  <span
                    className={`font-body text-[10px] leading-3 ${
                      "dropAlert" in s && s.dropAlert
                        ? "text-[#E5484D]"
                        : "text-[#A0A0A0]"
                    }`}
                  >
                    {s.drop}
                  </span>
                </div>
              ))}
            </div>
            <svg
              width="616"
              height="150"
              viewBox="0 0 616 150"
              className="h-auto w-full shrink-0"
              aria-hidden
            >
              <path
                d="M90 0L123.2 86V150H90Z M213.2 86L246.4 130V150H213.2Z M336.4 130L369.6 142V150H336.4Z M459.6 142L492.8 145.6V150H459.6Z"
                fill="#3E4A2A"
              />
              <path
                d="M0 0H90V150H0Z M123.2 86H213.2V150H123.2Z M246.4 130H336.4V150H246.4Z M369.6 142H459.6V150H369.6Z M492.8 145.6H616V150H492.8Z"
                fill="#A3E635"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Sessions */}
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-[72px]">
        <div
          className={`${featureCard} order-last lg:order-none`}
          style={{ backgroundImage: cardGlowLeft }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hills-sessions.png)" }}
          />
          <div className="relative flex w-full max-w-[656px] flex-col gap-3.5 rounded-md border border-[#2E2E2E] bg-[#1B1B1B] p-4 shadow-[0_24px_60px_#00000080] lg:p-5">
            <div className="flex flex-col gap-1">
              <span className="font-body text-[11px] leading-[14px] text-[#A0A0A0]">
                ← Back to sessions
              </span>
              <span className="font-body text-lead font-semibold leading-[22px] tracking-[-0.01em] text-[#EDEDED]">
                Session events
              </span>
            </div>
            <div className="flex flex-col gap-3 rounded-[10px] border border-[#2E2E2E] bg-[#222] p-4">
              <span className="font-body text-[12px] font-semibold leading-4 text-[#EDEDED]">
                sess_7f3a9c2e41d84b0e
              </span>
              <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-6">
                <div className="flex grow basis-0 flex-col gap-1.5">
                  {[
                    "First seen: 13/10, 14:53:55",
                    "Landing path: /",
                    "OS: iOS",
                  ].map((t) => (
                    <span
                      key={t}
                      className="font-body text-[11px] leading-[14px] text-[#A0A0A0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex grow basis-0 flex-col gap-1.5">
                  {[
                    "Device: mobile",
                    "Browser: Safari",
                    "Channel: instagram · social",
                  ].map((t) => (
                    <span
                      key={t}
                      className="font-body text-[11px] leading-[14px] text-[#A0A0A0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-[10px] border border-[#2E2E2E] bg-[#222] px-4 pt-1 pb-2">
              <div className="flex border-b border-[#2E2E2E] py-2.5">
                <span className="grow font-body text-[11px] leading-[14px] text-[#A0A0A0] lg:w-[140px] lg:shrink-0 lg:grow-0">
                  Event
                </span>
                <span className="hidden w-20 shrink-0 font-body text-[11px] leading-[14px] text-[#A0A0A0] lg:inline">
                  Category
                </span>
                <span className="hidden grow font-body text-[11px] leading-[14px] text-[#A0A0A0] lg:inline">
                  Page
                </span>
                <span className="w-[60px] shrink-0 text-right font-body text-[11px] leading-[14px] text-[#A0A0A0]">
                  Time
                </span>
              </div>
              {sessionEvents.map((e, i) => (
                <div
                  key={e.event}
                  className={`flex py-[9px] ${
                    i < sessionEvents.length - 1
                      ? "border-b border-[#2A2A2A]"
                      : ""
                  }`}
                >
                  <span
                    className={`grow font-body text-[11px] font-semibold leading-[14px] lg:w-[140px] lg:shrink-0 lg:grow-0 ${
                      "highlight" in e && e.highlight
                        ? "text-accent"
                        : "text-[#EDEDED]"
                    }`}
                  >
                    {e.event}
                  </span>
                  <span className="hidden w-20 shrink-0 font-body text-[11px] leading-[14px] text-[#EDEDED] lg:inline">
                    {e.category}
                  </span>
                  <span className="hidden grow font-body text-[11px] leading-[14px] text-[#EDEDED] lg:inline">
                    {e.page}
                  </span>
                  <span className="w-[60px] shrink-0 text-right font-body text-[11px] leading-[14px] text-[#EDEDED]">
                    {e.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[400px]">
          <Chip>Sessions</Chip>
          <div className="flex flex-col">
            <h3 className={`${featureTitle} text-foreground`}>
              Follow any shopper, step by step.
            </h3>
            <p className={`${featureTitle} text-mist`}>
              Landing page, device, channel and every view, add-to-cart and checkout,
              in order.
            </p>
          </div>
          <Link
            href="#sessions"
            className="pt-2 font-body text-[14px] leading-[18px] text-mist"
          >
            See a session ↗
          </Link>
        </div>
      </div>

      {/* Attribution */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Chip>Attribution</Chip>
          <div className="flex flex-col items-start lg:flex-row lg:flex-wrap lg:gap-2">
            <span className={`${blockTitle} text-foreground`}>
              Know which roads bring buyers.
            </span>
            <span className={`${blockTitle} text-mist`}>
              Not just visitors.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
          <div className="flex grow basis-0 flex-col gap-5">
            <div
              className="relative flex shrink-0 items-center justify-center overflow-clip rounded-2xl border border-night-line bg-[#141614] bg-origin-border px-4 py-6 shadow-[inset_0_1px_0_#EDEEE90F] lg:h-[420px] lg:p-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 55% 55% at 18% 0% in oklab, oklab(84.9% -0.130 0.161 / 13%) 0%, oklab(84.9% -0.130 0.161 / 4%) 50%, oklab(84.9% -0.130 0.161 / 0%) 100%)",
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/hills-channels.png)" }}
              />
              <div className="relative flex w-full shrink-0 flex-col gap-2.5 rounded-md border border-[#2E2E2E] bg-[#1F1F1F] p-4 shadow-[0_24px_60px_#00000080] lg:w-[440px] lg:p-[18px]">
                <div className="flex justify-between border-b border-[#2E2E2E] pb-2.5">
                  <span className="font-body text-[12px] font-semibold leading-4 tracking-[0.04em] text-[#A0A0A0]">
                    CHANNEL
                  </span>
                  <span className="font-body text-[10px] font-semibold leading-3 tracking-[0.06em] text-[#A0A0A0]">
                    SESSIONS
                  </span>
                </div>
                <span className="pb-2 font-body text-[11px] leading-[14px] text-[#A0A0A0]">
                  Sessions by acquisition channel
                </span>
                {channels.map((c, i) => (
                  <div key={c.name} className="flex items-center justify-between">
                    <div
                      className={`flex h-[22px] w-(--bar-sm) shrink-0 items-center rounded-[5px] pl-2 lg:w-(--bar-lg) ${
                        i === 0 ? "bg-[#2E2E2E]" : "bg-[#2A2A2A]"
                      }`}
                      style={
                        {
                          "--bar-sm": `${Math.round((c.width / 430) * 100)}%`,
                          "--bar-lg": `${c.width}px`,
                        } as CSSProperties
                      }
                    >
                      <span className="font-body text-[11px] font-medium leading-[14px] text-[#EDEDED]">
                        {c.name}
                      </span>
                    </div>
                    <span className="font-body text-[11px] leading-[14px] text-[#A0A0A0]">
                      {c.sessions}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="font-body text-lead leading-[22px] text-foreground">
                Every session credited to its channel
              </h4>
              <p className="font-body text-body leading-6 text-mist">
                Organic, paid, referral, direct, email and social, read from each
                visit&apos;s source and referrer.
              </p>
            </div>
          </div>

          <div className="flex grow basis-0 flex-col gap-5">
            <div
              className="relative flex shrink-0 items-center justify-center overflow-clip rounded-2xl border border-night-line bg-[#141614] bg-origin-border px-4 py-6 shadow-[inset_0_1px_0_#EDEEE90F] lg:h-[420px] lg:p-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 55% 55% at 84% 0% in oklab, oklab(84.9% -0.130 0.161 / 13%) 0%, oklab(84.9% -0.130 0.161 / 4%) 50%, oklab(84.9% -0.130 0.161 / 0%) 100%)",
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/hills-campaigns.png)" }}
              />
              <div className="relative flex w-full shrink-0 flex-col gap-3.5 rounded-md border border-[#2E2E2E] bg-[#1B1B1B] p-4 lg:w-[540px] lg:max-w-[90%] lg:p-[18px] shadow-[0_24px_60px_#00000080]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-lead font-semibold leading-[22px] tracking-[-0.01em] text-[#EDEDED]">
                      Campaigns
                    </span>
                    <span className="rounded-[9px] bg-[#2E2E2E] px-[7px] py-px font-body text-[10px] font-semibold leading-3 text-[#EDEDED]">
                      3
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="hidden rounded-sm border border-[#2E2E2E] px-[9px] py-[5px] font-body text-[11px] leading-[14px] text-[#EDEDED] lg:inline">
                      Last 7 days
                    </span>
                    <span className="rounded-sm bg-accent px-[9px] py-[5px] font-body text-[11px] font-semibold leading-[14px] text-night-bg">
                      New campaign
                    </span>
                  </div>
                </div>
                <div className="flex flex-col rounded-[10px] border border-[#2E2E2E] bg-[#222] px-3.5 pt-1 pb-1.5">
                  <div className="pt-2.5 pb-1.5">
                    <span className="font-body text-[12px] font-semibold leading-4 text-[#EDEDED]">
                      UTM campaigns
                    </span>
                  </div>
                  <div className="flex border-b border-[#2E2E2E] py-2">
                    <span className="grow font-body text-[10px] leading-3 text-[#A0A0A0]">
                      Campaign
                    </span>
                    {["Views", "Cart", "Checkout", "Completed"].map((h, i) => (
                      <span
                        key={h}
                        className={`shrink-0 text-right font-body text-[10px] leading-3 text-[#A0A0A0] ${
                          i === 3 ? "w-[70px]" : "w-[62px]"
                        } ${i === 1 || i === 2 ? "hidden lg:inline" : ""}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  {campaigns.map((c, i) => (
                    <div
                      key={c.name}
                      className={`flex py-[9px] ${
                        i < campaigns.length - 1
                          ? "border-b border-[#2A2A2A]"
                          : ""
                      }`}
                    >
                      <span className="min-w-0 grow truncate font-body text-[11px] font-semibold leading-[14px] text-[#EDEDED]">
                        {c.name}
                      </span>
                      <span className="w-[62px] shrink-0 text-right font-body text-[11px] leading-[14px] text-[#EDEDED]">
                        {c.views}
                      </span>
                      <span className="hidden w-[62px] shrink-0 text-right font-body text-[11px] leading-[14px] text-[#EDEDED] lg:inline">
                        {c.cart}
                      </span>
                      <span className="hidden w-[62px] shrink-0 text-right font-body text-[11px] leading-[14px] text-[#EDEDED] lg:inline">
                        {c.checkout}
                      </span>
                      <span
                        className={`w-[70px] shrink-0 text-right font-body text-[11px] leading-[14px] ${
                          c.completedUp ? "text-accent" : "text-[#E5484D]"
                        }`}
                      >
                        {c.completed}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="font-body text-lead leading-[22px] text-foreground">
                UTM campaigns, measured to checkout
              </h4>
              <p className="font-body text-body leading-6 text-mist">
                Page views, add-to-cart, checkout reached and completed for every
                campaign you run.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* And the rest */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-start lg:flex-row lg:flex-wrap lg:gap-2">
            <span className={`${blockTitle} text-foreground`}>
              And the rest.
            </span>
            <span className={`${blockTitle} text-mist`}>
              Everything else Sam keeps an eye on.
            </span>
          </div>
          <Link
            href="#features"
            className="rounded-[8px] border border-night-line bg-[#161916] px-3.5 py-2 font-body text-[14px] leading-[18px] text-foreground"
          >
            All features
          </Link>
        </div>
        <div className="flex flex-col border-t border-night-line">
          {restRows.map((row) => (
            <div
              key={row.label}
              className="flex items-start justify-between gap-4 border-b border-night-line py-[18px]"
            >
              <span className="font-body text-[15px] leading-[21px] text-foreground lg:text-[17px] lg:leading-[22px]">
                {row.label}
              </span>
              <span
                className={`font-body ${
                  "soon" in row && row.soon
                    ? "text-label leading-4 text-accent"
                    : "text-[15px] leading-[18px] text-mist"
                }`}
              >
                {row.trail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
