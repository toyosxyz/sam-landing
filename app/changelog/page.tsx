import type { Metadata } from "next";
import { container } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion";
import { CompactHero } from "@/components/site/PageHero";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Changelog · SAM",
  description: "New features, fixes and improvements to Sam, newest first.",
};

type Tag = "New" | "Improved" | "Fixed";

const entries: {
  date: string;
  version: string;
  tags: Tag[];
  title: string;
  body: string;
  image?: string;
}[] = [
  {
    date: "October 2026",
    version: "v1.4",
    tags: ["New"],
    title: "A funnel for every campaign",
    body: "Open any campaign to see how far its visitors got: product views, add-to-cart, checkout and completed orders, side by side with the rest of your traffic.",
    image: "/images/hills-channels.png",
  },
  {
    date: "September 2026",
    version: "v1.3",
    tags: ["New"],
    title: "Sam speaks Spanish",
    body: "The whole dashboard is now available in Spanish. Switch language from your account menu; each teammate picks their own.",
  },
  {
    date: "August 2026",
    version: "v1.2",
    tags: ["Improved"],
    title: "More orders matched to their visit",
    body: "The checkout bridge now picks up the token earlier in checkout, so more orders arrive with their channel and campaign attached.",
  },
  {
    date: "July 2026",
    version: "v1.1",
    tags: ["New", "Fixed"],
    title: "Orders from outside Shopify",
    body: "A generic order webhook, signed with a secret per store, lets other backends report purchases to Sam. Also fixed duplicate purchases when the pixel and the webhook arrived at the same moment.",
  },
];

function TagBadge({ tag }: { tag: Tag }) {
  const tone =
    tag === "New"
      ? "border-[#A3E6354D] bg-[#A3E6351F] text-accent"
      : "border-[#EDEEE91F] bg-[#EDEEE912] text-[#C9CCC4]";
  return (
    <span
      className={`rounded-[5px] border px-2 py-[3px] font-body text-[11px] font-medium leading-[14px] tracking-[0.06em] uppercase ${tone}`}
    >
      {tag}
    </span>
  );
}

export default function ChangelogPage() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <SiteNav />

      <CompactHero
        image="/images/hills-funnel.png"
        chip="Changelog"
        title="What's new on the trail"
        titleWidth={1040}
        lead="New features, fixes and improvements to Sam, newest first."
      />

      <div className={`${container} flex flex-col pb-[72px] lg:pb-[120px]`}>
        {entries.map((entry) => (
          <Reveal
            as="article"
            stagger
            key={entry.version}
            id={entry.version.replace(".", "-")}
            className="flex scroll-mt-8 flex-col gap-5 border-t border-night-line py-8 lg:flex-row lg:gap-14 lg:py-10"
          >
            <div className="flex shrink-0 items-baseline gap-3 lg:w-[240px] lg:flex-col lg:items-start lg:gap-1.5">
              <time className="font-body text-[15px] leading-5 text-foreground">{entry.date}</time>
              <span className="font-body text-label leading-[18px] text-[#5E635B]">
                {entry.version}
              </span>
            </div>
            <div className="flex min-w-0 grow basis-0 flex-col gap-3.5 lg:max-w-[760px]">
              <div className="flex gap-2">
                {entry.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
              <h2 className="font-body text-[20px] leading-7 tracking-[-0.01em] text-foreground lg:text-2xl lg:leading-[30px]">
                {entry.title}
              </h2>
              <p className="font-body text-body leading-[26px] text-[#A6AAA2]">{entry.body}</p>
              {entry.image && (
                <div
                  aria-hidden
                  className="h-[160px] shrink-0 overflow-clip rounded-[14px] border border-night-line bg-cover bg-center lg:h-[220px]"
                  style={{ backgroundImage: `url(${entry.image})` }}
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
