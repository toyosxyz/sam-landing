export const compareSlugs = ["ga4", "shopify-analytics"] as const;
export type CompareSlug = (typeof compareSlugs)[number];

export type Comparison = {
  rival: string;
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
    description:
      "How Sam compares with Google Analytics 4 for a Shopify store selling in Europe: cookies, consent, setup, orders and price.",
    lead: "GA4 is a general-purpose analytics suite. Sam does one thing: show Shopify merchants where shoppers drop off, without asking anyone for consent.",
    heroImage: "/images/plan-valley.png",
    rows: [
      { label: "Built for", sam: "Shopify stores", rival: "Any website or app" },
      {
        label: "Cookies on the shopper",
        sam: "None, and no browser storage",
        rival: "First-party cookies",
      },
      {
        label: "Consent banner for analytics",
        sam: "Not needed for Sam",
        rival: "Usually required in the EU",
      },
      {
        label: "Setup",
        sam: "Install the app. No code",
        rival: "Tags, ecommerce events and consent mode",
      },
      { label: "Purchase funnel", sam: "Ready on day one", rival: "Built in Explorations" },
      {
        label: "Where orders come from",
        sam: "Shopify webhooks, so every order counts",
        rival: "The browser, so consent and blockers leave gaps",
      },
      { label: "Where data lives", sam: "The EU", rival: "Google's global infrastructure" },
      { label: "Price", sam: "From €29 a month", rival: "Free" },
    ],
    fairTake: {
      title: "When GA4 is the better fit.",
      reasons: [
        {
          title: "You run apps and sites",
          body: "GA4 measures web and mobile apps in one place. Sam only sees your Shopify storefront.",
        },
        {
          title: "You live in Google Ads",
          body: "Audiences and bidding signals come from Google's own tags. Sam doesn't feed ad platforms.",
        },
        {
          title: "You need returning users",
          body: "Sam's sessions reset every day by design, so it won't follow a shopper across weeks.",
        },
      ],
    },
    useBoth: {
      body: "Plenty of stores keep GA4 for ads and use Sam to see the funnel. Sam doesn't touch your GA4 setup, and GA4 doesn't slow Sam down.",
      image: "/images/hills-campaigns.png",
    },
  },
  "shopify-analytics": {
    rival: "Shopify Analytics",
    description:
      "How Sam compares with Shopify's built-in analytics: consent, visit detail, funnels, campaigns and price.",
    lead: "Shopify's reports tell you what sold. Sam shows the path shoppers took to get there, and where the rest dropped off, without needing their consent.",
    heroImage: "/images/hills-sessions.png",
    rows: [
      { label: "Built for", sam: "Shopify stores", rival: "Shopify stores, built in" },
      {
        label: "Cookies on the shopper",
        sam: "None, and no browser storage",
        rival: "Shopify's analytics cookies",
      },
      {
        label: "Shoppers who decline consent",
        sam: "Counted. There's nothing to decline",
        rival: "Limited or missing from reports",
      },
      { label: "Visit detail", sam: "Every event of every session", rival: "Aggregated reports" },
      {
        label: "Purchase funnel",
        sam: "Five steps, by device and channel",
        rival: "Cart, checkout and purchase rates",
      },
      {
        label: "Campaigns",
        sam: "UTM builder and a funnel per link",
        rival: "Reports by UTM parameters",
      },
      { label: "Where data lives", sam: "The EU", rival: "Shopify's infrastructure" },
      { label: "Price", sam: "From €29 a month", rival: "Included in your Shopify plan" },
    ],
    fairTake: {
      title: "When Shopify Analytics is enough.",
      reasons: [
        {
          title: "You just need the totals",
          body: "Sales, orders and top products are already in your admin, at no extra cost.",
        },
        {
          title: "Few shoppers in the EU",
          body: "If most traffic comes from places without consent banners, the gaps in Shopify's numbers stay small.",
        },
        {
          title: "You never open a session",
          body: "If visit-level detail isn't how you work, Shopify's aggregate reports may be all you need.",
        },
      ],
    },
    useBoth: {
      body: "Sam doesn't replace your Shopify reports. It sits next to them and adds the visits, steps and campaigns behind every order.",
      image: "/images/hills-channels.png",
    },
  },
};

export function isCompareSlug(slug: string): slug is CompareSlug {
  return (compareSlugs as readonly string[]).includes(slug);
}
