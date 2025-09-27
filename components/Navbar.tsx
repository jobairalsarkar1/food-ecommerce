"use client";

import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { IoCart, IoMenu, IoClose } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CartModal from "@/components/CartModal";
import SignInModal from "@/components/SignInModal";
import SignUpModal from "@/components/SignUpModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const auth = useSelector((state: RootState) => state.auth);

  const pathname = usePathname();
  const router = useRouter();

  const userInitial = auth.user?.userName
    ? auth.user.userName.charAt(0).toUpperCase()
    : auth.user?.email?.charAt(0).toUpperCase() || "";

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Shop", href: "/#shop" },
    { name: "About Us", href: "/#about" },
    { name: "Blog", href: "/#blog" },
  ];

  const handleNavClick = (href: string) => {
    const [, hash] = href.split("#");
    if (pathname === "/" && hash) {
      if (window.location.hash !== `#${hash}`)
        router.replace(`#${hash}`, { scroll: false });
      const el = document.getElementById(hash);
      if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    } else {
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

          {/* Desktop nav lins */}
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
          <div className="hidden md:flex items-center gap-6 relative">
            <button className="flex items-center gap-1">
              <MdFavorite className="w-6 h-6 text-[#749B3F]" />
              Favorite
            </button>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setShowCartModal(!showCartModal)}
                className="flex items-center gap-1 relative"
              >
                <div className="relative">
                  <IoCart className="w-6 h-6 text-[#749B3F]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 border-2 border-gray-200 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="ml-1">Cart</span>
              </button>

              {showCartModal && (
                <CartModal
                  onClose={() => setShowCartModal(false)}
                  className="absolute top-full right-0 mt-2 w-80 z-50"
                />
              )}
            </div>

            {/* User avatar */}
            {auth.user ? (
              <div className="w-10 h-10 bg-[#749B3F] text-white rounded-full flex items-center justify-center font-semibold text-lg">
                {userInitial}
              </div>
            ) : (
              <button
                onClick={() => setShowSignIn(true)}
                className="px-6 py-2 font-semibold border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition"
              >
                Sign in
              </button>
            )}
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-4 relative">
            <button
              onClick={() => setShowCartModal(!showCartModal)}
              className="relative z-50"
            >
              <IoCart className="w-7 h-7 text-[#749B3F]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 border border-gray-100 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {showCartModal && (
              <CartModal
                onClose={() => setShowCartModal(false)}
                className="fixed top-16 right-4 w-72 z-[1000]"
              />
            )}

            <button onClick={() => setIsOpen(true)}>
              <IoMenu className="w-8 h-8 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-screen bg-white/100 bg-opacity-100 w-[75%] sm:w-[60%] shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-5 py-4">
            <BsGridFill className="w-7 h-7 text-[#749B3F]" />
            <button onClick={() => setIsOpen(false)}>
              <IoClose className="w-7 h-7 text-gray-800" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 p-6 text-lg bg-white font-medium">
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
            {!auth.user && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowSignIn(true);
                }}
                className="px-6 py-2 font-semibold border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition inline-block"
              >
                Sign in
              </button>
            )}
          </div>
        </div>

        {/* Overlay for sidebar */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          ></div>
        )}
      </header>

      {/* Sign In/Sign Up Modals */}
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
    </>
  );
};

export default Navbar;
