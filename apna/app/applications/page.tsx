import Sidebar from "../components/Sidebar";
import ApplicationCard from "../components/ApplicationCard";
import StatusTabs from "../components/StatusTabs";
import { Search, Bell, SlidersHorizontal, ArrowUpDown } from "lucide-react";

// The applications data — replace with real data later
const applications = [
  {
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    status: "Pending",
    appliedDate: "Oct 12",
    updatedAgo: "2 days ago",
    interview: null,
  },
  {
    title: "Product Designer",
    company: "TechCorp",
    location: "Remote",
    status: "Viewed",
    appliedDate: "Oct 10",
    updatedAgo: "yesterday",
    interview: null,
  },
  {
    title: "Frontend Developer",
    company: "FinServe",
    location: "New York, NY",
    status: "Shortlisted",
    appliedDate: "Oct 05",
    updatedAgo: "1 hr ago",
    interview: "Oct 18, 2:00 PM EST",
  },
  {
    title: "UX Researcher",
    company: "EcoTech",
    location: "Austin, TX",
    status: "Not Selected",
    appliedDate: "Sep 28",
    updatedAgo: "Oct 10",
    interview: null,
  },
];

export default function ApplicationsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="ml-64">
        {/* Top bar: this page has its own search placeholder text, so writing it directly here instead of reusing Topbar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-80">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search applications... (Cmd+K)"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <Bell size={20} className="text-gray-500" />
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </div>

        <div className="p-8">
          {/* Page heading + Filter/Sort buttons */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
              <p className="text-gray-500 text-sm">
                Track and manage your job application progress.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 bg-white border border-gray-200 text-sm px-4 py-2 rounded-lg">
                <SlidersHorizontal size={14} /> Filter
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 text-sm px-4 py-2 rounded-lg">
                <ArrowUpDown size={14} /> Sort by: Recent
              </button>
            </div>
          </div>

          {/* Status filter tabs */}

          {/* Application cards grid */}
          <div className="grid grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <ApplicationCard
                key={index}
                title={app.title}
                company={app.company}
                location={app.location}
                status={app.status}
                appliedDate={app.appliedDate}
                updatedAgo={app.updatedAgo}
                interview={app.interview}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}