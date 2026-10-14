const metrics = [
  { label: "CONVERSION", value: "3.1%", delta: "↗ 8.4%", up: true },
  { label: "REVENUE", value: "€58,240", delta: "↗ 12.6%", up: true },
  { label: "AOV", value: "€62.30", delta: "↘ 1.9%", up: false },
  { label: "SESSIONS", value: "30,184", delta: "↗ 4.2%", up: true },
] as const;

const funnelTabs = [
  { label: "UNIQUE SESSIONS", value: "30,184", delta: "↗ 4%", up: true, active: true },
  { label: "ADD TO CART", value: "4,110", delta: "↗ 6%", up: true, active: false },
  { label: "REACHED CHECKOUT", value: "1,642", delta: "↘ 9%", up: false, active: false },
  { label: "ORDERS", value: "935", delta: "↗ 11%", up: true, active: false },
] as const;

const secondary = [
  { label: "PAGE VIEWS", value: "128,402", delta: "↗ 5.1%", up: true },
  { label: "PAGES PER SESSION", value: "4.25", delta: "↗ 0.8%", up: true },
  { label: "BOUNCE RATE", value: "48.6%", delta: "↘ 3.2%", up: true },
  { label: "AVG. DURATION", value: "2m 41s", delta: "↗ 6.7%", up: true },
] as const;

const navItems = ["Overview", "Campaigns", "Sessions", "Orders"] as const;

/** Mobile shows the first two cells of each row; desktop shows all four. */
function cellVisibility(i: number) {
  return i < 2 ? "flex" : "hidden lg:flex";
}

function cellDivider(i: number, count: number) {
  if (i === 0) return "border-r border-[#2E2E2E]";
  if (i < count - 1) return "lg:border-r lg:border-[#2E2E2E]";
  return "";
}

export function DashboardPreview() {
  return (
    <div className="relative flex w-full max-w-[1232px] shrink-0 flex-col overflow-clip rounded-[14px] border border-[#2E332D] bg-[#161916] shadow-[0_0_0_4px_#161916D9,0_30px_80px_#00000099] lg:shadow-[0_0_0_6px_#161916D9,0_50px_140px_#00000099]">
      <div className="flex items-center justify-between border-b border-night-line bg-[#121412] px-3.5 py-3 lg:px-[18px]">
        <div className="flex gap-1.5">
          <span className="size-2.5 shrink-0 rounded-[5px] bg-[#3A3F38]" />
          <span className="size-2.5 shrink-0 rounded-[5px] bg-[#3A3F38]" />
          <span className="size-2.5 shrink-0 rounded-[5px] bg-[#3A3F38]" />
        </div>
        <span className="hidden font-body text-[12px] leading-4 text-mist lg:inline">
          app.samtrack.co
        </span>
        <div className="flex items-center gap-1.5">
          <span className="size-[7px] shrink-0 rounded bg-accent" />
          <span className="font-body text-[12px] leading-4 text-mist">Live</span>
        </div>
      </div>

      <div className="flex overflow-clip">
        <aside className="hidden w-[200px] shrink-0 flex-col justify-between border-r border-[#2A2A2A] bg-[#141414] px-2.5 py-3.5 lg:flex">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between px-1">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-accent">
                <span className="size-2 rounded bg-[#141414]" />
              </div>
              <span className="h-3 w-3.5 shrink-0 rounded-[3px] border-[1.5px] border-[#6A6A6A]" />
            </div>
            <div className="flex items-center justify-between rounded-[8px] border border-[#2E2E2E] px-2.5 py-2">
              <span className="font-body text-[12px] leading-4 text-[#BDBDBD]">Search</span>
              <span className="font-mono text-[10px] leading-3 text-[#7A7A7A]">⌘ K</span>
            </div>
            <div className="px-1.5 pt-1">
              <span className="font-body text-[10px] font-medium leading-3 tracking-[0.06em] text-[#7A7A7A]">
                ANALYTICS
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              {navItems.map((item, i) => (
                <div
                  key={item}
                  className={`rounded-sm px-2.5 py-[7px] ${i === 0 ? "bg-[#262626]" : ""}`}
                >
                  <span
                    className={`font-body text-[12px] leading-4 ${
                      i === 0 ? "font-medium text-[#F2F2F2]" : "text-[#9A9A9A]"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-[8px] border border-[#2E2E2E] px-2.5 py-2">
            <span className="rounded bg-[#2A2A2A] px-1 py-0.5 font-body text-[9px] font-semibold leading-3 text-[#F2F2F2]">
              LU
            </span>
            <span className="font-body text-[12px] leading-4 text-[#F2F2F2]">Lune & Co</span>
          </div>
        </aside>

        <div className="flex min-w-0 grow flex-col gap-3 p-4 lg:gap-4 lg:px-7 lg:pt-[22px] lg:pb-7">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-body text-[10px] font-semibold leading-3 tracking-[0.06em] text-[#BDBDBD]">
                OVERVIEW
              </span>
              <span className="font-display text-[17px] font-bold leading-[22px] tracking-[-0.01em] text-[#F2F2F2]">
                lune-and-co.myshopify.com
              </span>
            </div>
            <div className="hidden rounded-sm border border-[#333] px-3 py-[7px] lg:block">
              <span className="font-body text-[12px] font-medium leading-4 text-[#F2F2F2]">
                Last 7 days
              </span>
            </div>
          </div>

          <div className="flex overflow-clip rounded-[10px] border border-[#2E2E2E] bg-[#1F1F1F]">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`${cellVisibility(i)} grow basis-0 flex-col gap-2 px-3 py-3.5 lg:px-4 ${cellDivider(i, metrics.length)}`}
              >
                <span className="font-body text-[10px] font-semibold leading-3 tracking-[0.06em] text-[#BDBDBD]">
                  {m.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="w-max font-display text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-[#F2F2F2] lg:text-[30px] lg:leading-9">
                    {m.value}
                  </span>
                  <span
                    className={`w-max font-body text-[11px] leading-[14px] ${
                      m.up ? "text-accent" : "text-[#E5484D]"
                    }`}
                  >
                    {m.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col overflow-clip rounded-[10px] border border-[#2E2E2E] bg-[#1F1F1F]">
            <div className="flex border-b border-[#2E2E2E]">
              {funnelTabs.map((t, i) => (
                <div
                  key={t.label}
                  className={`${cellVisibility(i)} grow basis-0 flex-col gap-2 border-t-2 p-3 lg:px-4 ${
                    t.active
                      ? "border-t-accent bg-[#262626]"
                      : "border-t-transparent"
                  }`}
                >
                  <span className="font-body text-[10px] font-semibold leading-3 tracking-[0.06em] text-[#BDBDBD]">
                    {t.label}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[22px] font-bold leading-7 text-[#F2F2F2]">
                      {t.value}
                    </span>
                    <span
                      className={`font-body text-[11px] leading-[14px] ${
                        t.up ? "text-accent" : "text-[#E5484D]"
                      }`}
                    >
                      {t.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-2 pt-3 pb-2 lg:px-4 lg:pt-4">
              <ChartSvg />
            </div>
          </div>

          <div className="hidden shrink-0 overflow-clip rounded-[10px] border border-[#2E2E2E] bg-[#1F1F1F] lg:flex">
            {secondary.map((m, i) => (
              <div
                key={m.label}
                className={`flex grow basis-0 flex-col gap-2 px-4 py-3.5 ${
                  i < secondary.length - 1 ? "border-r border-[#2E2E2E]" : ""
                }`}
              >
                <span className="font-body text-[10px] font-semibold leading-3 tracking-[0.06em] text-[#BDBDBD]">
                  {m.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[22px] font-bold leading-7 text-[#F2F2F2]">
                    {m.value}
                  </span>
                  <span className="font-body text-[11px] leading-[14px] text-accent">
                    {m.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartSvg() {
  return (
    <svg
      viewBox="0 0 1010 262"
      className="h-[78px] w-full max-w-[944px] shrink-0 lg:h-[245px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A3E635" stopOpacity="0.22" />
          <stop offset="1" stopColor="#A3E635" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M60 20H1000M60 72.5H1000M60 125H1000M60 177.5H1000M60 230H1000"
        fill="none"
        stroke="#2E2E2E"
      />
      {["8000", "6000", "4000", "2000", "0"].map((label, i) => (
        <text
          key={label}
          x="44"
          y={24 + i * 52.5}
          fontFamily="var(--font-inter)"
          fontSize="11"
          textAnchor="end"
          fill="#7A7A7A"
        >
          {label}
        </text>
      ))}
      <path
        d="M60 44C138 32 170 22 216 25C270 28 320 58 372 72C430 90 470 125 528 128C590 131 630 122 684 118C740 112 790 102 840 104C900 106 950 120 996 138L996 230L60 230Z"
        fill="url(#chartFill)"
      />
      <path
        d="M60 44C138 32 170 22 216 25C270 28 320 58 372 72C430 90 470 125 528 128C590 131 630 122 684 118C740 112 790 102 840 104C900 106 950 120 996 138"
        fill="none"
        stroke="#A3E635"
        strokeWidth="2"
      />
      {[
        [60, "7 oct"],
        [216, "8 oct"],
        [372, "9 oct"],
        [528, "10 oct"],
        [684, "11 oct"],
        [840, "12 oct"],
        [990, "13 oct"],
      ].map(([x, label]) => (
        <text
          key={String(label)}
          x={x}
          y="254"
          fontFamily="var(--font-inter)"
          fontSize="11"
          textAnchor="middle"
          fill="#7A7A7A"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}
