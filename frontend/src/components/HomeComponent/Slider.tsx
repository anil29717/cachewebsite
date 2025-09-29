import React, { useState, useEffect, useRef } from 'react';
import '../../css/slider.css';

// Define the shape of the slide data
interface Slide {
  img: string;
  title: string;
  desc: string;
}

// The provided slide data
const slides: Slide[] = [
  { img: "/images/cloudimg.webp", title: "Consulting & Auditing", desc: "Scalable and reliable cloud infrastructure services." },
  { img: "/images/aimlimg.webp", title: "Data AI", desc: "Advanced AI and ML solutions for automation and insights." },
  { img: "/images/itimg.webp", title: "Cyber Security", desc: "Seamless, secure networking for your enterprise." },
  { img: "/images/cyberimg.webp", title: "Cloud", desc: "Protect your digital assets with enterprise-grade security." },
  { img: "/images/infraimg.webp", title: "Manage Services", desc: "Reliable IT infrastructure to power your business." },
  { img: "/images/consultingimg.webp", title: "Infra & Networking", desc: "Strategic technology consulting and digital transformation." },
  { img: "/images/grc.png", title: "GRC", desc: "Governance, Risk, and Compliance solutions for your business." }
];

const EXTENSION_COUNT = 3; // Number of slides to duplicate for a seamless loop
const extendedSlides = [
  ...slides.slice(-EXTENSION_COUNT), // Slides from the end
  ...slides,
  ...slides.slice(0, EXTENSION_COUNT) // Slides from the beginning
];

// Main Slider component
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(EXTENSION_COUNT);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handlePrevClick = () => {
    stopAutoScroll();
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    startAutoScroll();
  };

  const handleNextClick = () => {
    stopAutoScroll();
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    startAutoScroll();
  };

  // Calculate the transform value to perfectly center the active slide
  const getTransformValue = () => {
    if (!sliderRef.current || !slideRefs.current[currentIndex]) return 0;
    const activeSlide = slideRefs.current[currentIndex];
    const centerOffset = sliderRef.current.offsetWidth / 2 - activeSlide.offsetWidth / 2;
    const scrollOffset = activeSlide.offsetLeft;
    return centerOffset - scrollOffset;
  };

  // Handle the seamless looping logic in a single function
  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length + EXTENSION_COUNT) {
      // Temporarily remove transition
      setIsTransitioning(false);
      // Wait for the next frame to reset the index, then re-enable transition
      requestAnimationFrame(() => {
        setCurrentIndex(EXTENSION_COUNT);
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    } else if (currentIndex < EXTENSION_COUNT) {
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        setCurrentIndex(slides.length + currentIndex);
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-gray-900 py-6">
      <button
        onClick={handlePrevClick}
        className="hidden md:block absolute left-3/24 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-3 rounded-full hover:bg-gray-900/90 transition-all duration-300 ease-out hover:scale-110 shadow-lg backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className="hidden md:block absolute right-3/24 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-3 rounded-full hover:bg-gray-900/90 transition-all duration-300 ease-out hover:scale-110 shadow-lg backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div
        ref={sliderRef}
        className="relative w-full md:w-[50rem] overflow-hidden rounded-xl"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {/* Horizontal Slider Section */}
        <div
          className={`flex flex-row py-8 ${isTransitioning ? 'transition-transform duration-1000 ease-out' : ''}`}
          style={{ transform: `translateX(${getTransformValue()}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className={`
 flex-shrink-0 w-60 h-86 relative
 transition-all duration-1000 ease-out
 ${index === currentIndex ? 'transform scale-110 z-10' : 'transform scale-90 z-0'}
 mx-2 sm:mx-4 rounded-xl overflow-hidden
 `}
              style={{
                filter: index !== currentIndex ? 'brightness(0.5)' : 'none'
              }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/240x344/000000/FFFFFF?text=Image+Unavailable';
                }}
              />
              {/* Text overlay on the image */}
              <div className={`
                absolute bottom-0 left-0 right-0 p-4
                text-white
                transition-opacity duration-800 ease-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
              `}>
                <div className="card">
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;


// import React, { useState, useEffect, useRef } from 'react';
// import './slider.css';

// // Define the shape of the slide data
// interface Slide {
//   img: string;
//   title: string;
//   desc: string;
// }

// // The provided slide data
// const slides: Slide[] = [
//   { img: "/images/cloudimg.webp", title: "Cloud", desc: "Scalable and reliable cloud infrastructure services." },
//   { img: "/images/aimlimg.webp", title: "AI / ML", desc: "Advanced AI and ML solutions for automation and insights." },
//   { img: "/images/itimg.webp", title: "Networking", desc: "Seamless, secure networking for your enterprise." },
//   { img: "/images/cyberimg.webp", title: "Cyber Security", desc: "Protect your digital assets with enterprise-grade security." },
//   { img: "/images/infraimg.webp", title: "Infrastructure", desc: "Reliable IT infrastructure to power your business." },
//   { img: "/images/consultingimg.webp", title: "Consulting", desc: "Strategic technology consulting and digital transformation." },
// ];

// const EXTENSION_COUNT = 3; // Number of slides to duplicate for a seamless loop
// const extendedSlides = [
//   ...slides.slice(-EXTENSION_COUNT), // Slides from the end
//   ...slides,
//   ...slides.slice(0, EXTENSION_COUNT) // Slides from the beginning
// ];

// // Main Slider component
// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(EXTENSION_COUNT);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const intervalRef = useRef<number | null>(null);

//   const startAutoScroll = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = window.setInterval(() => {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }, 2000);
//   };

//   const stopAutoScroll = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startAutoScroll();
//     return () => stopAutoScroll();
//   }, []);

//   const handlePrevClick = () => {
//     stopAutoScroll();
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex - 1);
//     startAutoScroll();
//   };

//   const handleNextClick = () => {
//     stopAutoScroll();
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//     startAutoScroll();
//   };

//   // Calculate the transform value to perfectly center the active slide
//   const getTransformValue = () => {
//     if (!sliderRef.current || !slideRefs.current[currentIndex]) return 0;
//     const activeSlide = slideRefs.current[currentIndex];
//     const centerOffset = sliderRef.current.offsetWidth / 2 - activeSlide.offsetWidth / 2;
//     const scrollOffset = activeSlide.offsetLeft;
//     return centerOffset - scrollOffset;
//   };

//   // Handle the seamless looping logic in a single function
//   const handleTransitionEnd = () => {
//     if (currentIndex >= slides.length + EXTENSION_COUNT) {
//       // Temporarily remove transition
//       setIsTransitioning(false);
//       // Wait for the next frame to reset the index, then re-enable transition
//       requestAnimationFrame(() => {
//         setCurrentIndex(EXTENSION_COUNT);
//         requestAnimationFrame(() => setIsTransitioning(true));
//       });
//     } else if (currentIndex < EXTENSION_COUNT) {
//       setIsTransitioning(false);
//       requestAnimationFrame(() => {
//         setCurrentIndex(slides.length + currentIndex);
//         requestAnimationFrame(() => setIsTransitioning(true));
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center  bg-white text-gray-900 p-12">
//       <button
//         onClick={handlePrevClick}
//         className="absolute left-1/12 transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full  hover:bg-gray-700 transition-colors duration-300"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={handleNextClick}
//         className="absolute right-1/12  transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full  hover:bg-gray-700 transition-colors duration-300"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//       <div
//         ref={sliderRef}
//         className="relative w-[50rem] overflow-hidden rounded-xl "
//         onMouseEnter={stopAutoScroll}
//         onMouseLeave={startAutoScroll}
//       >
//         {/* Horizontal Slider Section */}
//         <div
//           className={`flex flex-row py-8 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
//           style={{ transform: `translateX(${getTransformValue()}px)` }}
//           onTransitionEnd={handleTransitionEnd}
//         >
//           {extendedSlides.map((slide, index) => (
//             <div
//               key={index}
//               ref={(el) => (slideRefs.current[index] = el)}
//               className={`
//                 flex-shrink-0 w-60 h-86 relative
//                 transition-all duration-700 ease-in-out
//                 ${index === currentIndex ? 'transform scale-110 z-10' : 'transform scale-90 z-0'}
//                 mx-4 rounded-xl overflow-hidden
//               `}
//               style={{
//                 filter: index !== currentIndex ? 'brightness(0.5)' : 'none'
//               }}
//             >
//               <img
//                 src={slide.img}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.currentTarget.src = 'https://placehold.co/240x344/000000/FFFFFF?text=Image+Unavailable';
//                 }}
//               />
//               {/* Text overlay on the image */}
//               <div className={`
//                 absolute bottom-0 left-0 right-0 p-4
//                 bg-gray-900/50 text-white
//                 transition-opacity duration-500 ease-in-out
//                 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
//               `}>
//                 <div className="card">
//                   <h3>{slide.title}</h3>
//                   <p>{slide.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}

//       </div>
//     </div>
//   );
// };

// export default Slider;
