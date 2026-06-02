import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setSortOrder } from "../store/productSlice";

const SortFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="relative w-full sm:w-auto">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
        💰
      </span>
      <select
        onChange={(e) => dispatch(setSortOrder(e.target.value))}
        className="pl-10 pr-8 py-3 border-2 border-indigo-100 rounded-xl 
        bg-indigo-50 text-gray-700 appearance-none
        focus:outline-none focus:border-indigo-400 focus:bg-white 
        transition-all duration-300 text-sm font-medium shadow-sm cursor-pointer
        w-full sm:min-w-[180px]"
      >
        <option value="">Sort by Price</option>
        <option value="low-to-high">💸 Price: Low to High</option>
        <option value="high-to-low">💎 Price: High to Low</option>
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        ▼
      </span>
    </div>
  );
};

export default SortFilter;