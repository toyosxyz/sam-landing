import { Coexist } from "@/components/home/Coexist";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { homeFaqs, HomeFaq } from "@/components/home/HomeFaq";
import { Pricing } from "@/components/home/Pricing";
import { Privacy } from "@/components/home/Privacy";
import { Problem } from "@/components/home/Problem";
import { Proof } from "@/components/home/Proof";
import { JsonLd } from "@/components/site/JsonLd";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/json-ld";
import { homeSeo, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(homeSeo);

export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(homeFaqs)} />
      <Hero />
      <Problem />
      <Proof />
      <Features />
      <Coexist />
      <Privacy />
      <Pricing />
      <HomeFaq />
      <FinalCta />
      <SiteFooter variant="home" />
    </main>
  );
}
