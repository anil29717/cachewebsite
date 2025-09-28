import { useEffect } from "react";
import { HeroSection } from "../components/InsightComponent/hero-section";
import { CEOSection } from "../components/InsightComponent/ceo-section";
import { BlogSection } from "../components/InsightComponent/blog-section";
import { CaseStudiesSection } from "../components/InsightComponent/case-studies-section";
import { EventsSection } from "../components/InsightComponent/events-section";


export default function InsightPage() {

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when page loads
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      <main>
        <HeroSection />
        <CEOSection />
        <BlogSection />
        <CaseStudiesSection />
        <EventsSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}