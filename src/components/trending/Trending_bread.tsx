import React from "react";

interface TrendingBreadProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Trending_bread: React.FC<TrendingBreadProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = ["Featured", "New Arrival", "Best Seller"];

  return (
    <div className="text-center space-y-5 pt-10">
      {/* Top Text */}
      <p className="text-sm uppercase  font-semibold text-red-600">Stay ahead of the fashion curve</p>
      {/* Main Heading */}
      <h1 className="md:text-5xl text-4xl text-black ">Trending Products</h1>
      {/* Breadcrumb */}
      <div className="flex flex-wrap text-xl md:text-3xl py-5 justify-center space-x-4  text-gray-500">
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={`  ${
                selectedCategory === category ? "text-black " : ""
              }`}
            >
              {category}
            </button>
            {index < categories.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Trending_bread;
