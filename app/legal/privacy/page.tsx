import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { Fragment } from "react";
import {
  Callout,
  DocsH2,
  DocsLayout,
  DocsP,
  DocsTitle,
  type SidebarGroup,
} from "@/components/docs/DocsLayout";

export const metadata: Metadata = {
  title: "Privacy policy · SAM",
  description:
    "What data Sam processes for merchants who use it, and for the shoppers who visit their stores.",
};

const groups: SidebarGroup[] = [
  {
    title: "Legal",
    items: [
      { label: "Privacy policy", href: "/legal/privacy", active: true },
      { label: "Terms of service" },
      { label: "Data Processing Agreement", href: "/trust#documents" },
      { label: "Subprocessors", href: "/trust#subprocessors" },
    ],
  },
];

const sections = [
  {
    id: "who-we-are",
    label: "Who we are",
    body: "Sam is built and operated by Arnor Labs. This policy explains what data Sam processes for merchants who use it, and for the shoppers who visit their stores.",
  },
  {
    id: "shoppers",
    label: "Data about shoppers",
    body: "Sam processes page and event data from a store's web pixel and order data from Shopify webhooks, on the merchant's behalf. Sessions are identified by a one-way hash with a daily salt. No cookies or browser storage are used.",
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
    body: "[Retention periods.] Merchants can delete sessions from the dashboard at any time.",
  },
  {
    id: "contact",
    label: "Your rights and contact",
    body: "Questions or requests: privacy@samtrack.co.",
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
      groups={groups}
      sidebarExtra={<ShortVersion />}
      breadcrumb="Legal / Privacy policy"
      toc={toc}
    >
      <DocsTitle>Privacy policy</DocsTitle>
      <p className="font-body text-[15px] leading-[22px] text-mist">
        Last updated: [date] · Arnor Labs
      </p>
      <Callout tone="danger">
        Layout draft. The text below shows structure only and must be replaced with the reviewed
        legal copy before launch.
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
