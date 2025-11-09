import React from "react";
import SingleProduct from "./components/SingleProduct";

export default async function Page({ params }) {
  const resolvedParams = await params; // 👈 unwrap the Promise
  const { id } = resolvedParams;

  return (
    <div className="bg-zinc-900 min-h-screen">
      <SingleProduct id={id} /> {/* 👈 pass only id */}
    </div>
  );
}
