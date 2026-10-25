import {
  Callout,
  DocsH2,
  DocsLayout,
  DocsP,
  DocsTitle,
  Pager,
} from "@/components/docs/DocsLayout";
import { docsGroups } from "@/components/docs/nav";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/docs/multiple-stores",
  title: "Multiple Shopify Stores in Sam",
  description:
    "Connect several Shopify stores on one Sam account. Sessions across stores count together toward your plan and invoice.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Multiple stores", href: "/docs/multiple-stores" },
];

export default function MultipleStoresPage() {
  return (
    <DocsLayout
      groups={docsGroups("/docs/multiple-stores")}
      breadcrumb="Advanced / Multiple stores"
      toc={[
        { id: "billing", label: "How billing works" },
        { id: "dashboard", label: "Dashboard" },
        { id: "switch", label: "Switch stores" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <DocsTitle>Multiple stores</DocsTitle>
      <p className="font-body text-body leading-[26px] text-mist">
        Sam is built for one store at a time in the dashboard, and for several stores on one
        account.
      </p>

      <DocsH2 id="billing">How billing works</DocsH2>
      <DocsP>
        Sessions from every connected store on the account count together toward your plan. One
        invoice covers the account. Pick a plan for the total monthly sessions across those stores,
        not a separate plan per store.
      </DocsP>
      <Callout>
        Need a contracted SLA or more than 1,000,000 sessions on one account? Email
        privacy@samtrack.co.
      </Callout>

      <DocsH2 id="dashboard">Dashboard</DocsH2>
      <DocsP>
        Each store still has its own pixel and orders. Funnel, sessions, campaigns and reports stay
        scoped to the store you have selected, even though billing pools sessions across the
        account.
      </DocsP>

      <DocsH2 id="switch">Switch stores</DocsH2>
      <DocsP>
        Use the store switcher at the top of the dashboard. Funnel, sessions, campaigns and orders
        always belong to the store you have selected. Invites are per store.
      </DocsP>

      <Pager
        prev={{ label: "Invite your team", href: "/docs/invite-team" }}
        next={{ label: "Generic order webhook", href: "/docs/order-webhook" }}
      />
    </DocsLayout>
  );
}
