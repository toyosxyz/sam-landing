"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

export function OnThisPage({ items }: { items: readonly TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-8 flex flex-col gap-2.5 pt-7">
      <span className="pb-1 font-body text-[11px] font-medium leading-[14px] tracking-[0.08em] text-[#5E635B] uppercase">
        On this page
      </span>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={active === item.id ? "location" : undefined}
          className={`font-body text-label leading-[18px] transition-colors hover:text-foreground ${
            active === item.id ? "text-foreground" : "text-mist"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
