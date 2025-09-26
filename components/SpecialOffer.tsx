"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Badge from "./Badge";

const SpecialOffer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-10-01") - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-8 lg:px-20 xl:px-32 2xl:px-40 bg-gray-200 relative overflow-hidden">
      {/* leafs */}
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute bottom-10 -right-5 w-24 h-24 object-contain rotate-[-80deg]"
      />
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute -bottom-5 -left-5 w-28 h-28 object-contain rotate-[-80deg]"
      />
      <Image
        src="/fallen_leaf.png"
        alt="Leaf decoration"
        width={64}
        height={64}
        className="absolute top-10 right-[40%] w-16 h-16 object-contain rotate-[-80deg]"
      />

      <div className="relative flex flex-col lg:flex-row items-center md:items-start justify-between gap-10 max-w-[1600px] mx-auto">
        <div className="flex-1 flex flex-col items-center md:items-start text-center lg:text-left z-10">
          <Badge text="Special Offer" />
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#212337] leading-tight">
            Seasonal Fruit Bundle
          </h1>
          <p className="mt-3 font-bold text-3xl text-gray-800 whitespace-nowrap">
            Discount up to <span className="text-orange-500">80% OFF</span>
          </p>

          {/* Countdown timer */}
          <div className="mt-6 flex gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((unit, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-16 h-16 bg-white/90 rounded-lg shadow-md"
              >
                <span className="text-xl font-bold text-[#212337]">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-sm text-gray-600">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 px-6 py-2 flex items-center justify-center text-xl font-bold text-white/90 bg-[#176D38] rounded-full relative z-10">
            CODE : &nbsp;<span className="text-[#FAC714]">FRESH28</span>
          </div>
        </div>

        {/* Right image */}
        <div className="hidden md:block absolute right-10 sm:-bottom-10 md:bottom-0">
          <div className="relative w-80 md:w-[460px] lg:w-[500px] h-[320px]">
            <Image
              src="/featuring_01.png"
              alt="Special Offer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
