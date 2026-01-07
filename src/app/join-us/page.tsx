"use client";

import { HeroSection } from "@/components/joinUs/HeroSection";
import { RolesSection } from "@/components/joinUs/RolesSections";
import FAQSection from "@/components/joinUs/FAQSections";

export default function JoinUsPage() {
  return (
    <div className="bg-bone-white font-assistant h-full">
      <main className="container mx-auto max-w-5xl space-y-20 px-4 pt-10">
        <HeroSection />
        <RolesSection />
        <FAQSection />
      </main>
    </div>
  );
}
