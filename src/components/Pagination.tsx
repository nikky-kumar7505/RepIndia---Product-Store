import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { setCurrentPage } from "../store/productSlice";

const ITEMS_PER_PAGE = 10;

const Pagination: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, currentPage } = useSelector(
    (state: RootState) => state.products
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      {/* Prev Button */}
      <button
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-xl border-2 border-indigo-200 bg-white 
        text-indigo-600 font-semibold hover:bg-indigo-500 hover:text-white 
        hover:border-indigo-500 transition-all duration-200 disabled:opacity-40 
        disabled:cursor-not-allowed shadow-sm"
      >
        ← Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => dispatch(setCurrentPage(page))}
          className={`w-10 h-10 rounded-xl border-2 font-bold text-sm transition-all duration-200 shadow-sm
            ${
              currentPage === page
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-500 scale-110 shadow-indigo-300 shadow-md"
                : "bg-white text-gray-600 border-indigo-100 hover:bg-indigo-50 hover:border-indigo-300"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-xl border-2 border-indigo-200 bg-white 
        text-indigo-600 font-semibold hover:bg-indigo-500 hover:text-white 
        hover:border-indigo-500 transition-all duration-200 disabled:opacity-40 
        disabled:cursor-not-allowed shadow-sm"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;