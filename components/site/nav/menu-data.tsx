import type { ReactNode } from "react";

export type MenuKey = "product" | "resources" | "compare";

export type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

export type MenuFeature = {
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imagePosition?: string;
  imageHeight: number;
};

export type Menu = {
  key: MenuKey;
  label: string;
  heading: string;
  /** "pill" anchors the panel to the start of the nav pill, "trigger" to the trigger itself. */
  align: "pill" | "trigger";
  items: MenuItem[];
  footnote?: { label: string; href: string };
  feature: MenuFeature;
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0"
    >
      {children}
    </svg>
  );
}

export const icons = {
  funnel: (
    <Icon>
      <path d="M2 3h12l-4.5 5v4.5l-3 1.5V8L2 3z" />
    </Icon>
  ),
  sessions: (
    <Icon>
      <circle cx="3.5" cy="4" r="1.5" />
      <circle cx="3.5" cy="12" r="1.5" />
      <path d="M3.5 5.5v5M7 4h6.5M7 12h6.5M7 8h4.5" />
    </Icon>
  ),
  campaigns: (
    <Icon>
      <path d="M6.5 9.5l3-3M7 4.5l1.2-1.2a2.6 2.6 0 013.7 3.7L10.7 8.2M9 11.5l-1.2 1.2a2.6 2.6 0 01-3.7-3.7L5.3 7.8" />
    </Icon>
  ),
  orders: (
    <Icon>
      <path d="M3 5.5h10l-.8 8H3.8L3 5.5z" />
      <path d="M5.8 5.5V4.5a2.2 2.2 0 014.4 0v1" />
    </Icon>
  ),
  docs: (
    <Icon>
      <path d="M4 2h5.5L12.5 5v9h-8.5V2z" />
      <path d="M6.5 8h4M6.5 10.8h4" />
    </Icon>
  ),
  server: (
    <Icon>
      <rect x="2.5" y="2.75" width="11" height="4.5" rx="1.2" />
      <rect x="2.5" y="8.75" width="11" height="4.5" rx="1.2" />
      <path d="M5 5h.01M5 11h.01" strokeWidth="1.8" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M8 2l5 1.8v4c0 3-2.1 5.1-5 6.2-2.9-1.1-5-3.2-5-6.2v-4L8 2z" />
      <path d="M5.8 8.1l1.5 1.5 2.9-3" />
    </Icon>
  ),
  lock: (
    <Icon>
      <rect x="3.25" y="7" width="9.5" height="6.75" rx="1.6" />
      <path d="M5.5 7V5.2a2.5 2.5 0 015 0V7" />
    </Icon>
  ),
  bars: (
    <Icon>
      <path d="M3.5 13V9M8 13V3M12.5 13V6.5" strokeWidth="1.6" />
    </Icon>
  ),
};

export const menus: Menu[] = [
  {
    key: "product",
    label: "Product",
    heading: "What Sam shows",
    align: "pill",
    items: [
      {
        title: "Funnel",
        description: "See where shoppers drop",
        href: "/product/funnel",
        icon: icons.funnel,
      },
      {
        title: "Sessions",
        description: "Follow any visit",
        href: "/product/sessions",
        icon: icons.sessions,
      },
      {
        title: "Campaigns",
        description: "See which campaigns sell",
        href: "/product/campaigns",
        icon: icons.campaigns,
      },
      {
        title: "Orders",
        description: "Every Shopify order, counted",
        href: "/product/orders",
        icon: icons.orders,
      },
    ],
    feature: {
      title: "How it works",
      description: "Analytics that never touch the browser.",
      href: "/how-it-works",
      cta: "See how it works",
      image: "/images/menu-product.png",
      imageHeight: 150,
    },
  },
  {
    key: "resources",
    label: "Resources",
    heading: "Learn more",
    align: "trigger",
    items: [
      {
        title: "Docs",
        description: "Install and custom events",
        href: "/docs",
        icon: icons.docs,
      },
      {
        title: "How it works",
        description: "How Sam tracks without cookies",
        href: "/how-it-works",
        icon: icons.server,
      },
      {
        title: "Trust center",
        description: "Where your data lives",
        href: "/trust",
        icon: icons.shield,
      },
      {
        title: "Privacy",
        description: "Our privacy policy",
        href: "/legal/privacy",
        icon: icons.lock,
      },
    ],
    feature: {
      title: "A funnel for every campaign",
      description: "New in v1.4: see how far each campaign's visitors got.",
      href: "/changelog",
      cta: "Read the changelog",
      image: "/images/menu-changelog.png",
      imageHeight: 150,
    },
  },
  {
    key: "compare",
    label: "Compare",
    heading: "Sam vs",
    align: "trigger",
    items: [
      {
        title: "Google Analytics 4",
        description: "Your funnel, no consent banner",
        href: "/compare/ga4",
        icon: icons.bars,
      },
      {
        title: "Shopify Analytics",
        description: "The path behind every sale",
        href: "/compare/shopify-analytics",
        icon: icons.orders,
      },
    ],
    footnote: {
      label: "When GA4 is the better fit",
      href: "/compare/ga4#fair-take",
    },
    feature: {
      title: "Or keep both",
      description: "Keep GA4 for ads. Use Sam for the funnel.",
      href: "/pricing",
      cta: "See plans from €29",
      image: "/images/menu-compare.png",
      imagePosition: "50% 60%",
      imageHeight: 96,
    },
  },
];

export const topLinks = {
  pricing: { label: "Pricing", href: "/pricing" },
  signIn: { label: "Sign in", href: "/signin" },
  install: { label: "Start 7-day trial", href: "/install" },
};

export const mobileResources = [
  { label: "Docs", href: "/docs" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Changelog", href: "/changelog", badge: "v1.4" },
  { label: "Trust center", href: "/trust" },
  { label: "Privacy", href: "/legal/privacy" },
];
