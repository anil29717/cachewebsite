import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function CampaignsPage() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);


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
    // <div className="w-full">
    //   {/* ===== Hero Section ===== */}
    //   <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
    //     {/* Dark Overlay */}
    //     <div className="absolute inset-0 bg-black/30"></div>
        
    //     {/* Content */}
    //     <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white z-20">
    //       <h1 className="text-5xl font-bold mb-6">Campaigns & Promotions</h1>
    //       <p className="max-w-2xl text-lg mb-8">
    //         Discover our latest campaigns and promotional offers designed to help your business grow and succeed in the digital landscape.
    //       </p>
    //     </div>
    //   </div>

    //   {/* ===== Current Campaigns Section ===== */}
    //   <div className="py-20 px-8 md:px-20 bg-white">
    //     <div className="max-w-6xl mx-auto">
    //       <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Current Campaigns</h2>
          
    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {/* Campaign Card 1 */}
    //         <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
    //           <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
    //             Limited Time
    //           </div>
    //           <h3 className="text-xl font-bold mb-3 text-gray-800">Digital Transformation Package</h3>
    //           <p className="text-gray-600 mb-4">
    //             Get 30% off on our comprehensive digital transformation services. Perfect for businesses looking to modernize their operations.
    //           </p>
    //           <div className="text-2xl font-bold text-blue-600 mb-4">30% OFF</div>
    //           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
    //             Learn More
    //           </button>
    //         </div>

    //         {/* Campaign Card 2 */}
    //         <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
    //           <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
    //             New Launch
    //           </div>
    //           <h3 className="text-xl font-bold mb-3 text-gray-800">Cloud Migration Special</h3>
    //           <p className="text-gray-600 mb-4">
    //             Free consultation and assessment for cloud migration projects. Migrate your infrastructure with confidence.
    //           </p>
    //           <div className="text-2xl font-bold text-green-600 mb-4">FREE Consultation</div>
    //           <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
    //             Get Started
    //           </button>
    //         </div>

    //         {/* Campaign Card 3 */}
    //         <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
    //           <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
    //             Bundle Offer
    //           </div>
    //           <h3 className="text-xl font-bold mb-3 text-gray-800">Security & Compliance Bundle</h3>
    //           <p className="text-gray-600 mb-4">
    //             Complete cybersecurity and compliance solution at a special bundled price. Protect your business today.
    //           </p>
    //           <div className="text-2xl font-bold text-purple-600 mb-4">Save 40%</div>
    //           <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
    //             View Bundle
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* ===== Upcoming Promotions Section ===== */}
    //   <div className="py-20 px-8 md:px-20 bg-gray-50">
    //     <div className="max-w-6xl mx-auto">
    //       <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Upcoming Promotions</h2>
          
    //       <div className="grid md:grid-cols-2 gap-8">
    //         <div className="bg-white rounded-lg p-8 shadow-lg">
    //           <h3 className="text-2xl font-bold mb-4 text-gray-800">Summer Tech Summit 2024</h3>
    //           <p className="text-gray-600 mb-4">
    //             Join us for exclusive workshops, networking sessions, and special offers during our annual tech summit.
    //           </p>
    //           <div className="text-sm text-gray-500 mb-4">Coming Soon - June 2024</div>
    //           <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-lg transition-colors">
    //             Register Interest
    //           </button>
    //         </div>

    //         <div className="bg-white rounded-lg p-8 shadow-lg">
    //           <h3 className="text-2xl font-bold mb-4 text-gray-800">Enterprise Partnership Program</h3>
    //           <p className="text-gray-600 mb-4">
    //             Exclusive benefits and pricing for enterprise clients looking for long-term technology partnerships.
    //           </p>
    //           <div className="text-sm text-gray-500 mb-4">Launching Q3 2024</div>
    //           <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-lg transition-colors">
    //             Learn More
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* ===== CTA Section ===== */}
    //   {/* <div className="py-20 px-8 md:px-20 bg-gradient-to-r from-blue-600 to-purple-600">
    //     <div className="max-w-4xl mx-auto text-center text-white">
    //       <h2 className="text-4xl font-bold mb-6">Don't Miss Out on Our Latest Offers</h2>
    //       <p className="text-xl mb-8">
    //         Subscribe to our newsletter to stay updated on all our campaigns and exclusive promotions.
    //       </p>
    //       <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold transition-colors">
    //         Subscribe Now
    //       </button>
    //     </div>
    //   </div> */}
    // </div>
    <div className="min-h-screen bg-gradient-to-br bg-white flex items-center justify-center px-4">
      {/* Mystery Box */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative cursor-pointer transition-all duration-700 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <div className="text-9xl hover:scale-110 transition-transform duration-300 animate-bounce">
          🎁
        </div>
        <p className="text-black text-2xl relative  font-semibold">Click to reveal!</p>
      </div>

      {/* Coming Soon Text */}
      <div 
        className={`absolute transition-all duration-700 text-center ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className="text-8xl mb-6 animate-bounce">
          🚀
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-black">
          Coming Soon..
        </h1>
        <button 
          onClick={() => setIsOpen(false)}
          className="mt-8 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-black/90 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CampaignsPage;