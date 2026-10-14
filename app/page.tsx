import { FaqFooter } from "@/components/home/FaqFooter";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Pricing } from "@/components/home/Pricing";
import { Privacy } from "@/components/home/Privacy";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-background">
      <Hero />
      <Features />
      <Privacy />
      <Pricing />
      <FaqFooter />
    </main>
  );
}
