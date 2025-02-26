import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`mx-1 px-3 py-1 border border-black  ${currentPage === i + 1 ? "bg-black text-white  " : "bg-white "}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
