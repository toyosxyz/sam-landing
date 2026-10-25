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
import { pageMetadata, SIGNUP_URL } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/docs",
  title: "Install Sam on Shopify in One Minute",
  description:
    "Create a Sam account, connect your Shopify store and watch the first sessions arrive. Custom pixel steps if you cannot install apps.",
});

const toc = [
  { id: "create-account", label: "Create your Sam account" },
  { id: "connect-shopify", label: "Connect Shopify" },
  { id: "first-sessions", label: "Watch the first sessions" },
  { id: "custom-events", label: "Can't install apps?" },
] as const;

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Install the app", href: "/docs" },
];

export default function DocsPage() {
  return (
    <DocsLayout
      groups={docsGroups("/docs")}
      breadcrumb="Get started / Install the app"
      toc={toc}
      footerVariant="home"
    >
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={howToJsonLd(
          "Install Sam on Shopify",
          "Create a Sam account, connect your Shopify store, and watch the first sessions arrive.",
          [
            {
              name: "Create your Sam account",
              text: "Sign up at app.samtrack.co with your work email. You can switch the dashboard between English and Spanish at any time.",
              url: `${SIGNUP_URL}`,
            },
            {
              name: "Connect Shopify",
              text: "Open Connect Shopify, type your store’s myshopify.com domain and approve customer events and read orders. The first account to connect a store becomes its owner.",
            },
            {
              name: "Watch the first sessions arrive",
              text: "Sam turns on its pixel and subscribes to order webhooks automatically. Open Overview. The first visits show up within minutes.",
            },
          ],
        )}
      />
      <DocsTitle>Install the Shopify app</DocsTitle>
      <p className="font-body text-body leading-[26px] text-mist lg:text-lead lg:leading-7">
        Connecting a store takes about a minute. You&apos;ll need permission to install apps on
        that store.
      </p>
      <div
        aria-hidden
        className="h-[140px] shrink-0 overflow-clip rounded-[14px] border border-night-line bg-cover lg:h-[180px]"
        style={{
          backgroundImage: "url(/images/hills-sessions.png)",
          backgroundPosition: "50% 60%",
        }}
      />

      <DocsH2 id="create-account">1. Create your Sam account</DocsH2>
      <DocsP>
        Sign up at app.samtrack.co with your work email. You can switch the dashboard between
        English and Spanish at any time. The trial is 7 days and needs a card through Stripe.
      </DocsP>

      <DocsH2 id="connect-shopify">2. Connect Shopify</DocsH2>
      <DocsP>
        Open Connect Shopify, type your store&apos;s myshopify.com domain and approve the
        permissions. The first account to connect a store becomes its owner. Teammates join by
        invitation.
      </DocsP>
      <Callout>
        Sam asks for two permissions: customer events, to run its web pixel, and read orders, to
        count purchases. Nothing else.
      </Callout>

      <DocsH2 id="first-sessions">3. Watch the first sessions arrive</DocsH2>
      <DocsP>
        Sam turns on its pixel and subscribes to order webhooks automatically. No theme edits, no
        code. Open Overview and the first visits show up within minutes.
      </DocsP>

      <DocsH2 id="custom-events">Can&apos;t install apps?</DocsH2>
      <DocsP>
        Use a custom pixel instead. Full steps live on the custom pixel page. Short version: copy
        your snippet from Settings → Custom pixel in Sam, then paste it in Shopify Admin → Customer
        events.
      </DocsP>
      <CodeBlock
        title="Shopify Admin"
        lines={[
          "Settings → Customer events → Add custom pixel",
          "Name: Sam",
          "Paste: your snippet from Sam → Settings → Custom pixel",
        ]}
      />

      <Pager
        prev={{ label: "Welcome", href: "/" }}
        next={{ label: "Custom pixel", href: "/docs/custom-pixel" }}
      />
    </DocsLayout>
  );
}
