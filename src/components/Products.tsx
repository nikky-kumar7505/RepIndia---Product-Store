import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchProducts } from "../store/productSlice";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 10;

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error, currentPage } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl font-semibold text-indigo-600 animate-pulse">
          Loading Products...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-red-50">
        <div className="text-6xl mb-4">😢</div>
        <p className="text-xl font-semibold text-red-500 bg-red-100 px-6 py-3 rounded-xl">
          {error}
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-12 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 drop-shadow-lg" 
          
          >
            Product Store
          </h1>
          <p className="text-indigo-200 text-lg mt-2">
            Discover amazing products at great prices
          </p>
          {/* Stats Bar */}
          <div className="mt-6 flex justify-center gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-2xl font-bold">{filteredProducts.length}</p>
              <p className="text-indigo-200 text-sm">Products Found</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-2xl font-bold">{currentPage}</p>
              <p className="text-indigo-200 text-sm">Current Page</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-2xl font-bold">
                {Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
              </p>
              <p className="text-indigo-200 text-sm">Total Pages</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-indigo-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🔍</span>
            <h2 className="text-lg font-bold text-gray-700">
              Filter & Search
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search takes more space */}
            <div className="flex-1">
              <SearchBar />
            </div>
            <div className="w-full flex gap-4 flex-col sm:flex-row">
              <CategoryFilter />
              <SortFilter />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm font-medium">
            Showing{" "}
            <span className="text-indigo-600 font-bold">
              {startIndex + 1} -{" "}
              {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}
            </span>{" "}
            of{" "}
            <span className="text-indigo-600 font-bold">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-green-600 text-sm font-medium">Live Results</p>
          </div>
        </div>

        {/* Products Grid */}
        {currentProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="text-8xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-400 text-center max-w-md">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-10">
          <Pagination />
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 pb-6">
          <p className="text-gray-400 text-sm">
            Powered by{" "}
            <span className="text-indigo-500 font-semibold">
              FakeStore API
            </span>{" "}
            ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;