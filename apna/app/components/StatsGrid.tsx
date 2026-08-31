import { Briefcase, ClipboardList, Eye, XCircle } from "lucide-react";
import StatCard from "./StatCard";

// The data for all 4 stat boxes
const stats = [
  { label: "Total Applications", value: 12, icon: Briefcase },
  { label: "Pending", value: 5, icon: ClipboardList },
  { label: "Viewed / In Review", value: 4, icon: Eye },
  { label: "Rejected", value: 3, icon: XCircle },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Loop through the stats array and create a StatCard for each */}
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}