import React from 'react';
import Image from 'next/image';

function HomeCard() {
  return (
    <div className="flex md:flex-row flex-col justify-center md:space-x-10 p-8 space-y-5 md:space-y-0  md:px-28">
      {/* Card 1 */}
      <div className="bg-slate-600 text-black rounded-lg overflow-hidden  transition-transform duration-300">
        <div className="relative group">
          {/* Image for Card 1 */}
          <Image
            src="/images/home_card/card1.jpg"
            alt="Card 1"
            width={500}
            height={500} // Increased height
            className="w-full h-96 object-cover object-left transition-transform duration-300 group-hover:scale-105"
          />
          {/* Text on Image */}
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 pl-10 text-left">
            <p className="text-sm uppercase font-semibold mb-5">Sensational Style Weekend</p>
            <h2 className="text-4xl max-w-80 mb-2">Unwrap the Hottest Trend of the Year</h2>
            <p className="text-base mb-4 text-white">Get ready to fill your wardrobe.</p>
            <a href="#" className="border-b-2 text-sm text-white uppercase font-semibold">View More</a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-slate-600 text-black rounded-lg overflow-hidden transition-transform duration-300">
        <div className="relative group">
          {/* Image for Card 2 */}
          <Image
            src="/images/home_card/card2.jpg"
            alt="Card 2"
            width={500}
            height={500} // Increased height
            className="w-full h-96 object-cover object-left transition-transform duration-300 group-hover:scale-105"
          />
          {/* Text on Image */}
          <div className="absolute inset-0 flex flex-col items-end justify-center p-4 text-right">
            <p className="text-sm uppercase font-semibold mb-5">Sensational Style Weekend</p>
            <h2 className="text-4xl max-w-80 mb-2 capitalize">Discover Your trend in Latest Fashion</h2>
            <p className="text-base mb-4 text-white">Get ready to fill your wardrobe.</p>
            <a href="#" className=" border-b-2 text-sm text-white uppercase font-semibold">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
