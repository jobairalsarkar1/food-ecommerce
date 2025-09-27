"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { useGetProductsQuery, useGetCategoriesQuery } from "@/store/apiSlice";
import Badge from "@/components/Badge";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { AppDispatch } from "@/store/store";
import { Product } from "@/lib/types";

const ProductPage = () => {
  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch<AppDispatch>();

  const { data: productsData, isLoading: productsLoading } =
    useGetProductsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  const product = productsData?.find((p) => p.id === productId);

  // Memoize images array
  const images = useMemo(
    () => (product?.images?.length ? product.images : ["/featuring_01.png"]),
    [product]
  );

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  // Add to cart button handler
  const handleAddToCart = (p: Product, qty: number) => {
    dispatch(addToCart({ product: p, quantity: qty }));
  };

  if (productsLoading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
        {Array.from({ length: 4 }).map((_, idx) => (
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
  }

  if (!product) {
    return <div className="text-center py-20">Product not found!</div>;
  }

  // Related products
  const relatedProducts =
    productsData
      ?.filter(
        (p) => p.categoryId === product.categoryId && p.id !== product.id
      )
      .slice(0, 4) || [];

  return (
    <main className="relative w-full pt-28 py-12 px-6 sm:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image slider */}
        <div className="relative border border-gray-200 rounded-lg p-4">
          <img
            src={images[currentImage]}
            alt={product.productName}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentImage === index ? "bg-[#749B3F]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="space-y-4">
            <div className="inline-block">
              <Badge
                text={
                  categoriesData?.find((c) => c.id === product.categoryId)
                    ?.categoryName || "Category"
                }
              />
            </div>

            <h1 className="text-2xl font-bold">{product.productName}</h1>

            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-gray-600">5.0 (10 reviews)</span>
            </div>

            <div className="text-orange-500 font-bold text-xl">
              ${product.price}/kg
            </div>

            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-bold">Quantity:</span>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <button
                  className="px-4 py-1 bg-transparent hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-1 text-lg font-semibold border-x border-gray-300 text-center">
                  {quantity}
                </span>
                <button
                  className="px-4 py-1 bg-transparent hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <span>/kg</span>
            </div>

            <div className="flex gap-4 mt-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4F6F6] hover:bg-gray-100 cursor-pointer">
                <FaHeart className="text-gray-300" /> Save as Favorite
              </button>
              <button
                onClick={() => handleAddToCart(product, quantity)}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <div className="flex gap-4">
          {["Description", "Reviews (1)"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium flex items-center justify-center cursor-pointer ${
                activeTab === tab
                  ? "bg-[#749B3F] border-gray-200 text-white"
                  : "bg-[#F4F6F6] border-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 text-gray-700 max-w-4xl">
          {activeTab === "Description" && (
            <p className="p-4 bg-[#F4F6F6]">{product.description}</p>
          )}
          {activeTab === "Reviews (1)" && (
            <p className="p-4 bg-[#F4F6F6]">
              John Doe: &ldquo;Amazing product! Very fresh and juicy. Will buy
              again.&rdquo;
            </p>
          )}
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <div className="w-full flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
            <Badge text="Our Products" />
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#212337]">
              Related Products
            </h1>
          </div>

          <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center rounded-xl p-5 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition"
              >
                <Link
                  href={`/products/${p.id}`}
                  className="w-full flex justify-center"
                >
                  <div className="bg-gray-100 w-full h-44 flex items-center justify-center rounded-lg">
                    <img
                      src={p.images[0] || "/featuring_01.png"}
                      alt={p.productName}
                      className="object-contain w-32 h-32"
                    />
                  </div>
                </Link>
                <div className="flex flex-col items-center text-center mt-4 w-full">
                  <h3 className="text-lg font-semibold text-[#212337]">
                    {p.productName}
                  </h3>
                  <p className="text-gray-600 mt-1">${p.price}/kg</p>
                  <button
                    onClick={() => handleAddToCart(p, 1)}
                    className="mt-4 w-full px-5 py-2 rounded-md border border-gray-300 text-gray-700 font-medium transition hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductPage;
