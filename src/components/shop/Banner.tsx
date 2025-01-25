import React from 'react';

const Banner: React.FC = () => {
  return (
    <div
      className="h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(/images/shop/banner.jpg)` }} // Reference from the public root
    >
      <h1 className="text-4xl font-semibold text-white">Products</h1>
    </div>
  );
};

export default Banner;
