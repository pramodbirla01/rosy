import React from "react";
import Image from "next/image";

function Quote_home() {
  return (
    <div className="relative bg-sky-100 h-[500px] md:min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/baner-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* White Card */}
      <div className="absolute md:left-[10%] w-[95%] bg-white  md:w-[40%] md:h-[60%] p-10 flex flex-col justify-center z-10">
        {/* Heading */}
        <h3 className="text-sm uppercase text-black font-semibold mb-4">
          Redefined Style
        </h3>

        {/* Main Title */}
        <h1 className="text-4xl mb-5 text-black">
          Your Password to Fashion Elegance
        </h1>

        {/* Subtext */}
        <p className="text-base text-black mt-4">
          Indulge in the art of fashion with Rozy. Discover a world of
          sophisticated and timeless elegance.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 text-sm w-fit font-medium text-gray-800 uppercase hover:text-white delay-75 border-2 border-gray-800 rounded-full relative overflow-hidden group">
          <span className="relative z-10">Discover Now</span>
          <span className="absolute inset-0 bg-red-500 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
        </button>
      </div>
    </div>
  );
}

export default Quote_home;
