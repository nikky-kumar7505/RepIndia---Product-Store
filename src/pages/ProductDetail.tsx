import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Product } from "../types/product";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-blue-500">Loading...</p>
      </div>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Product not found!</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        ← Back
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain mx-auto md:mx-0"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-500 capitalize">
            Category: {product.category}
          </p>
          <p className="text-blue-600 text-2xl font-bold">${product.price}</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐</span>
            <span className="text-gray-600">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;