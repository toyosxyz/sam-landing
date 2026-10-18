import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";
import { Chip } from "./Chip";
import { Reveal } from "./motion";

export const h2 =
  "font-body text-h3 leading-[34px] tracking-[-0.03em] lg:text-[40px] lg:leading-[48px]";
export const h3 =
  "font-body text-[20px] leading-7 tracking-[-0.01em] lg:text-2xl lg:leading-8";

export function SectionHeading({
  chip,
  title,
  muted,
  width = 760,
  size = "lg",
  className = "",
}: {
  chip?: string;
  title: ReactNode;
  muted?: ReactNode;
  width?: number;
  size?: "lg" | "md";
  className?: string;
}) {
  const type = size === "lg" ? h2 : h3;
  return (
    <Reveal stagger className={`flex flex-col gap-4 ${className}`}>
      {chip && <Chip>{chip}</Chip>}
      <h2 className="flex flex-col" style={{ maxWidth: width }}>
        <span className={`${type} text-foreground`}>{title}</span>
        {muted && <span className={`${type} text-mist`}>{muted}</span>}
      </h2>
    </Reveal>
  );
}

/** Inline "Title. Muted." heading used above card rows. */
export function InlineHeading({ title, muted }: { title: string; muted: string }) {
  return (
    <Reveal>
      <h2 className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-2">
        <span className={`${h3} text-foreground`}>{title}</span>
        <span className={`${h3} text-mist`}>{muted}</span>
      </h2>
    </Reveal>
  );
}

export function NumberedItems({
  items,
  numbered = true,
}: {
  items: readonly { title: string; body: ReactNode }[];
  numbered?: boolean;
}) {
  return (
    <Reveal stagger className="flex flex-col gap-8 lg:flex-row lg:gap-6">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="flex grow basis-0 flex-col gap-3.5 border-t border-night-line pt-6"
        >
          {numbered && (
            <span className="font-body text-[14px] leading-[18px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <h3 className="font-body text-[20px] leading-6 text-foreground">{item.title}</h3>
          <p className="font-body text-[15px] leading-[23px] text-mist">{item.body}</p>
        </div>
      ))}
    </Reveal>
  );
}

/** 400px copy column beside a visual; stacks with copy first on mobile. */
export function SplitRow({
  chip,
  title,
  body,
  note,
  children,
  reverse = false,
}: {
  chip: string;
  title: string;
  body: ReactNode;
  note?: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-[72px]">
      <Reveal
        stagger
        className={`flex w-full shrink-0 flex-col gap-4 lg:w-[400px] ${reverse ? "lg:order-last" : ""}`}
      >
        <Chip>{chip}</Chip>
        <div className="flex flex-col">
          <h2 className={`${h3} text-foreground`}>{title}</h2>
          <p className={`${h3} text-mist`}>{body}</p>
        </div>
        {note && <p className="font-body text-[15px] leading-[23px] text-mist">{note}</p>}
      </Reveal>
      {children}
    </div>
  );
}

/** Row of ImageCards that enter one after another. */
export function CardRow({ children }: { children: ReactNode }) {
  return (
    <Reveal stagger className="flex flex-col gap-4 lg:flex-row lg:gap-6">
      {children}
    </Reveal>
  );
}

export function ImageCard({
  href,
  title,
  body,
  image,
}: {
  href: string;
  title: string;
  body: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group flex grow basis-0 flex-col overflow-clip rounded-2xl border border-night-line bg-[#161916] transition-colors hover:border-[#3A3F38]"
    >
      <div className="h-[140px] shrink-0 overflow-clip lg:h-40">
        <div
          className="size-full bg-cover bg-center transition-transform duration-700 ease-(--ease-trail) group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-center justify-between">
          <span className="font-body text-lead leading-6 text-foreground">{title}</span>
          <Arrow
            direction="up-right"
            className="text-mist transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
          />
        </div>
        <p className="font-body text-[15px] leading-[22px] text-mist">{body}</p>
      </div>
    </Link>
  );
}
