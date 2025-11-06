"use client";

import React, { useState, useEffect } from "react";
import { addProduct, getProducts } from "@/utils/productService";

export default function AdminProductsPage() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "clothing",
    basePrice: "",
    stock: "",
  });

  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert numeric fields before sending
      const formattedData = {
        ...form,
        basePrice: Number(form.basePrice),
        stock: Number(form.stock),
      };

      const res = await addProduct(formattedData);
      console.log("Product added:", res.data);

      // Reset form
      setForm({
        name: "",
        slug: "",
        category: "clothing",
        basePrice: "",
        stock: "",
      });

      fetchProducts(); // refresh list
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Products Dashboard</h1>

      {/* Add Product Form */}
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-md mb-8 space-y-3"
      >
        <h2 className="text-xl font-semibold mb-2">Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="border p-2 w-full rounded"
        />

        <input
          type="text"
          placeholder="Slug (unique)"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          required
          className="border p-2 w-full rounded"
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 w-full rounded"
        >
          <option value="clothing">Clothing</option>
          <option value="cup">Cup</option>
          <option value="sticker">Sticker</option>
        </select>

        <input
          type="number"
          placeholder="Base Price"
          value={form.basePrice}
          onChange={(e) => setForm({ ...form, basePrice: e.target.value })}
          required
          className="border p-2 w-full rounded"
        />

        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          className="border p-2 w-full rounded"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">All Products</h2>
        {products.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <ul className="space-y-2">
            {products.map((product) => (
              <li
                key={product._id}
                className="border rounded p-3 flex justify-between items-center"
              >
                <span>
                  <strong>{product.name}</strong> – {product.category}
                </span>
                <span>₹{product.basePrice}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
