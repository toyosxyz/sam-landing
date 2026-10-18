export const compareSlugs = ["ga4", "shopify-analytics", "plausible", "metrixs"] as const;
export type CompareSlug = (typeof compareSlugs)[number];

export type Comparison = {
  rival: string;
  seoTitle: string;
  description: string;
  lead: string;
  definition: string;
  heroImage: string;
  priceNote: string;
  rows: { label: string; sam: string; rival: string }[];
  fairTake: { title: string; reasons: { title: string; body: string }[] };
  useBoth: { body: string; image: string };
};

export const comparisons: Record<CompareSlug, Comparison> = {
  ga4: {
    rival: "Google Analytics 4",
    seoTitle: "Sam vs GA4: Shopify Funnel Without a Banner",
    description:
      "Sam vs GA4 for a Shopify store in Europe: cookies, consent, setup, orders and price. Keep GA4 for ads; use Sam for the funnel.",
    lead: "GA4 measures any site or app. Sam shows Shopify stores where shoppers drop and which campaigns sell, without a consent banner.",
    definition:
      "Sam and Google Analytics 4 both measure store traffic, but they collect it differently. GA4 uses first-party cookies and usually needs a consent banner in the EU, so declined visits never reach a purchase event. Sam records cookieless sessions and counts every Shopify order from webhooks. Keep GA4 for ads. Use Sam for the funnel.",
    heroImage: "/images/plan-valley.png",
    priceNote: "GA4 is free. Sam starts at €29 a month (October 2026).",
    rows: [
      { label: "Built for", sam: "Shopify stores", rival: "Any website or app" },
      { label: "Cookies", sam: "None", rival: "First-party cookies" },
      {
        label: "Consent banner",
        sam: "Not needed for Sam",
        rival: "Usually required in the EU",
      },
      { label: "Setup", sam: "Install the app", rival: "Tags, events and consent mode" },
      { label: "Purchase funnel", sam: "Ready on day one", rival: "Built in Explorations" },
      {
        label: "Orders",
        sam: "From Shopify. All counted",
        rival: "From the browser. Gaps from consent",
      },
      { label: "Data hosted in", sam: "The EU", rival: "Google's global servers" },
      { label: "Price", sam: "From €29 a month", rival: "Free" },
    ],
    fairTake: {
      title: "When GA4 is the better fit.",
      reasons: [
        {
          title: "You run apps too",
          body: "GA4 covers web and apps. Sam only sees your Shopify store.",
        },
        {
          title: "You live in Google Ads",
          body: "Audiences and bidding need Google's own tags.",
        },
        {
          title: "You need returning users",
          body: "Sam resets visits daily. It won't follow a shopper for weeks.",
        },
      ],
    },
    useBoth: {
      body: "Keep GA4 for ads and use Sam for the funnel. Sam doesn't touch your GA4 setup.",
      image: "/images/hills-campaigns.png",
    },
  },
  "shopify-analytics": {
    rival: "Shopify Analytics",
    seoTitle: "Sam vs Shopify Analytics After Cookie Consent",
    description:
      "Sam vs Shopify Analytics when shoppers decline cookies: visit detail, five-step funnel, UTM campaigns and EU hosting.",
    lead: "Shopify tells you what sold. Sam shows the path behind it, including visits that decline cookies.",
    definition:
      "Shopify Analytics is included in your admin and is enough for sales totals. From 31 October 2023, Shopify collects marketing and analytics data in the EEA and UK only with consent, which cuts visit-level numbers when shoppers decline. Sam still counts those visits without cookies and links orders from Shopify webhooks. Source: Shopify changelog, 18 October 2023.",
    heroImage: "/images/hills-sessions.png",
    priceNote: "Shopify Analytics is included. Sam starts at €29 a month (October 2026).",
    rows: [
      { label: "Built for", sam: "Shopify stores", rival: "Shopify stores, built in" },
      { label: "Cookies", sam: "None", rival: "Shopify's analytics cookies" },
      {
        label: "Shoppers who decline consent",
        sam: "Counted",
        rival: "Limited or missing",
      },
      { label: "Visit detail", sam: "Every event of every visit", rival: "Totals" },
      {
        label: "Purchase funnel",
        sam: "Five steps, by device and channel",
        rival: "Cart, checkout and purchase rates",
      },
      { label: "Campaigns", sam: "UTM builder, funnel per link", rival: "UTM reports" },
      { label: "Data hosted in", sam: "The EU", rival: "Shopify's servers" },
      { label: "Price", sam: "From €29 a month", rival: "Included in Shopify" },
    ],
    fairTake: {
      title: "When Shopify Analytics is enough.",
      reasons: [
        {
          title: "You just need totals",
          body: "Sales and top products are already in your admin, for free.",
        },
        {
          title: "Few shoppers in the EU",
          body: "Without consent banners, the gaps in Shopify's numbers stay small.",
        },
        {
          title: "You never open a session",
          body: "If visit detail isn't how you work, Shopify's reports may be enough.",
        },
      ],
    },
    useBoth: {
      body: "Keep your Shopify reports. Sam adds the visits and campaigns behind every order.",
      image: "/images/hills-channels.png",
    },
  },
  plausible: {
    rival: "Plausible",
    seoTitle: "Sam vs Plausible for Shopify Stores",
    description:
      "Sam vs Plausible: cookieless analytics compared. Plausible measures any site. Sam is Shopify-native with order webhooks and a five-step funnel.",
    lead: "Plausible is privacy-first site analytics. Sam is cookieless analytics built around Shopify orders.",
    definition:
      "Plausible and Sam both skip cookies and a banner for their own scripts. Plausible measures pageviews on any website and adds funnels on its Business plan. Sam is built for Shopify: a five-step purchase funnel, UTM campaigns to checkout, and every order from Shopify webhooks. Prices below are dated 18 October 2026.",
    heroImage: "/images/privacy-hedgerow.png",
    priceNote:
      "Plausible Business prices from public plan tables, 18 October 2026: $19 at 10k pageviews, $39 at 100k, $99 at 500k. Funnels and revenue sit on Business. 30-day trial, no card. Sam: from €29 a month for 25,000 Shopify sessions, 7-day trial with a card.",
    rows: [
      { label: "Built for", sam: "Shopify stores", rival: "Any website" },
      { label: "Cookies", sam: "None", rival: "None" },
      { label: "Shopify orders", sam: "Webhooks, all counted", rival: "Not native" },
      { label: "Purchase funnel", sam: "Five Shopify steps on day one", rival: "Business plan, you configure it" },
      { label: "UTM to order", sam: "Yes", rival: "Goals and revenue events you send" },
      { label: "Unit billed", sam: "Sessions / month", rival: "Pageviews + custom events" },
      { label: "Data hosted in", sam: "The EU", rival: "EU (Plausible Cloud)" },
      { label: "Trial", sam: "7 days, card required", rival: "30 days, no card" },
      {
        label: "Price at ~100k pageviews",
        sam: "€29 for 25k sessions (often similar traffic)",
        rival: "$39 Business / month (18 Oct 2026)",
      },
    ],
    fairTake: {
      title: "When Plausible is the better fit.",
      reasons: [
        {
          title: "You measure more than Shopify",
          body: "A blog, marketing site or non-Shopify checkout belongs in Plausible. Sam only sees the store.",
        },
        {
          title: "You want a longer trial without a card",
          body: "Plausible gives 30 days. Sam's trial is 7 days and needs Stripe.",
        },
        {
          title: "You want to self-host",
          body: "Plausible is open source. Sam is a hosted Shopify app.",
        },
      ],
    },
    useBoth: {
      body: "Use Plausible for the marketing site. Use Sam for the Shopify funnel and orders.",
      image: "/images/hills-funnel.png",
    },
  },
  metrixs: {
    rival: "MetriXs",
    seoTitle: "Sam vs MetriXs: Cookieless Shopify Analytics",
    description:
      "Sam vs MetriXs for Shopify. Both skip cookies. MetriXs is cheaper at low pageviews. Sam adds a five-step funnel and Shopify order webhooks.",
    lead: "MetriXs is a cookieless Shopify app billed by pageviews. Sam is session-based Shopify analytics with orders from webhooks.",
    definition:
      "MetriXs and Sam both market cookieless Shopify analytics. MetriXs launched on 28 August 2026 and bills by pageviews from €0 to €14. Sam bills by sessions from €29, shows a five-step funnel, and counts every Shopify order from webhooks. Prices and listing details are from 18 October 2026. MetriXs had no App Store reviews on that date.",
    heroImage: "/images/hills-funnel.png",
    priceNote:
      "MetriXs App Store listing, 18 October 2026: Free 5k pageviews; Basic €6 / 15k; Team €9 / 100k; Pro €14 / 500k. 14-day trial. Shopify Billing. Sam: Garden €29 / 25k sessions, Meadow €79 / 100k sessions.",
    rows: [
      { label: "Built for", sam: "Shopify stores", rival: "Shopify stores" },
      { label: "Cookies", sam: "None", rival: "None (listing claim)" },
      { label: "Orders", sam: "Shopify webhooks, all counted", rival: "Not documented as webhook match" },
      { label: "Funnel", sam: "Visit → product → cart → checkout → purchase", rival: "Pageview-led reports" },
      { label: "Unit billed", sam: "Sessions / month", rival: "Pageviews / month" },
      { label: "Trial", sam: "7 days, card required", rival: "14 days" },
      { label: "Billing", sam: "Stripe today", rival: "Shopify Billing" },
      { label: "Price at 100k pageviews", sam: "€29–€79 depending on sessions", rival: "€9 Team (18 Oct 2026)" },
    ],
    fairTake: {
      title: "When MetriXs is the better fit.",
      reasons: [
        {
          title: "You want the lowest Shopify-native price",
          body: "MetriXs undercuts Sam at every published pageview tier. A small store that only needs pageviews will pay less there.",
        },
        {
          title: "You want a 14-day trial",
          body: "MetriXs offers 14 days. Sam's trial is 7 days with a card.",
        },
        {
          title: "You bill through Shopify",
          body: "MetriXs uses Shopify Billing. Sam currently charges with Stripe.",
        },
      ],
    },
    useBoth: {
      body: "Most stores should pick one cookieless Shopify app. If you only need cheap pageviews, start with MetriXs. If you need funnel and order match, use Sam.",
      image: "/images/hills-sessions.png",
    },
  },
};

export function isCompareSlug(slug: string): slug is CompareSlug {
  return (compareSlugs as readonly string[]).includes(slug);
}
