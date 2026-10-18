import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";
import { topLinks } from "./nav/menu-data";

const base =
  "flex items-center gap-2 rounded-[8px] px-4 py-2.5 font-body text-[15px] font-medium leading-[18px]";

export function PrimaryButton({
  href = topLinks.install.href,
  children = "Start 7-day trial",
}: {
  href?: string;
  children?: ReactNode;
}) {
  return (
    <Link href={href} className={`${base} bg-foreground text-night-bg`}>
      {children}
      <Arrow />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} border border-night-line bg-[#161916] text-foreground`}
    >
      {children}
    </Link>
  );
}

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-2.5">
      <PrimaryButton />
    </div>
  );
}
