import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />
      <h2 className="text-sm font-semibold text-gray-800 text-center line-clamp-2 mb-2">
        {product.title}
      </h2>
      <p className="text-blue-600 font-bold text-lg">${product.price}</p>
      <p className="text-gray-500 text-xs capitalize mt-1">{product.category}</p>
      <div className="flex items-center gap-1 mt-2">
        <span className="text-yellow-400">⭐</span>
        <span className="text-sm text-gray-600">
          {product.rating.rate} ({product.rating.count})
        </span>
      </div>
    </div>
  );
};

export default ProductCard;