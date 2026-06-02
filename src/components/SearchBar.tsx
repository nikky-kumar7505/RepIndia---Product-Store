import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setSearchQuery } from "../store/productSlice";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="relative w-full">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        🔍
      </span>
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="w-full pl-11 pr-4 py-3 border-2 border-indigo-100 rounded-xl 
        bg-indigo-50 text-gray-700 placeholder-gray-400
        focus:outline-none focus:border-indigo-400 focus:bg-white 
        transition-all duration-300 text-sm font-medium shadow-sm"
      />
    </div>
  );
};

export default SearchBar;