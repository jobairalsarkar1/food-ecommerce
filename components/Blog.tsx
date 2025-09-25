import React from "react";
import Badge from "./Badge";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: "May 23, 2025",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      image: "/stock_01.jpeg",
    },
    {
      id: 2,
      date: "June 02, 2025",
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious",
      image: "/stock_01.jpeg",
    },
    {
      id: 3,
      date: "June 10, 2025",
      title:
        "The Art of Meal Prepping: How to Save Time Eat healthy Throughout the Week",
      image: "/stock_01.jpeg",
    },
  ];

  return (
    <section className="w-full py-12 px-6 sm:px-12 lg:px-20">
      <div className="w-full flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <Badge text="Our Blog" />
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#212337]">
          Fresh Harvest Blog
        </h1>
        <p className="mt-3 text-gray-600">
          Welcome to Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      {/* Blog grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col h-full">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-52"
            />
            <div className="mt-3 flex flex-col flex-grow">
              <p className="text-sm text-[#4A4A52]">{blog.date}</p>
              <h2 className="text-base sm:text-lg font-semibold text-[#212337] leading-snug mt-1 flex-grow line-clamp-2">
                {blog.title}
              </h2>
              <Link
                href={`/blog/${blog.id}`}
                className="flex items-center gap-2 text-[#FF6A1A] font-medium hover:underline mt-3"
              >
                Read More <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
