import HeroSection from '../components/HomeComponent/HeroSection'
import Slider from '../components/HomeComponent/Slider'
import FreeVapt from '../components/HomeComponent/FreeVapt'
// import CacheSolutionsSection from '../components/HomeComponent/CacheSolutionsSection'
import CacheSolutionsSection from '../components/HomeComponent/CacheSolutions'
import ServicesSection from '../components/HomeComponent/services-section'
import InsightsSection from '../components/HomeComponent/InsightsSection'
import GlobalPartnersSection from '../components/HomeComponent/Globalpartners'
import PartnershipSection from '../components/HomeComponent/PartnershipSection'
import { Partners } from '../components/HomeComponent/Partners'
import CTASection from '../components/HomeComponent/Subscribe'


export default function HomePage() {
  return (
    <>
      <div className='border-1 border-blue-100' style={{ backgroundImage: "url('/heroimage1.png')", width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <HeroSection />
        <Slider />

      </div>
      {/* <FreeVapt /> */}

      {/* <CacheSolutionsSection /> */}
      <CacheSolutionsSection />

      <ServicesSection />
      <InsightsSection />
      {/* <GlobalPartnersSection /> */}
      <PartnershipSection />
      <Partners />
      {/* <CTASection />   */}


      {/* <FullScreenThreeImageSlider /> */}
    </>
  )
}
