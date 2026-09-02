"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  // Keeps track of whether the password is shown as text or dots
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back!</h2>
      <p className="text-gray-500 text-sm mb-6">Login to continue to your account.</p>

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
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-1">
        <Lock size={16} className="text-gray-400" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="outline-none text-sm w-full"
        />
        {/* Clicking this flips showPassword between true/false */}
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EyeOff size={16} className="text-gray-400" />
          ) : (
            <Eye size={16} className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Forgot password link */}
      <div className="text-right mt-2 mb-4">
        <button className="text-sm text-blue-600">Forgot password?</button>
      </div>

      {/* Remember me checkbox */}
      <label className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <input type="checkbox" className="w-4 h-4" />
        Remember me
      </label>

      {/* Login button */}
      <button className="w-full bg-blue-700 text-white font-medium py-2.5 rounded-lg mb-4">
        Login
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Google login button */}
      <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg text-sm font-medium text-gray-700 mb-6">
        <span className="font-bold text-blue-500">G</span>
        Login with Google
      </button>
    </div>
  );
}