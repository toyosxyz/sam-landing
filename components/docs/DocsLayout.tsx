import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "@/components/site/Arrow";
import { container } from "@/components/site/layout";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CopyButton } from "./CopyButton";
import { OnThisPage, type TocItem } from "./OnThisPage";

export type SidebarItem = { label: string; href?: string; active?: boolean };
export type SidebarGroup = { title: string; items: SidebarItem[] };

const groupLabel =
  "px-3 pb-2 font-body text-[11px] font-medium leading-[14px] tracking-[0.08em] text-[#5E635B] uppercase";

function SidebarLinks({ groups }: { groups: SidebarGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <span className={groupLabel}>{group.title}</span>
          {group.items.map((item) => {
            const cls = `rounded-[7px] px-3 py-[7px] font-body text-[14px] leading-[18px] ${
              item.active ? "bg-[#EDEEE912] text-foreground" : "text-mist"
            }`;
            return item.href ? (
              <Link
                key={item.label}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={`${cls} transition-colors hover:text-foreground`}
              >
                {item.label}
              </Link>
            ) : (
              <span key={item.label} className={cls}>
                {item.label}
              </span>
            );
          })}
        </div>
      ))}
    </>
  );
}

export function DocsLayout({
  groups,
  sidebarExtra,
  breadcrumb,
  toc,
  footerVariant = "page",
  children,
}: {
  groups: SidebarGroup[];
  sidebarExtra?: ReactNode;
  breadcrumb: string;
  toc: readonly TocItem[];
  footerVariant?: "home" | "page";
  children: ReactNode;
}) {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <SiteNav />

      <div className="border-t border-[#1C1F1B]">
        <div className={`${container} flex flex-col gap-8 pt-6 pb-[72px] lg:flex-row lg:gap-14 lg:pt-10 lg:pb-[120px]`}>
          <details className="group rounded-[8px] border border-night-line bg-[#161916] lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-body text-[14px] leading-[18px] text-foreground [&::-webkit-details-marker]:hidden">
              {breadcrumb}
              <span aria-hidden className="text-mist transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="flex flex-col gap-6 border-t border-night-line px-1 py-4">
              <SidebarLinks groups={groups} />
            </div>
          </details>

          <aside className="hidden w-[240px] shrink-0 flex-col gap-7 lg:flex">
            <SidebarLinks groups={groups} />
            {sidebarExtra}
          </aside>

          <article className="flex min-w-0 grow basis-0 flex-col gap-5 lg:max-w-[720px]">
            <span className="hidden font-body text-label leading-[18px] text-[#5E635B] lg:inline">
              {breadcrumb}
            </span>
            {children}
          </article>

          <div className="hidden w-[200px] shrink-0 xl:block">
            <OnThisPage items={toc} />
          </div>
        </div>
      </div>

      <SiteFooter variant={footerVariant} />
    </main>
  );
}

export function DocsTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-body text-h3 leading-[34px] tracking-[-0.03em] text-foreground lg:text-[40px] lg:leading-12">
      {children}
    </h1>
  );
}

export function DocsH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-8 pt-5 font-body text-[20px] leading-7 tracking-[-0.01em] text-foreground lg:text-[22px] lg:leading-[30px]"
    >
      {children}
    </h2>
  );
}

export function DocsP({ children }: { children: ReactNode }) {
  return <p className="font-body text-body leading-[26px] text-[#A6AAA2]">{children}</p>;
}

export function Callout({
  tone = "accent",
  children,
}: {
  tone?: "accent" | "danger";
  children: ReactNode;
}) {
  if (tone === "danger") {
    return (
      <div className="flex rounded-xl border border-[#E5484D4D] bg-[#E5484D0F] px-[18px] py-3.5">
        <p className="font-body text-[14px] leading-[22px] text-[#C9CCC4]">{children}</p>
      </div>
    );
  }
  return (
    <div className="flex gap-3.5 rounded-xl border border-[#A3E63540] bg-[#A3E6350F] px-[18px] py-4">
      <span className="mt-[9px] size-1.5 shrink-0 rounded-[3px] bg-accent" />
      <p className="font-body text-[15px] leading-6 text-[#C9CCC4]">{children}</p>
    </div>
  );
}

export function CodeBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="flex flex-col overflow-clip rounded-xl border border-night-line bg-[#161916]">
      <div className="flex justify-between border-b border-night-line px-4 py-2.5">
        <span className="font-body text-[12px] leading-4 text-mist">{title}</span>
        <CopyButton text={lines.join("\n")} />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-label leading-[22px] text-[#C9CCC4]">
        {lines.join("\n")}
      </pre>
    </div>
  );
}

export function Pager({
  prev,
  next,
}: {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}) {
  return (
    <div className="mt-3 flex justify-between gap-6 border-t border-night-line pt-8">
      {prev ? (
        <Link href={prev.href} className="flex flex-col gap-1">
          <span className="font-body text-[12px] leading-4 text-[#5E635B]">Previous</span>
          <span className="flex items-center gap-1.5 font-body text-[15px] leading-5 text-foreground">
            <Arrow direction="left" />
            {prev.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className="flex flex-col items-end gap-1 text-right">
          <span className="font-body text-[12px] leading-4 text-[#5E635B]">Next</span>
          <span className="flex items-center gap-1.5 font-body text-[15px] leading-5 text-foreground">
            {next.label}
            <Arrow />
          </span>
        </Link>
      )}
    </div>
  );
}
