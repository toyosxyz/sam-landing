import type { ComponentType } from "react";
import {
  CampaignsHeroVisual,
  CampaignsSplitVisual,
  FunnelHeroVisual,
  FunnelSplitVisual,
  OrdersHeroVisual,
  OrdersSplitVisual,
  SessionsHeroVisual,
  SessionsSplitVisual,
} from "./visuals";

export const productSlugs = ["funnel", "sessions", "campaigns", "orders"] as const;
export type ProductSlug = (typeof productSlugs)[number];

export type Product = {
  name: string;
  description: string;
  hero: {
    title: string;
    muted: string;
    lead: string;
    imagePosition: string;
    Visual: ComponentType;
    visualGap: string;
  };
  highlights: {
    title: string;
    muted: string;
    items: { title: string; body: string }[];
  };
  split: { chip: string; title: string; body: string; Visual: ComponentType };
  more: ProductSlug[];
};

export const productCards: Record<
  ProductSlug,
  { title: string; body: string; image: string }
> = {
  funnel: {
    title: "Funnel",
    body: "See where shoppers drop, step by step, by device and channel.",
    image: "/images/hills-funnel.png",
  },
  sessions: {
    title: "Sessions",
    body: "Follow any shopper, step by step, from landing page to thank-you page.",
    image: "/images/hills-sessions.png",
  },
  campaigns: {
    title: "Campaigns",
    body: "Build UTM links and see each campaign's funnel down to the order.",
    image: "/images/hills-campaigns.png",
  },
  orders: {
    title: "Orders",
    body: "Every Shopify order, counted, and linked to its session when possible.",
    image: "/images/hills-channels.png",
  },
};

export const products: Record<ProductSlug, Product> = {
  funnel: {
    name: "Funnel",
    description:
      "Five steps from first visit to confirmed order, the drop between each one, and who falls off.",
    hero: {
      title: "See exactly where the trail breaks.",
      muted: "Step by step, device by device.",
      lead: "Five steps from first visit to confirmed order, the drop between each one, and who falls off: mobile or desktop, ads or newsletter, Spain or France.",
      imagePosition: "50% 60%",
      Visual: FunnelHeroVisual,
      visualGap: "pt-12 lg:pt-[72px]",
    },
    highlights: {
      title: "One funnel, built around Shopify.",
      muted: "No events to configure, no reports to build.",
      items: [
        {
          title: "Five steps, all counted",
          body: "Visit, product viewed, added to cart, checkout started and purchase. Every session is counted, nothing is sampled.",
        },
        {
          title: "The drop, in numbers",
          body: "See how many shoppers leave between each step, so you know which one to fix first.",
        },
        {
          title: "The last step matches Shopify",
          body: "Purchases come from Shopify's order webhooks, so the bottom of the funnel always matches your orders.",
        },
      ],
    },
    split: {
      chip: "Breakdowns",
      title: "Split it any way you need.",
      body: "Device, OS, browser, channel, referrer or country. Find the segment that leaks before you redesign anything.",
      Visual: FunnelSplitVisual,
    },
    more: ["sessions", "campaigns", "orders"],
  },
  sessions: {
    name: "Sessions",
    description:
      "Every page view, product view, add-to-cart and checkout, in order, without knowing who the shopper is.",
    hero: {
      title: "Follow any shopper, step by step.",
      muted: "From landing page to thank-you page.",
      lead: "Every page view, product view, add-to-cart and checkout, in order, with the landing page, device and channel that brought them. Without knowing who they are.",
      imagePosition: "30% 60%",
      Visual: SessionsHeroVisual,
      visualGap: "pt-12 lg:pt-[72px]",
    },
    highlights: {
      title: "Every session, event by event.",
      muted: "Without following anyone across days.",
      items: [
        {
          title: "Live, as it happens",
          body: "Sessions show up while the shopper is still browsing. See who is on your store right now.",
        },
        {
          title: "Context on every visit",
          body: "Landing page, device, OS, browser, country and channel, attached to every session.",
        },
        {
          title: "Filter and delete",
          body: "Filter sessions by any field, and delete one in a click if a shopper asks you to.",
        },
      ],
    },
    split: {
      chip: "Session key",
      title: "Private by design.",
      body: "Each key is a hash of IP, user agent and store with a salt that changes every day. Sam never knows who the shopper is.",
      Visual: SessionsSplitVisual,
    },
    more: ["funnel", "campaigns", "orders"],
  },
  campaigns: {
    name: "Campaigns",
    description:
      "Build UTM links in Sam, share them anywhere, and see each campaign's funnel from first visit to completed checkout.",
    hero: {
      title: "Know which campaigns bring buyers.",
      muted: "Not just clicks.",
      lead: "Build UTM links in Sam, share them anywhere, and see each campaign's funnel from first visit to completed checkout.",
      imagePosition: "70% 60%",
      Visual: CampaignsHeroVisual,
      visualGap: "pt-16 lg:pt-32",
    },
    highlights: {
      title: "From link to order, in one place.",
      muted: "No spreadsheets full of UTM parameters.",
      items: [
        {
          title: "Build the link",
          body: "Pick a source, a medium and a name. Sam writes the UTM link for you.",
        },
        {
          title: "Copy and share",
          body: "Paste it in an ad, an email or a bio. Every visit from it is tagged on its own.",
        },
        {
          title: "See its funnel",
          body: "Views, add-to-carts, checkouts and completed orders for every campaign, side by side.",
        },
      ],
    },
    split: {
      chip: "UTM builder",
      title: "Make the link in seconds.",
      body: "Source, medium and campaign name in, a clean tracking link out. Copy it and you're done.",
      Visual: CampaignsSplitVisual,
    },
    more: ["funnel", "sessions", "orders"],
  },
  orders: {
    name: "Orders",
    description:
      "Orders come straight from Shopify, linked to the session and campaign that brought them when Sam saw the checkout.",
    hero: {
      title: "Every order, counted.",
      muted: "And credited when the trail allows.",
      lead: "Orders come straight from Shopify, so revenue in Sam always matches your store. When Sam saw the checkout, each order is linked to the session and campaign that brought it.",
      imagePosition: "50% 40%",
      Visual: OrdersHeroVisual,
      visualGap: "pt-12 lg:pt-[72px]",
    },
    highlights: {
      title: "Revenue you can trust.",
      muted: "Attribution you can explain.",
      items: [
        {
          title: "Counted from Shopify",
          body: "Orders arrive through Shopify's order webhooks. Cancelled orders are taken out on their own.",
        },
        {
          title: "Linked without cookies",
          body: "The checkout is matched to its session through a short-lived hash. Nothing is written to the cart or the browser.",
        },
        {
          title: "No order IDs kept",
          body: "Sam keeps amount, currency, products and campaign. Order numbers and customer details stay in Shopify.",
        },
      ],
    },
    split: {
      chip: "Attribution",
      title: "Honest attribution.",
      body: "If Sam saw the checkout, the order is credited to its session and campaign. If not, it still counts, it just isn't credited. No guesses.",
      Visual: OrdersSplitVisual,
    },
    more: ["funnel", "campaigns", "sessions"],
  },
};
