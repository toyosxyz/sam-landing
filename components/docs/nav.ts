import type { SidebarGroup } from "./DocsLayout";

export function docsGroups(active: string): SidebarGroup[] {
  const item = (label: string, href: string) => ({
    label,
    href,
    active: href === active,
  });

  return [
    {
      title: "Get started",
      items: [
        item("Welcome", "/"),
        item("Install the app", "/docs"),
        item("Custom pixel", "/docs/custom-pixel"),
        item("Invite your team", "/docs/invite-team"),
      ],
    },
    {
      title: "Dashboard",
      items: [
        item("Overview", "/product/funnel"),
        item("Sessions", "/product/sessions"),
        item("Orders", "/product/orders"),
        item("Campaigns", "/product/campaigns"),
      ],
    },
    {
      title: "Tracking",
      items: [
        item("How tracking works", "/how-it-works"),
        item("What Sam stores", "/trust"),
        item("Order attribution", "/product/orders"),
      ],
    },
    {
      title: "Advanced",
      items: [
        item("Multiple stores", "/docs/multiple-stores"),
        item("Generic order webhook", "/docs/order-webhook"),
        item("Reauthorize permissions", "/docs/reauthorize"),
      ],
    },
  ];
}
