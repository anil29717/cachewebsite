import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GrowthSection from "../components/AboutPageComponent/GrowthComponent";
import CacheSolutionsSection from "../components/HomeComponent/CacheSolutionsSection";
import PartnershipCards from "../components/AboutPageComponent/Cards";
import TeamSection from "../components/AboutPageComponent/Team";
import InfiniteSlider from "../components/AboutPageComponent/ImageSlider";

function AboutCache() {
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
    <div className="w-full">
      {/* ===== Video Section ===== */}
      <div id="concept-of-cache" className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/aboutpage.mp4" // Replace with your video
          autoPlay
          loop
          muted
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* ✅ TEXT OVER VIDEO */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white z-20">
          <h1 className="text-5xl font-bold mb-6">About Cache Digitech</h1>
          <p className="max-w-2xl text-lg mb-6">
            Cache Digitech is a global system integrator that partners with
            leaders in business and society to tackle their most important
            challenges and capture their greatest opportunities.
          </p>
          {/* <button className="flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition">
            <span className="text-lg">Learn More</span>
            <span className="flex items-center justify-center w-6 h-6 bg-white text-red-600 rounded-full text-sm">
              ➝
            </span>
          </button> */}
        </div>
      </div>

      {/* ===== Company Stats Section ===== */}
      <div className="w-full bg-white py-16 px-6 md:px-20 text-center relative ">
        {/* Top Heading */}
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed mb-16">
          Since its founding in 1991, Cache has been a pioneer in business strategy.
          Today, we work closely with clients to empower their organizations to grow,
          build sustainable competitive advantage, and drive positive societal impact.
        </p>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 text-center sm:text-1/2">
          {/* Founded */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">1991</h2>
            <p className="text-gray-700 text-sm sm:text-base">Founded By</p>
            <p className="text-gray-700 text-sm sm:text-base">Prarthana Gupta</p>
          </div>

          {/* Revenue */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">800cr+</h2>
            <p className="text-gray-700 text-sm sm:text-base">Annual Revenue</p>
          </div>

          {/* Cities */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">300+</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Indian Cities Serving <br className="hidden sm:block" />
              spanning multiple industries
            </p>
          </div>
        </div>

        {/* Red Button */}
        {/* <div className="flex justify-center">
          <button className="flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition">
            <span className="text-lg">Explore our offices</span>
            <span className="flex items-center justify-center w-6 h-6 bg-white text-red-600 rounded-full text-sm">
              ➝
            </span>
          </button>
        </div> */}
      </div>

      {/* ===== Our Mission Section ===== */}
      <div id="mission-vision" className="w-full bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-red-600 mb-6">Our Mission</h2>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Cache Digitech is a global system integrator firm dedicated to
                unlocking the potential of the world's innovators. Our approach
                is guided by five fundamental principles:
              </p>

              {/* Mission Points */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Insightful Problem-Solving:</h4>
                  <p className="text-gray-700 text-sm">
                    We challenge the status quo to bring innovative perspectives to complex issues.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Impactful Collaboration:</h4>
                  <p className="text-gray-700 text-sm">
                    We partner with clients to energize their teams and build lasting organizational value.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Strategic Clarity:</h4>
                  <p className="text-gray-700 text-sm">
                    We identify unique competitive advantages by finding hidden truths within dynamic systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Principled Leadership:</h4>
                  <p className="text-gray-700 text-sm">
                    We operate with integrity, communicating candidly and confronting difficult challenges directly.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mutual Advancement:</h4>
                  <p className="text-gray-700 text-sm">
                    We believe in growing our business by enabling the success of our clients, colleagues, and the broader community.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="\mission.jpg"
                  alt="Professional woman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="team">
        <TeamSection />
      </div>

      {/* ===== Our Vision Section ===== */}
      <div className="w-full bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-12">Our Vision</h2>

          {/* Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                An act of management of courage and accountability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Respect for the Individual</h3>
              <p className="text-gray-600 text-sm">
                and their capacity and drives for personal growth
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">
                guided by a deep respect, view of relationships, primarily with our clients
              </p>
            </div>

            {/* Row 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Social Impact</h3>
              <p className="text-gray-600 text-sm">
                to make the world a better place
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Strategic perspective</h3>
              <p className="text-gray-600 text-sm">
                Enabling our clients to deliver superior results in a turbulent market
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Expanding Possibilities</h3>
              <p className="text-gray-600 text-sm">
                because the goal is not simply to apply best practices but change it
              </p>
            </div>

            {/* Row 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Clients come first</h3>
              <p className="text-gray-600 text-sm">
                and their success is the hallmark of our success
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Value delivered</h3>
              <p className="text-gray-600 text-sm">
                after years of tangible, decisive and measurable
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Diversity</h3>
              <p className="text-gray-600 text-sm">
                of thought, expertise, experience and background
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cache Solutions Section */}
      <div id="meaning-of-logo">
        <CacheSolutionsSection />
      </div>



      <GrowthSection />
      <InfiniteSlider />
      {/* Partnership Cards Section */}
      <div id="certifications-awards">
        <PartnershipCards />
      </div>

    </div>
  );
}

export default AboutCache;