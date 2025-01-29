import React from 'react';
import Image from 'next/image';

const ContactHome = () => {
  return (
    <div className="bg-[#F7F7F7] flex flex-col md:flex-row items-center justify-between ">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/images/contact/contact1.png"
          alt="Contact Image"
          width={600}
          height={400}
          className="w-full "
        />
      </div>
      <div className="w-full md:w-1/2 px-5 md:px-20">
        <h2 className="text-red-500 text-sm uppercase">Timeless Elegance, Modern Charm</h2>
        <h1 className="text-3xl mt-4">Indulge in Timeless Classics with a Modern Twist</h1>
        <p className=" text-lg  text-gray-700 mt-4">
          Embrace the allure of timeless fashion with our collection of modern classics. From essential basics to statement pieces, redefine elegance with a contemporary touch.
        </p>
      </div>
    </div>
  );
};

export default ContactHome;