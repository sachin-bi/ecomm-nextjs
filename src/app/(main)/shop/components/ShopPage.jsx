"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProducts } from "@/utils/productService";
import { motion } from "framer-motion";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0.7, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-100 text-lg bg-zinc-900">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-100 px-6 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Animated heading */}
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="show"
          className="text-3xl font-bold mb-10 text-center"
        >
          Shop All Products
        </motion.h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-400">
            No products available yet.
          </p>
        ) : (
          //  Only render motion container after products are loaded
          <motion.div
            key="products-container"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {products.map((product, i) => (
              <motion.div
                key={product._id || i}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(`/shop/${product._id}`)}
                className="cursor-pointer border border-gray-800 rounded-md p-4 shadow-sm hover:shadow-lg hover:border-blue-600 transition-all bg-zinc-950"
              >
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-950 rounded-lg flex items-center justify-center text-gray-500 mb-3">
                    No Image Available
                  </div>
                )}

                <h2 className="text-lg font-semibold mb-1 text-white">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-400 mb-2 capitalize">
                  {product.category}
                </p>
                <p className="font-bold text-xl mb-3 text-white">
                  ₹{product.basePrice}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { getProducts } from "@/utils/productService";
// import { motion } from "framer-motion";

// export default function ShopPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   // Fetch all products
//   const fetchProducts = async () => {
//     try {
//       const res = await getProducts();
//       setProducts(res.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-100 text-lg bg-zinc-900">
//         Loading products...
//       </div>
//     );
//   }
// // todo : its appearing at once after loading, make it appear one by one with framer motion
//   return (
//     <div className="bg-zinc-900 min-h-screen text-gray-100 px-6 sm:px-8 py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-10 text-center">
//           Shop All Products
//         </h1>

//         {products.length === 0 ? (
//           <p className="text-center text-gray-400">
//             No products available yet.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 onClick={() => router.push(`/shop/${product._id}`)}
//                 className="cursor-pointer border border-gray-800 rounded-md p-4 shadow-sm hover:shadow-lg hover:border-blue-600 transition-all bg-zinc-950 "
//               >
//                 {/* Product Image */}
//                 {product.images && product.images.length > 0 ? (
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-lg mb-3"
//                   />
//                 ) : (
//                   <div className="w-full h-48 bg-gray-950 rounded-lg flex items-center justify-center text-gray-500 mb-3">
//                     No Image Available
//                   </div>
//                 )}

//                 {/* Product Info */}
//                 <h2 className="text-lg font-semibold mb-1 text-white">
//                   {product.name}
//                 </h2>
//                 <p className="text-sm text-gray-400 mb-2 capitalize">
//                   {product.category}
//                 </p>
//                 <p className="font-bold text-xl mb-3 text-white">
//                   ₹{product.basePrice}
//                 </p>

//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
