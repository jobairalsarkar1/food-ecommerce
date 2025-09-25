"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { IoCart, IoMenu, IoClose } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const cartCount = 3;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div
        className="w-full h-16 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-18 
        bg-green-200/90 md:bg-transparent backdrop-blur"
      >
        {/* Branding */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <BsGridFill className="w-7 h-7 text-[#749B3F]" />
          <span>Fresh Harvest</span>
        </div>

        {/* Nav links (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li key={i} className="relative">
                  <Link
                    href={link.href}
                    className="text-gray-800 font-medium hover:text-[#749B3F] transition"
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-2/3 bg-[#749B3F] rounded-full"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Favorite, Cart, Auth (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="flex items-center gap-2">
            <MdFavorite className="w-6 h-6 text-[#749B3F]" />
            Favorite
          </Link>

          {/* Cart with badge */}
          <Link href="#" className="flex items-center gap-2">
            <div className="relative">
              <IoCart className="w-6 h-6 text-[#749B3F]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 border-2 border-gray-200 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <span>Cart</span>
          </Link>

          <Link
            href="#"
            className="px-6 py-2 font-semibold border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          {/* Cart */}
          <Link href="#" className="relative">
            <IoCart className="w-7 h-7 text-[#749B3F]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 border border-gray-100 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          {/* Hamburger */}
          <button onClick={() => setIsOpen(true)}>
            <IoMenu className="w-8 h-8 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[75%] sm:w-[60%] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5   py-4">
          <BsGridFill className="w-7 h-7 text-[#749B3F]" />
          <button onClick={() => setIsOpen(false)}>
            <IoClose className="w-7 h-7 text-gray-800" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li key={i}>
                <Link
                  href={link.href}
                  className={`block transition ${
                    isActive ? "text-[#749B3F]" : "text-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-6">
          <Link
            href="#"
            className="px-6 py-2 font-semibold border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition inline-block"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
