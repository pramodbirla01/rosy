import React, {useState} from 'react';
import Image from 'next/image';

const AboutHome2 = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
  
    const openVideo = () => setIsVideoOpen(true);
    const closeVideo = () => setIsVideoOpen(false);
  
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/images/about/about2.jpg"
            alt="About Image 2"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          {/* Small Image Overlay */}
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2">
            <Image
              src="/images/about/about3.jpg"
              alt="Small Overlay Image"
              width={500}
              height={500}
              className="h-72 w-auto"
            />
          </div>
          {/* Play Icon */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={openVideo}
          >
            <i className="ri-play-large-fill text-4xl text-white border border-white bg-opacity-50 rounded-full p-14 hover:bg-opacity-75 transition-all duration-300"></i>
          </div>
        </div>
  
        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-20">
          <p className="text-sm uppercase text-red-600">Luxe Comfort, Everyday Glam</p>
          <h2 className="text-3xl text-black mt-4">Style that Speaks Comfort and Glamour</h2>
          <p className="text-md text-gray-600 mt-4">
            Experience the luxury of comfort without compromising on glamour. Our fashion pieces seamlessly blend style and ease, ensuring you feel confident every day. Enjoy special discounts on chic and comfy looks.
          </p>
          <button className="mt-6 px-6 py-3 text-sm w-fit font-medium text-gray-800 uppercase hover:text-white delay-75 border border-gray-800 rounded-full relative overflow-hidden group">
            <span className="relative z-10">Discover Now</span>
            <span className="absolute inset-0 bg-red-500 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          </button>
        </div>
  
        {/* YouTube Video Popup */}
        {isVideoOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="relative w-full max-w-md">
      <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 hover:bg-red-600 transition-all duration-300"
        onClick={closeVideo}
      >
        <i className="ri-close-line text-xl"></i>
      </button>
      <iframe
        className="w-full h-64 md:h-80"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

      </div>
    );
  };

export default AboutHome2;
