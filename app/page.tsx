import { Coexist } from "@/components/home/Coexist";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { Pricing } from "@/components/home/Pricing";
import { Privacy } from "@/components/home/Privacy";
import { Problem } from "@/components/home/Problem";
import { Proof } from "@/components/home/Proof";
import { FinalCta, SiteFooter } from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-background">
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
