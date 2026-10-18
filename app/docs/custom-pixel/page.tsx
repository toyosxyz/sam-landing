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
  path: "/docs/custom-pixel",
  title: "Sam Custom Pixel for Shopify",
  description:
    "Install Sam with a Shopify custom pixel when you cannot add apps. Copy the snippet from Settings and paste it in Customer events.",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Custom pixel", href: "/docs/custom-pixel" },
];

export default function CustomPixelPage() {
  return (
    <DocsLayout
      groups={docsGroups("/docs/custom-pixel")}
      search
      breadcrumb="Get started / Custom pixel"
      toc={[
        { id: "when", label: "When to use it" },
        { id: "install", label: "Install the pixel" },
        { id: "orders", label: "Orders still come from Shopify" },
        { id: "check", label: "Check it worked" },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={howToJsonLd(
          "Install the Sam custom pixel on Shopify",
          "Paste Sam’s snippet into Shopify Customer events when you cannot install the app.",
          [
            {
              name: "Copy the snippet",
              text: "In Sam, open Settings → Custom pixel and copy the snippet for that store.",
            },
            {
              name: "Add a custom pixel in Shopify",
              text: "In Shopify Admin go to Settings → Customer events → Add custom pixel. Name it Sam and paste the snippet.",
            },
            {
              name: "Connect orders",
              text: "Keep the Shopify app connected for order webhooks, or send orders with the generic webhook if the app cannot be installed.",
            },
          ],
        )}
      />
      <DocsTitle>Custom pixel</DocsTitle>
      <p className="font-body text-body leading-[26px] text-mist">
        Use this when a store cannot install Shopify apps, or when you want the pixel on Customer
        events by hand.
      </p>

      <DocsH2 id="when">When to use it</DocsH2>
      <DocsP>
        The normal install adds the pixel for you. A custom pixel is the fallback for locked-down
        stores, plus a way to re-add tracking if the automatic pixel was removed.
      </DocsP>

      <DocsH2 id="install">Install the pixel</DocsH2>
      <DocsP>
        Each store has its own snippet. Do not reuse one store&apos;s pixel on another.
      </DocsP>
      <CodeBlock
        title="Shopify Admin"
        lines={[
          "Sam → Settings → Custom pixel → Copy",
          "Shopify Admin → Settings → Customer events → Add custom pixel",
          "Name: Sam",
          "Paste the snippet → Save → Connect",
        ]}
      />
      <Callout>
        The pixel records page views, carts and checkouts. It does not set cookies or write to the
        browser. No theme edits.
      </Callout>

      <DocsH2 id="orders">Orders still come from Shopify</DocsH2>
      <DocsP>
        The custom pixel sees the visit. Orders still need a Shopify connection or the generic
        order webhook. Without one of those, sessions appear and purchases do not.
      </DocsP>

      <DocsH2 id="check">Check it worked</DocsH2>
      <DocsP>
        Open the storefront, load a product, then open Sam → Sessions. A visit should arrive within
        a few minutes. If it does not, confirm the pixel is connected in Customer events and that
        you copied the snippet for that store.
      </DocsP>

      <Pager
        prev={{ label: "Install the app", href: "/docs" }}
        next={{ label: "Invite your team", href: "/docs/invite-team" }}
      />
    </DocsLayout>
  );
}
