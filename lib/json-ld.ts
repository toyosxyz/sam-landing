import { CONTACT_EMAIL, PLANS, SITE_URL } from "@/lib/site";

export type FaqItem = { q: string; a: string };

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;
export const appId = `${SITE_URL}/#app`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Sam",
        legalName: "Arnor Labs",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        email: CONTACT_EMAIL,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Asturias",
          addressCountry: "ES",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Sam",
        url: SITE_URL,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function softwareApplicationJsonLd(options?: { withOffers?: boolean }) {
  const offers = options?.withOffers
    ? {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: String(PLANS[0].monthlyEur),
        highPrice: String(PLANS[PLANS.length - 1].monthlyEur),
        offerCount: String(PLANS.length),
        offers: PLANS.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: String(plan.monthlyEur),
          priceCurrency: "EUR",
          url: `${SITE_URL}/pricing`,
          description: `${plan.sessions.toLocaleString("en-US")} sessions a month`,
        })),
      }
    : {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: String(PLANS[0].monthlyEur),
        highPrice: String(PLANS[PLANS.length - 1].monthlyEur),
        offerCount: String(PLANS.length),
      };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": appId,
    name: "Sam",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Shopify",
    description:
      "Cookieless session tracking for Shopify. Funnel, landings and campaigns without a consent banner for Sam.",
    url: SITE_URL,
    offers,
    brand: { "@type": "Brand", name: "Sam" },
    publisher: { "@id": organizationId },
  };
}

export function faqPageJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
