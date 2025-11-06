"use client";

import React, { useEffect, useState } from "react";
import { getProducts } from "@/utils/productService";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop All Products</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}

              {/* Product Info */}
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <p className="font-bold text-xl mb-2">₹{product.basePrice}</p>

              {/* CTA */}
              <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
