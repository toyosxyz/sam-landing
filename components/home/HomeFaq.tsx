import { Faq } from "@/components/site/Faq";
import { container } from "@/components/site/layout";

export const homeFaqs = [
  {
    q: "Do I need a cookie banner for Sam?",
    a: "Not for Sam. It sets no cookies and stores nothing in the browser. Your other pixels may still need one.",
  },
  {
    q: "Will it slow down my store?",
    a: "No. The pixel loads in the background and never blocks checkout.",
  },
  {
    q: "How is it different from GA4 or Shopify Analytics?",
    a: "Keep them. Sam adds the visits they lose to consent, plus funnels by landing and campaign.",
  },
  {
    q: "Does Sam change anything in my store?",
    a: "No theme edits. Install adds a pixel and connects to your Shopify orders.",
  },
  {
    q: "Where is my data stored?",
    a: "In the EU. A DPA is included.",
  },
  {
    q: "How does the free trial work?",
    a: "7 days with every feature. A card is required through Stripe. Cancel before it ends and you pay nothing.",
  },
] as const;

export function HomeFaq() {
  return (
    <section id="faq" className={`${container} pt-[72px] pb-10 lg:pt-[120px] lg:pb-14`}>
      <Faq
        items={homeFaqs}
        title="Before you install."
        subtitle="Privacy, setup and billing."
      />
    </section>
  );
}
