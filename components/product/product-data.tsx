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
  seoTitle: string;
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
  definition: { question: string; answer: string };
  faqs: { q: string; a: string }[];
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
    seoTitle: "Shopify Conversion Funnel Analytics | Sam",
    description:
      "Five Shopify funnel steps from visit to purchase. See where shoppers drop by device, channel or country. Cookieless, no banner for Sam.",
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
    definition: {
      question: "What is a Shopify conversion funnel?",
      answer:
        "A Shopify conversion funnel is the path from visit to order: visit, product viewed, cart, checkout and purchase. Sam shows each step for every session, including shoppers who decline cookies, and splits the drop by device, channel or country. Purchases come from Shopify so the last step matches your admin.",
    },
    faqs: [
      {
        q: "How many funnel steps does Sam show?",
        a: "Five: visit, product viewed, added to cart, checkout started and purchase. Every session is counted, then you see the drop at each step.",
      },
      {
        q: "Does the funnel include shoppers who decline cookies?",
        a: "Yes. Sam sets no cookies, so those visits still appear. Other pixels on the store may still miss them.",
      },
      {
        q: "Where do purchases come from?",
        a: "Shopify webhooks. The last funnel step matches your orders. About 90–95% also have the full visit path when Sam saw the checkout.",
      },
    ],
    more: ["sessions", "campaigns", "orders"],
  },
  sessions: {
    name: "Sessions",
    seoTitle: "Shopify Session Tracking Without Cookies | Sam",
    description:
      "Follow every Shopify visit from landing to thank-you, event by event. Anonymous ID that resets daily. No cookies, no banner for Sam.",
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
    definition: {
      question: "What is Shopify session tracking without cookies?",
      answer:
        "Cookieless Shopify session tracking records each visit from landing to thank-you without cookies or browser storage. Sam gives the visit an anonymous ID that resets every day, then lists every page, cart and checkout in order, with device and channel. Sam never knows who the shopper is.",
    },
    faqs: [
      {
        q: "Does Sam follow returning customers?",
        a: "No. The visitor ID resets every day, so tomorrow's visit is a new session. That is what keeps Sam cookieless.",
      },
      {
        q: "Can I delete a session?",
        a: "Yes. Filter by any field and delete a session in one click. Collection stops if you uninstall.",
      },
      {
        q: "What does a session include?",
        a: "Landing path, device, browser, country, channel, and every event in order. Live visits show who is on the store right now.",
      },
    ],
    more: ["funnel", "campaigns", "orders"],
  },
  campaigns: {
    name: "Campaigns",
    seoTitle: "Shopify UTM Campaign Attribution | Sam",
    description:
      "Build UTM links in Sam and see each campaign's funnel to checkout and order. Know which campaigns sell, without cookies.",
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
    definition: {
      question: "How does Shopify UTM tracking reach orders?",
      answer:
        "Sam lets you build a UTM link, share it in an ad, email or bio, and see that campaign's funnel to checkout. Orders come from Shopify webhooks, so you see which campaigns sold, not only which ones got clicks. No cookies are required for Sam to credit the visit.",
    },
    faqs: [
      {
        q: "Do I need cookies for UTM tracking?",
        a: "Not for Sam. The campaign is stored with the visit. Shoppers who decline cookies still carry the UTM into the funnel when Sam saw the session.",
      },
      {
        q: "Can I see a funnel per campaign?",
        a: "Yes. Each campaign shows views, carts, checkouts and orders side by side. Added in v1.4.",
      },
      {
        q: "What if a shopper strips the UTM?",
        a: "Then that visit is not credited to the campaign. The order still counts if Shopify sent it.",
      },
    ],
    more: ["funnel", "sessions", "orders"],
  },
  orders: {
    name: "Orders",
    seoTitle: "Match Shopify Orders to the Visit | Sam",
    description:
      "Every Shopify order counted from webhooks. About 90–95% link to a full visit path. The rest still count toward revenue.",
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
    definition: {
      question: "How does Sam match Shopify orders without cookies?",
      answer:
        "Orders arrive from Shopify webhooks, so every purchase is counted. When Sam saw the checkout in that visit, it matches the order to the session and campaign with a short-lived hash. About 90–95% of orders get a complete visit path. The rest still count toward revenue. No order IDs, names or emails are kept.",
    },
    faqs: [
      {
        q: "Why isn't every order linked to a visit?",
        a: "Sam links an order when it saw that checkout earlier in the visit. That covers about 90–95% of orders. The rest still count toward revenue.",
      },
      {
        q: "Does Sam store customer names or emails?",
        a: "No. Sam keeps amount, currency, products and campaign. Customer details stay in Shopify.",
      },
      {
        q: "Can I send orders from outside Shopify?",
        a: "Yes, with a signed order webhook. See the docs. Shopify remains the default source.",
      },
    ],
    more: ["funnel", "campaigns", "sessions"],
  },
};
