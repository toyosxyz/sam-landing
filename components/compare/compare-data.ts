export const compareSlugs = ["ga4", "shopify-analytics"] as const;
export type CompareSlug = (typeof compareSlugs)[number];

export type Comparison = {
  rival: string;
  seoTitle: string;
  description: string;
  lead: string;
  heroImage: string;
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
    heroImage: "/images/plan-valley.png",
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
    heroImage: "/images/hills-sessions.png",
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
};

export function isCompareSlug(slug: string): slug is CompareSlug {
  return (compareSlugs as readonly string[]).includes(slug);
}
