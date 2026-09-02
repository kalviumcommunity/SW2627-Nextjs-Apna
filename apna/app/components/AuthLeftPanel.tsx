import { Briefcase, Eye, Users } from "lucide-react";

// The 3 feature items shown on the left side
const features = [
  {
    icon: Briefcase,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Explore Jobs",
    description: "Search and apply to jobs that match your skills and interests.",
  },
  {
    icon: Eye,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Track Applications",
    description: "Keep track of your applications and interview updates.",
  },
  {
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Build Your Profile",
    description: "Create a profile that highlights your skills and experience.",
  },
];

export default function AuthLeftPanel() {
  return (
    <div className="bg-blue-50/50 p-10 flex flex-col justify-center w-1/2">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>
        <div>
          <p className="font-bold text-blue-600 leading-tight">Apna</p>
          <p className="text-xs text-gray-500">Candidate Portal</p>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Find the right opportunity <br />
        for <span className="text-blue-600">your career</span>
      </h1>
      <p className="text-gray-500 mb-8">
        Join thousands of students and professionals discovering great job
        opportunities every day.
      </p>

      {/* Loop through features and show each one */}
      <div className="space-y-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="flex gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${feature.iconBg}`}>
                <Icon size={18} className={feature.iconColor} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{feature.title}</p>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}