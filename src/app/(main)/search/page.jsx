"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ListedProducts from "@/components/common/ListedProducts";
import { searchProducts } from "@/utils/productService";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      try {
        const res = await searchProducts(query);
        setProducts(res.data?.data || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="p-10 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">
        Search results for "<span className="text-blue-400">{query}</span>"
      </h2>
      {products.length === 0 ? (
        <p>
          No products found for "<span className="text-blue-400">{query}</span>"
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ListedProducts key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function page() {
  return (
    <div className="bg-zinc-950 min-h-screen ">
      <Suspense
        fallback={
          <div className="bg-zinc-950 min-h-screen text-center text-white">
            Loading...
          </div>
        }
      >
        <SearchContent />
      </Suspense>
    </div>
  );
}
