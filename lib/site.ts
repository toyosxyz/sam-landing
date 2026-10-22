import type { Metadata } from "next";

export const SITE_URL = "https://samtrack.co";
export const SIGNUP_URL = "https://app.samtrack.co/signup";
export const LOGIN_URL = "https://app.samtrack.co/login";
export const CONTACT_EMAIL = "privacy@samtrack.co";
export const PRICE_VALID_UNTIL = "2027-10-18";

export const PLANS = [
  {
    name: "Garden",
    monthlyEur: 29,
    yearlyEur: 24,
    sessions: 25_000,
    image: "/images/plan-garden.png",
    featured: false,
  },
  {
    name: "Meadow",
    monthlyEur: 79,
    yearlyEur: 66,
    sessions: 100_000,
    image: "/images/plan-meadow.png",
    featured: true,
  },
  {
    name: "Valley",
    monthlyEur: 169,
    yearlyEur: 141,
    sessions: 300_000,
    image: "/images/plan-valley.png",
    featured: false,
  },
  {
    name: "Forest",
    monthlyEur: 349,
    yearlyEur: 291,
    sessions: 1_000_000,
    image: "/images/hills-channels.png",
    featured: false,
  },
] as const;

export function formatEur(amount: number) {
  return `€${amount}`;
}

export function sessionsLabel(sessions: number) {
  return `Up to ${sessions.toLocaleString("en-US")} sessions a month`;
}

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: "Sam",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const homeSeo: PageSeo = {
  path: "/",
  title: "Cookieless Shopify Analytics for EU Stores | Sam",
  description:
    "Sam is cookieless session tracking for Shopify. See which landings and campaigns convert, including visits that decline cookies. No banner for Sam. From €29/month.",
};

export const sitemapEntries: {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/funnel", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/sessions", changeFrequency: "monthly", priority: 0.7 },
  { path: "/product/campaigns", changeFrequency: "monthly", priority: 0.7 },
  { path: "/product/orders", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/ga4", changeFrequency: "monthly", priority: 0.8 },
  { path: "/compare/shopify-analytics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/compare/plausible", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/metrixs", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/cookieless-shopify-analytics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/ga4-missing-shopify-orders-eu", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/shopify-landing-page-conversion", changeFrequency: "monthly", priority: 0.8 },
  { path: "/trust", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/docs", changeFrequency: "monthly", priority: 0.6 },
  { path: "/docs/custom-pixel", changeFrequency: "monthly", priority: 0.5 },
  { path: "/docs/invite-team", changeFrequency: "monthly", priority: 0.4 },
  { path: "/docs/multiple-stores", changeFrequency: "monthly", priority: 0.5 },
  { path: "/docs/order-webhook", changeFrequency: "monthly", priority: 0.5 },
  { path: "/docs/reauthorize", changeFrequency: "monthly", priority: 0.4 },
  { path: "/changelog", changeFrequency: "weekly", priority: 0.5 },
  { path: "/legal/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/legal/terms", changeFrequency: "monthly", priority: 0.3 },
  { path: "/legal/dpa", changeFrequency: "monthly", priority: 0.3 },
];

export function plansPlaintext() {
  const plans = PLANS.map(
    (plan) =>
      `${plan.name} is ${formatEur(plan.monthlyEur)} a month for ${plan.sessions.toLocaleString("en-US")} sessions, or ${formatEur(plan.yearlyEur)} a month billed yearly.`,
  ).join(" ");
  return `${plans} Every plan includes funnel, sessions, campaigns and orders. A 7-day trial needs a card through Stripe. Cancel before it ends and you pay nothing. Above 1,000,000 sessions, email ${CONTACT_EMAIL}.`;
}
