"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Badge from "./Badge";

const reviews = [
  {
    img: "/stock_01.jpeg",
    text: "Fresh Harvest has completely changed the way I shop for produce. Everything is so fresh and delivered on time. I used to spend hours at grocery stores, but now I get farm-fresh items delivered to my door. The difference in taste and quality is just amazing!",
    name: "Jane Doe",
    role: "Nutritionist",
  },
  {
    img: "/stock_01.jpeg",
    text: "I love how easy it is to order seasonal fruits and veggies. The quality is unmatched, and their packaging is eco-friendly too. Fresh Harvest has made it so simple to enjoy healthy meals without worrying about freshness or availability at local stores.",
    name: "John Smith",
    role: "Chef",
  },
  {
    img: "/stock_01.jpeg",
    text: "As a busy professional, Fresh Harvest saves me so much time. I no longer need to rush to the supermarket after work. The app is easy to use, deliveries are reliable, and I feel good about supporting local farmers through their service.",
    name: "Emily Johnson",
    role: "Teacher",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 px-6 sm:px-12 lg:px-20">
      <div className="absolute top-[20%] left-[18%] w-16 h-16 rounded-full bg-green-600"/>
      <div className="absolute top-[25%] right-[20%] w-16 h-16 rounded-full bg-green-600"/>
      <div className="w-full flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <Badge text="Testimonial" />
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#212337]">
          What Our Customers Say
        </h1>
        <p className="mt-3 text-gray-600">
          Hear directly from our valued customers about their Fresh Harvest
          experience.
        </p>
      </div>

      {/* Slider */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto transition-all duration-700">
        <div className="w-[250px] h-[320px] relative rounded-full overflow-hidden">
          <Image
            src={reviews[activeIndex].img}
            alt={reviews[activeIndex].name}
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 bg-[#f4f6f6] rounded-xl p-6 md:p-10 text-center md:text-left">
          <p className="text-base text-gray-700 mb-4 leading-relaxed">
            &rdquo;{reviews[activeIndex].text}&ldquo;
          </p>
          <p className="text-[#212337] text-base">
            <strong>{reviews[activeIndex].name}</strong> -{" "}
            {reviews[activeIndex].role}
          </p>
        </div>
      </div>

      {/* Control dots */}
      <div className="flex justify-center mt-8 gap-3">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              activeIndex === i ? "bg-[#749B3F]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
