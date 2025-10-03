import HeroSection from '../components/HomeComponent/HeroSection'
import Slider from '../components/HomeComponent/Slider'
import WhoWeAre from '../components/HomeComponent/Whoweare'
import FreeVapt from '../components/HomeComponent/FreeVapt'
import CacheSolutionsSection from '../components/HomeComponent/CacheSolutionsSection'
// import CacheSolutionsSection from '../components/HomeComponent/CacheSolutions'
import ServicesSection from '../components/HomeComponent/services-section'
import InsightsSection from '../components/HomeComponent/InsightsSection'
import GlobalPartnersSection from '../components/HomeComponent/Globalpartners'
import PartnershipSection from '../components/HomeComponent/PartnershipSection'
import { Partners } from '../components/HomeComponent/Partners'
import CTASection from '../components/HomeComponent/Subscribe'
import Chatbot from '../components/Chatbot'
import BotpressChatbot from '../components/BotpressChatbot'
import { useEffect } from 'react'


export default function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when page loads
  }, []);
  return (
    <>
      <div className='border-1 border-blue-100' style={{ backgroundImage: "url('/homepage-bg.jpg')", width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} >
        <HeroSection />
        <Slider />

      </div>
      {/* <FreeVapt /> */}

      {/* <CacheSolutionsSection /> */}
      <CacheSolutionsSection />
      {/* <CacheSolutionsSection /> */}

      {/* <ServicesSection /> */}
      <WhoWeAre />
      <InsightsSection />
      {/* <GlobalPartnersSection /> */}
      <PartnershipSection />
      <Partners />
      <CTASection />  

      {/* N8N Chatbot Component (Bottom Right) */}
      <Chatbot />

      {/* Botpress Chatbot Component (Bottom Left) */}
      <BotpressChatbot />

      {/* <FullScreenThreeImageSlider /> */}b
    </>
  )
}
