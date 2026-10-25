import { Faq } from "@/components/site/Faq";
import { container } from "@/components/site/layout";

/**
 * Home FAQPage schema is emitted in app/page.tsx via faqPageJsonLd(homeFaqs).
 * Keep visible Q&A identical to that JSON-LD. Answers lead with a direct claim
 * (~40–70 words) so AI engines can extract them as standalone passages.
 */
export const homeFaqs = [
  {
    q: "What is Sam?",
    a: "Sam is cookieless session tracking for Shopify stores. It records every visit, shows where shoppers drop in a five-step purchase funnel, measures conversion by landing page and campaign, and matches orders from Shopify webhooks. It is built for merchants who need funnel clarity without a consent banner for Sam.",
  },
  {
    q: "What can Sam do on my Shopify store?",
    a: "Sam shows live sessions on your store, a visit-to-purchase funnel, conversion by landing page or campaign, and complete funnel detail by device, channel or country. Orders sync from Shopify so revenue matches your admin. About 90–95% of orders also link to a full visit path when Sam saw the checkout.",
  },
  {
    q: "Do I need a cookie banner for Sam?",
    a: "Not for Sam. Sam sets no cookies and stores nothing in the shopper’s browser, so Sam itself does not need a consent banner. Other tools on your store (GA4, Meta, email pixels) may still need one. Review the rest of your stack with counsel.",
  },
  {
    q: "How does Sam track visits without cookies?",
    a: "Sam groups a visit with an anonymous visitor ID that resets every day. Nothing is written to cookies, localStorage or sessionStorage. Tomorrow’s visit is a new one by design, so Sam does not follow shoppers across days while still covering visits that decline cookie consent.",
  },
  {
    q: "Can Sam show where shoppers drop off in the funnel?",
    a: "Yes. Sam’s funnel has five steps: visit, product viewed, added to cart, checkout started and purchase. You see the drop between each step, including on mobile and desktop, and can split by device, channel or country to find where revenue leaks.",
  },
  {
    q: "Does Sam attribute landings and campaigns to orders?",
    a: "Yes. Sam measures conversion by landing page and by UTM campaign through to checkout and purchase. You see views, carts, checkouts and completed orders per campaign, so you can tell which links sell rather than only which ones send traffic.",
  },
  {
    q: "How is Sam different from GA4 or Shopify Analytics?",
    a: "Keep GA4 for ads and audiences, and Shopify Analytics for sales totals. Sam adds cookieless visit paths, a ready Shopify funnel, and landing and campaign conversion for traffic that consent often removes from those tools. Sam does not replace them; it fills that gap.",
  },
  {
    q: "Are all Shopify orders counted in Sam?",
    a: "Yes. Every Shopify order is counted because Sam receives it from Shopify webhooks, not from a browser purchase event. About 90–95% of orders also get a complete session path when Sam saw the checkout. The rest still count toward revenue; they are simply not credited to a landing or campaign.",
  },
  {
    q: "Can Sam follow returning customers across days?",
    a: "No. The visitor ID resets daily so Sam cannot recognise the same shopper tomorrow. That is the privacy tradeoff that keeps Sam cookieless. Use GA4 if you need cross-day returning users or remarketing audiences.",
  },
  {
    q: "Does Sam change anything in my Shopify theme?",
    a: "No theme edits. Installing the Shopify app adds a sandboxed pixel and connects to your Shopify orders. First sessions appear as soon as shoppers hit the store. Sam does not touch your GA4 tags or other pixels.",
  },
  {
    q: "Will Sam slow down my store?",
    a: "No. The pixel runs in Shopify’s sandboxed web pixel, loads in the background, and never blocks checkout. It is designed to measure visits without adding friction to the purchase path.",
  },
  {
    q: "Where is Sam data stored?",
    a: "In the EU. Sam processes session events and Shopify order webhooks on behalf of the merchant and does not write analytics data to the shopper’s browser.",
  },
  {
    q: "How much does Sam cost?",
    a: "Plans start at €29 a month for 25,000 sessions (Garden, October 2026). Meadow is €79, Valley €169 and Forest €349. All features sit on every plan. Yearly billing gives two months free.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 7 days with every feature. A card is required through Stripe to start. Cancel before the trial ends and you pay nothing. After the trial, billing follows the plan you chose by monthly session volume.",
  },
  {
    q: "Does Sam work outside Shopify?",
    a: "Not yet. Sam is built around Shopify stores, Shopify’s web pixel and Shopify order webhooks. WooCommerce, PrestaShop and other platforms are out of scope today.",
  },
] as const;

export function HomeFaq() {
  return (
    <section id="faq" className={`${container} pt-[72px] pb-10 lg:pt-[120px] lg:pb-14`}>
      <Faq
        items={homeFaqs}
        title="Before you install."
        subtitle="What Sam does, privacy and billing."
      />
    </section>
  );
}
