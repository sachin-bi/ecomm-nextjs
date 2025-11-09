"use client";

import React, { useEffect, useState } from "react";
import { getProductById } from "@/utils/productService";
import { motion } from "framer-motion";

export default function SingleProduct({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    console.log("Fetching product with ID:", id);

    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        console.log("response (SingleProduct.JSX) ", res);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  //   useEffect(() => {
  //     console.log("hitting useeffct");

  //     const fetchProduct = async () => {
  //       try {
  //         console.log("Fetching product with ID:", id); // its not even being printed
  //         const res = await getProductById(id);
  //         console.log("response ", res);

  //         setProduct(res.data);
  //       } catch (error) {
  //         console.error("Error fetching product:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     if (id) fetchProduct();
  //   }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zinc-900 text-gray-100">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zinc-900 text-gray-400">
        Product not found :!
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-100 px-6 sm:px-8 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {product.images && product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-80 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-400 mb-2 capitalize">{product.category}</p>
          <p className="text-xl font-semibold mb-4 text-white">
            ₹{product.basePrice}
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {product.description || "No description available."}
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded-md font-semibold text-white">
            Add to Cart
          </button>
        </motion.div>
      </div>
    </div>
  );
}
