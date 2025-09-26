import React from "react";
import Badge from "./Badge";
import Link from "next/link";
import Image from "next/image";
import { AiFillApple } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full pt-24 py-12 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Decorative leaf */}
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute top-[15%] right-[45%] w-16 h-14 object-contain -rotate-[70deg]"
      />
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute top-[10%] -left-8 w-24 h-24 object-contain rotate-[180deg]"
      />
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute bottom-[13.5%] left-12 w-16 h-14 object-contain -rotate-[70deg] z-[-2]"
      />

      {/* Left Content */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-start">
        <div className="flex-1 flex flex-col items-start space-y-2 lg:space-y-2">
          <Badge text="Welcome to Fresh Harvest" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#212337] leading-[1.1]">
            Fresh Fruits and <br /> Vegetables
          </h1>

          <p className="mt-2 text-gray-600 max-w-lg text-base sm:text-lg">
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>

          {/* Shop Now Button */}
          <div className="relative mt-3">
            <Link
              href="#"
              className="px-6 py-2.5 text-base sm:text-lg font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 cursor-pointer inline-flex items-center gap-2"
            >
              Shop Now
            </Link>

            {/* Arrow Image instead of SVG */}
            <div className="hidden lg:block absolute -right-16 top-14 w-24 h-20">
              <Image
                src="/arrow.png"
                alt="Arrow"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Special Offer Card */}
          <div className="ml-10 sm:16 md:ml-36 lg:ml-48 mt-2 bg-[#EBEBEB] rounded-md p-4 flex flex-row items-center gap-4 w-auto max-w-md shadow-md">
            {/* Left Content */}
            <div className="flex-1 min-w-[180px]">
              <p className="text-sm font-medium text-gray-700">Special Offer</p>
              <h2 className="text-xl sm:text-2xl font-bold text-[#212337]">
                Fresh Salad
              </h2>
              <span className="text-base sm:text-lg text-green-700 font-semibold block mt-1">
                Up to 70% off
              </span>
              <p className="mt-2 px-3 py-1 bg-green-800 text-white rounded-full inline-block text-sm">
                CODE : <span className="text-yellow-400">FRESH25</span>
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 relative">
              <Image
                src="/featuring-02.png"
                alt="Special Offer"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Download App */}
          <div className="mt-4 sm:mt-6">
            <p className="mb-2 font-semibold text-sm text-gray-700">
              Download App:
            </p>
            <div className="flex flex-row sm:flex-col md:flex-row gap-4">
              <a className="flex items-center sm:items-start gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-90 transition max-w-[160px]">
                <AiFillApple className="w-8 h-8 flex-shrink-0" />
                <div className="flex flex-col leading-tight">
                  <p className="text-xs">Download on the</p>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>

              <a className="flex items-center sm:items-start gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-90 transition max-w-[160px]">
                <Image
                  src="/google-play-store.png"
                  alt="Google Play"
                  width={26}
                  height={26}
                  className="flex-shrink-0"
                />
                <div className="flex flex-col leading-tight">
                  <p className="uppercase text-xs">Get it on</p>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Color Strip */}
      <div className="absolute top-0 right-0 h-full w-[30%] bg-[#749B3F] z-0" />

      {/* Large Hero */}
      <div className="absolute bottom-0 left-[30%] h-[80vh] w-[80%] z-0">
        <Image
          src="/featuring-02.png"
          alt="Hero Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
