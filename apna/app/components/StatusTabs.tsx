"use client";

import { useState } from "react";

// The filter tabs at the top (All, Pending, Viewed, etc.)
const tabs = [
  { label: "All", count: 12 },
  { label: "Pending", count: 4 },
  { label: "Viewed", count: 3 },
  { label: "Shortlisted", count: 2 },
  { label: "Rejected", count: 3 },
];

export default function StatusTabs() {
  // Keeps track of which tab is currently selected
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={
            activeTab === tab.label
              ? "bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full"
              : "bg-white border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-full"
          }
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}