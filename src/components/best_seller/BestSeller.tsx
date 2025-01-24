import React from "react";
import Image from "next/image";

function BestSeller() {
  const products = [
    {
      company: "H&M",
      name: "Classic Winter Coat",
      price: "$21.00",
      image: "/images/best_seller_home/best1.jpg",
      hoverImage: "/images/best_seller_home/add1.jpg",
    },
    {
      company: "Zara",
      name: "Cozy Knit Sweater",
      price: "$35.00",
      image: "/images/best_seller_home/best2.jpg",
      hoverImage: "/images/best_seller_home/add2.jpg",
    },
    {
      company: "Uniqlo",
      name: "Modern Slim Blazer",
      price: "$15.00",
      image: "/images/best_seller_home/best3.jpg",
      hoverImage: "/images/best_seller_home/add3.jpg",
    },
  ];

  return (
    <div className="space-y-8 px-6 md:px-20 py-14">
      {/* Heading Section */}
      <div className="text-center">
        <h3 className="text-sm uppercase text-red-700 mb-5">
          Top Picks for Fashion-Forward Shoppers
        </h3>
        <h1 className="md:text-5xl text-3xl mb-10  text-gray-900">
          Best Selling
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group relative">
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Image
                src={product.hoverImage}
                alt={product.name}
                width={400}
                height={400}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center">
              <p className=" text-gray-500">{product.company}</p>
              <h3 className="text-xl font-medium text-gray-800">{product.name}</h3>
              <p className=" text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
