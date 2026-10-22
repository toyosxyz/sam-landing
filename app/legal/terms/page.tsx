import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
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
  path: "/legal/terms",
  title: "Terms of Service | Sam",
  description:
    "Terms for using Sam, the cookieless Shopify analytics app. Trial, billing, acceptable use and how to contact us.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Legal", href: "/legal/privacy" },
  { name: "Terms of service", href: "/legal/terms" },
];

function ShortVersion() {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-night-line bg-[#141614] p-4">
      <span className="font-body text-[14px] leading-[18px] text-foreground">The short version</span>
      <p className="font-body text-label leading-5 text-mist">
        Use Sam on your Shopify stores. Pay for the plan you pick after the trial. Data is hosted in
        the EU. Questions: {CONTACT_EMAIL}.
      </p>
      <Link href="/trust" className="flex items-center gap-1 font-body text-label leading-[18px] text-accent">
        Go to Trust
        <Arrow direction="up-right" size={13} />
      </Link>
    </div>
  );
}

export default function TermsPage() {
  return (
    <DocsLayout
      groups={legalGroups("terms")}
      sidebarExtra={<ShortVersion />}
      breadcrumb="Legal / Terms of service"
      toc={[
        { id: "service", label: "The service" },
        { id: "account", label: "Accounts" },
        { id: "trial-billing", label: "Trial and billing" },
        { id: "acceptable-use", label: "Acceptable use" },
        { id: "data", label: "Your data" },
        { id: "liability", label: "Liability" },
        { id: "law", label: "Governing law" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <DocsTitle>Terms of service</DocsTitle>
      <p className="font-body text-[15px] leading-[22px] text-mist">
        Last updated: 18 October 2026 · Sam
      </p>
      <Callout>
        These terms govern your use of Sam. The privacy policy covers shopper and merchant data.
        Questions: {CONTACT_EMAIL}.
      </Callout>

      <DocsH2 id="service">1. The service</DocsH2>
      <DocsP>
        Sam is a cookieless Shopify analytics product (“we”). It records visits on connected
        Shopify stores, shows a purchase funnel, and matches orders Shopify sends to Sam. We may
        change features as the product develops. Material changes will be noted on the changelog.
      </DocsP>

      <DocsH2 id="account">2. Accounts</DocsH2>
      <DocsP>
        You need an account to use Sam. The first person to connect a store is its owner.
        Teammates join by invite. You are responsible for activity under your account and for
        keeping access to the connected Shopify stores. You must be able to agree to these terms
        for your business.
      </DocsP>

      <DocsH2 id="trial-billing">3. Trial and billing</DocsH2>
      <DocsP>
        New accounts get a 7-day trial of every feature. A card is required through Stripe. If you
        cancel before the trial ends, you pay nothing. After that, you pay the plan you chose,
        monthly or yearly. Yearly billing is two months free. Plans are priced by monthly sessions.
        Going over a plan’s session limit does not stop collection; if it happens two months in a
        row we will ask you to move to the next plan before the bill changes. From three stores on
        one account, every plan is 20% off. Above 1,000,000 sessions a month, pricing is agreed by
        email. Taxes may apply. You can change plans at any time: upgrades apply now, downgrades
        apply on the next billing date.
      </DocsP>

      <DocsH2 id="acceptable-use">4. Acceptable use</DocsH2>
      <DocsP>
        Use Sam only on Shopify stores you are authorized to measure. Do not attempt to reverse
        engineer the service, overload it, or use it to identify shoppers as people. Do not resell
        access except as an agency managing stores on one account. We can suspend an account that
        breaks these terms or creates a security risk.
      </DocsP>

      <DocsH2 id="data">5. Your data</DocsH2>
      <DocsP>
        You own the store data Sam processes for you. We process it to provide the service, as
        described in the privacy policy and the{" "}
        <Link href="/legal/dpa" className="text-accent">
          Data processing agreement
        </Link>
        . Using the service accepts that DPA. You can delete sessions from the dashboard.
        Disconnecting a store or closing the account stops collection. We host in the European
        Union.
      </DocsP>

      <DocsH2 id="liability">6. Liability</DocsH2>
      <DocsP>
        Sam is provided as-is. Analytics can be incomplete: about 90–95% of orders link to a full
        visit path when Sam saw the checkout; every Shopify order is still counted. We do not
        promise a specific ranking, conversion lift or legal outcome. Our liability for a claim is
        limited to the fees you paid us in the previous three months, except where the law does not
        allow that limit.
      </DocsP>

      <DocsH2 id="law">7. Governing law</DocsH2>
      <DocsP>
        Consumer rights that cannot be waived remain in force. We may update these terms; the date
        above is the current version. Continued use after an update means you accept the new terms.
        Questions: {CONTACT_EMAIL}.
      </DocsP>

      <div className="mt-4 lg:hidden">
        <ShortVersion />
      </div>
    </DocsLayout>
  );
}
