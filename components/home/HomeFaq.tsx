import { Faq } from "@/components/site/Faq";
import { container } from "@/components/site/layout";

const faqs = [
  {
    q: "Do I need a cookie banner for Sam?",
    a: "No. Sam sets no cookies and writes nothing to local or session storage. Sessions come from a daily-salted hash, so nobody is followed across days.",
  },
  {
    q: "Will it slow down my store?",
    a: "No. The pixel is tiny and loads asynchronously. Checkout and storefront stay on Shopify’s critical path.",
  },
  {
    q: "How is it different from GA4 or Shopify Analytics?",
    a: "Sam is built for Shopify journeys: cookieless sessions, funnel drop-offs, and revenue by channel and campaign — without a consent banner.",
  },
  {
    q: "Does Sam change anything in my store?",
    a: "Install adds a custom pixel and webhooks. No theme edits, no checkout scripts you manage yourself.",
  },
  {
    q: "Where is my data stored?",
    a: "In the EU. You get a DPA, and nothing is written to the shopper’s browser.",
  },
] as const;

export function HomeFaq() {
  return (
    <section id="faq" className={`${container} pt-[72px] pb-10 lg:pt-[120px] lg:pb-14`}>
      <Faq items={faqs} title="Questions, answered." subtitle="Pricing, privacy and setup." />
    </section>
  );
}
