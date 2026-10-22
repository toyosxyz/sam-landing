import Link from "next/link";
import type { ReactNode } from "react";
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
  path: "/legal/dpa",
  title: "Data Processing Agreement | Sam",
  description:
    "Sam’s Data Processing Agreement for cookieless Shopify analytics. Customer is controller; Sam is processor. EU hosting. Accepted by using the service.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Legal", href: "/legal/privacy" },
  { name: "Data processing agreement", href: "/legal/dpa" },
];

function ShortVersion() {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-night-line bg-[#141614] p-4">
      <span className="font-body text-[14px] leading-[18px] text-foreground">The short version</span>
      <p className="font-body text-label leading-5 text-mist">
        You are the controller. Sam is the processor for shopper analytics on your Shopify stores.
        Using the service accepts this DPA. No separate signature is required.
      </p>
      <Link href="/trust" className="flex items-center gap-1 font-body text-label leading-[18px] text-accent">
        Go to Trust
        <Arrow direction="up-right" size={13} />
      </Link>
    </div>
  );
}

function DocsList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 font-body text-body leading-[26px] text-[#A6AAA2]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function DpaPage() {
  return (
    <DocsLayout
      groups={legalGroups("dpa")}
      sidebarExtra={<ShortVersion />}
      breadcrumb="Legal / Data processing agreement"
      toc={[
        { id: "roles", label: "Roles" },
        { id: "subject", label: "Subject matter" },
        { id: "data", label: "Personal data" },
        { id: "instructions", label: "Instructions" },
        { id: "security", label: "Security" },
        { id: "subprocessors", label: "Sub-processors" },
        { id: "transfers", label: "Transfers" },
        { id: "deletion", label: "Deletion" },
        { id: "breach", label: "Breach" },
        { id: "acceptance", label: "Acceptance" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <DocsTitle>Data processing agreement</DocsTitle>
      <p className="font-body text-[15px] leading-[22px] text-mist">
        Last updated: 22 October 2026 · Sam
      </p>
      <Callout>
        This DPA is an addendum to the{" "}
        <Link href="/legal/terms" className="text-accent">
          Terms of service
        </Link>
        . Using Sam at app.samtrack.co after this version is published accepts this DPA as posted
        here. No wet or electronic signature is required. Print or save this page for your records
        if you need a copy.
      </Callout>

      <DocsP>
        This Data Processing Agreement (“DPA”) is between Sam (“we”, “us”, or “Sam”), the provider of
        the cookieless Shopify analytics service at samtrack.co and app.samtrack.co (the “Service”),
        and the customer who uses the Service (“Customer”, “you”). Questions: {CONTACT_EMAIL}.
      </DocsP>
      <DocsP>
        If you accept this DPA on behalf of a company or organization, you warrant that you have
        authority to bind that Customer to this DPA, that you have read and understand it, and that
        you agree to it on their behalf.
      </DocsP>

      <DocsH2 id="roles">1. Roles</DocsH2>
      <DocsP>
        For personal data processed through the Service in connection with shoppers on Customer’s
        Shopify stores:
      </DocsP>
      <DocsList
        items={[
          "Customer acts as the controller, or as a processor where Customer processes personal data on behalf of another controller.",
          "Sam acts as the processor, or as a sub-processor where Customer is itself a processor.",
          "Each party will comply with applicable data protection laws, including the GDPR where it applies.",
        ]}
      />
      <DocsP>
        In this DPA, “data controller”, “data processor”, “data subject”, “personal data” and
        “processing” have the meanings in Regulation (EU) 2016/679 (GDPR) and other applicable data
        protection law (“Data Protection Laws”).
      </DocsP>

      <DocsH2 id="subject">2. Subject matter, nature and purpose</DocsH2>
      <DocsP>
        The Service provides cookieless session tracking and conversion analytics for Shopify stores
        configured by Customer. Sam processes analytics events from Customer’s Shopify web pixel (or
        custom pixel) and order data from Shopify webhooks (and optional signed order webhooks) so
        Customer can see visit paths, funnels, landings, campaigns and order match.
      </DocsP>
      <DocsP>
        Sam processes personal data only to provide, secure, maintain and improve the Service for
        Customer, and as otherwise required by applicable law. Sam does not sell shopper analytics
        data and does not use it for Sam’s own marketing profiles of shoppers.
      </DocsP>

      <DocsH2 id="duration">3. Duration</DocsH2>
      <DocsP>
        Sam processes personal data for as long as Customer uses the Service, until Customer deletes
        it earlier through the Service, until it is deleted under the retention rules below, or as
        otherwise required by applicable law. This DPA lasts for as long as Sam processes personal
        data on Customer’s behalf under the Terms of service.
      </DocsP>

      <DocsH2 id="subjects">4. Categories of data subjects</DocsH2>
      <DocsList
        items={[
          "Shoppers and other visitors to Customer’s Shopify stores that use the Service.",
          "Customer account users and team members invited to Customer’s Sam account.",
        ]}
      />

      <DocsH2 id="data">5. Categories of personal data</DocsH2>
      <DocsP>
        For shoppers, the Service is designed to minimize personal data. Depending on how Customer
        uses the Service, Sam may process:
      </DocsP>
      <DocsList
        items={[
          "A daily-rotating pseudonymous visitor ID derived from a one-way hash of request inputs (including IP address, user agent and store) with a salt that rotates every 24 hours.",
          "Page views, product views, cart and checkout events, URLs, referrers and UTM or campaign parameters.",
          "Device category, operating system, browser and country derived from the request.",
          "Hashed checkout tokens used only to match a visit to a Shopify order, retained briefly.",
          "Order amount, currency and products from Shopify webhooks (or Customer’s signed order webhook), linked to a session when a match is possible.",
        ]}
      />
      <DocsP>The Service is designed not to store:</DocsP>
      <DocsList
        items={[
          "Raw IP addresses or raw user agent strings in the application database or logs.",
          "Cookies, localStorage or sessionStorage identifiers for Sam’s analytics.",
          "Persistent cross-day visitor identifiers.",
          "Names, email addresses, phone numbers, shipping or billing addresses of shoppers.",
          "Raw order, checkout or cart IDs as long-lived shopper identifiers.",
        ]}
      />
      <DocsP>
        For Customer account users, Sam may process account email, team membership, connected stores,
        campaigns Customer creates, and billing-related account data needed to provide the Service.
      </DocsP>
      <DocsP>
        Customer must not instruct Sam (including via custom pixel configuration or webhook payloads)
        to send sensitive personal data or direct identifiers that the Service is not designed to
        process, such as passwords, payment card numbers, health data or government ID numbers.
      </DocsP>

      <DocsH2 id="instructions">6. Processing instructions</DocsH2>
      <DocsP>Sam will process personal data only:</DocsP>
      <DocsList
        items={[
          "To provide, secure, maintain and improve the Service.",
          "In accordance with Customer’s documented instructions, including the Terms of service, this DPA, and configuration and actions taken in the Service (for example connecting a store, inviting teammates, or deleting a session).",
          "As required by applicable law, in which case Sam will notify Customer unless prohibited by law.",
        ]}
      />
      <DocsP>
        Sam will notify Customer without undue delay if, in Sam’s opinion, an instruction infringes
        Data Protection Laws. Customer is responsible for ensuring that its use of the Service has an
        appropriate legal basis and that required notices are provided to data subjects.
      </DocsP>

      <DocsH2 id="confidentiality">7. Confidentiality</DocsH2>
      <DocsP>
        Sam will ensure that personnel authorized to process personal data are bound by
        confidentiality obligations or are subject to an appropriate statutory obligation of
        confidentiality.
      </DocsP>

      <DocsH2 id="security">8. Security measures</DocsH2>
      <DocsP>
        Taking into account the nature, scope and purposes of processing, Sam will maintain
        appropriate technical and organizational measures designed to protect personal data,
        including:
      </DocsP>
      <DocsList
        items={[
          "Hashing of IP, user agent and checkout tokens on arrival so raw values are not retained in application storage.",
          "Daily salt rotation so visitor IDs cannot be linked across days.",
          "No cookies or browser storage for Sam’s analytics tracking.",
          "Encryption in transit (HTTPS).",
          "Access controls for Customer accounts and administrative systems.",
          "Hosting of Service data in the European Union, as described on the Trust center.",
        ]}
      />
      <DocsP>
        More detail in plain language is on the{" "}
        <Link href="/trust" className="text-accent">
          Trust center
        </Link>
        .
      </DocsP>

      <DocsH2 id="subprocessors">9. Sub-processors</DocsH2>
      <DocsP>
        Customer authorizes Sam to use sub-processors necessary to provide the Service. Current
        sub-processors for the Service (including purpose and region) are listed on the{" "}
        <Link href="/trust#subprocessors" className="text-accent">
          Trust center
        </Link>
        . That list is controlling and may be updated there.
      </DocsP>
      <DocsP>
        Sub-processors may process personal data only to provide the services Sam has retained them
        for. Sam remains responsible for their performance of obligations consistent with this DPA.
        Sam will provide notice of material sub-processor changes (for example via the Trust center,
        email or in-product notice). Customer may object on reasonable data-protection grounds and,
        if Sam cannot accommodate the objection, may terminate the affected Service as set out in
        the Terms of service.
      </DocsP>

      <DocsH2 id="transfers">10. International transfers</DocsH2>
      <DocsP>
        Service analytics and account data for the Service are hosted in the European Union. Where
        personal data is transferred outside the European Economic Area, United Kingdom or
        Switzerland, Sam will rely on appropriate transfer mechanisms under Data Protection Laws,
        such as an adequacy decision, Standard Contractual Clauses or other lawful safeguards.
      </DocsP>

      <DocsH2 id="assistance">11. Assistance</DocsH2>
      <DocsP>
        Taking into account the nature of processing, Sam will provide reasonable assistance to
        Customer for:
      </DocsP>
      <DocsList
        items={[
          "Responding to data subject requests under Chapter III GDPR where Sam can identify the relevant Customer data.",
          "Security and data protection impact assessments.",
          "Consultation with supervisory authorities where required.",
          "Demonstrating compliance with this DPA.",
        ]}
      />
      <DocsP>
        If a data subject contacts Sam directly and the relevant Customer can be identified, Sam will
        forward the request to Customer without undue delay. Sam will not correct, delete or disclose
        Customer personal data except on Customer’s instructions or as required by law, subject to
        the deletion rules below.
      </DocsP>

      <DocsH2 id="deletion">12. Deletion and return</DocsH2>
      <DocsP>
        Customer may delete individual sessions from the dashboard at any time. When Customer
        uninstalls the Shopify app, session data for that store is deleted on Shopify’s uninstall
        webhook. Disconnecting a store or closing the account stops collection.
      </DocsP>
      <DocsP>
        Shopper session and event data is kept while the merchant account is active, as described in
        the{" "}
        <Link href="/legal/privacy" className="text-accent">
          Privacy policy
        </Link>
        . Merchant account data (email, team, connected stores, campaigns) is kept for the life of
        the account. Account, billing, support, security and operational records may be retained as
        needed to provide the Service, comply with law, resolve disputes and enforce agreements.
      </DocsP>
      <DocsP>
        Upon termination of the Service, Sam will delete or return personal data in accordance with
        the agreement, unless retention is required by applicable law. Where return is not
        practicable in a structured export, deletion through the Service and Sam’s retention process
        satisfies this obligation.
      </DocsP>

      <DocsH2 id="breach">13. Personal data breach</DocsH2>
      <DocsP>
        Sam will notify Customer without undue delay after becoming aware of a personal data breach
        affecting Customer personal data. The notice will include information reasonably available
        to Sam, including the nature of the breach, the categories and approximate volume of affected
        data where known, likely consequences where known, and measures taken or proposed to address
        the breach.
      </DocsP>

      <DocsH2 id="audits">14. Audits</DocsH2>
      <DocsP>
        Sam will make available information reasonably necessary to demonstrate compliance with this
        DPA, including the Trust center, this DPA and responses to reasonable written questionnaires.
        Any further audit must be conducted during normal business hours, with reasonable prior
        notice, under confidentiality, and in a manner that does not compromise the security,
        confidentiality or availability of the Service or other customers’ data.
      </DocsP>

      <DocsH2 id="customer">15. Customer responsibilities</DocsH2>
      <DocsP>Customer is responsible for:</DocsP>
      <DocsList
        items={[
          "Configuring and using the Service correctly on stores Customer is authorized to measure.",
          "Determining the lawfulness of processing and providing appropriate privacy notices to shoppers.",
          "Not sending sensitive or unnecessary personal data to the Service.",
          "Honoring data subject rights requests where Customer is the controller.",
          "Managing team access to the Sam account.",
        ]}
      />

      <DocsH2 id="liability">16. Liability</DocsH2>
      <DocsP>
        Liability under this DPA is subject to the limitations and exclusions in the Terms of
        service, except where Data Protection Laws do not allow that limit. Nothing in this DPA
        limits either party’s liability to data subjects under Article 82 GDPR where it applies.
      </DocsP>

      <DocsH2 id="law">17. Governing law</DocsH2>
      <DocsP>
        This DPA is governed in the same way as the Terms of service. Mandatory Data Protection Laws
        that cannot be waived remain in force. Sam may update this DPA; the date above is the current
        version. The version at{" "}
        <Link href="/legal/dpa" className="text-accent">
          /legal/dpa
        </Link>{" "}
        is controlling unless Customer and Sam have a separate written agreement that expressly
        governs processing instead.
      </DocsP>

      <DocsH2 id="acceptance">18. Incorporation and acceptance</DocsH2>
      <DocsList
        items={[
          "This DPA is an addendum to the Terms of service and, together with those Terms and the Privacy policy, governs Sam’s processing of personal data for the Service.",
          "Customer’s use of the Service after the date this DPA is published — including maintaining an account or subscription at app.samtrack.co — constitutes acceptance of this DPA as then posted, unless Customer and Sam have a separate written agreement that expressly governs processing instead.",
          "No wet or electronic signature is required for that online acceptance, to the extent permitted by applicable law. Saving or printing this page is for Customer’s records only and does not change how acceptance applies.",
        ]}
      />

      <DocsH2 id="contact">19. Contact</DocsH2>
      <DocsP>
        Privacy and data protection questions about this DPA or the Service: {CONTACT_EMAIL}.
      </DocsP>

      <div className="mt-4 lg:hidden">
        <ShortVersion />
      </div>
    </DocsLayout>
  );
}
