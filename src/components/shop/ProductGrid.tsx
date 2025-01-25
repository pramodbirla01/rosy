import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ShimmerLoader from "./ShimmerLoader";
import productData from "./productData";

const ProductGrid: React.FC = () => {
  const [gridCols, setGridCols] = useState(4); // Default grid layout
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [loading, setLoading] = useState(true); // Loading state

  const itemsPerPage = 12; // Products per page
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  // Paginate data
  const paginatedData = productData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle grid column responsiveness
  useEffect(() => {
    const updateGridCols = () => {
      const isMobile = window.innerWidth < 768; // Tailwind's `sm` breakpoint
      setGridCols(isMobile ? 2 : 4);
    };

    // Set initial layout
    updateGridCols();

    // Handle window resize
    window.addEventListener("resize", updateGridCols);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateGridCols);
    };
  }, []);

  // Simulate loading effect
  useEffect(() => {
    setLoading(true); // Start loading
    const timer = setTimeout(() => setLoading(false), 1000); // Fake load for 1s
    return () => clearTimeout(timer); // Cleanup timer
  }, [currentPage]);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Helper to render page numbers with a max of 5 at a time
  const renderPageNumbers = () => {
    const maxPageNumbers = 5; // Max numbers to show at a time
    const startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-4 py-2 border ${
            currentPage === i
              ? "bg-black text-white"
              : "hover:bg-gray-100 text-black"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center px-5 md:px-14">
        {/* Grid layout controls */}
        <div>
          <button
            onClick={() => setGridCols(2)}
            className={`mr-2 ${gridCols === 2 ? "font-bold" : ""}`}
          >
            ||
          </button>
          <button
            onClick={() => setGridCols(3)}
            className={`mr-2 ${gridCols === 3 ? "font-bold" : ""}`}
          >
            |||
          </button>
          <button
            onClick={() => setGridCols(4)}
            className={gridCols === 4 ? "font-bold" : ""}>
            ||||
          </button>
        </div>

        {/* Sorting dropdown */}
        <select className="p-2 border">
          <option>Sort by</option>
          <option>Price</option>
          <option>Best Selling</option>
          <option>New</option>
          <option>Old</option>
        </select>

        {/* Product count display */}
        <span className="text-gray-500 ml-2">{productData.length} products</span>
      </div>

      {/* Product grid */}
      <div className={`grid px-5  md:px-14 ${gridCols === 2 ? "grid-cols-2" : gridCols === 3 ? "grid-cols-3" : "grid-cols-4"} gap-10 `}>
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <ShimmerLoader key={index} />
            ))
          : paginatedData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center my-10 space-x-4 ">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 border ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
