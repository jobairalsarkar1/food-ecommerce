"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Badge from "@/components/Badge";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";

const images = ["/featuring-02.png", "/featuring_01.png", "/stock_01.jpeg"];

const Page = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  // Auto-slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full pt-28 py-12 px-6 sm:px-12 lg:px-20">
      {/* Product Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image slider */}
        <div className="relative border border-gray-200 rounded-lg p-4">
          <Image
            src={images[currentImage]}
            alt={`Product ${currentImage + 1}`}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          {/* Dots */}
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

        {/* Product details */}
        <div className="flex flex-col justify-between gap-4">
          <div className="space-y-4">
            <div className="inline-block">
              <Badge text="Fruit" />
            </div>

            <h1 className="text-2xl font-bold">Fresh Apples</h1>

            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-gray-600">5.0 (10 reviews)</span>
            </div>

            <div className="text-orange-500 font-bold text-xl">$34.3/kg</div>

            <p className="text-gray-700">
              Freshly picked organic apples. Crisp, juicy, and full of flavor.
            </p>
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
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4F6F6] hover:bg-gray-100">
                <FaHeart className="text-gray-300" /> Save as Favorite
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
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
              className={`px-4 py-2 rounded-lg font-medium flex items-center justify-center ${
                activeTab === tab
                  ? "bg-[#749B3F] border-gray-200 text-white"
                  : "bg-transparent border-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-4 text-gray-700 max-w-4xl">
          {activeTab === "Description" && (
            <p className="p-4 bg-[#F4F6F6]">
              These fresh apples are organically grown and handpicked to ensure
              the best quality. Perfect for snacking or cooking.
            </p>
          )}
          {activeTab === "Reviews (1)" && (
            <p className="p-4 bg-[#F4F6F6]">
              John Doe: &ldquo;Amazing apples! Very fresh and juicy. Will buy
              again.*rdquo
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
