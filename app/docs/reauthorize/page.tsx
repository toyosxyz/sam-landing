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
  path: "/docs/reauthorize",
  title: "Reauthorize Shopify Permissions for Sam",
  description:
    "Reconnect Sam when Shopify permissions change. Sam needs customer events for the pixel and read orders for webhooks.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Reauthorize permissions", href: "/docs/reauthorize" },
];

export default function ReauthorizePage() {
  return (
    <DocsLayout
      groups={docsGroups("/docs/reauthorize")}
      breadcrumb="Advanced / Reauthorize permissions"
      toc={[
        { id: "why", label: "When this shows up" },
        { id: "how", label: "How to reconnect" },
        { id: "scopes", label: "What Sam asks for" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <DocsTitle>Reauthorize permissions</DocsTitle>
      <p className="font-body text-body leading-[26px] text-mist">
        Shopify sometimes asks you to approve the app again. Until you do, new sessions or orders
        can stop.
      </p>

      <DocsH2 id="why">When this shows up</DocsH2>
      <DocsP>
        Reauthorize when Sam adds a required permission, when a staff member removed the app and
        installed it again, or when Shopify rotates app scopes. You will see a banner in the
        dashboard asking the store owner to reconnect.
      </DocsP>

      <DocsH2 id="how">How to reconnect</DocsH2>
      <DocsP>
        Sign in as the store owner. Open the banner or Settings → Shopify → Reauthorize. Approve
        the screen Shopify shows. The pixel and order webhooks resume without a theme edit.
      </DocsP>
      <Callout tone="danger">
        Only the Shopify store owner (or a staff account that can install apps) can complete this.
        Invited Sam teammates will see the banner but cannot approve Shopify scopes.
      </Callout>

      <DocsH2 id="scopes">What Sam asks for</DocsH2>
      <DocsP>
        Customer events, so the web pixel can run. Read orders, so purchases arrive by webhook. Sam
        does not ask for customer profiles, write access to products, or themes.
      </DocsP>

      <Pager prev={{ label: "Generic order webhook", href: "/docs/order-webhook" }} />
    </DocsLayout>
  );
}
