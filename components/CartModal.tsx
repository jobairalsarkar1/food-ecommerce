"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import { removeFromCart } from "@/store/cartSlice";

interface CartModalProps {
  onClose: () => void;
  className?: string;
}

const CartModal = ({ onClose, className }: CartModalProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  // Closes when clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current) return;

      // if click/touch happened inside the modal, ignores it
      const target = event.target as Node | null;
      if (target && ref.current.contains(target)) return;

      onClose();
    };

    // click (and touchstart) so React's onClick stopPropagation runs first.
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClose]);

  const handleRemove = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation(); // click handler doesn't bubble
    dispatch(removeFromCart(id));
  };

  return (
    <div
      ref={ref}
      // Prevents mousedown inside the modal from reaching document handlers as a fallback
      onMouseDown={(e) => e.stopPropagation()}
      className={`bg-white shadow-lg border border-gray-200 p-4 rounded-md z-50 ${className}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose}>
          <IoClose className="w-5 h-5 text-gray-600 hover:text-gray-900" />
        </button>
      </div>

      {/* Cart content */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <span>{item.productName}</span>
                <div className="flex items-center gap-3">
                  <span>
                    {item.quantity} x ${item.price}
                  </span>
                  <button
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => handleRemove(item.id, e)}
                    className="text-red-500 hover:text-red-700"
                    title="Remove item"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <Link href="#">
            <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
              View Cart
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartModal;
