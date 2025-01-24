import React from "react";
import Image from "next/image";
const Category = () => {
  // Categories and image paths
  const categories = [
    {
      name: "Men",
      image: "/images/category/men.jpg"
    },
    {
      name: "Women",
      image: "/images/category/women.jpg"
    },
    {
      name: "Accessories",
      image: "/images/category/accessories.jpg"
    },
    {
      name: "Outwear",
      image: "/images/category/outerwear.jpg"
    },
    {
      name: "Shoes",
      image: "/images/category/shoes.jpg"
    },
  ];

  return (
    <div className="p-8 py-20">
      {/* Upper Text */}
      <div className="text-center mb-6">
        <p className="text-sm uppercase text-red-600 font-semibold">Our Exclusive Collection</p>
      </div>

      <h2 className="text-5xl text-center mb-14">Shop by Categories</h2>

      {/* Grid of Categories */}
      <ul className="flex flex-wrap justify-center gap-10">
        {categories.map((category, index) => (
          <li key={index} className="flex flex-col items-center">
            {/* Image */}
            <Image
              src={category.image}
              alt={category.name}
              width={500}
              height={500}
              className="w-48 h-48 rounded-full object-cover mb-2"
            />
            {/* Category Name */}
            <span className="text-3xl">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
