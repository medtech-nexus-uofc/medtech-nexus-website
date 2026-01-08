import HeroSection from "@/components/landingPage/heroSection";
import WhatWeDo from "@/components/landingPage/whatWeDo";
import Partners from "@/components/landingPage/partners";

export default function Home() {
  return (
    <div className="-my-8 mb-10 flex flex-col items-center justify-center gap-5 md:gap-10">
      <HeroSection />
      <WhatWeDo />
      <Partners />
    </div>
  );
}
