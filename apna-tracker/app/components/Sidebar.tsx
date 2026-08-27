"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Briefcase, FileText, Bookmark, FileEdit, Bell, User, HelpCircle } from "lucide-react";

// Added a "href" to each item — this is the page it should link to
const menuItems = [
  { label: "Dashboard", icon: LayoutGrid, href: "/" },
  { label: "Jobs", icon: Briefcase, href: "/jobs" },
  { label: "Applications", icon: FileText, href: "/applications", badge: 12 },
  { label: "Saved Jobs", icon: Bookmark, href: "/saved-jobs" },
  { label: "Resume", icon: FileEdit, href: "/resume" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Profile", icon: User, href: "/profile" },
];

export default function Sidebar() {
  // This tells us the current URL path, e.g. "/jobs"
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 flex flex-col justify-between">
      
      <div>
        <div className="px-6 py-6">
          <h1 className="text-xl font-bold text-blue-600">Apna</h1>
          <p className="text-xs text-gray-400">CANDIDATE PORTAL</p>
        </div>

        <nav className="px-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            
            // Check if this item's page matches the current page
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={
                  isActive
                    ? "w-full flex items-center justify-between px-3 py-2 rounded-lg bg-blue-600 text-white text-sm"
                    : "w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm"
                }
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {item.label}
                </span>

                {item.badge && (
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-6 py-6 border-t border-gray-200">
        <button className="flex items-center gap-2 text-sm text-gray-500">
          <HelpCircle size={18} />
          Help & Support
        </button>
      </div>
    </aside>
  );
}