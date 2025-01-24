import React, { useState } from "react";
import Image from "next/image";

function Collection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/collection/coll1.jpg", position: "top-1/3" },
    { src: "/images/collection/coll2.jpg", position: "top-1/4" },
    { src: "/images/collection/coll3.jpg", position: "top-2/3" },
    { src: "/images/collection/coll4.jpg", position: "top-1/2" },
    { src: "/images/collection/coll5.jpg", position: "top-1/3" },
  ];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const totalDots = isMobile ? 4 : 2;
  const slidesPerDot = Math.ceil(images.length / totalDots);

  return (
    <div className="relative bg-white py-16 px-6">
      {/* Headings */}
      <div className="text-center mb-8">
        <h3 className="text-sm uppercase text-red-600">
          Blossom into Style: Our Spring Fashion Picks
        </h3>
        <h2 className="text-3xl md:text-5xl text-gray-800 mt-2">
          The Spring Collection
        </h2>
      </div>

      {/* Image Carousel */}
      <div className="overflow-hidden px-4 md:px-10">
        <div
          className="flex transition-transform duration-500 gap-6"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full md:w-1/3"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={`Collection ${index + 1}`}
                width={400}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* + Sign */}
              <div
                className={`absolute ${image.position} left-[10%] transform -translate-y-1/2 bg-white rounded-full w-8 md:w-10 h-8 md:h-10 flex items-center justify-center shadow-md transition-transform duration-300 group`}
              >
                <span className="text-xl md:text-2xl pb-1 text-black transition-all duration-300 group-hover:opacity-0">
                  +
                </span>
                <span className="text-4xl md:text-5xl font-thin pb-2 text-black absolute transition-all duration-300 opacity-0 group-hover:opacity-100">
                  -
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`flex items-center justify-center transition-all duration-300 cursor-pointer ${
              currentIndex === index
                ? "w-4 h-4 md:w-5 md:h-5 border-2"
                : "w-3 h-3 md:w-5 md:h-5"
            } border-orange-500 bg-transparent rounded-full`}
          >
            {/* Inner Dot */}
            <div
              className={`rounded-full ${
                currentIndex === index
                  ? "w-2 h-2 md:w-2.5 md:h-2.5"
                  : "w-1.5 h-1.5"
              } bg-orange-500`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
