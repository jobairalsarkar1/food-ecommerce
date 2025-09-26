import Link from "next/link";
import React from "react";
import Image from "next/image";
import Badge from "./Badge";
import { BsGridFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="w-full py-12 px-6 md:px-8 lg:px-20 xl:px-32 2xl:px-40 bg-gray-200 overflow-hidden">
      <div className="w-full flex items-center justify-center">
        <Link
          href="#"
          className="px-6 py-2 rounded-md border border-orange-400 text-orange-500 font-semibold hover:bg-orange-50 transition"
        >
          See All Products
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-[1400px] mx-auto">
        <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px]">
          {/* Leaf */}
          <div className="absolute w-16 h-16 rounded-full bg-green-500 top-14 right-10" />
          <div className="relative w-full h-full rounded-b-full overflow-hidden">
            <Image
              src="/featuring-02.png"
              alt="Fresh Harvest"
              fill
              className="absolute object-contain scale-110"
              priority
            />
          </div>

          {/* Overlay branding */}
          <div className="absolute right-4 sm:right-6 md:right-10 lg:right-16 top-[40%] sm:top-[42%] bg-white rounded-lg shadow-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2">
            <div className="flex items-center justify-center gap-1 sm:gap-2 font-bold text-base sm:text-lg md:text-xl text-[#212337]">
              <BsGridFill className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#749B3F]" />
              <span>Fresh Harvest</span>
            </div>
          </div>

          {/* Overlay card */}
          <div
            className="absolute right-2 sm:right-4 md:right-6 lg:right-10 
                top-[60%] sm:top-[55%] 
                bg-white rounded-lg shadow-lg 
                w-28 sm:w-36 md:w-44 lg:w-48 
                p-2 sm:p-3 md:p-4 text-center"
          >
            <Image
              src="/featuring_01.png"
              alt="Product"
              width={60}
              height={50}
              className="mx-auto mb-1 sm:mb-2 md:mb-3"
            />

            <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-[#212337]">
              Organic Apples
            </h3>

            <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base mt-0.5 sm:mt-1">
              $12.99
            </p>

            <button
              className="mt-1 sm:mt-2 md:mt-3 
                     px-2 sm:px-3 md:px-4 
                     py-1 sm:py-1.5 md:py-2 
                     w-full rounded-md 
                     text-[10px] sm:text-xs md:text-sm lg:text-base 
                     text-gray-600 font-medium 
                     border border-gray-400 
                     transition cursor-pointer hover:bg-gray-100"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 text-center lg:text-left">
          <div className="inline-block">
            <Badge text="About Us" />
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#212337] leading-snug">
            Fresh Harvest Blog
          </h1>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Welcome to Fresh Harvest Blog, your go-to resource for all things
            related to fresh produce, healthy eating, and culinary inspiration.
            Discover tips, recipes, and stories that celebrate the beauty of
            farm-fresh foods and sustainable living.
          </p>
          <Link
            href="#"
            className="mt-6 inline-block px-6 py-2 rounded-md border border-orange-400 text-orange-500 font-semibold hover:bg-orange-50 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
