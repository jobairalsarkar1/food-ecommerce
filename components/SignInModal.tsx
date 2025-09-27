"use client";

import React, { useState } from "react";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

type SignInModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
};

const SignInModal = ({
  isOpen,
  onClose,
  onSwitchToSignUp,
}: SignInModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mock Sign In Data:", { email, password, remember });
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

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter you email"
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 border-gray-300 rounded accent-orange-500"
              />
              Remember me
            </label>
            <button
              type="button"
              className="font-semibold text-gray-800 underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2 cursor-pointer"
          >
            Login
          </button>
        </form>

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

        {/* Switch to Sign Up */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <button
            onClick={onSwitchToSignUp}
            className="text-orange-500 font-semibold hover:underline cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
