import { ChevronDown } from "lucide-react";

// The 4 filter dropdown buttons (not functional yet, just the UI)
const filters = ["Job Type", "Experience", "Salary Range", "Date Posted"];

export default function JobFilters() {
  return (
    <div className="flex gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          className="flex items-center gap-1 text-sm text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full"
        >
          {filter}
          <ChevronDown size={14} />
        </button>
      ))}
    </div>
  );
}