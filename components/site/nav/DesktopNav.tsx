"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { SamLogo } from "../SamLogo";
import { menus, topLinks, type Menu, type MenuKey } from "./menu-data";

type Size = { width: number; height: number };
type Geometry = { panelX: number; originX: number; pillX: number; pillWidth: number };

const CLOSE_DELAY = 140;

export function DesktopNav() {
  const [active, setActive] = useState<MenuKey | null>(null);
  const [shown, setShown] = useState<MenuKey>("product");
  const [instant, setInstant] = useState(true);
  const [sizes, setSizes] = useState<Partial<Record<MenuKey, Size>>>({});
  const [geometry, setGeometry] = useState<Geometry | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Partial<Record<MenuKey, HTMLButtonElement>>>({});
  const contentRefs = useRef<Partial<Record<MenuKey, HTMLDivElement>>>({});
  const closeTimer = useRef<number | undefined>(undefined);
  const activeRef = useRef<MenuKey | null>(null);
  const lastPointer = useRef<string>("");

  const open = active !== null;
  const shownIndex = menus.findIndex((m) => m.key === shown);

  const measure = useCallback((key: MenuKey) => {
    const nav = navRef.current;
    const pill = pillRef.current;
    const trigger = triggerRefs.current[key];
    const menu = menus.find((m) => m.key === key);
    if (!nav || !pill || !trigger || !menu) return;

    const navRect = nav.getBoundingClientRect();
    const pillRect = pill.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const panelX =
      menu.align === "pill" ? pillRect.left - navRect.left : triggerRect.left - navRect.left - 4;

    setGeometry({
      panelX,
      originX: triggerRect.left - navRect.left + triggerRect.width / 2 - panelX,
      pillX: triggerRect.left - pillRect.left,
      pillWidth: triggerRect.width,
    });
  }, []);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      const next: Partial<Record<MenuKey, Size>> = {};
      for (const menu of menus) {
        const el = contentRefs.current[menu.key];
        if (el) next[menu.key] = { width: el.offsetWidth, height: el.offsetHeight };
      }
      setSizes(next);
    });
    for (const el of Object.values(contentRefs.current)) if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openMenu = useCallback(
    (key: MenuKey) => {
      window.clearTimeout(closeTimer.current);
      if (activeRef.current === null) {
        // Opening from closed: place the panel without sliding it in from its last position.
        setInstant(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
      }
      activeRef.current = key;
      setActive(key);
      setShown(key);
      measure(key);
    },
    [measure],
  );

  const closeMenu = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    activeRef.current = null;
    setActive(null);
  }, []);

  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(closeMenu, CLOSE_DELAY);
  }, [closeMenu]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      triggerRefs.current[shown]?.focus();
      closeMenu();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) closeMenu();
    };
    const onResize = () => measure(shown);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open, shown, closeMenu, measure]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const size = sizes[shown];

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      onPointerEnter={() => window.clearTimeout(closeTimer.current)}
      onPointerLeave={(e) => e.pointerType === "mouse" && scheduleClose()}
      className="relative mx-auto hidden w-full max-w-[1440px] items-center justify-between px-[104px] py-[18px] lg:flex"
    >
      <div ref={pillRef} className="relative flex items-center gap-1 rounded-[10px] bg-[#161916] px-1.5 py-1">
        <span
          aria-hidden
          className="nav-tab-highlight"
          data-open={open}
          data-instant={instant}
          style={
            {
              "--x": `${geometry?.pillX ?? 0}px`,
              "--w": `${geometry?.pillWidth ?? 0}px`,
            } as CSSProperties
          }
        />
        <Link href="/" className="relative flex items-center gap-2 py-1 pr-2.5 pl-1">
          <SamLogo />
          <span className="font-body text-[15px] font-semibold leading-[18px] tracking-[-0.01em] text-foreground">
            sam
          </span>
        </Link>
        {menus.map((menu) => {
          const isActive = active === menu.key;
          return (
            <button
              key={menu.key}
              ref={(el) => {
                if (el) triggerRefs.current[menu.key] = el;
              }}
              type="button"
              aria-expanded={isActive}
              aria-controls={`nav-menu-${menu.key}`}
              onPointerEnter={(e) => e.pointerType === "mouse" && openMenu(menu.key)}
              onPointerDown={(e) => (lastPointer.current = e.pointerType)}
              onClick={(e) => {
                // Hover already opened it for mice; only keyboard (detail 0) and touch toggle.
                const toggles = e.detail === 0 || lastPointer.current !== "mouse";
                if (isActive && toggles) closeMenu();
                else openMenu(menu.key);
              }}
              className={`relative flex cursor-pointer items-center gap-1 rounded-[7px] px-2.5 py-1.5 font-body text-[14px] leading-[18px] outline-none transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-foreground/30 ${
                isActive ? "text-foreground" : "text-mist hover:text-foreground"
              }`}
            >
              {menu.label}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden
                className={`mt-px transition-transform duration-300 ease-[cubic-bezier(.2,.9,.25,1)] ${isActive ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4l2.5 2.5L7.5 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-1 rounded-[10px] bg-[#161916] p-1">
        {[topLinks.pricing, topLinks.signIn].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-block px-3 py-1.5 font-body text-[14px] leading-[18px] text-mist transition-colors duration-200 hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={topLinks.install.href}
          className="rounded-[7px] bg-foreground px-3.5 py-[7px] font-body text-[14px] font-medium leading-[18px] text-night-bg transition-opacity duration-200 hover:opacity-90"
        >
          {topLinks.install.label}
        </Link>
      </div>

      <div
        className="nav-panel-position"
        data-instant={instant}
        style={{ "--x": `${geometry?.panelX ?? 104}px` } as CSSProperties}
      >
        <div
          className="nav-panel"
          data-open={open}
          data-instant={instant}
          style={
            {
              "--w": size ? `${size.width}px` : "auto",
              "--h": size ? `${size.height}px` : "auto",
              "--origin-x": `${geometry?.originX ?? 0}px`,
            } as CSSProperties
          }
        >
          {menus.map((menu, index) => {
            const isShown = menu.key === shown;
            return (
              <div
                key={menu.key}
                id={`nav-menu-${menu.key}`}
                ref={(el) => {
                  if (el) contentRefs.current[menu.key] = el;
                }}
                className="nav-panel-content"
                data-active={isShown && open}
                data-side={isShown ? "center" : index < shownIndex ? "left" : "right"}
                inert={!isShown || !open}
              >
                <MenuContent menu={menu} onNavigate={closeMenu} />
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function MenuContent({ menu, onNavigate }: { menu: Menu; onNavigate: () => void }) {
  const { feature } = menu;
  return (
    <div className="flex gap-2 p-2">
      <div className="flex w-[420px] shrink-0 flex-col gap-1 p-2">
        <p
          className="nav-stagger px-2.5 pt-1 pb-2.5 font-body text-[11px] font-medium uppercase leading-[14px] tracking-[0.08em] text-[#5E635B]"
          style={{ "--i": 0 } as CSSProperties}
        >
          {menu.heading}
        </p>
        {menu.items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="nav-stagger group flex items-center gap-3.5 rounded-[10px] p-2.5 outline-none transition-colors duration-200 hover:bg-[#EDEEE90F] focus-visible:bg-[#EDEEE90F]"
            style={{ "--i": i + 1 } as CSSProperties}
          >
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] border border-[#EDEEE914] bg-[#EDEEE90D] text-[#C9CCC4] transition-colors duration-200 group-hover:border-[#A3E63533] group-hover:bg-[#A3E6351A] group-hover:text-accent group-focus-visible:border-[#A3E63533] group-focus-visible:bg-[#A3E6351A] group-focus-visible:text-accent">
              {item.icon}
            </span>
            <span className="flex flex-col gap-[3px]">
              <span className="font-body text-[14px] font-medium leading-[18px] text-foreground">
                {item.title}
              </span>
              <span className="font-body text-[13px] leading-[18px] text-mist">
                {item.description}
              </span>
            </span>
          </Link>
        ))}
        {menu.footnote && (
          <Link
            href={menu.footnote.href}
            onClick={onNavigate}
            className="nav-stagger group mt-auto flex items-center justify-between border-t border-[#EDEEE912] px-2.5 pt-3 pb-1 font-body text-[13px] leading-[18px] text-mist transition-colors duration-200 hover:text-foreground"
            style={{ "--i": menu.items.length + 1 } as CSSProperties}
          >
            {menu.footnote.label}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        )}
      </div>

      <Link
        href={feature.href}
        onClick={onNavigate}
        className="group flex w-[300px] shrink-0 flex-col overflow-clip rounded-[12px] border border-[#EDEEE914] bg-[#141614]"
      >
        <span className="relative block shrink-0 overflow-clip" style={{ height: feature.imageHeight }}>
          <Image
            src={feature.image}
            alt=""
            fill
            sizes="300px"
            className="nav-feature-img object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ objectPosition: feature.imagePosition ?? "50% 50%" }}
          />
        </span>
        <span className="flex flex-col gap-1.5 p-4">
          <span className="font-body text-[14px] font-medium leading-[18px] text-foreground">
            {feature.title}
          </span>
          <span className="font-body text-[13px] leading-[19px] text-mist">
            {feature.description}
          </span>
        </span>
        <span className="mt-auto flex items-center justify-between border-t border-[#EDEEE912] px-4 py-3">
          <span className="font-body text-[13px] leading-[18px] text-foreground">{feature.cta}</span>
          <span className="flex items-center gap-1.5">
            <span className="nav-firefly size-1.5 shrink-0 rounded-[3px] bg-accent" />
            <span
              aria-hidden
              className="font-body text-[13px] leading-[18px] text-mist transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
}
