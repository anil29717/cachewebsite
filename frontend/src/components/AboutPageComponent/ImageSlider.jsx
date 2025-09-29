import React from 'react';

const InfiniteSlider = () => {
  // Sample data with placeholder images and names
  const slides = [
    {
      id: 1,
      name: "Best Women Enterpreneur Award",
      image: "/awards/Best Women Enterpreneur Award 1.avif",
    },
    {
      id: 2,
      name: "Brightstar Award",
      image: "/awards/Brightstar Award 1.avif",
    },
    {
      id: 3,
      name: "Business Leader Award 1",
      image: "/awards/Business Leader Award 1.avif",
    },
    {
      id: 4,
      name: "CIOs INDIA",
      image: "/awards/CIOs INDIA Award 1.avif",
    },
    {
      id: 5,
      name: "CIOs INDIA",
      image: "/awards/CIOs INDIA Award 2.avif",
    },
    {
      id: 6,
      name: "Dell Technologies",
      image: "/awards/Dell Technologies Award 1.avif",
    },
    {
      id: 7,
      name: "IBM",
      image: "/awards/IBM Akshay Shonik Award.avif",
    },
    {
      id: 8,
      name: "Jubliant",
      image: "/awards/Jubliant Award 1.avif",
    },
    {
      id: 9,
      name: "Savex",
      image: "/awards/Savex Award 1.avif",
    },
    {
      id: 10,
      name: "Schneider Electric",
      image: "/awards/Schneider Electric Award 1.avif",
    },
    {
      id: 11,
      name: "Scheneider Electric",
      image: "/awards/Schneider Electric Award 1.avif",
    },
    {
      id: 12,
      name: "Xcellence 2011 CRN",
      image: "/awards/Xcellence 2011 CRN Award 1.avif",
    }

  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-16 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4">
          Awards
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Recognizing excellence and innovation in our journey.
        </p>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative w-full">
        <div className="flex animate-slide-infinite">
          {/* First set of slides */}
          {slides.map((slide) => (
            <div
              key={`first-${slide.id}`}
              className="flex-shrink-0 mx-4 text-center group"
              style={{ minWidth: "200px" }}
            >
              <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-full object-center   transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {slide.name}
                </h3>
              </div>
            </div>

          ))}

          {/* Second set of slides (duplicate for seamless loop) */}
          {slides.map((slide) => (
            <div
              key={`second-${slide.id}`}
              className="flex-shrink-0 mx-4 text-center group"
              style={{ minWidth: '200px' }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-48 h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{slide.name}</h3>
                </div> */}
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {slide.name}
                </h3>
                {/* <p className="text-sm text-gray-500 mt-1">Team Member</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-infinite {
          animation: slide-infinite 30s linear infinite;
          width: calc(200px * 16 + 2rem * 16); /* Adjust based on slide count */
        }

        .animate-slide-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteSlider;