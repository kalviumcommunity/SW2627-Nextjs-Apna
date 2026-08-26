"use client";

import { LayoutGrid, Briefcase, FileText, Bookmark, FileEdit, Bell, User, HelpCircle } from "lucide-react";

// List of items to show in the sidebar menu
const menuItems = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Jobs", icon: Briefcase },
  { label: "Applications", icon: FileText, badge: 12 },
  { label: "Saved Jobs", icon: Bookmark },
  { label: "Resume", icon: FileEdit },
  { label: "Notifications", icon: Bell },
  { label: "Profile", icon: User },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 flex flex-col justify-between">
      
      <div>
        {/* Logo */}
        <div className="px-6 py-6">
          <h1 className="text-xl font-bold text-blue-600">Apna</h1>
          <p className="text-xs text-black">CANDIDATE PORTAL</p>
        </div>

        {/* Loop through menuItems and show a button for each one */}
        <nav className="px-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon; // must start with capital letter to use as JSX

            return (
              <button
                key={item.label}
                className={
                  item.active
                    ? "w-full flex items-center justify-between px-3 py-2 rounded-lg bg-blue-600 text-white text-sm"
                    : "w-full flex items-center justify-between px-3 py-2 rounded-lg text-black hover:bg-gray-100 text-sm"
                }
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {item.label}
                </span>

                {/* Only show the badge if this item has one */}
                {item.badge && (
                  <span className="text-xs bg-gray-200 text-black px-2 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Help & Support link at the bottom */}
      <div className="px-6 py-6 border-t border-gray-200">
        <button className="flex items-center gap-2 text-sm text-black">
          <HelpCircle size={18} />
          Help & Support
        </button>
      </div>
    </aside>
  );
}