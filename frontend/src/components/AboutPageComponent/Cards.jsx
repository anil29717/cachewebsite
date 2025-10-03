import React, { useRef, useEffect } from "react";

function PartnershipCards() {
  const images = [
    "/partnerslogo/1.svg",
    "/partnerslogo/2.svg",
    "/partnerslogo/3.svg",
    "/partnerslogo/4.svg",
    "/partnerslogo/5.svg",
    "/partnerslogo/6.svg",
    "/partnerslogo/7.svg",
    "/partnerslogo/8.svg",
  ];

  // Duplicate images for infinite effect
  const sliderImages = [...images, ...images];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;
    let scrollAmount = 0;

    function animate() {
      if (slider) {
        scrollAmount += 1; // speed
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full bg-gray-50 py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Certified Partners</h2>
          <p className="text-gray-600 text-lg">Our certifications and partnerships with industry leaders</p>
        </div>
        <div
          ref={sliderRef}
          className="relative w-full overflow-x-hidden"
          style={{ height: "160px" }}
        >
          <div
            className="flex flex-row gap-8"
            style={{
              width: "max-content",
              minWidth: "100%",
            }}
          >
            {sliderImages.map((img, idx) => (
              <div key={idx} className="flex items-center justify-center min-w-[160px] h-[160px]">
                <img
                  src={img}
                  alt={`Partner ${idx + 1}`}
                  className="h-[140px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnershipCards;