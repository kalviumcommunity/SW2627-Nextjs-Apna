"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthCard() {
  // Keeps track of which tab is active: "login" or "signup"
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="w-1/2 flex items-center justify-center p-10">
      <div className="w-full max-w-md">
        
        {/* Tabs: Login / Sign Up */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={
              activeTab === "login"
                ? "flex-1 pb-3 text-center font-medium text-blue-600 border-b-2 border-blue-600"
                : "flex-1 pb-3 text-center font-medium text-gray-400"
            }
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={
              activeTab === "signup"
                ? "flex-1 pb-3 text-center font-medium text-blue-600 border-b-2 border-blue-600"
                : "flex-1 pb-3 text-center font-medium text-gray-400"
            }
          >
            Sign Up
          </button>
        </div>

        {/* Show LoginForm or SignupForm depending on activeTab */}
        {activeTab === "login" ? <LoginForm /> : <SignupForm />}

        {/* Bottom link to switch tabs */}
        <p className="text-center text-sm text-gray-600">
          {activeTab === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button onClick={() => setActiveTab("signup")} className="text-blue-600 font-medium">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setActiveTab("login")} className="text-blue-600 font-medium">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}