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
    body: "See where shoppers drop, by device and channel.",
    image: "/images/hills-funnel.png",
  },
  sessions: {
    title: "Sessions",
    body: "Follow any visit, from landing to thank-you page.",
    image: "/images/hills-sessions.png",
  },
  campaigns: {
    title: "Campaigns",
    body: "Build UTM links and see which ones sell.",
    image: "/images/hills-campaigns.png",
  },
  orders: {
    title: "Orders",
    body: "Every Shopify order, linked to its visit when possible.",
    image: "/images/hills-channels.png",
  },
};

export const products: Record<ProductSlug, Product> = {
  funnel: {
    name: "Funnel",
    description: "Five steps from visit to order, and where shoppers drop.",
    hero: {
      title: "See where shoppers drop.",
      muted: "Step by step, by device.",
      lead: "Five steps from visit to order. See the drop at each one, by device, channel or country.",
      imagePosition: "50% 60%",
      Visual: FunnelHeroVisual,
      visualGap: "pt-12 lg:pt-[72px]",
    },
    highlights: {
      title: "One funnel, built for Shopify.",
      muted: "Nothing to configure.",
      items: [
        {
          title: "Five steps",
          body: "Visit, product, cart, checkout and purchase. Every session counted.",
        },
        {
          title: "The drop, in numbers",
          body: "See which step loses the most shoppers, so you fix it first.",
        },
        {
          title: "Matches Shopify",
          body: "Purchases come from Shopify, so the last step matches your orders.",
        },
      ],
    },
    split: {
      chip: "Breakdowns",
      title: "Split it any way.",
      body: "By device, browser, channel or country. Find the leak before you redesign.",
      Visual: FunnelSplitVisual,
    },
    more: ["sessions", "campaigns", "orders"],
  },
  sessions: {
    name: "Sessions",
    description: "Every page, cart and checkout of a visit, in order. Fully anonymous.",
    hero: {
      title: "Follow any visit.",
      muted: "From landing to thank-you page.",
      lead: "Every page, cart and checkout in order, with the device and channel that brought them. Sam never knows who the shopper is.",
      imagePosition: "30% 60%",
      Visual: SessionsHeroVisual,
      visualGap: "pt-12 lg:pt-[72px]",
    },
    highlights: {
      title: "Every visit, event by event.",
      muted: "Anonymous and reset daily.",
      items: [
        {
          title: "Live",
          body: "See who is on your store right now.",
        },
        {
          title: "Context on every visit",
          body: "Landing page, device, browser, country and channel.",
        },
        {
          title: "Filter and delete",
          body: "Filter by any field. Delete a session in one click.",
        },
      ],
    },
    split: {
      chip: "Visitor ID",
      title: "Private by design.",
      body: "Each visit gets an anonymous ID that resets every day. Sam never knows who the shopper is.",
      Visual: SessionsSplitVisual,
    },
    more: ["funnel", "campaigns", "orders"],
  },
  campaigns: {
    name: "Campaigns",
    description: "Build UTM links in Sam and see each campaign's funnel, down to the order.",
    hero: {
      title: "Know which campaigns sell.",
      muted: "Down to the order.",
      lead: "Build UTM links in Sam, share them anywhere and see each campaign's funnel to checkout.",
      imagePosition: "70% 60%",
      Visual: CampaignsHeroVisual,
      visualGap: "pt-16 lg:pt-32",
    },
    highlights: {
      title: "From link to order.",
      muted: "In one place.",
      items: [
        {
          title: "Build the link",
          body: "Pick a source, medium and name. Sam writes the link.",
        },
        {
          title: "Share it",
          body: "Use it in an ad, an email or a bio.",
        },
        {
          title: "See its funnel",
          body: "Views, carts, checkouts and orders, side by side.",
        },
      ],
    },
    split: {
      chip: "UTM builder",
      title: "A link in seconds.",
      body: "Fill in three fields. Copy a clean tracking link.",
      Visual: CampaignsSplitVisual,
    },
    more: ["funnel", "sessions", "orders"],
  },
  orders: {
    name: "Orders",
    description: "Every Shopify order, linked to the visit and campaign that brought it.",
    hero: {
      title: "Every order, counted.",
      muted: "Linked to its visit when possible.",
      lead: "Orders come from Shopify, so revenue matches your store. 90–95% link to a full visit. The rest still count.",
      imagePosition: "50% 40%",
      Visual: OrdersHeroVisual,
      visualGap: "pt-12 lg:pt-[72px]",
    },
    highlights: {
      title: "Revenue you can trust.",
      muted: "Attribution you can explain.",
      items: [
        {
          title: "Straight from Shopify",
          body: "Orders arrive from Shopify. Cancelled orders are removed.",
        },
        {
          title: "Linked without cookies",
          body: "Each checkout is matched to its visit. Nothing touches the browser.",
        },
        {
          title: "No order IDs kept",
          body: "Sam keeps amount, currency, products and campaign. Customer details stay in Shopify.",
        },
      ],
    },
    split: {
      chip: "Attribution",
      title: "Honest attribution.",
      body: "If Sam saw the checkout, the order is credited to its visit and campaign. If not, it still counts.",
      Visual: OrdersSplitVisual,
    },
    more: ["funnel", "campaigns", "sessions"],
  },
};
