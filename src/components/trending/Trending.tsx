import React, { useState } from "react";
import Image from "next/image";
import Trending_bread from "./Trending_bread";

interface Product {
  brand: string;
  name: string;
  price: string;
  image: string;
}

const Trending: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");
  const [currentPage, setCurrentPage] = useState<number>(0);

  const products: Record<string, Product[]> = {
    Featured: Array.from({ length: 8 }, (_, i) => ({
      brand: "WinterWonder Co",
      name: `Winter Puffer Jacket ${i + 1}`,
      price: `$${20 + i}.00`,
      image: `/images/trending/feature/feature${i + 1}.jpg`,
    })),
    "New Arrival": Array.from({ length: 8 }, (_, i) => ({
      brand: "SummerVibes Co",
      name: `Summer Breeze Dress ${i + 1}`,
      price: `$${15 + i}.00`,
      image: `/images/trending/new/new${i + 1}.jpg`,
    })),
    "Best Seller": Array.from({ length: 8 }, (_, i) => ({
      brand: "LuxuryLine Co",
      name: `Designer Bag ${i + 1}`,
      price: `$${50 + i}.00`,
      image: `/images/trending/best/best${i + 1}.jpg`,
    })),
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to first page when category changes
  };

  const handleDotClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Calculate the items to show in the current page
  const gridItems = Array.from(
    { length: 8 },
    (_, i) =>
      products[selectedCategory][(currentPage * 8 + i) % products[selectedCategory].length]
  );

  return (
    <div className="space-y-8 py-10">
      {/* Breadcrumb Section */}
      <Trending_bread
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Grid Section */}
      <div className="overflow-hidden px-5 md:px-20">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            gridTemplateRows: "repeat(2, auto)",
          }}
        >
          {gridItems.map((product, index) => (
            <div key={index} className="text-center">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full md:h-96 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Product Info */}
              <div className="mt-4">
                <p className="text-gray-500">{product.brand}</p>
                <h3 className="text-black font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Section */}
      {/* <div className="flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(products[selectedCategory].length / 8) }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`flex items-center justify-center w-5 h-5 border-2 cursor-pointer rounded-full ${
                currentPage === index ? "border-orange-500" : "border-gray-300"
              }`}
            >
              <div
                className={`rounded-full ${
                  currentPage === index
                    ? "w-2 h-2 bg-orange-500"
                    : "w-1 h-1 bg-gray-500"
                }`}
              />
            </div>
          )
        )}
      </div> */}
    </div>
  );
};

export default Trending;
