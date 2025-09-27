"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IoClose } from "react-icons/io5";

interface CartModalProps {
  onClose: () => void;
  className?: string;
}

const CartModal = ({ onClose, className }: CartModalProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className={`bg-white shadow-lg border border-gray-200 p-4 rounded-md z-50 ${className}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose}>
          <IoClose className="w-5 h-5 text-gray-600 hover:text-gray-900" />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.productName}</span>
                <span>
                  {item.quantity} x ${item.price}
                </span>
              </li>
            ))}
          </ul>
          <Link href="/cart">
            <button className="mt-4 w-full px-4 py-2 bg-[#749B3F] text-white rounded-md hover:bg-[#5e8832] transition">
              View Cart
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartModal;
