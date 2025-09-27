"use client";

import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { IoCart, IoMenu, IoClose } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import SignInModal from "@/components/SignInModal";
import SignUpModal from "@/components/SignUpModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const cartCount = 3;

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Shop", href: "/#shop" },
    { name: "About Us", href: "/#about" },
    { name: "Blog", href: "/#blog" },
  ];

  const handleNavClick = (href: string) => {
    const [, hash] = href.split("#");

    if (pathname === "/" && hash) {
      // update URL hash without scrolling
      if (window.location.hash !== `#${hash}`) {
        router.replace(`#${hash}`, { scroll: false });
      }

      // scroll to section
      const el = document.getElementById(hash);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 70,
          behavior: "smooth",
        });
      }
    } else {
      // navigate to home + hash
      router.push(href);
    }
  };

  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xs">
        <div className="w-full h-16 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20">
          {/* Branding */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <BsGridFill className="w-7 h-7 text-[#749B3F]" />
            <span>Fresh Harvest</span>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, i) => {
                const isActive =
                  pathname === "/" &&
                  currentHash === `#${link.href.split("#")[1]}`;

                return (
                  <li key={i} className="relative">
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-800 font-medium hover:text-[#749B3F] transition"
                    >
                      {link.name}
                    </button>
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-2/3 bg-[#749B3F] rounded-full"></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2">
              <MdFavorite className="w-6 h-6 text-[#749B3F]" />
              Favorite
            </button>

            <button className="flex items-center gap-2 relative">
              <IoCart className="w-6 h-6 text-[#749B3F]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 border-2 border-gray-200 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
              <span className="ml-2">Cart</span>
            </button>

            <button
              onClick={() => setShowSignIn(true)}
              className="px-6 py-2 font-semibold border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Sign in
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-4">
            <button className="relative">
              <IoCart className="w-7 h-7 text-[#749B3F]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 border border-gray-100 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
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
          <div className="flex justify-between items-center px-5 py-4">
            <BsGridFill className="w-7 h-7 text-[#749B3F]" />
            <button onClick={() => setIsOpen(false)}>
              <IoClose className="w-7 h-7 text-gray-800" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    handleNavClick(link.href);
                    setIsOpen(false);
                  }}
                  className={`block transition ${
                    pathname === "/" &&
                    currentHash === `#${link.href.split("#")[1]}`
                      ? "text-[#749B3F]"
                      : "text-gray-800"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="px-6">
            <button
              onClick={() => {
                setIsOpen(false);
                setShowSignIn(true);
              }}
              className="px-6 py-2 font-semibold border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition inline-block"
            >
              Sign in
            </button>
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

      {/* Modals */}
      <div className="bg-green-500 mx-4">
        <SignInModal
          isOpen={showSignIn}
          onClose={() => setShowSignIn(false)}
          onSwitchToSignUp={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />
        <SignUpModal
          isOpen={showSignUp}
          onClose={() => setShowSignUp(false)}
          onSwitchToSignIn={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
