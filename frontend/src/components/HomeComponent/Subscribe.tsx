import React from 'react';
import { CircleArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contactus');
  };

  return (
    <div className={`w-full py-10 sm:py-16 px-6 sm:px-14 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Stay ahead with updates */}
          <div className="relative rounded-3xl overflow-hidden group h-[400px] sm:h-[500px] lg:h-auto">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-12 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-glacial font-semibold mb-6 sm:mb-8 leading-tight">
                Stay ahead with our latest updates
              </h3>
              
              <button 
                onClick={handleContactNavigation}
                className="bg-red-600 text-lg sm:text-xl lg:text-2xl font-glacial hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 sm:gap-3 w-fit group/btn"
              >
                Subscribe Now
                <CircleArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-transform fill-white text-red-600 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Side - Split into two sections */}
          <div className="space-y-8">
            
            {/* Top - Question Section */}
            <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-center" style={{backgroundColor: '#fdf0f1'}}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-glacial text-gray-800 mb-4 sm:mb-6 leading-tight">
                Still a Question specific to your use case?
              </h3>
              
              <button 
                onClick={handleContactNavigation}
                className="bg-red-600 text-lg sm:text-xl lg:text-2xl font-glacial hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 sm:gap-3 w-fit group/btn"
              >
                Ask Here
                <CircleArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-white text-red-600 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            {/* Bottom - Industry Offering */}
            <div className="relative rounded-3xl overflow-hidden group h-[300px] sm:h-[350px] lg:h-64">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/techimage.jpg')`
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end text-white">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-glacial font-semibold mb-4 sm:mb-6 leading-tight">
                  Our latest offering based on industries
                </h3>
                
                <button 
                  onClick={handleContactNavigation}
                  className="bg-red-600 text-lg sm:text-xl lg:text-2xl font-glacial hover:bg-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 sm:gap-3 w-fit group/btn"
                >
                  Get a Quote
                  <CircleArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-white text-red-600 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
