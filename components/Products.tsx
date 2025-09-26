"use client";

import React, { useState } from "react";
import Image from "next/image";
import Badge from "./Badge";

const dummyProducts = [
  { id: 1, name: "Organic Apples", price: "$2.5/kg", category: "Fruits" },
  { id: 2, name: "Fresh Carrots", price: "$1.8/kg", category: "Vegetables" },
  { id: 3, name: "Mixed Salad", price: "$3.2/kg", category: "Salad" },
  { id: 4, name: "Bananas", price: "$1.2/kg", category: "Fruits" },
  { id: 5, name: "Tomatoes", price: "$2.0/kg", category: "Vegetables" },
  { id: 6, name: "Green Salad Bowl", price: "$4.0/kg", category: "Salad" },
  { id: 7, name: "Strawberries", price: "$5.0/kg", category: "Fruits" },
  { id: 8, name: "Broccoli", price: "$2.8/kg", category: "Vegetables" },
];

const categories = ["All", "Fruits", "Vegetables", "Salad"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="relative w-full py-12 px-6 sm:px-12 lg:px-20">
      {/* Leaf decorations */}
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute top-10 right-[10%] w-16 h-16 object-contain rotate-[-80deg]"
      />
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute top-25 left-[12%] w-16 h-16 object-contain rotate-[150deg]"
      />

      <div className="mt-16 w-full flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <Badge text="Our Products" />
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#212337]">
          Our Fresh Products
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-md border text-sm font-medium transition cursor-pointer
              ${
                activeCategory === cat
                  ? "bg-[#749B3F] text-white border-[#749B3F]"
                  : "border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-[#749B3F] hover:text-[#749B3F]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center rounded-lg p-5 bg-white shadow-md hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition"
          >
            <div className="bg-[#F4F6F6] w-full h-48 flex items-center justify-center rounded-md">
              <Image
                src="/featuring_01.png"
                alt={product.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col items-center text-center mt-4 w-full">
              <h3 className="text-lg font-semibold text-[#212337]">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
              <button className="mt-4 w-full px-5 py-2 rounded-md border border-gray-300 text-gray-700 font-medium transition hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
