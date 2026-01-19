import AuthOverviewSection from "@/components/ui/sections/auth-overview";
import FeaturesSection from "@/components/ui/sections/features";
import HeroSection from "@/components/ui/sections/hero";
import HowItWorksSection from "@/components/ui/sections/how-it-works";
import ItemPreviewSection from "@/components/ui/sections/item-preview";
import TechStackSection from "@/components/ui/sections/tech-stack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ItemPreviewSection />
      <AuthOverviewSection />
      <TechStackSection />
    </>
  );
}
