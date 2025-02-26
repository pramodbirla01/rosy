import React, { useState } from "react";
import blogData from "./blogData";

const BlogHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Only show first 3 slides
      setIsTransitioning(false);
    }, 300); // Match the duration of the transition
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3); // Only show first 3 slides
      setIsTransitioning(false);
    }, 300); // Match the duration of the transition
  };

  return (
    <div className=" w-full flex flex-col md:flex-row relative bg-gray-100 h-[500px]">
      {/* Left Section (Text) */}
      <div className="md:w-1/2 p-10 bg-gray-100 flex flex-col justify-center  overflow-hidden">
        <div
          className={`w-full h-full transition-transform duration-300 ease-in-out transform ${
            isTransitioning ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <h1 className="md:text-4xl text-xl font-bold">{blogData[currentSlide].title}</h1>
          <p className="mt-4 text-gray-600 line-clamp-3">{blogData[currentSlide].description}</p>
          <p className="mt-2 text-gray-500">By {blogData[currentSlide].author}</p>
        </div>

        {/* Left Button (on the left side of the text section) */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 z-20 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
        >
          ←
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2  overflow-hidden">
        <div
          className={`w-full h-full transition-transform duration-300 ease-in-out transform ${
            isTransitioning ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            src={blogData[currentSlide].image}
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Button (on the right side of the image section) */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default BlogHero;