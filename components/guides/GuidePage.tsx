import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { container } from "@/components/site/layout";
import { CompactHero } from "@/components/site/PageHero";
import { CardRow, ImageCard } from "@/components/site/sections";
import { SiteNav } from "@/components/site/SiteNav";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { articleJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import type { Guide, GuideBlock } from "@/lib/guides";
import { TrialLink } from "@/components/site/TrialLink";

function Block({ block }: { block: GuideBlock }) {
  if (block.type === "p") {
    return <p className="font-body text-body leading-[26px] text-[#A6AAA2]">{block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul className="flex list-disc flex-col gap-2 pl-5 font-body text-body leading-[26px] text-[#A6AAA2]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="flex list-decimal flex-col gap-2 pl-5 font-body text-body leading-[26px] text-[#A6AAA2]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-2xl border border-night-line bg-[#141614]">
        <table className="w-full min-w-[520px] text-left">
          <thead>
            <tr className="border-b border-night-line bg-[#161916]">
              {block.headers.map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 font-body text-[13px] font-medium leading-4 text-mist lg:px-5"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("-")} className="border-b border-night-line last:border-0">
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className="px-4 py-3.5 font-body text-[15px] leading-[22px] text-foreground lg:px-5"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === "note") {
    return (
      <p className="rounded-xl border border-night-line bg-[#161916] px-4 py-3.5 font-body text-[15px] leading-6 text-[#C9CCC4]">
        {block.text}
      </p>
    );
  }
  return (
    <p className="font-body text-[14px] leading-[22px] text-[#5E635B]">
      Source:{" "}
      <Link href={block.href} className="text-mist underline decoration-[#3A3F38] underline-offset-2">
        {block.text}
      </Link>
    </p>
  );
}

export function GuidePage({ guide }: { guide: Guide }) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: guide.title, href: `/guides/${guide.slug}` },
  ];

  return (
    <main className="w-full overflow-x-clip bg-background">
      <JsonLd
        data={articleJsonLd({
          headline: guide.seoTitle,
          description: guide.description,
          path: `/guides/${guide.slug}`,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
          image: guide.image,
        })}
      />
      <JsonLd data={faqPageJsonLd(guide.faqs)} />
      <SiteNav />
      <div className={`${container} relative z-[1] pt-6 lg:pt-8`}>
        <Breadcrumbs items={crumbs} />
      </div>
      <CompactHero
        image={guide.image}
        chip={guide.chip}
        title={guide.title}
        titleWidth={920}
        lead={guide.lead}
      />

      <article className={`${container} flex flex-col gap-[72px] pb-10 lg:gap-24`}>
        <div className="flex max-w-[760px] flex-col gap-4">
          <p className="font-body text-[13px] leading-[18px] text-[#5E635B]">
            Last updated {guide.updatedLabel} · {guide.author}
          </p>
          <h2 className="font-body text-[24px] leading-[30px] tracking-[-0.02em] text-foreground lg:text-[32px] lg:leading-10">
            {guide.definitionQuestion}
          </h2>
          <p className="font-body text-body leading-[26px] text-mist lg:text-[18px] lg:leading-[28px]">
            {guide.definition}
          </p>
        </div>

        {guide.sections.map((section) => (
          <section key={section.id} id={section.id} className="flex max-w-[760px] scroll-mt-8 flex-col gap-4">
            <h2 className="font-body text-[22px] leading-7 tracking-[-0.01em] text-foreground lg:text-[26px] lg:leading-8">
              {section.title}
            </h2>
            {section.blocks.map((block, i) => (
              <Block key={`${section.id}-${i}`} block={block} />
            ))}
          </section>
        ))}

        <div className="flex max-w-[760px] flex-col gap-4 rounded-2xl border border-night-line bg-[#161916] px-6 py-7">
          <h2 className="font-body text-[20px] leading-7 text-foreground">Try it on your store</h2>
          <p className="font-body text-[15px] leading-[23px] text-mist">
            Install Sam, wait for the first sessions, and open the funnel. 7-day trial. Cancel
            before it ends, pay nothing.
          </p>
          <TrialLink className="self-start rounded-[8px] bg-foreground px-4 py-2.5 font-body text-[15px] font-medium leading-[18px] text-night-bg">
            Start 7-day trial
          </TrialLink>
        </div>

        <Faq items={guide.faqs} title="Questions this guide answers." subtitle="Keep them handy." />

        <div className="flex flex-col gap-8">
          <h2 className="font-body text-[22px] leading-7 text-foreground">Keep reading</h2>
          <CardRow>
            {guide.related.map((card) => (
              <ImageCard key={card.href} {...card} />
            ))}
          </CardRow>
        </div>
      </article>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
