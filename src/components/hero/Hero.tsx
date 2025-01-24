import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroData = [
    {
      id: 0,
      image: '/images/hero/hero1.png',
      title: 'Unleash the latest trends with us Explore our new collection',
      subtitle: 'Your one-stop destination for awesome content.',
      topText: 'Explore new trends with us',
      align: 'center',
    },
    {
      id: 1,
      image: '/images/hero/hero2.png',
      title: 'Discover Amazing Features',
      subtitle: 'The best content curated for you.',
      topText: 'Discover Your style',
      align: 'center',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {heroData.map((data, index) => (
        <img
          key={data.id}
          src={data.image}
          alt={`Hero ${data.id + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="absolute inset-0  flex flex-col items-center justify-center p-4 text-white" style={{ top: "50%", transform: "translateY(-50%)" }}>
        <p
          className={`text-sm text-orange-700 uppercase mb-4 transition-all duration-200  animate-slide-up`}
          style={{ animationDelay: "0.3s" }}
        >
          {heroData[currentIndex].topText}
        </p>
        <h1
          className={`text-5xl w-[90%] sm:w-[50%] text-center text-black mb-10 transition-all duration-500 animate-slide-up`}
          style={{ animationDelay: "0.2s" }}
        >
          {heroData[currentIndex].title}
        </h1>
        <p
          className={`text-2xl mb-4 text-black transition-all duration-700 animate-slide-up`}
          style={{ animationDelay: "0.3s" }}
        >
          {heroData[currentIndex].subtitle}
        </p>
        <button
          className={`bg-black uppercase text-sm font-bold text-white rounded-full duration-500 py-2 px-4 transition-all hover:bg-green-700 animate-slide-up`}
          style={{ animationDelay: "0.4s" }}
        >
          Shop Now &rarr;
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`flex items-center justify-center transition-all duration-300 cursor-pointer ${currentIndex === index ? 'w-5 h-5 border-2 ' : 'w-5 h-5'} border-orange-500 bg-transparent rounded-full`} // Outer dot
          >
            {/* Inner dot */}
            <div className={`rounded-full ${currentIndex === index ? 'w-2 h-2' : 'w-1 h-1'} bg-orange-500`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
