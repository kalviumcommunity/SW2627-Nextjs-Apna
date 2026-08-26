// The data for the activity feed
const activities = [
  { title: "Status changed to Shortlisted", detail: "Software Engineer at Google", time: "2 hours ago" },
  { title: "Application viewed by employer", detail: "UI Designer at Microsoft", time: "Yesterday" },
  { title: "Applied to Software Engineer", detail: "Google", time: "Aug 12, 2024" },
  { title: "Applied to UI Designer", detail: "Microsoft", time: "Aug 10, 2024" },
];

export default function RecentActivity() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <h2 className="font-semibold mb-4">Recent Activity</h2>

      <div className="space-y-4">
        {/* Loop through activities and show each one */}
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-3">
            {/* Small dot */}
            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
            
            <div>
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-black">{activity.detail}</p>
              <p className="text-xs text-black">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}