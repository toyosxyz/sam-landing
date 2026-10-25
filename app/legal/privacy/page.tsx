import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Fragment } from "react";
import {
  Callout,
  DocsH2,
  DocsLayout,
  DocsP,
  DocsTitle,
} from "@/components/docs/DocsLayout";
import { JsonLd } from "@/components/site/JsonLd";
import { legalGroups } from "@/components/legal/nav";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/legal/privacy",
  title: "Privacy Policy | Sam",
  description:
    "What data Sam processes for merchants and for shoppers on their Shopify stores. Cookieless sessions, EU hosting and how to contact us.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Legal", href: "/legal/privacy" },
  { name: "Privacy policy", href: "/legal/privacy" },
];

const sections = [
  {
    id: "who-we-are",
    label: "Who we are",
    body: "Sam operates this service. This policy explains what data Sam processes for merchants who use it, and for the shoppers who visit their stores.",
  },
  {
    id: "shoppers",
    label: "Data about shoppers",
    body: "Sam processes page and event data from a store's web pixel and order data from Shopify webhooks, on the merchant's behalf. Sessions are identified by a one-way hash with a daily salt. No cookies or browser storage are used. Sessions cannot be linked across days.",
  },
  {
    id: "merchants",
    label: "Data about merchants",
    body: "Account email, team members, connected stores and campaigns you create, used to provide and bill the service.",
  },
  {
    id: "storage",
    label: "Where data is stored",
    body: "All data is hosted in the European Union. The full list of subprocessors is on the Subprocessors page.",
  },
  {
    id: "retention",
    label: "Retention and deletion",
    body: "Shopper session and event data is kept while the merchant account is active. Merchants can delete any session from the dashboard at any time. When the Shopify app is uninstalled, session data is deleted on Shopify's uninstall webhook. Merchant account data (email, team, connected stores, campaigns) is kept for the life of the account.",
  },
  {
    id: "contact",
    label: "Your rights and contact",
    body: `Questions or requests: ${CONTACT_EMAIL}.`,
  },
];

const toc = sections.slice(0, 4);

function ShortVersion() {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-night-line bg-[#141614] p-4">
      <span className="font-body text-[14px] leading-[18px] text-foreground">The short version</span>
      <p className="font-body text-label leading-5 text-mist">
        Read the Trust page for a plain-language summary of what Sam keeps.
      </p>
      <Link href="/trust" className="flex items-center gap-1 font-body text-label leading-[18px] text-accent">
        Go to Trust
        <Arrow direction="up-right" size={13} />
      </Link>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <DocsLayout
      groups={legalGroups("privacy")}
      sidebarExtra={<ShortVersion />}
      breadcrumb="Legal / Privacy policy"
      toc={toc}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <DocsTitle>Privacy policy</DocsTitle>
      <p className="font-body text-[15px] leading-[22px] text-mist">
        Last updated: 18 October 2026 · Sam
      </p>
      <Callout>
        This page summarizes how Sam handles data. For a plain-language overview, see the Trust
        center. The{" "}
        <Link href="/legal/dpa" className="text-accent">
          Data processing agreement
        </Link>{" "}
        covers Sam as processor for shopper analytics. Contact {CONTACT_EMAIL} for questions.
      </Callout>

      {sections.map((s, i) => (
        <Fragment key={s.id}>
          <DocsH2 id={s.id}>
            {i + 1}. {s.label}
          </DocsH2>
          <DocsP>{s.body}</DocsP>
        </Fragment>
      ))}

      <div className="mt-4 lg:hidden">
        <ShortVersion />
      </div>
    </DocsLayout>
  );
}
