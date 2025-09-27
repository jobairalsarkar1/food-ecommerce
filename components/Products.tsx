"use client";

import React, { useState, useMemo } from "react";
import { useGetCategoriesQuery, useGetProductsQuery } from "../store/apiSlice";
import { Category, DecoratedProduct } from "@/lib/types";
import Badge from "./Badge";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { AppDispatch } from "@/store/store";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const { data: productsData, isLoading: productsLoading } =
    useGetProductsQuery();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = useMemo(() => {
    if (!categoriesData) return ["All"];
    return ["All", ...categoriesData.map((c: Category) => c.categoryName)];
  }, [categoriesData]);

  const decoratedProducts: DecoratedProduct[] = useMemo(() => {
    if (!productsData) return [];
    const categoryMap: Record<string, string> = {};
    categoriesData?.forEach((c) => {
      categoryMap[c.id] = c.categoryName;
    });
    return productsData.map((p) => ({
      id: p.id,
      name: p.productName,
      price: `$${p.price}`,
      category: categoryMap[p.categoryId] || "Unknown",
      image: p.images[0] || "/featuring_01.png",
    }));
  }, [productsData, categoriesData]);

  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? decoratedProducts
        : decoratedProducts.filter((p) => p.category === activeCategory),
    [activeCategory, decoratedProducts]
  );

  if (categoriesLoading || productsLoading)
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center rounded-xl p-5 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] animate-pulse"
          >
            <div className="bg-gray-200 w-full h-48 rounded-lg mb-4" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
            <div className="h-8 bg-gray-200 rounded w-full" />
          </div>
        ))}
      </div>
    );

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
        {filteredProducts.map((decoratedProduct) => {
          const fullProduct = productsData?.find(
            (p) => p.id === decoratedProduct.id
          );
          if (!fullProduct) return null;

          return (
            <div
              key={decoratedProduct.id}
              className="flex flex-col items-center rounded-xl p-5 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition"
            >
              <Link
                href={`/products/${decoratedProduct.id}`}
                className="w-full flex justify-center"
              >
                <div className="bg-gray-100 w-full h-48 flex items-center justify-center rounded-lg">
                  <img
                    src={decoratedProduct.image}
                    alt={decoratedProduct.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </Link>

              <div className="flex flex-col items-center text-center mt-4 w-full">
                <h3 className="text-lg font-semibold text-[#212337]">
                  {decoratedProduct.name}
                </h3>
                <p className="text-gray-600 mt-1">{decoratedProduct.price}</p>
                <button
                  onClick={() =>
                    dispatch(addToCart({ product: fullProduct, quantity: 1 }))
                  }
                  className="mt-4 w-full px-5 py-2 rounded-md border border-gray-300 text-gray-700 font-medium transition hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
