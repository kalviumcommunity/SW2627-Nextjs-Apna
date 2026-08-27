import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import JobCard from "../components/JobCard";
import { Search, MapPin } from "lucide-react";

// The job listings data — replace with real data from your database later
const jobs = [
  {
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$140k - $180k",
    mode: "On-site",
    postedAgo: "2 days ago",
  },
  {
    title: "Product Designer",
    company: "Meta",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    mode: "Remote",
    postedAgo: "1 week ago",
  },
  {
    title: "Data Scientist",
    company: "Amazon",
    location: "Seattle, WA",
    type: "Contract",
    salary: "$80 - $110/hr",
    mode: "Hybrid",
    postedAgo: "Just now",
  },
  {
    title: "Frontend Developer",
    company: "Stripe",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130k - $170k",
    mode: "Hybrid",
    postedAgo: "3 days ago",
  },
];

export default function JobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <div className="p-8">
          {/* Page heading */}
          <h1 className="text-2xl font-bold text-gray-900">Find your next role</h1>
          <p className="text-blue-600 text-sm mb-6">
            Explore thousands of job opportunities.
          </p>

          {/* Search row: job search box + location box + Search button */}
          <div className="flex gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 flex-1">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills"
                className="outline-none text-sm w-full"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 w-64">
              <MapPin size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="City, state, or zip code"
                className="outline-none text-sm w-full"
              />
            </div>

            <button className="bg-blue-600 text-white text-sm font-medium px-6 rounded-lg">
              Search Jobs
            </button>
          </div>

          {/* Filter buttons + job count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-400">Showing {jobs.length} jobs</p>
          </div>

          {/* Job cards grid */}
          <div className="grid grid-cols-3 gap-4">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                type={job.type}
                salary={job.salary}
                mode={job.mode}
                postedAgo={job.postedAgo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}