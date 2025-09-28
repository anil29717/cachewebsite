import { useEffect } from 'react';
// import { Header } from '../components/CommunityComponent/Code-component-1-22';
import { Hero } from '../components/CommunityComponent/Code-component-1-26';
import { IndustryVerticals } from '../components/CommunityComponent/IndustryVerticals';
import { Partners } from '../components/CommunityComponent/Partners';
import { Clients } from '../components/CommunityComponent/Clients';
// import { Footer } from '../components/CommunityComponent/Footer';

export default function CommunityPage() {

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when page loads
  }, []);
  
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <Hero />
        <IndustryVerticals />
        <Partners />
        {/* <Clients /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}