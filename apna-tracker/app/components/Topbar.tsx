"use client";

import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
      
      {/* Search box */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-80">
        <Search size={16} className="text-black" />
        <input
          type="text"
          placeholder="Search jobs, skills..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Bell icon + profile circle */}
      <div className="flex items-center gap-4">
        <Bell size={20} className="text-black" />
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}