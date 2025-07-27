"use client";

import Banner from "@/components/BannerComp/banner";
import HowItWorks from "@/components/HowItWorksComp/howItWorks";
import Reviews from "@/components/Reviews/reviews";
import Benefits from "@/components/Benefits/benefits";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Consistent spacing between sections */}
      <div className="space-y-4">
        <Banner />
        <HowItWorks />
        <Reviews />
        <Benefits />
      </div>
    </main>
  );
}
