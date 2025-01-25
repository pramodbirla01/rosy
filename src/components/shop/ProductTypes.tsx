import React from 'react';
import Image from 'next/image';
const productTypes = [
  { name: 'Accessories', count: 10, image: '/images/shop/product_type/type1.jpg' },
  { name: 'Bags', count: 10, image: '/images/shop/product_type/type2.jpg' },
  { name: 'Glasses', count: 10, image: '/images/shop/product_type/type3.jpg' },
  { name: 'Men', count: 10, image: '/images/shop/product_type/type4.jpg' },
  { name: 'Outerwear', count: 10, image: '/images/shop/product_type/type5.jpg' },
];

const ProductTypes: React.FC = () => {
  return (
    <div className="text-center my-10 md:px-20">
      

      {/* List of product names and counts on top */}
      <div className="flex flex-wrap justify-center text-base border-b pb-10 text-black space-x-6 mb-4">
  {productTypes.map((type) => (
    <span
      key={type.name}
      className="relative  text-black hover:text-red-500 cursor-pointer transition-all before:absolute before:left-0 before:bottom-[-2px] before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
    >
      {type.name} ({type.count})
    </span>
  ))}
</div>


      <div className="flex justify-center flex-wrap  gap-4  mt-10 space-x-5">
        {productTypes.map((type) => (
          <div key={type.name} className="relative  group text-center  flex items-stretch">
            <div className="relative w-full  flex-1  bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src={type.image}
                alt={type.name}
                width={500}
                height={500}
                className="md:w-52 md:h-52 h-40 w-40 object-cover "
              />
              <span className="absolute inset-x-0 top-0 text-sm bg-white opacity-70 uppercase p-1">{type.name}</span>
              <span className="absolute inset-x-0 bottom-0 transform translate-y-full duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-sm text-white bg-black bg-opacity-50 p-2">
                {type.count} products
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTypes;
