import type { CSSProperties, ReactNode } from "react";
import { Chip } from "./Chip";
import { container } from "./layout";

type Box = { top?: number; height: number };

/**
 * Painting + fade behind a page hero. Desktop boxes come straight from Paper;
 * mobile boxes default to a shorter crop of the same painting.
 */
export function HeroBackdrop({
  image,
  position = "50%",
  painting,
  fade,
  gradient,
  mobilePainting,
  mobileFade,
}: {
  image: string;
  position?: string;
  painting: Box;
  fade: Box;
  gradient: string;
  mobilePainting?: Box;
  mobileFade?: Box;
}) {
  const mp = mobilePainting ?? {
    top: Math.round((painting.top ?? 0) * 0.6),
    height: Math.round(painting.height * 0.68),
  };
  const mf = mobileFade ?? {
    top: Math.round((fade.top ?? 0) * 0.6),
    height: Math.round(fade.height * 0.68),
  };
  const vars = {
    "--p-top": `${mp.top ?? 0}px`,
    "--p-h": `${mp.height}px`,
    "--p-top-lg": `${painting.top ?? 0}px`,
    "--p-h-lg": `${painting.height}px`,
    "--f-top": `${mf.top ?? 0}px`,
    "--f-h": `${mf.height}px`,
    "--f-top-lg": `${fade.top ?? 0}px`,
    "--f-h-lg": `${fade.height}px`,
  } as CSSProperties;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0" style={vars}>
      <div
        className="absolute inset-x-0 top-(--p-top) h-(--p-h) bg-cover lg:top-(--p-top-lg) lg:h-(--p-h-lg)"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
      />
      <div
        className="absolute inset-x-0 top-(--f-top) h-(--f-h) lg:top-(--f-top-lg) lg:h-(--f-h-lg)"
        style={{ backgroundImage: gradient }}
      />
    </div>
  );
}

const compactFade =
  "linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003) 0%, oklab(18.4% -0.004 0.003 / 88%) 38%, oklab(18.4% -0.004 0.003 / 35%) 72%, oklab(18.4% -0.004 0.003 / 20%) 100%), linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003) 0%, oklab(18.4% -0.004 0.003) 12%, oklab(18.4% -0.004 0.003 / 0%) 34%, oklab(18.4% -0.004 0.003 / 0%) 62%, oklab(18.4% -0.004 0.003) 92%, oklab(18.4% -0.004 0.003) 100%)";

/** Short hero that sits below the nav (compare, changelog). */
export function CompactHero({
  image,
  chip,
  title,
  titleWidth,
  lead,
  children,
}: {
  image: string;
  chip: string;
  title: ReactNode;
  titleWidth: number;
  lead: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex flex-col overflow-clip pt-14 pb-[72px] lg:pt-[112px] lg:pb-[120px]">
      <HeroBackdrop
        image={image}
        position="50% 60%"
        painting={{ top: 40, height: 460 }}
        fade={{ height: 520 }}
        gradient={compactFade}
      />
      <HeroCopy chip={chip} title={title} titleWidth={titleWidth} lead={lead} gap="gap-6">
        {children}
      </HeroCopy>
    </section>
  );
}

export const heroTitle =
  "font-body text-[38px] leading-[42px] tracking-[-0.035em] lg:text-[56px] lg:leading-[62px]";
export const heroLead =
  "font-body text-body leading-6 text-mist lg:text-[20px] lg:leading-[30px]";

export function HeroCopy({
  chip,
  title,
  muted,
  lead,
  titleWidth = 1000,
  leadWidth = 600,
  gap = "gap-6 lg:gap-7",
  className = "",
  children,
}: {
  chip?: string;
  title: ReactNode;
  muted?: ReactNode;
  lead?: ReactNode;
  titleWidth?: number;
  leadWidth?: number;
  gap?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div data-reveal="load" className={`${container} relative flex flex-col ${gap} ${className}`}>
      {chip && <Chip>{chip}</Chip>}
      <h1 className="flex flex-col" style={{ maxWidth: titleWidth }}>
        <span className={`${heroTitle} text-foreground`}>{title}</span>
        {muted && <span className={`${heroTitle} text-mist`}>{muted}</span>}
      </h1>
      {lead && (
        <p className={heroLead} style={{ maxWidth: leadWidth }}>
          {lead}
        </p>
      )}
      {children}
    </div>
  );
}
