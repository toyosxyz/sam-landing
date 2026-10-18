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
    "Each Shopify store has its own Sam plan. From 3 stores on one account, every plan is 20% off and you get one invoice.",
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
      search
      breadcrumb="Advanced / Multiple stores"
      toc={[
        { id: "one-plan", label: "One plan per store" },
        { id: "agency", label: "Agency discount" },
        { id: "switch", label: "Switch stores" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <DocsTitle>Multiple stores</DocsTitle>
      <p className="font-body text-body leading-[26px] text-mist">
        Sam is built for one store at a time in the dashboard, and for several stores on one
        account.
      </p>

      <DocsH2 id="one-plan">One plan per store</DocsH2>
      <DocsP>
        Each connected Shopify store has its own session plan. A 25,000-session Garden store and a
        100,000-session Meadow store on the same account pay for each plan. Sessions are not pooled
        across stores, because each store has its own pixel and orders.
      </DocsP>

      <DocsH2 id="agency">Agency discount</DocsH2>
      <DocsP>
        From three stores on one account, every plan is 20% off and you get one invoice. The
        discount applies to monthly and yearly billing. It is meant for CRO agencies and multi-brand
        merchants, not a separate product tier.
      </DocsP>
      <Callout>
        Need a contracted SLA or more than 1,000,000 sessions on one store? Email
        privacy@samtrack.co.
      </Callout>

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
