import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Blog() {
  const blogs = [
    {
      image: "/images/blog/blog1.jpg",
      author: "Jane Doe",
      date: "November 10 2024",
      title: "The Art of Seasonal Layering Made Simple",
      description:
        "Explore the secrets to layering your wardrobe effortlessly this fall. Layering is an art that combines style and practicality. From cozy cardigans to chic scarves, discover how you can make the most of this trend. Embrace different textures and colors for a unique, fashionable look. Learn how to mix and match without overwhelming your outfit.",
    },
    {
      image: "/images/blog/blog2.jpg",
      author: "John Smith",
      date: "October 21 2024",
      title: "5 Must-Have Accessories This Fall To Be Vibe Set",
      description:
        "Enhance your outfits with these essential fall accessories. Accessories can truly elevate your look, whether it's a statement necklace or a stylish hat. The key is finding the right balance between style and comfort. Scarves, boots, and handbags are not only practical but can also make your outfit pop. Find out which items should be on your radar this fall season.",
    },
    {
      image: "/images/blog/blog3.jpg",
      author: "Emily Clark",
      date: "September 31 2024",
      title: "Sustainable Fashion Trends to Embrace",
      description:
        "Learn how to stay stylish while supporting eco-friendly brands. Sustainable fashion is not just a trend, it's a lifestyle choice. From organic fabrics to ethical production methods, discover how you can make a difference. There are many brands out there that combine style with sustainability. You don't have to sacrifice your fashion sense to make responsible choices.",
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

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && isMobile) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    if (scrollRef.current && isMobile) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current && isMobile) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white py-5 px-5 md:px-28 space-y-10">
      {/* Top Heading */}
      <div className="text-center">
        <h3 className="text-sm uppercase text-red-600 mb-8">
          Explore Our Latest Fashion Insights
        </h3>
        <h1 className="text-5xl text-black mt-2">Blog Posts</h1>
      </div>

      {/* Blog Cards */}
      <div
        ref={scrollRef}
        className={`${
          isMobile
            ? "flex overflow-x-scroll space-x-4 snap-x snap-mandatory hide-scrollbar"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        }`}
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "snap-center flex-shrink-0 w-full" : "space-y-4"
            }`}
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden w-full h-64">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Blog Details */}
            <p className="text-sm text-gray-600 font-bold">
              By <span className="text-black">{blog.author}</span> |{" "}
              <span className="text-gray-600 font-bold">{blog.date}</span>
            </p>
            <h2 className="text-2xl text-black">{blog.title}</h2>
            <p className="text-md text-gray-500 line-clamp-2">
              {blog.description}
            </p>

            {/* Read More Button */}
            <button className="mt-4 px-4 py-2 text-sm w-fit font-medium text-gray-800 uppercase hover:text-white delay-100 transition-all border-2 border-gray-800 rounded-full relative overflow-hidden group">
              <span className="relative z-10">Read More</span>
              <span className="absolute inset-0 bg-red-500 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
            </button>
          </div>
        ))}
      </div>

      {/* Dots for Navigation */}
      {isMobile ? (
        <div className="flex justify-center items-center space-x-2 mt-6">
          {blogs.map((_, index) => (
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
      ) : (
        <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mt-6"></div>
      )}
    </div>
  );
}

export default Blog;
