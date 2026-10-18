import {
  CONTACT_EMAIL,
  PLANS,
  PRICE_VALID_UNTIL,
  SITE_URL,
} from "@/lib/site";

export type FaqItem = { q: string; a: string };
export type BreadcrumbItem = { name: string; href: string };

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;
export const appId = `${SITE_URL}/#app`;

function absUrl(path: string) {
  if (path.startsWith("http")) return path;
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Sam",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        email: CONTACT_EMAIL,
        contactPoint: {
          "@type": "ContactPoint",
          email: CONTACT_EMAIL,
          contactType: "customer support",
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
  const offerBase = {
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceValidUntil: PRICE_VALID_UNTIL,
    url: `${SITE_URL}/pricing`,
  };

  const offers = options?.withOffers
    ? {
        "@type": "AggregateOffer",
        ...offerBase,
        lowPrice: String(PLANS[0].monthlyEur),
        highPrice: String(PLANS[PLANS.length - 1].monthlyEur),
        offerCount: String(PLANS.length),
        offers: PLANS.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: String(plan.monthlyEur),
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          priceValidUntil: PRICE_VALID_UNTIL,
          url: `${SITE_URL}/pricing`,
          description: `${plan.sessions.toLocaleString("en-US")} sessions a month. ${plan.yearlyEur} EUR a month billed yearly.`,
        })),
      }
    : {
        "@type": "AggregateOffer",
        ...offerBase,
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

export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.href),
    })),
  };
}

export function howToJsonLd(
  name: string,
  description: string,
  steps: readonly { name: string; text: string; url?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  };
}

export function articleJsonLd(options: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    image: absUrl(options.image),
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl(options.path),
    },
  };
}
