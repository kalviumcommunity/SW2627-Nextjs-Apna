"use client";

import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Create Account</h2>
      <p className="text-gray-500 text-sm mb-6">Sign up to start your job search.</p>

      {/* Full name field */}
      <label className="text-sm font-medium text-gray-700">Full Name</label>
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4">
        <User size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Enter your full name"
          className="outline-none text-sm w-full"
        />
      </div>

      {/* Email field */}
      <label className="text-sm font-medium text-gray-700">Email</label>
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4">
        <Mail size={16} className="text-gray-400" />
        <input
          type="email"
          placeholder="Enter your email"
          className="outline-none text-sm w-full"
        />
      </div>

      {/* Password field */}
      <label className="text-sm font-medium text-gray-700">Password</label>
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-6">
        <Lock size={16} className="text-gray-400" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Create a password"
          className="outline-none text-sm w-full"
          onFocus={() => setShowPassword(false)}
        />
      </div>

      {/* Sign up button */}
      <button className="w-full bg-blue-700 text-white font-medium py-2.5 rounded-lg mb-4">
        Sign Up
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Google signup button */}
      <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg text-sm font-medium text-gray-700 mb-6">
        <span className="font-bold text-blue-500">G</span>
        Sign up with Google
      </button>
    </div>
  );
}