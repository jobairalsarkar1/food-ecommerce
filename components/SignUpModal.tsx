"use client";

import React, { useState, useEffect } from "react";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useRegisterUserMutation } from "@/store/apiSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type SignUpModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignIn: () => void;
};

const SignUpModal = ({
  isOpen,
  onClose,
  onSwitchToSignIn,
}: SignUpModalProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [
    registerUser,
    { isLoading, isError, error, isSuccess, data, reset: resetRegister },
  ] = useRegisterUserMutation();

  // custom toasts
  const showSuccessToast = (msg: string) =>
    toast.custom(
      <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md font-medium">
        <AiOutlineCheckCircle size={20} />
        <span>{msg}</span>
      </div>,
      { position: "top-right", duration: 2000 }
    );

  const showErrorToast = (msg: string) =>
    toast.custom(
      <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md font-medium">
        <AiOutlineCloseCircle size={20} />
        <span>{msg}</span>
      </div>,
      { position: "top-right", duration: 3000 }
    );

  // success & error handling
  useEffect(() => {
    if (isSuccess && data) {
      showSuccessToast(data.message || "Registration successful!");
      setFullName("");
      setEmail("");
      setPassword("");
      resetRegister(); // reset mutation state
      setTimeout(onClose, 2000);
    }

    if (isError && error) {
      const err = error as FetchBaseQueryError | SerializedError;
      if ("data" in err && err.data) {
        const apiError = err.data as { message?: string };
        showErrorToast(apiError.message || "Something went wrong");
      } else {
        showErrorToast("Network error. Please try again.");
      }
      resetRegister(); // reset mutation state
    }
  }, [isSuccess, isError, error, data, onClose, resetRegister]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerUser({ fullName, email, password });
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your name"
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
              >
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-semibold rounded-lg py-2 flex items-center justify-center gap-2 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
            }`}
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">Or sign in with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 cursor-pointer">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 cursor-pointer">
            <FaFacebook size={20} className="text-blue-600" /> Facebook
          </button>
        </div>

        {/* Switch to Sign In */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <button
            onClick={onSwitchToSignIn}
            className="text-orange-500 font-semibold hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
