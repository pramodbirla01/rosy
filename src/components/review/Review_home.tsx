import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Review_home() {
  const reviews = [
    {
      image: "/images/review/review1.jpg",
      name: "John Smith",
      profession: "Photographer & Fashion Blogger",
      review:
        "I absolutely love the products! The quality is exceptional, and the customer service was top-notch. I've recommended this to all my friends, and they love it too. The designs are trendy and unique.",
      subtext: "I recommend this to all my friends.",
    },
    {
      image: "/images/review/review2.jpg",
      name: "Jane Doe",
      profession: "Lifestyle Influencer",
      review:
        "The collection exceeded my expectations. From the material to the fit, everything is perfect. The attention to detail is amazing, and I can't wait to shop more.",
      subtext: "This is my go-to brand now.",
    },
    {
      image: "/images/review/review3.jpg",
      name: "Emily Clark",
      profession: "Entrepreneur",
      review:
        "I am amazed at the quality of these products. They are worth every penny. The designs are so elegant and versatile. I have received so many compliments already.",
      subtext: "Elegant designs and great quality.",
    },
    {
      image: "/images/review/review4.jpg",
      name: "Michael Brown",
      profession: "Content Creator",
      review:
        "This brand truly stands out! From customer support to product design, everything has been fantastic. Highly recommend it to anyone looking for premium quality.",
      subtext: "Fantastic brand with premium quality.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const itemsPerSlide = isMobile ? 1 : 3; // Adjust for desktop view
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  return (
    <div className="py-20 px-8 lg:px-20 space-y-10">
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-sm uppercase mb-5 text-red-600">From the People</h3>
        <h1 className="text-5xl text-black mt-2 mb-6">Reviews</h1>
      </div>

      {/* Review Slider */}
      <div
        ref={scrollRef}
        className={`${
          isMobile
            ? "flex overflow-x-scroll space-x-4 snap-x snap-mandatory hide-scrollbar"
            : "flex overflow-x-scroll space-x-4 snap-x snap-mandatory hide-scrollbar"
        }`}
        style={{
          scrollSnapType: isMobile ? "x mandatory" : "none",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "snap-center flex-shrink-0 w-full" : "flex-shrink-0 w-1/3"
            }`}
          >
            {/* Stars */}
            <div className="flex items-center space-x-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
            </div>

            {/* Review Text */}
            <p className="text-2xl line-clamp-5 text-black leading-relaxed">
              {review.review}
            </p>

            {/* Subtext */}
            <p className="text-gray-500">{review.subtext}</p>

            {/* Reviewer Info */}
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <Image
                  src={review.image}
                  alt={review.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-xl text-black">{review.name}</p>
                <p className="text-gray-500">{review.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`flex items-center justify-center transition-all duration-300 cursor-pointer ${
              activeIndex === index ? "w-5 h-5 border-2" : "w-5 h-5"
            } border-orange-500 bg-transparent rounded-full`}
          >
            {/* Inner dot */}
            <div
              className={`rounded-full ${
                activeIndex === index ? "w-2 h-2" : "w-1 h-1"
              } bg-orange-500`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review_home;
