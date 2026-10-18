import {
  Callout,
  CodeBlock,
  DocsH2,
  DocsLayout,
  DocsP,
  DocsTitle,
  Pager,
} from "@/components/docs/DocsLayout";
import { docsGroups } from "@/components/docs/nav";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, howToJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/docs/order-webhook",
  title: "Sam Order Webhook",
  description:
    "Send purchases to Sam with a signed order webhook when orders are created outside Shopify, or as a complement to Shopify webhooks.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Order webhook", href: "/docs/order-webhook" },
];

export default function OrderWebhookPage() {
  return (
    <DocsLayout
      groups={docsGroups("/docs/order-webhook")}
      search
      breadcrumb="Advanced / Generic order webhook"
      toc={[
        { id: "when", label: "When to use it" },
        { id: "send", label: "Send an order" },
        { id: "match", label: "How matching works" },
        { id: "duplicates", label: "Duplicates" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={howToJsonLd(
          "Send orders to Sam with the generic webhook",
          "Post a signed payload so Sam can count purchases created outside the default Shopify webhook.",
          [
            {
              name: "Copy the endpoint and secret",
              text: "In Sam open Settings → Order webhook. Copy the HTTPS endpoint and signing secret for that store.",
            },
            {
              name: "POST the order",
              text: "Send amount, currency, products and the checkout token Sam can hash. Sign the body with the secret.",
            },
            {
              name: "Confirm in Orders",
              text: "Open Sam → Orders. The purchase should appear. If Sam saw the checkout, it is credited to that visit.",
            },
          ],
        )}
      />
      <DocsTitle>Generic order webhook</DocsTitle>
      <p className="font-body text-body leading-[26px] text-mist">
        Shopify webhooks are the default. Use this endpoint when another backend creates the
        purchase, or when you cannot grant Sam the read-orders permission.
      </p>

      <DocsH2 id="when">When to use it</DocsH2>
      <DocsP>
        Added in v1.1. Typical cases: a custom checkout that still sits on the Shopify storefront
        pixel, or a headless setup where Shopify is not the system that records the sale. Most
        stores never need this. If Sam is installed from the app, orders already arrive from
        Shopify.
      </DocsP>

      <DocsH2 id="send">Send an order</DocsH2>
      <DocsP>
        Open Settings → Order webhook. You get an HTTPS URL and a signing secret per store. POST
        JSON with the order amount, currency, line items, and the checkout token the pixel already
        sent. Sign the raw body so Sam can reject unsigned traffic.
      </DocsP>
      <CodeBlock
        title="Required fields"
        lines={[
          "amount          number    paid total",
          "currency        string    ISO code, e.g. EUR",
          "checkout_token  string    same token the pixel hashed",
          "line_items      array     name, quantity, price",
        ]}
      />
      <Callout>
        Sam does not store names, emails or raw order IDs. Send money, products and the token.
        Customer details stay in your system.
      </Callout>

      <DocsH2 id="match">How matching works</DocsH2>
      <DocsP>
        The pixel hashes the checkout token with the visitor ID. Your webhook hashes the same
        token. Same hash, same visit. If Sam never saw the checkout, the order still counts toward
        revenue and is not credited to a landing or campaign.
      </DocsP>

      <DocsH2 id="duplicates">Duplicates</DocsH2>
      <DocsP>
        If both the Shopify webhook and this endpoint send the same purchase, Sam keeps one. That
        duplicate bug was fixed in v1.1. Prefer a single source per store.
      </DocsP>

      <Pager
        prev={{ label: "Multiple stores", href: "/docs/multiple-stores" }}
        next={{ label: "Reauthorize permissions", href: "/docs/reauthorize" }}
      />
    </DocsLayout>
  );
}
