import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/InsightComponent/hero-section";
import { CEOSection } from "../components/InsightComponent/ceo-section";
import { BlogSection } from "../components/InsightComponent/blog-section";
import { CaseStudiesSection } from "../components/InsightComponent/case-studies-section";

import { EventsSection } from "../components/InsightComponent/events-section";


export default function InsightPage() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL for section navigation
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0); // scroll to top when page loads without hash
    }
  }, [location]);

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