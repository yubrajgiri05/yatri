import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, paginate }) => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full"
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => paginate(index + 1)}
          className={`${
            currentPage === index + 1
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-indigo-700 hover:text-white py-2 px-4 rounded-full`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
