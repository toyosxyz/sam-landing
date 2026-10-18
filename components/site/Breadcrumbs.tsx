import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/json-ld";

export function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-label leading-[18px] text-[#5E635B]">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {last ? (
                  <span className="text-mist">{item.name}</span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
