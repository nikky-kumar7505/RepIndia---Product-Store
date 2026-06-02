import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { setSelectedCategory } from "../store/productSlice";

const CategoryFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, selectedCategory } = useSelector(
    (state: RootState) => state.products
  );

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
        🏷️
      </span>
      <select
        value={selectedCategory}
        onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
        className="pl-10 pr-8 py-3 border-2 border-indigo-100 rounded-xl 
        bg-indigo-50 text-gray-700 appearance-none
        focus:outline-none focus:border-indigo-400 focus:bg-white 
        transition-all duration-300 text-sm font-medium shadow-sm cursor-pointer
        min-w-[160px]"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        ▼
      </span>
    </div>
  );
};

export default CategoryFilter;