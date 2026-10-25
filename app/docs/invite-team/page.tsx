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
  path: "/docs/invite-team",
  title: "Invite Your Team to Sam",
  description:
    "The first account to connect a Shopify store owns it. Invite teammates from the account menu. Each person picks English or Spanish.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Invite your team", href: "/docs/invite-team" },
];

export default function InviteTeamPage() {
  return (
    <DocsLayout
      groups={docsGroups("/docs/invite-team")}
      breadcrumb="Get started / Invite your team"
      toc={[
        { id: "owner", label: "Who owns the store" },
        { id: "invite", label: "Send an invite" },
        { id: "language", label: "Language" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <DocsTitle>Invite your team</DocsTitle>
      <p className="font-body text-body leading-[26px] text-mist">
        Agencies and in-house teams share one store without sharing a password.
      </p>

      <DocsH2 id="owner">Who owns the store</DocsH2>
      <DocsP>
        The first Sam account that connects a Shopify store becomes its owner. Later accounts join
        that store by invite. Connecting the same store from a second Sam account without an invite
        does not create a second owner.
      </DocsP>

      <DocsH2 id="invite">Send an invite</DocsH2>
      <DocsP>
        Open the account menu → Team → Invite. Enter a work email. The teammate creates their own
        Sam login and lands on the stores they were invited to. Team invites are included on every
        plan.
      </DocsP>
      <Callout>
        Billing stays on the owner account. Invited teammates see the same funnel, sessions,
        campaigns and orders.
      </Callout>

      <DocsH2 id="language">Language</DocsH2>
      <DocsP>
        Each teammate picks English or Spanish in the account menu. The choice is per person, not
        per store.
      </DocsP>

      <Pager
        prev={{ label: "Custom pixel", href: "/docs/custom-pixel" }}
        next={{ label: "Multiple stores", href: "/docs/multiple-stores" }}
      />
    </DocsLayout>
  );
}
