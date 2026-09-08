import Sidebar from "../components/Sidebar";
import SavedJobCard from "../components/SavedJobCard";
import { Search, Bell, ChevronDown } from "lucide-react";

// The saved jobs data — replace with real data later
const savedJobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechNova Solutions",
    location: "San Francisco, CA (Hybrid)",
    salary: "$140k - $170k",
    savedAgo: "2 days ago",
  },
  {
    title: "UX/UI Designer",
    company: "EcoConnect",
    location: "Remote",
    salary: "$110k - $130k",
    savedAgo: "1 week ago",
  },
  {
    title: "Product Manager",
    company: "FinStream Inc.",
    location: "New York, NY (On-site)",
    salary: "$150k - $185k",
    savedAgo: "2 weeks ago",
  },
];

export default function SavedJobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="ml-64">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-80">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search saved jobs... (Cmd+K)"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <Bell size={20} className="text-gray-500" />
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </div>

        <div className="p-8">
          {/* Page heading + sort button */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Saved Jobs</h1>
              <p className="text-gray-500 text-sm">
                Manage and review jobs you&apos;ve bookmarked for later.
              </p>
            </div>

            <button className="flex items-center gap-1 border border-gray-200 text-sm px-3 py-1.5 rounded-lg text-gray-600">
              Date Saved: Newest
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Saved job cards grid */}
          <div className="grid grid-cols-3 gap-4">
            {savedJobs.map((job, index) => (
              <SavedJobCard
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                savedAgo={job.savedAgo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}