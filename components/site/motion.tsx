"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

function onceInView(el: Element, cb: () => void, rootMargin = "0px 0px -12% 0px") {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        observer.disconnect();
        cb();
      }
    },
    { rootMargin },
  );
  observer.observe(el);
  return () => observer.disconnect();
}

type RevealTag = "div" | "section" | "article" | "aside" | "header" | "footer" | "ul" | "li";

/**
 * Fades its content up the first time it scrolls into view. With `stagger`,
 * each direct child enters in sequence. Metric helpers (`m-bar`, `m-draw`,
 * `m-fade`) inside it start once it is revealed.
 */
export function Reveal({
  as: Tag = "div",
  stagger = false,
  delay = 0,
  className,
  style,
  id,
  children,
}: {
  as?: RevealTag;
  stagger?: boolean;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    return onceInView(ref.current, () => setInView(true));
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className}
      data-reveal={stagger ? "stagger" : "up"}
      data-inview={inView ? "" : undefined}
      style={delay ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties) : style}
    >
      {children}
    </Tag>
  );
}

const NUMBER = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/;

/** Counts a figure like "€58,240" or "3.1%" up from zero when it comes into view. */
export function CountUp({
  value,
  duration = 1400,
  delay = 0,
  className,
}: {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const text = el?.firstChild;
    const match = value.match(NUMBER);
    if (!el || !text || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, raw, suffix] = match;
    const target = Number(raw.replace(/,/g, ""));
    const decimals = raw.split(".")[1]?.length ?? 0;
    const grouped = raw.includes(",");
    const format = (n: number) =>
      prefix +
      (grouped
        ? n.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : n.toFixed(decimals)) +
      suffix;

    text.nodeValue = format(0);
    let frame = 0;
    let timer = 0;

    const stop = onceInView(el, () => {
      timer = window.setTimeout(() => {
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          text.nodeValue = t < 1 ? format(target * eased) : value;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }, delay);
    });

    return () => {
      stop();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      text.nodeValue = value;
    };
  }, [value, duration, delay]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
    </span>
  );
}
