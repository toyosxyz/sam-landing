import type { ReactNode } from "react";
import { CountUp, Reveal } from "@/components/site/motion";
import { bar, heroDelay, row } from "@/components/site/motion-vars";

const panel =
  "relative flex w-full flex-col rounded-md border border-[#2E2E2E] shadow-[0_24px_60px_#00000080]";
const muted = "font-body text-[#A0A0A0]";
const strong = "font-body text-[#EDEDED]";

/** Large framed stage under a product hero. */
export function HeroStage({
  image,
  imageClass = "size-full",
  className = "py-6 lg:py-14",
  children,
}: {
  image: string;
  imageClass?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      data-reveal="load-one"
      style={heroDelay}
      className={`relative flex w-full justify-center overflow-clip rounded-lg border border-night-line bg-[#141614] px-3 shadow-[inset_0_1px_0_#EDEEE90F,0_50px_140px_#00000080] lg:px-0 ${className}`}
    >
      <div
        className={`absolute top-0 left-0 bg-cover bg-center ${imageClass}`}
        style={{ backgroundImage: `url(${image})` }}
      />
      {children}
    </div>
  );
}

/** Framed card next to the split copy. */
export function SplitStage({ image, children }: { image: string; children: ReactNode }) {
  return (
    <Reveal
      delay={100}
      className="relative flex grow justify-center overflow-clip rounded-2xl border border-night-line bg-[#141614] px-3 py-6 shadow-[inset_0_1px_0_#EDEEE90F] lg:px-9 lg:py-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {children}
    </Reveal>
  );
}

/* ─── Funnel ─── */

const funnelSteps = [
  { label: "Visit", pct: "100.0%", sessions: "37,150 sessions", drop: "—" },
  { label: "Product viewed", pct: "42.4%", sessions: "15,757 sessions", drop: "↘ 58%" },
  { label: "Added to cart", pct: "13.3%", sessions: "4,923 sessions", drop: "↘ 69%", alert: true },
  { label: "Checkout started", pct: "5.1%", sessions: "1,911 sessions", drop: "↘ 61%" },
  { label: "Purchase", pct: "2.9%", sessions: "1,063 sessions", drop: "↘ 44%" },
];

export function FunnelHeroVisual() {
  return (
    <HeroStage image="/images/hills-funnel.png">
      <div className={`${panel} max-w-[900px] gap-5 bg-[#1F1F1F] p-4 lg:p-5`}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <span className={`${muted} text-[10px] font-semibold leading-3 tracking-[0.06em]`}>
              CONVERSION BREAKDOWN
            </span>
            <CountUp
              value="2.9%"
              delay={300}
              className={`${strong} text-[26px] font-semibold leading-8 tracking-[-0.02em]`}
            />
            <span className={`${muted} text-[11px] leading-[14px]`}>
              of visitors reach a confirmed order
            </span>
          </div>
          <div className="hidden gap-1 sm:flex">
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
        <div className="hidden sm:flex">
          {funnelSteps.map((s, i) => (
            <div
              key={s.label}
              className={`flex grow basis-0 flex-col gap-[5px] ${i > 0 ? "pl-2.5" : ""} ${
                i < funnelSteps.length - 1 ? "border-r border-[#2E2E2E]" : ""
              }`}
            >
              <span className={`${muted} text-[11px] leading-[14px]`}>{s.label}</span>
              <CountUp
                value={s.pct}
                delay={300 + i * 80}
                className={`${strong} text-[17px] font-semibold leading-[22px]`}
              />
              <span className={`${muted} text-[10px] leading-3`}>{s.sessions}</span>
              <span
                className={`font-body text-[10px] leading-3 ${s.alert ? "text-[#E5484D]" : "text-[#A0A0A0]"}`}
              >
                {s.drop}
              </span>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 616 150" className="m-bar h-auto w-full" aria-hidden>
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
    </HeroStage>
  );
}

const devices = [
  { name: "Desktop", width: "92%", rate: "4.6%", sessions: "11,204 sessions" },
  { name: "Tablet", width: "54%", rate: "2.7%", sessions: "1,388 sessions", dim: true },
  { name: "Mobile", width: "42%", rate: "2.1%", sessions: "24,558 sessions", alert: true },
];

export function FunnelSplitVisual() {
  return (
    <SplitStage image="/images/hills-channels.png">
      <div className={`${panel} max-w-[560px] gap-3.5 bg-[#1F1F1F] p-4 lg:p-5`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className={`${muted} text-[11px] font-medium leading-[14px] tracking-[0.06em]`}>
              CONVERSION BY DEVICE
            </span>
            <span className={`${muted} text-label leading-4`}>Visit → purchase, last 7 days</span>
          </div>
          <div className="hidden gap-1 sm:flex">
            {["Device", "Channel", "Country"].map((t, i) => (
              <span
                key={t}
                className={`rounded-sm px-2.5 py-1.5 font-body text-[12px] leading-[14px] ${
                  i === 0
                    ? "border border-[#3A3A3A] bg-[#2A2A2A] text-[#F2F2F2]"
                    : "border border-[#2E2E2E] text-[#A0A0A0]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col overflow-clip rounded-[10px] border border-[#2E2E2E]">
          {devices.map((d, i) => (
            <div
              key={d.name}
              className={`flex items-center gap-3 px-4 py-3.5 lg:gap-4 ${
                i < devices.length - 1 ? "border-b border-[#2E2E2E]" : ""
              } ${d.alert ? "bg-[#E5484D0F]" : ""}`}
            >
              <span className="w-16 shrink-0 font-body text-label leading-4 text-[#F2F2F2] lg:w-gutter">
                {d.name}
              </span>
              <div className="flex h-2 grow rounded bg-[#2A2A2A]">
                <div
                  className={`m-bar h-2 rounded ${d.alert ? "bg-[#E5484D]" : "bg-[#A3E635]"} ${d.dim ? "opacity-70" : ""}`}
                  style={{ ...bar(i), width: d.width }}
                />
              </div>
              <CountUp
                value={d.rate}
                delay={350 + i * 80}
                className="w-11 shrink-0 text-right font-body text-label font-semibold leading-4 text-[#F2F2F2]"
              />
              <span className={`${muted} hidden w-24 shrink-0 text-right text-[12px] leading-4 sm:inline`}>
                {d.sessions}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-2 rounded-[8px] bg-[#262626] px-3 py-2.5">
          <span className="mt-[5px] size-1.5 shrink-0 rounded-[3px] bg-[#E5484D]" />
          <span className="font-body text-[12px] leading-4 text-[#C9C9C9]">
            Mobile converts at less than half the desktop rate. Biggest drop: cart → checkout.
          </span>
        </div>
      </div>
    </SplitStage>
  );
}

/* ─── Sessions ─── */

const sessionEvents = [
  { event: "checkout_completed", category: "Purchase", page: "/checkouts/thank-you", time: "14:58:02", highlight: true },
  { event: "checkout_started", category: "Checkout", page: "/checkouts/cn/information", time: "14:56:40" },
  { event: "add_to_cart", category: "Action", page: "/products/linen-shirt-sage", time: "14:55:11" },
  { event: "view_product", category: "View", page: "/products/linen-shirt-sage", time: "14:55:09" },
  { event: "view_collection", category: "View", page: "/collections/summer", time: "14:54:20" },
  { event: "page_viewed", category: "View", page: "/", time: "14:53:55" },
];

export function SessionsHeroVisual() {
  return (
    <HeroStage image="/images/hills-sessions.png">
      <div className={`${panel} max-w-[760px] gap-3.5 bg-[#1B1B1B] p-4 lg:p-5`}>
        <div className="flex flex-col gap-1">
          <span className={`${muted} text-[11px] leading-[14px]`}>← Back to sessions</span>
          <span className={`${strong} text-lead font-semibold leading-[22px] tracking-[-0.01em]`}>
            Session events
          </span>
        </div>
        <div className="flex flex-col gap-3 rounded-[10px] border border-[#2E2E2E] bg-[#222] p-4">
          <span className={`${strong} text-[12px] font-semibold leading-4`}>sess_7f3a9c2e41d84b0e</span>
          <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-6">
            {[
              ["First seen: 13/10, 14:53:55", "Landing path: /", "OS: iOS"],
              ["Device: mobile", "Browser: Safari", "Channel: instagram · social"],
            ].map((col) => (
              <div key={col[0]} className="flex grow basis-0 flex-col gap-1.5">
                {col.map((t) => (
                  <span key={t} className={`${muted} text-[11px] leading-[14px]`}>
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-[10px] border border-[#2E2E2E] bg-[#222] px-4 pt-1 pb-2">
          <div className="flex border-b border-[#2E2E2E] py-2.5">
            <span className={`${muted} grow text-[11px] leading-[14px] sm:w-[140px] sm:shrink-0 sm:grow-0`}>Event</span>
            <span className={`${muted} hidden w-gutter shrink-0 text-[11px] leading-[14px] sm:inline`}>Category</span>
            <span className={`${muted} hidden grow text-[11px] leading-[14px] sm:inline`}>Page</span>
            <span className={`${muted} w-[60px] shrink-0 text-right text-[11px] leading-[14px]`}>Time</span>
          </div>
          {sessionEvents.map((e, i) => (
            <div
              key={e.event}
              style={row(i)}
              className={`m-row flex py-[9px] ${i < sessionEvents.length - 1 ? "border-b border-[#2A2A2A]" : ""}`}
            >
              <span
                className={`grow font-body text-[11px] font-semibold leading-[14px] sm:w-[140px] sm:shrink-0 sm:grow-0 ${
                  e.highlight ? "text-accent" : "text-[#EDEDED]"
                }`}
              >
                {e.event}
              </span>
              <span className={`${strong} hidden w-gutter shrink-0 text-[11px] leading-[14px] sm:inline`}>
                {e.category}
              </span>
              <span className={`${strong} hidden grow text-[11px] leading-[14px] sm:inline`}>{e.page}</span>
              <span className={`${strong} w-[60px] shrink-0 text-right text-[11px] leading-[14px]`}>{e.time}</span>
            </div>
          ))}
        </div>
      </div>
    </HeroStage>
  );
}

const keyInputs = [
  ["IP address", "83.44.•••.•••"],
  ["User agent", "Mobile Safari 18"],
  ["Store", "lune-and-co.myshopify.com"],
  ["Daily salt", "rotates at 00:00"],
];

export function SessionsSplitVisual({ image = "/images/privacy-hedgerow.png" }: { image?: string }) {
  return (
    <SplitStage image={image}>
      <div className={`${panel} max-w-[560px] gap-3.5 bg-[#1F1F1F] p-4 lg:p-5`}>
        <div className="flex items-center justify-between gap-3">
          <span className={`${muted} text-[11px] font-medium leading-[14px] tracking-[0.06em]`}>
            HOW A SESSION KEY IS MADE
          </span>
          <span className="shrink-0 font-body text-[12px] leading-[14px] text-accent">Today&apos;s salt</span>
        </div>
        <div className="flex flex-col overflow-clip rounded-[10px] border border-[#2E2E2E]">
          {keyInputs.map(([label, value], i) => (
            <div
              key={label}
              style={row(i)}
              className={`m-row flex justify-between gap-3 px-4 py-3 ${i < keyInputs.length - 1 ? "border-b border-[#2E2E2E]" : ""}`}
            >
              <span className={`${muted} text-label leading-4`}>{label}</span>
              <span className="truncate font-mono text-[12px] leading-4 text-[#F2F2F2]">{value}</span>
            </div>
          ))}
        </div>
        <span className={`${muted} m-fade self-center text-[14px] leading-4`}>↓ hash</span>
        <div className="m-fade flex items-center justify-between gap-3 rounded-[10px] border border-[#A3E63540] bg-[#A3E63514] px-4 py-3.5">
          <span className="font-body text-label leading-4 text-[#F2F2F2]">Session key</span>
          <span className="truncate font-mono text-[12px] leading-4 text-accent">sess_7f3a9c2e41d84b0e</span>
        </div>
        <p className={`${muted} text-[12px] leading-[18px]`}>
          Raw IP and user agent are never stored. Tomorrow the salt changes and the same shopper gets a new key.
        </p>
      </div>
    </SplitStage>
  );
}

/* ─── Campaigns ─── */

const campaigns = [
  { name: "ES_Search_Brand_Exact", views: "379", cart: "141", checkout: "49", completed: "39", up: true },
  { name: "META_Prospecting_AW26", views: "2,214", cart: "188", checkout: "52", completed: "17", up: false },
  { name: "KLAVIYO_Newsletter_Oct", views: "806", cart: "203", checkout: "91", completed: "64", up: true },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex grow basis-0 flex-col gap-1.5">
      <span className={`${muted} text-[11px] leading-[14px]`}>{label}</span>
      <div className="flex rounded-[8px] border border-[#2E2E2E] bg-[#222] px-3 py-[9px]">
        <span className="truncate font-body text-label leading-4 text-[#F2F2F2]">{value}</span>
      </div>
    </div>
  );
}

export function CampaignsTable({ className = "" }: { className?: string }) {
  return (
    <div className={`${panel} gap-3.5 bg-[#1B1B1B] p-4 lg:p-[18px] ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`${strong} text-lead font-semibold leading-[22px] tracking-[-0.01em]`}>Campaigns</span>
          <span className="rounded-[9px] bg-[#2E2E2E] px-[7px] py-px font-body text-[10px] font-semibold leading-3 text-[#EDEDED]">
            3
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="hidden rounded-sm border border-[#2E2E2E] px-[9px] py-[5px] font-body text-[11px] leading-[14px] text-[#EDEDED] sm:inline">
            Last 7 days
          </span>
          <span className="rounded-sm bg-accent px-[9px] py-[5px] font-body text-[11px] font-semibold leading-[14px] text-night-bg">
            New campaign
          </span>
        </div>
      </div>
      <div className="flex flex-col rounded-[10px] border border-[#2E2E2E] bg-[#222] px-3.5 pt-1 pb-1.5">
        <span className={`${strong} pt-2.5 pb-1.5 text-[12px] font-semibold leading-4`}>UTM campaigns</span>
        <div className="flex border-b border-[#2E2E2E] py-2">
          <span className={`${muted} grow text-[10px] leading-3`}>Campaign</span>
          {["Views", "Cart", "Checkout", "Completed"].map((h, i) => (
            <span
              key={h}
              className={`${muted} shrink-0 text-right text-[10px] leading-3 ${i === 3 ? "w-[70px]" : "w-[62px]"} ${
                i === 1 || i === 2 ? "hidden sm:inline" : ""
              }`}
            >
              {h}
            </span>
          ))}
        </div>
        {campaigns.map((c, i) => (
          <div
            key={c.name}
            style={row(i)}
            className={`m-row flex py-[9px] ${i < campaigns.length - 1 ? "border-b border-[#2A2A2A]" : ""}`}
          >
            <span className={`${strong} min-w-0 grow truncate text-[11px] font-semibold leading-[14px]`}>{c.name}</span>
            <span className={`${strong} w-[62px] shrink-0 text-right text-[11px] leading-[14px]`}>{c.views}</span>
            <span className={`${strong} hidden w-[62px] shrink-0 text-right text-[11px] leading-[14px] sm:inline`}>{c.cart}</span>
            <span className={`${strong} hidden w-[62px] shrink-0 text-right text-[11px] leading-[14px] sm:inline`}>{c.checkout}</span>
            <span
              className={`w-[70px] shrink-0 text-right font-body text-[11px] leading-[14px] ${c.up ? "text-accent" : "text-[#E5484D]"}`}
            >
              {c.completed}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CampaignsHeroVisual() {
  return (
    <HeroStage image="/images/hero-shire.png" className="items-center py-6 lg:py-[72px]">
      <div className="relative flex w-full flex-col items-center gap-4 lg:w-auto lg:flex-row lg:gap-7">
        <div className={`${panel} gap-4 bg-[#1B1B1B] p-4 lg:w-[440px] lg:shrink-0 lg:p-5`}>
          <div className="flex flex-col gap-1">
            <span className="font-body text-[17px] font-semibold leading-[22px] text-[#F2F2F2]">New campaign</span>
            <span className={`${muted} text-[12px] leading-4`}>Fill in the fields and copy the tracked link.</span>
          </div>
          <Field label="Destination URL" value="lune-and-co.myshopify.com/collections/autumn" />
          <div className="flex gap-2.5">
            <Field label="Source" value="instagram" />
            <Field label="Medium" value="social" />
          </div>
          <Field label="Campaign" value="autumn_drop_26" />
          <div className="flex flex-col gap-2 rounded-[8px] border border-dashed border-[#3A3A3A] bg-[#171717] p-3">
            <span className={`${muted} text-[11px] leading-[14px]`}>Tracked link</span>
            <span className="font-mono text-[11px] leading-[17px] break-all text-[#C9CCC4]">
              lune-and-co.myshopify.com/collections/autumn?utm_source=instagram&amp;utm_medium=social&amp;utm_campaign=autumn_drop_26
            </span>
          </div>
          <div className="flex justify-end gap-2">
            <span className="rounded-[7px] border border-[#2E2E2E] px-3 py-[7px] font-body text-[12px] leading-4 text-[#F2F2F2]">
              Copy link
            </span>
            <span className="rounded-[7px] bg-accent px-3 py-[7px] font-body text-[12px] font-semibold leading-4 text-night-bg">
              Save campaign
            </span>
          </div>
        </div>
        <CampaignsTable className="lg:w-[540px] lg:shrink-0" />
      </div>
    </HeroStage>
  );
}

export function CampaignsSplitVisual() {
  return (
    <SplitStage image="/images/plan-valley.png">
      <div className={`${panel} max-w-[560px] gap-4 bg-[#1F1F1F] p-4 lg:p-5`}>
        <div className="flex items-center justify-between">
          <span className="font-body text-body font-semibold leading-5 text-[#F2F2F2]">New campaign</span>
          <span className={`${muted} text-body leading-5`}>×</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className={`${muted} text-[12px] leading-[14px]`}>Campaign name</span>
          <div className="rounded-[8px] border border-[#3A3A3A] bg-[#181818] px-3 py-2.5">
            <span className="font-body text-label leading-4 text-[#F2F2F2]">autumn_drop_26</span>
          </div>
        </div>
        <div className="flex gap-3">
          {[
            ["Source", "instagram"],
            ["Medium", "social"],
          ].map(([label, value]) => (
            <div key={label} className="flex grow basis-0 flex-col gap-1.5">
              <span className={`${muted} text-[12px] leading-[14px]`}>{label}</span>
              <div className="flex justify-between rounded-[8px] border border-[#2E2E2E] bg-[#181818] px-3 py-2.5">
                <span className="font-body text-label leading-4 text-[#F2F2F2]">{value}</span>
                <span className={`${muted} text-[12px] leading-4`}>⌄</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <span className={`${muted} text-[12px] leading-[14px]`}>Tracking link</span>
          <div className="flex items-center justify-between gap-3 rounded-[8px] border border-[#A3E63540] bg-[#A3E6350F] px-3 py-2.5">
            <span className="min-w-0 font-mono text-[11px] leading-4 break-all text-[#C9E89A]">
              lune-and-co.com/?utm_source=instagram&amp;utm_medium=social&amp;utm_campaign=autumn_drop_26
            </span>
            <span className="shrink-0 rounded-sm bg-accent px-2 py-1 font-body text-[11px] font-semibold leading-[14px] text-night-bg">
              Copy
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <span className="rounded-[8px] border border-[#2E2E2E] px-3 py-2 font-body text-[12px] leading-[14px] text-[#F2F2F2]">
            Cancel
          </span>
          <span className="rounded-[8px] bg-[#F2F2F2] px-3 py-2 font-body text-[12px] font-semibold leading-[14px] text-night-bg">
            Save campaign
          </span>
        </div>
      </div>
    </SplitStage>
  );
}

/* ─── Orders ─── */

const orders = [
  { time: "13/10 14:58", products: "Linen shirt · Sage", channel: "social", campaign: "autumn_drop_26", revenue: "€79.00", linked: true },
  { time: "13/10 14:31", products: "Wool cardigan, Tote bag", channel: "cpc", campaign: "ES_Search_Brand_Exact", revenue: "€148.50", linked: true },
  { time: "13/10 13:47", products: "Silk scarf", channel: "email", campaign: "KLAVIYO_Newsletter_Oct", revenue: "€45.00", linked: true },
  { time: "13/10 12:05", products: "Linen trousers · Sand", channel: "", campaign: "", revenue: "€95.00", linked: false },
  { time: "13/10 11:22", products: "Canvas sneakers", channel: "organic", campaign: "", revenue: "€110.00", linked: true },
];

export function OrdersHeroVisual() {
  const cell = "font-body text-[12px] leading-4";
  const head = `${muted} text-[11px] leading-[14px]`;
  return (
    <HeroStage image="/images/hills-channels.png">
      <div className={`${panel} max-w-[860px] gap-3.5 bg-[#1B1B1B] p-4 lg:p-5`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-body text-lead font-semibold leading-[22px] text-[#F2F2F2]">Orders</span>
            <span className={`${muted} rounded-[9px] bg-[#2A2A2A] px-[7px] py-0.5 text-[11px] leading-[14px]`}>935</span>
          </div>
          <span className="rounded-sm border border-[#2E2E2E] px-2.5 py-1.5 font-body text-[12px] leading-[14px] text-[#F2F2F2]">
            Last 7 days
          </span>
        </div>
        <div className="flex flex-col overflow-clip rounded-[10px] border border-[#2E2E2E] bg-[#1F1F1F]">
          <div className="flex gap-3 border-b border-[#2E2E2E] px-4 py-2.5 lg:gap-0">
            <span className={`${head} hidden w-[110px] shrink-0 sm:inline`}>Time</span>
            <span className={`${head} grow`}>Products</span>
            <span className={`${head} hidden w-[110px] shrink-0 md:inline`}>Channel</span>
            <span className={`${head} hidden w-[170px] shrink-0 md:inline`}>Campaign</span>
            <span className={`${head} w-gutter shrink-0 text-right`}>Revenue</span>
            <span className={`${head} w-[76px] shrink-0 text-right lg:w-[110px]`}>Session</span>
          </div>
          {orders.map((o, i) => (
            <div
              key={o.time}
              style={row(i)}
              className={`m-row flex items-center gap-3 px-4 py-[11px] lg:gap-0 ${i < orders.length - 1 ? "border-b border-[#2A2A2A]" : ""}`}
            >
              <span className={`${cell} hidden w-[110px] shrink-0 text-[#A0A0A0] sm:inline`}>{o.time}</span>
              <span className={`${cell} min-w-0 grow truncate text-[#F2F2F2]`}>{o.products}</span>
              <span className={`${cell} hidden w-[110px] shrink-0 md:inline ${o.channel ? "text-[#F2F2F2]" : "text-[#A0A0A0]"}`}>
                {o.channel || "—"}
              </span>
              <span className={`${cell} hidden w-[170px] shrink-0 md:inline ${o.campaign ? "text-[#F2F2F2]" : "text-[#A0A0A0]"}`}>
                {o.campaign || "—"}
              </span>
              <span className={`${cell} w-gutter shrink-0 text-right text-[#F2F2F2]`}>{o.revenue}</span>
              <span
                className={`${cell} w-[76px] shrink-0 text-right lg:w-[110px] ${o.linked ? "text-accent" : "text-[#A0A0A0]"}`}
              >
                {o.linked ? "Linked" : "Not linked"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </HeroStage>
  );
}

export function OrdersSplitVisual() {
  return (
    <SplitStage image="/images/plan-meadow.png">
      <div className={`${panel} max-w-[560px] gap-4 bg-[#1F1F1F] p-4 lg:p-5`}>
        <div className="flex flex-col gap-1">
          <span className={`${muted} text-[11px] font-medium leading-[14px] tracking-[0.06em]`}>ORDERS THIS WEEK</span>
          <div className="flex items-baseline gap-2.5">
            <CountUp
              value="935"
              delay={200}
              className="font-body text-[32px] font-bold leading-[38px] text-[#F2F2F2]"
            />
            <span className={`${muted} text-label leading-4`}>all counted from Shopify</span>
          </div>
        </div>
        <div className="flex h-2.5 shrink-0 overflow-clip rounded-[5px] bg-[#2A2A2A]">
          <div className="m-bar h-2.5 w-[87%] bg-accent" />
        </div>
        <div className="flex flex-col overflow-clip rounded-[10px] border border-[#2E2E2E]">
          {[
            { label: "Linked to a session and channel", value: "812 · 87%", swatch: "bg-accent" },
            { label: "Counted, not linked", value: "123 · 13%", swatch: "bg-[#4A4A4A]" },
          ].map((item, i) => (
            <div
              key={item.label}
              style={row(i)}
              className={`m-row flex items-center justify-between gap-3 px-4 py-3 ${i === 0 ? "border-b border-[#2E2E2E]" : ""}`}
            >
              <div className="flex items-center gap-2">
                <span className={`size-2 shrink-0 rounded-[2px] ${item.swatch}`} />
                <span className="font-body text-label leading-4 text-[#F2F2F2]">{item.label}</span>
              </div>
              <span className="shrink-0 font-body text-label font-semibold leading-4 text-[#F2F2F2]">{item.value}</span>
            </div>
          ))}
        </div>
        <p className={`${muted} text-[12px] leading-[18px]`}>
          Orders are linked when Sam saw the same checkout earlier in the session. Revenue totals always include every order.
        </p>
      </div>
    </SplitStage>
  );
}
