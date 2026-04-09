import { Hero } from "@/components/home/Hero";
import { Themes } from "@/components/home/Themes";
import { Stats } from "@/components/home/Stats";
import { FeaturedGrants } from "@/components/home/FeaturedGrants";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Themes />
      <Stats />
      <FeaturedGrants />
      <CallToAction />
    </>
  );
}
