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
    <section className="w-full py-12 px-6 sm:px-12 lg:px-20 xl:px-32 2xl:px-40 bg-gray-200 relative overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 max-w-[1600px] mx-auto">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <Badge text="Special Offer" />
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#212337]">
            Seasonal Fruit Bundle
          </h1>
          <p className="mt-3 font-bold text-3xl text-gray-600">
            Discount up to <span className="text-orange-500">80% OFF</span>
          </p>

          {/* Countdown Timer */}
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

          {/* Discount Code */}
          <div className="mt-6 px-6 py-2 flex items-center justify-center text-xl font-bold text-white/90 bg-[#176D38] rounded-full">
            CODE : &nbsp;<span className="text-[#FAC714]">FRESH28</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden sm:flex md:flex-1 justify-center">
          <div className="relative w-64 md:w-96 lg:w-[550px] h-[400px]">
            <Image
              src="/featuring_01.png"
              alt="Special Offer"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
