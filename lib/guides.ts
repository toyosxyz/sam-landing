export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string }
  | { type: "source"; text: string; href: string };

export type GuideSection = {
  id: string;
  title: string;
  blocks: GuideBlock[];
};

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  chip: string;
  lead: string;
  definitionQuestion: string;
  definition: string;
  image: string;
  datePublished: string;
  dateModified: string;
  updatedLabel: string;
  author: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: { href: string; title: string; body: string; image: string }[];
};

const relatedBase = {
  cookieless: {
    href: "/guides/cookieless-shopify-analytics",
    title: "Cookieless Shopify analytics",
    body: "What it is, what it measures, and what it cannot do.",
    image: "/images/privacy-hedgerow.png",
  },
  ga4: {
    href: "/guides/ga4-missing-shopify-orders-eu",
    title: "Why GA4 misses Shopify orders",
    body: "Consent in the EU, browser hits, and webhook orders.",
    image: "/images/plan-valley.png",
  },
  landings: {
    href: "/guides/shopify-landing-page-conversion",
    title: "Landing-page conversion on Shopify",
    body: "See which landings sell when cookies are declined.",
    image: "/images/hills-campaigns.png",
  },
} as const;

export const guides: Guide[] = [
  {
    slug: "cookieless-shopify-analytics",
    title: "What is cookieless Shopify analytics?",
    seoTitle: "What Is Cookieless Shopify Analytics? | Sam",
    description:
      "Cookieless Shopify analytics measures visits, landings, campaigns and orders without cookies or browser storage. How it works, what it cannot do, and when you still need a banner.",
    chip: "Guide",
    lead: "A plain definition, then how it works on a Shopify store in the EU.",
    definitionQuestion: "What is cookieless Shopify analytics?",
    definition:
      "Cookieless Shopify analytics is session tracking that measures visits, landings, campaigns and orders without cookies or browser storage. Sam records every Shopify visit, including shoppers who decline a cookie banner, and matches purchases from Shopify webhooks. Visitor IDs reset every day, so the product does not follow returning customers across days.",
    image: "/images/privacy-hedgerow.png",
    datePublished: "2026-10-18",
    dateModified: "2026-10-18",
    updatedLabel: "18 October 2026",
    author: "Sam",
    sections: [
      {
        id: "why-it-exists",
        title: "Why cookieless analytics exists for Shopify",
        blocks: [
          {
            type: "p",
            text: "Most Shopify analytics still depend on cookies. Google Analytics 4 sets first-party cookies. Shopify Analytics uses Shopify’s own cookies. In the EEA and UK those tools wait on consent. A shopper who declines the banner often vanishes from the visit funnel, then reappears as an order with no source.",
          },
          {
            type: "p",
            text: "Shopify changed collection on 31 October 2023. For customers in the EEA and UK, marketing and analytics data is collected only with consent. Shopify’s own help text says this can lower session counts and conversion rates that rely on session data. That is the gap cookieless Shopify analytics is built to close.",
          },
          {
            type: "source",
            text: "Shopify changelog: Customer data collection update, 18 October 2023 (effective 31 October 2023)",
            href: "https://changelog.shopify.com/posts/customer-data-collection-update",
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How cookieless session tracking works",
        blocks: [
          {
            type: "p",
            text: "A cookieless Shopify tracker does not write to cookies, localStorage or sessionStorage. Sam groups a visit with a one-way hash of IP, browser and store, salted so the ID changes every day. The shopper is a visit, not a person you can recognise tomorrow.",
          },
          {
            type: "ol",
            items: [
              "Install the Shopify app, or paste a custom pixel in Customer events.",
              "The pixel records page views, carts and checkouts in the background.",
              "Each visit gets an anonymous ID that expires in 24 hours.",
              "Shopify sends every order by webhook. Sam matches the order to the visit when it saw the checkout.",
            ],
          },
          {
            type: "p",
            text: "Every Shopify order is counted because it comes from Shopify, not from the browser. About 90–95% of orders also get a complete visit path when Sam saw the checkout. That 90–95% is an internal measurement, not a third-party study. The rest still count toward revenue. They just are not credited to a landing or campaign.",
          },
        ],
      },
      {
        id: "what-you-can-measure",
        title: "What you can measure without cookies",
        blocks: [
          {
            type: "table",
            headers: ["Question", "Cookieless Shopify analytics"],
            rows: [
              ["Where did the visit land?", "Landing path on the session"],
              ["Which campaign brought them?", "UTM source, medium and name on the visit"],
              ["Where did they drop?", "Visit → product → cart → checkout → purchase"],
              ["Did they buy?", "Order from Shopify, matched when checkout was seen"],
              ["On which device?", "Device, OS, browser, country on the visit"],
            ],
          },
          {
            type: "p",
            text: "Those questions are the ones merchants actually ask: which landing sells, which campaign sells, which step leaks. They do not need a shopper graph across weeks to answer them.",
          },
        ],
      },
      {
        id: "what-it-cannot-do",
        title: "What cookieless analytics cannot do",
        blocks: [
          {
            type: "p",
            text: "Daily visitor IDs are a product choice, not a missing setting. Cookieless Shopify analytics will not tell you that the same person came back on Thursday. It will not build a Meta or Google audience. It will not stitch a mobile session to a desktop session two days later.",
          },
          {
            type: "ul",
            items: [
              "No returning-customer rate across days.",
              "No ad-platform remarketing lists from Sam.",
              "No identity graph across stores or sites.",
              "No WooCommerce or PrestaShop. Shopify only.",
            ],
          },
          {
            type: "note",
            text: "If you need those jobs, keep GA4 or your ad pixels. Sam is meant to sit beside them, not replace the ad stack.",
          },
        ],
      },
      {
        id: "banner",
        title: "Do you still need a cookie banner?",
        blocks: [
          {
            type: "p",
            text: "Not for Sam. Sam sets no cookies and stores nothing in the shopper’s browser, so Sam itself does not need a consent banner. Your other pixels might. GA4, Meta, Klaviyo and many Shopify apps still set cookies. Ask counsel about the rest of the stack.",
          },
          {
            type: "p",
            text: "Shopify can still apply customer privacy rules to web pixels in the EEA and UK. If a pixel is held back until analytics consent, Sam may miss that checkout even though the order later arrives from Shopify. That is why some orders have revenue without a full visit path. Confirm your checkout privacy settings rather than assuming every pixel fires for every EU shopper.",
          },
          {
            type: "source",
            text: "Shopify Help: Configuring customer privacy settings",
            href: "https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings",
          },
        ],
      },
      {
        id: "vs-others",
        title: "How it compares to GA4, Shopify Analytics and Plausible",
        blocks: [
          {
            type: "table",
            headers: ["", "Cookies", "Shopify orders", "EU consent gap"],
            rows: [
              ["Sam", "None", "Webhooks, all counted", "Visits still recorded"],
              ["GA4", "First-party", "Browser event, often missing", "Large when declined"],
              ["Shopify Analytics", "Shopify cookies", "Admin totals", "Sessions drop after Oct 2023"],
              ["Plausible", "None", "Not Shopify-native", "Fine for any site, not order match"],
            ],
          },
          {
            type: "p",
            text: "Generic privacy analytics (Plausible, Fathom, Simple Analytics) also skip cookies. They do not receive Shopify orders by webhook or ship a five-step Shopify funnel on install. That is the category difference, not a quality insult.",
          },
        ],
      },
      {
        id: "who",
        title: "Who cookieless Shopify analytics is for",
        blocks: [
          {
            type: "p",
            text: "It fits Shopify stores that sell into the EU, agencies that inherited a GA4 property they barely trust, and founders who still cannot say which landing pays for itself. Stores under about €20M a year are the design target. You do not need a data team. You do need permission to install a Shopify app.",
          },
          {
            type: "p",
            text: "It is a poor fit if the job is remarketing audiences, a multi-site customer graph, or a store that is not on Shopify. Those jobs still belong to GA4, your ad pixels, or a specialist attribution stack. Sam is the Shopify funnel beside them.",
          },
        ],
      },
      {
        id: "add-it",
        title: "How to add cookieless analytics to a Shopify store",
        blocks: [
          {
            type: "ol",
            items: [
              "Create a Sam account at app.samtrack.co. The trial is 7 days and needs a card through Stripe.",
              "Connect the store. Sam asks for customer events (the pixel) and read orders (the webhooks).",
              "Open Overview. First visits usually appear within minutes. No theme edits.",
              "If you cannot install apps, paste the custom pixel from Sam → Settings into Shopify Admin → Customer events.",
            ],
          },
          {
            type: "p",
            text: "Plans start at €29 a month for 25,000 sessions (Garden, October 2026). All features sit on every plan. From three stores on one account, every plan is 20% off.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is cookieless Shopify analytics legal in the EU?",
        a: "Sam is designed so its own analytics do not need a banner, because it sets no cookies and stores nothing on the device. That is not legal advice. Review the rest of your pixels with counsel.",
      },
      {
        q: "Will I still see returning customers?",
        a: "Not across days. The visitor ID resets every 24 hours. Use GA4 if you need that view.",
      },
      {
        q: "Does this replace GA4?",
        a: "No. Keep GA4 for ads and Google’s own reports. Use cookieless Shopify analytics for the funnel and the visits consent removes.",
      },
    ],
    related: [relatedBase.ga4, relatedBase.landings, {
      href: "/how-it-works",
      title: "How tracking works",
      body: "Pixel, daily visitor ID, order match.",
      image: "/images/hills-sessions.png",
    }],
  },
  {
    slug: "ga4-missing-shopify-orders-eu",
    title: "Why GA4 misses Shopify orders in the EU",
    seoTitle: "Why GA4 Misses Shopify Orders in the EU | Sam",
    description:
      "GA4 often misses Shopify purchases in the EEA and UK because purchase events fire in the browser after cookie consent. What Shopify changed in October 2023, and how webhook orders close the gap.",
    chip: "Guide",
    lead: "The purchase fired in the admin. It never showed up in GA4. Here is why that happens in Europe.",
    definitionQuestion: "Why does GA4 miss Shopify purchases in the EU?",
    definition:
      "GA4 records a Shopify purchase when a browser event fires, usually after cookie consent. In the EEA and UK many shoppers decline that consent, so the purchase never reaches GA4 even though Shopify created the order. Sam counts every order from Shopify webhooks and links about 90–95% to a cookieless visit path when it saw the checkout.",
    image: "/images/plan-valley.png",
    datePublished: "2026-10-18",
    dateModified: "2026-10-18",
    updatedLabel: "18 October 2026",
    author: "Sam",
    sections: [
      {
        id: "the-symptom",
        title: "What merchants actually see",
        blocks: [
          {
            type: "p",
            text: "Shopify admin says 40 orders. GA4 says 28 purchases. Paid dashboards disagree with both. The missing slice is rarely “GA4 is broken”. It is usually a visit that checked out after declining analytics cookies, a purchase that fired on a thank-you page the tag never loaded on, or consent mode sending a modelled ping instead of the real event.",
          },
          {
            type: "p",
            text: "This shows up first on EU traffic. A US-only store can look fine in GA4 for months. Add EEA and UK markets, turn on a cookie banner, and purchase counts fall while Shopify revenue does not.",
          },
        ],
      },
      {
        id: "shopify-2023",
        title: "What Shopify changed on 31 October 2023",
        blocks: [
          {
            type: "p",
            text: "On 18 October 2023 Shopify announced a customer data collection update, effective 31 October 2023. For customers in the EEA and UK, marketing and analytics would be collected only with consent. Merchants who had been collecting some data before consent moved to collecting after consent. Shoppers could set those preferences from the store cookie banner.",
          },
          {
            type: "p",
            text: "Shopify’s help centre is explicit about the side effect: in configured cookie-banner regions, non-essential data is collected only after consent, which can reduce session counts and conversion rates that rely on session data. GA4 sitting behind that banner inherits the same cut.",
          },
          {
            type: "source",
            text: "Shopify changelog, 18 October 2023",
            href: "https://changelog.shopify.com/posts/customer-data-collection-update",
          },
          {
            type: "source",
            text: "Shopify Help: impact of privacy settings on analytics",
            href: "https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings",
          },
        ],
      },
      {
        id: "browser-vs-webhook",
        title: "Browser purchase events vs Shopify webhooks",
        blocks: [
          {
            type: "p",
            text: "GA4’s Shopify purchase is a browser hit. The tag must load, consent must allow analytics, and the thank-you or checkout page must run the event. Ad blockers, Safari, declined banners and checkout redirects all drop that hit.",
          },
          {
            type: "p",
            text: "A Shopify webhook is a server event. When the order is created, Shopify tells a subscribed app. That message does not need the shopper’s browser to still be open. Sam uses those webhooks, so 100% of Shopify orders are counted. Linking the order to the visit still needs Sam to have seen the checkout in that session, which is why the complete-path rate is about 90–95%, measured internally.",
          },
          {
            type: "table",
            headers: ["Source of the purchase", "Needs cookies?", "Survives declined consent?"],
            rows: [
              ["GA4 browser event", "Usually yes", "Often no"],
              ["Shopify admin / webhook", "No", "Yes"],
              ["Sam order match", "No cookies", "Order yes; visit path if checkout was seen"],
            ],
          },
        ],
      },
      {
        id: "consent-mode",
        title: "Does Google Consent Mode fix it?",
        blocks: [
          {
            type: "p",
            text: "Consent Mode tells Google tags to run in a limited way when analytics or ads consent is denied. It can fill some reports with modelled conversions. It does not turn a declined Shopify checkout into a first-party purchase event you can inspect session by session. Modelled numbers also stay inside Google. They will not rebuild a landing-page table you can act on.",
          },
          {
            type: "note",
            text: "Treat Consent Mode as an ads-measurement tool. Treat Shopify webhooks as the order source of truth.",
          },
        ],
      },
      {
        id: "what-to-do",
        title: "How to see the purchases GA4 missed",
        blocks: [
          {
            type: "ol",
            items: [
              "Compare Shopify admin orders to GA4 purchases for the same day, split by country. The gap is usually EEA/UK.",
              "Keep GA4 for Google Ads. Do not rebuild bidding on a second tool.",
              "Add a cookieless Shopify tracker that reads orders from webhooks.",
              "Use the tracker’s funnel and landing report for the visits consent removed.",
            ],
          },
          {
            type: "p",
            text: "Sam is one way to do that. Install the app, leave GA4 in place, and open Orders. Revenue should match Shopify. Landings and campaigns populate on the orders where Sam saw checkout.",
          },
        ],
      },
      {
        id: "what-not",
        title: "What not to do with the gap",
        blocks: [
          {
            type: "p",
            text: "Do not pause EU campaigns solely because GA4 conversion dropped after the banner went live. Check Shopify revenue for the same days first. Do not “fix consent mode” as a substitute for an order feed. Do not average US and EEA conversion in one GA4 view and call it the store’s rate.",
          },
          {
            type: "p",
            text: "If you report to a paid-ads team, keep their GA4 and Google Ads numbers for bidding. Give the merchant a second view for landings and funnel steps. Mixing those jobs in one dashboard is how the missing purchases get argued about instead of fixed.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is this only an EU problem?",
        a: "It is worst in the EEA and UK because Shopify requires consent there for marketing and analytics from 31 October 2023. Other regions can still lose browser hits to blockers.",
      },
      {
        q: "Can I send Shopify orders into GA4 instead?",
        a: "Some server-side setups do. They are heavier than a Shopify app, and ads still want Google’s own tags. Many stores keep GA4 for ads and use a webhook tool for the funnel.",
      },
      {
        q: "Does Sam replace consent mode?",
        a: "No. Sam does not feed Google Ads. Keep consent mode if you run Google campaigns.",
      },
    ],
    related: [relatedBase.cookieless, relatedBase.landings, {
      href: "/compare/ga4",
      title: "Sam vs GA4",
      body: "Side by side for a Shopify store in Europe.",
      image: "/images/hills-funnel.png",
    }],
  },
  {
    slug: "shopify-landing-page-conversion",
    title: "Landing-page conversion on Shopify",
    seoTitle: "Shopify Landing Page Conversion: How to Measure It | Sam",
    description:
      "How to see which Shopify landing pages convert to orders, including visits that decline cookies. Funnel by landing, UTMs, and what to fix first.",
    chip: "Guide",
    lead: "Clicks are not conversion. Here is how to see which Shopify landings actually sell.",
    definitionQuestion: "How do you measure landing-page conversion on Shopify?",
    definition:
      "Landing-page conversion on Shopify is orders divided by visits that started on a given path. To trust the number you need visits that include shoppers who decline cookies, and orders from Shopify rather than a browser purchase event. Sam records cookieless sessions, groups them by landing path, and matches purchases from webhooks.",
    image: "/images/hills-campaigns.png",
    datePublished: "2026-10-18",
    dateModified: "2026-10-18",
    updatedLabel: "18 October 2026",
    author: "Sam",
    sections: [
      {
        id: "what-counts",
        title: "What a landing conversion actually is",
        blocks: [
          {
            type: "p",
            text: "A landing page is the first path of the visit: /collections/linen, /pages/black-friday, a product URL from a Meta ad. Conversion is a Shopify order credited to that visit. Views, add-to-carts and checkouts are steps, not the result.",
          },
          {
            type: "p",
            text: "Merchants often mix three different numbers: landing-page views in Shopify, sessions in GA4, and orders in the admin. They diverge as soon as the EU cookie banner is on, because the view tools lose declined visits while orders keep arriving.",
          },
        ],
      },
      {
        id: "why-reports-lie",
        title: "Why landing reports go blind after consent",
        blocks: [
          {
            type: "p",
            text: "If analytics cookies are declined, GA4 may never start the session. Shopify Analytics can drop the same visit. The shopper can still buy. The order shows up in the admin with a thin source or none. You then “optimise” the landings that still report, which are the visitors who clicked Accept.",
          },
          {
            type: "p",
            text: "Shopify documented this class of gap when it moved EEA and UK analytics collection behind consent on 31 October 2023. Landing conversion is one of the reports that silently thins out.",
          },
          {
            type: "source",
            text: "Shopify changelog, 18 October 2023",
            href: "https://changelog.shopify.com/posts/customer-data-collection-update",
          },
        ],
      },
      {
        id: "measure",
        title: "How to measure landing conversion without cookies",
        blocks: [
          {
            type: "ol",
            items: [
              "Record every visit without cookies, including declined-consent traffic.",
              "Store the first path of the visit as the landing.",
              "Count Shopify orders from webhooks, not from a thank-you page tag.",
              "Credit the order to that visit when checkout was seen. Keep uncredited orders in revenue anyway.",
              "Split the same landings by device, channel and country before you rewrite the page.",
            ],
          },
          {
            type: "p",
            text: "Sam does that on install. Open Sessions, filter by landing path, and read the funnel. Campaigns have their own view when the visit carried a UTM.",
          },
        ],
      },
      {
        id: "landing-vs-utm",
        title: "Landing pages vs UTM campaigns",
        blocks: [
          {
            type: "p",
            text: "A landing is where they arrived. A campaign is why they arrived. The same /products/linen-shirt-sage URL can be organic search, a Meta prospecting ad and a Klaviyo restock mail. If you only rank landings, you will “fix” a product page that already converts from email and fails from cold ads.",
          },
          {
            type: "table",
            headers: ["You asked", "Look at"],
            rows: [
              ["Which URL should I improve?", "Funnel by landing path"],
              ["Which ad or mail should I pause?", "Funnel by UTM campaign"],
              ["Is mobile the leak?", "Same landing, split by device"],
              ["Is the EU the leak?", "Same landing, split by country"],
            ],
          },
        ],
      },
      {
        id: "fix-first",
        title: "What to fix first when a landing does not sell",
        blocks: [
          {
            type: "p",
            text: "Read the drop, not the conversion rate alone. A landing at 2% purchase with a 70% drop between product and cart is a product-page or offer problem. The same 2% with a 60% drop between checkout started and purchase is a checkout problem. Device splits stop you from redesigning desktop for a mobile leak.",
          },
          {
            type: "ul",
            items: [
              "Visit → product: the landing did not match the click. Check the ad and the first screen.",
              "Product → cart: price, variants, shipping promise or trust.",
              "Cart → checkout: unexpected costs or a weak cart.",
              "Checkout → purchase: payment, required accounts, or pixel/consent holding the last step.",
            ],
          },
          {
            type: "note",
            text: "Sam’s funnel is visit, product viewed, added to cart, checkout started, purchase. Purchases match Shopify so the last step is not a tagged thank-you page.",
          },
        ],
      },
      {
        id: "read-it",
        title: "How to read a landing in Sam",
        blocks: [
          {
            type: "p",
            text: "Pick a landing with enough visits to care: a collection from ads, a campaign page, a product you keep boosting. Open its funnel for seven days. Ignore a 0.1 point change. Look for a step that drops far more than the store average on the same device.",
          },
          {
            type: "p",
            text: "Then open two or three sessions from that landing. If they bounce on a password page, a geo popup or a sold-out variant, the report already told you what to change. If they reach checkout and vanish, the landing is not the leak. Move to checkout and to whether Sam saw that step for EU traffic.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can Shopify Analytics already do this?",
        a: "It shows landings and conversion at a high level. Visit detail and declined-consent traffic are the usual holes, especially in the EEA and UK after 31 October 2023.",
      },
      {
        q: "Do I need UTMs on every landing?",
        a: "No. Organic and direct visits still get a landing path. UTMs are extra when you paid for the click.",
      },
      {
        q: "What if the order has no landing?",
        a: "Sam still counts the order. It was not linked because the checkout was not seen in that visit. Treat it as revenue, not as a landing to “fix”.",
      },
    ],
    related: [relatedBase.cookieless, relatedBase.ga4, {
      href: "/product/funnel",
      title: "Shopify conversion funnel",
      body: "Five steps, by device and channel.",
      image: "/images/hills-funnel.png",
    }],
  },
];

export const guideSlugs = guides.map((g) => g.slug);

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
