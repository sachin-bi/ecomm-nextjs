"use client";
import Image from "next/image";
import Link from "next/link";

export default function ListedProducts({ product }) {
  if (!product) return null;

  const {
    _id,
    name,
    slug,
    category,
    basePrice,
    images = [],
  } = product;

  const imageUrl =
    images?.[0] ||
    "/imgs/noPreviewAvailable.jpg"; // fallback image

  return (
    <Link
      href={`/shop/${_id}`}
      className="group block bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition-all duration-300 shadow-md hover:shadow-indigo-500/20"
    >
      {/* Image */}
      <div className="relative w-full h-52 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name || "Product Image"}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-white text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold truncate group-hover:text-indigo-400 transition-colors duration-300">
          {name || "Unnamed Product"}
        </h3>
        <p className="text-sm text-gray-400 mt-1 capitalize">{category}</p>

        <div className="mt-2 text-indigo-400 font-medium text-sm sm:text-base">
          ₹{basePrice || "N/A"}
        </div>
      </div>
    </Link>
  );
}
