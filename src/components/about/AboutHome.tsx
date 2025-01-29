import React from 'react';
import Image from 'next/image';

const AboutHome = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        {/* Text Section */}
        <div className="text-center md:w-1/2 pr-10">
          <p className="text-sm uppercase text-black">Fall into Fashion</p>
          <h1 className="text-5xl text-black mt-4">Upgrade Your Wardrobe for the Season</h1>
          <button className="mt-6 px-6 py-3 text-sm uppercase text-black border border-black rounded-full relative overflow-hidden group hover:text-white transition-all duration-300">
            <span className="relative z-10">Shop Now <i className="ri-arrow-right-line"></i></span>
            <span className="absolute inset-0 bg-red-500 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          </button>
        </div>
  
        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/images/about/about1.jpg"
            alt="About Image"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  };
  

export default AboutHome;
