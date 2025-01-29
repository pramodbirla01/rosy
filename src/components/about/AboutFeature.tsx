import React from 'react';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      icon: '/images/about/icon1.svg',
      title: 'Free Shipping',
      description: 'From all orders over $100',
    },
    {
      icon: '/images/about/icon2.svg',
      title: 'Quality Support',
      description: '24/7 online feedback',
    },
    {
      icon: '/images/about/icon3.svg',
      title: 'Return & Refund',
      description: 'Return money within 30 days',
    },
    {
      icon: '/images/about/icon4.svg',
      title: 'Gift Voucher',
      description: '20% off when you shop online',
    },
  ];

  return (
    <div className="bg-[#F5F5F5] py-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                {/* Using Next.js Image component for optimized loading */}
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={50} 
                  height={50} 
                  className="w-12 h-12 " // Adjust the size of the icon
                />
              </div>
              <h3 className="text-2xl mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
