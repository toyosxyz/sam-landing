"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { SamLogo } from "../SamLogo";
import { TrialLink } from "../TrialLink";
import { menus, mobileResources, topLinks } from "./menu-data";

const product = menus.find((m) => m.key === "product")!;
const compare = menus.find((m) => m.key === "compare")!;

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 rounded-[10px] bg-[#161916] py-2 pr-4 pl-2.5">
      <SamLogo />
      <span className="font-body text-[15px] font-semibold leading-[18px] tracking-[-0.01em] text-foreground">
        sam
      </span>
    </Link>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="m-burger" data-open={open}>
      <path d="M3 6h12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12h12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const label =
  "font-body text-[11px] font-medium uppercase leading-[14px] tracking-[0.08em] text-[#5E635B]";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const show = () => {
    const rect = toggleRef.current?.getBoundingClientRect();
    if (rect) setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setOpen(true);
  };

  const hide = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus({ preventScroll: true });
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && hide();
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => desktop.matches && hide(false);
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, hide]);

  const navigate = () => hide(false);
  let i = 0;
  const stagger = () => ({ "--i": i++ }) as CSSProperties;

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-5 py-3.5">
        <Logo />
        <div className="flex items-center gap-1 rounded-[10px] bg-[#161916] p-1">
          <TrialLink
            href={topLinks.install.href}
            className="flex items-center gap-2 rounded-[7px] bg-foreground px-3.5 py-[7px] font-body text-[14px] font-medium leading-[18px] text-night-bg"
          >
            {topLinks.install.label}
          </TrialLink>
          <button
            ref={toggleRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={show}
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-[8px] text-foreground"
          >
            <BurgerIcon open={false} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        data-open={open}
        className="m-sheet fixed inset-0 z-50 flex flex-col overflow-clip bg-night-bg"
        style={{ "--ox": `${origin.x}px`, "--oy": `${origin.y}px` } as CSSProperties}
      >
        <div
          aria-hidden
          className="m-backdrop pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-cover"
          style={{ backgroundImage: "url(/images/menu-backdrop.png)", backgroundPosition: "50% 40%" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #111311 0%, #111311 50%, rgb(17 19 17 / 0.82) 72%, rgb(17 19 17 / 0.55) 100%)",
          }}
        />

        <div className="relative flex items-center justify-between px-5 py-3.5">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => hide()}
            className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-[10px] bg-[#161916] text-foreground"
          >
            <BurgerIcon open={open} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
          <div className="flex flex-col gap-7 px-5 pt-4">
            <div className="flex flex-col gap-0.5">
              <p className={`m-stagger pb-2.5 ${label}`} style={stagger()}>
                {product.heading}
              </p>
              {product.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={navigate}
                  className="m-stagger group flex items-center gap-3.5 py-[9px]"
                  style={stagger()}
                >
                  <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] border border-[#EDEEE914] bg-[#EDEEE90D] text-[#C9CCC4] transition-colors duration-200 group-active:border-[#A3E63533] group-active:bg-[#A3E6351A] group-active:text-accent">
                    {item.icon}
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <span className="font-body text-[15px] font-medium leading-5 text-foreground">
                      {item.title}
                    </span>
                    <span className="font-body text-[13px] leading-[18px] text-mist">
                      {item.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="m-stagger flex border-t border-[#EDEEE912] pt-6" style={stagger()}>
              <div className="flex w-1/2 flex-col gap-3.5">
                <p className={label}>Resources</p>
                {mobileResources.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={navigate}
                    className="flex items-center gap-2 font-body text-[15px] leading-5 text-foreground"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="rounded-[5px] bg-[#A3E6351A] px-1.5 py-0.5 text-[11px] font-medium leading-[14px] text-accent">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
              <div className="flex w-1/2 flex-col gap-3.5">
                <p className={label}>{compare.heading}</p>
                {compare.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={navigate}
                    className="font-body text-[15px] leading-5 text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 px-5 pt-8 pb-7">
            <div className="m-stagger flex gap-2" style={stagger()}>
              <Link
                href={topLinks.pricing.href}
                onClick={navigate}
                className="flex flex-1 flex-col gap-0.5 rounded-[12px] border border-[#EDEEE914] bg-[#161916E6] p-3.5"
              >
                <span className="font-body text-[15px] font-medium leading-5 text-foreground">Pricing</span>
                <span className="font-body text-[13px] leading-[18px] text-mist">From €29 a month</span>
              </Link>
            </div>
            <div className="m-stagger flex gap-2" style={stagger()}>
              <Link
                href={topLinks.signIn.href}
                onClick={navigate}
                className="flex shrink-0 items-center justify-center rounded-[10px] border border-[#EDEEE914] bg-[#161916E6] px-[18px] py-[13px] font-body text-[15px] leading-5 text-foreground"
              >
                Sign in
              </Link>
              <TrialLink
                href={topLinks.install.href}
                onClick={navigate}
                className="flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-foreground px-[18px] py-[13px] font-body text-[15px] font-medium leading-5 text-night-bg"
              >
                {topLinks.install.label}
              </TrialLink>
            </div>
            <p className="m-stagger text-center font-body text-[13px] leading-[18px] text-mist" style={stagger()}>
              7-day trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
