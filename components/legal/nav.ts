import type { SidebarGroup } from "@/components/docs/DocsLayout";

export function legalGroups(active: "privacy" | "terms" | "dpa"): SidebarGroup[] {
  return [
    {
      title: "Legal",
      items: [
        { label: "Privacy policy", href: "/legal/privacy", active: active === "privacy" },
        { label: "Terms of service", href: "/legal/terms", active: active === "terms" },
        { label: "Data processing agreement", href: "/legal/dpa", active: active === "dpa" },
        { label: "Trust center", href: "/trust" },
        { label: "Subprocessors", href: "/trust#subprocessors" },
        { label: "About", href: "/about" },
      ],
    },
  ];
}
