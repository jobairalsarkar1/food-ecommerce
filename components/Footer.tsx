import React from "react";
import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { BiLogoVisa } from "react-icons/bi";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
        <div className="flex flex-col items-start justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-[#212337] mb-4">
            <BsGridFill className="w-7 h-7 text-[#749B3F]" />
            <span>Fresh Harvest</span>
          </div>
          <div>
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Download App:
            </p>
            <div className="flex flex-row sm:flex-col md:flex-row gap-4">
              {/* App Store */}
              <a
                href="#"
                className="flex items-center sm:items-start gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-90 transition max-w-[160px]"
              >
                <AiFillApple className="w-8 h-8 flex-shrink-0" />
                <div className="flex flex-col leading-tight">
                  <p className="text-xs">Download on the</p>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center sm:items-start gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-90 transition max-w-[160px]"
              >
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

        {/* Quick Links 1 */}
        <div>
          <h3 className="text-lg font-semibold text-[#212337] mb-4">
            Quick Links 1
          </h3>
          <ul className="flex flex-col gap-2 text-gray-700">
            {["Home", "Shop", "About Us", "Blog", "Detail Blog"].map(
              (link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#749B3F] transition">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-lg font-semibold text-[#212337] mb-4">
            Quick Links 2
          </h3>
          <ul className="flex flex-col gap-2 text-gray-700">
            {["Favorites", "Cart", "Sign In", "Register"].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#749B3F] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Payment */}
        <div>
          <h3 className="text-lg font-semibold text-[#212337] mb-4">
            Contact Us
          </h3>
          <p className="text-gray-700 mb-2 flex items-center gap-2">
            <MdOutlinePhone className="text-[#749B3F]" /> +1 234 567 890
          </p>
          <p className="text-gray-700 mb-2 flex items-center gap-2">
            <CiMail className="text-[#749B3F]" /> info@freshharvest.com
          </p>
          <p className="text-gray-700 mb-4 flex items-center gap-2">
            <CiLocationOn className="text-[#749B3F]" /> 123 Green St, Farmville
          </p>

          <p className="text-sm font-semibold text-gray-700 mb-2">
            Accepted Payment Methods:
          </p>
          <div className="flex gap-4">
            <BiLogoVisa className="w-16 h-12" />
            <Image src="/paypal.png" alt="Paypal" width={50} height={30} />
            <Image
              src="/apple-pay.png"
              alt="Apple Pay"
              width={50}
              height={30}
            />
          </div>
        </div>
      </div>

      {/* Bottom copyright & social */}
      <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
        <p>@ Copyright 2025. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:text-[#749B3F] transition"
          >
            <FaFacebookF className="text-white" size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:text-[#749B3F] transition"
          >
            <FaTwitter className="text-white" size={20} />
          </a>
          <a
            href="/instagram"
            className="p-2 bg-gray-800 rounded-full hover:text-[#749B3F] transition"
          >
            <FaInstagram className="text-white" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
