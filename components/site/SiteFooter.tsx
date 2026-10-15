import Link from "next/link";
import { PrimaryButton } from "./Buttons";
import { container } from "./layout";
import { Reveal } from "./motion";
import { SamLogo } from "./SamLogo";

const hamletFade =
  "linear-gradient(in oklab 180deg, oklab(18.4% -0.004 0.003 / 0%) 0%, oklab(18.4% -0.004 0.003 / 0%) 5%, oklab(18.4% -0.004 0.003) 7%, oklab(18.4% -0.004 0.003) 12%, oklab(18.4% -0.004 0.003 / 75%) 26%, oklab(18.4% -0.004 0.003 / 15%) 50%, oklab(18.4% -0.004 0.003 / 10%) 76%, oklab(18.4% -0.004 0.003 / 55%) 100%), linear-gradient(in oklab 90deg, oklab(18.4% -0.004 0.003 / 50%) 0%, oklab(18.4% -0.004 0.003 / 0%) 18%, oklab(18.4% -0.004 0.003 / 0%) 82%, oklab(18.4% -0.004 0.003 / 50%) 100%)";

type FooterLink = { label: string; href: string };

const docsLinks: Record<"home" | "page", FooterLink[]> = {
  home: [
    { label: "Get started", href: "/docs" },
    { label: "How tracking works", href: "/how-it-works" },
    { label: "Custom pixel", href: "/docs#custom-events" },
  ],
  page: [
    { label: "Get started", href: "/docs" },
    { label: "How tracking works", href: "/how-it-works" },
    { label: "Trust center", href: "/trust" },
  ],
};

function footerCols(variant: "home" | "page") {
  return [
    {
      title: "Product",
      links: [
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    { title: "Docs", links: docsLinks[variant] },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "mailto:hello@sam.shop" },
        { label: "FAQ", href: "/#faq" },
        { label: "Billing", href: "/pricing#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/legal/privacy" },
        { label: "Terms", href: "/legal/privacy#terms" },
        { label: "DPA", href: "/trust#documents" },
      ],
    },
  ];
}

export function FinalCta() {
  return (
    <Reveal
      stagger
      className={`${container} flex flex-col items-start gap-6 pt-8 pb-10 lg:flex-row lg:items-end lg:justify-between lg:pt-6`}
    >
      <div className="flex flex-col">
        <p className="font-body text-[26px] leading-8 tracking-[-0.02em] text-foreground lg:text-[32px] lg:leading-10">
          Find out where the trail breaks.
        </p>
        <p className="font-body text-[26px] leading-8 tracking-[-0.02em] text-mist lg:text-[32px] lg:leading-10">
          7 days free, no card needed.
        </p>
      </div>
      <PrimaryButton>Install on Shopify</PrimaryButton>
    </Reveal>
  );
}

export function SiteFooter({ variant = "page" }: { variant?: "home" | "page" }) {
  return (
    <>
      <Reveal
        as="footer"
        stagger
        className={`${container} flex flex-wrap gap-y-8 pt-10 lg:flex-nowrap lg:gap-y-0 lg:pt-12`}
      >
        <Link href="/" className="flex w-full shrink-0 items-start gap-2 lg:w-[420px]">
          <SamLogo />
          <span className="font-body text-[15px] font-semibold leading-[18px] text-foreground">
            sam
          </span>
        </Link>
        {footerCols(variant).map((col) => (
          <div key={col.title} className="flex w-1/2 flex-col gap-2.5 lg:w-auto lg:grow lg:basis-0">
            <span className="font-body text-label leading-4 text-foreground">
              {col.title}
            </span>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-label leading-4 text-mist transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </Reveal>

      <div className="relative flex h-[440px] shrink-0 flex-col justify-end overflow-clip pb-6 lg:h-[600px] lg:pb-8">
        <div className="pointer-events-none absolute inset-0 overflow-clip">
          <div
            className="absolute top-10 left-0 h-[400px] w-full bg-cover bg-[45%] lg:top-12 lg:h-[552px] lg:bg-center"
            style={{ backgroundImage: "url(/images/hamlet-night.png)" }}
          />
          <div className="absolute inset-0" style={{ backgroundImage: hamletFade }} />
        </div>
        <div className={`${container} relative z-[2]`}>
          <div className="flex flex-col gap-1 rounded-[8px] border border-[#EDEEE914] bg-[#111311B8] px-3 py-2 backdrop-blur-[12px] lg:flex-row lg:justify-between lg:gap-0">
            <span className="font-body text-[12px] leading-4 text-[#C9CCC4]">
              © 2026 Sam · An Arnor Labs product
            </span>
            <span className="font-body text-[12px] leading-4 text-[#C9CCC4]">
              Made in Asturias · Hosted in the EU
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
