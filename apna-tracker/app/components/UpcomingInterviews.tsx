import InterviewCard from "./InterviewCard";

// The data for both interview cards
const interviews = [
  {
    role: "Frontend Developer",
    company: "Google",
    initial: "G",
    date: "Aug 18, 2024",
    time: "9:00 AM (PST)",
    platform: "Google Meet",
  },
  {
    role: "UI Designer",
    company: "Microsoft",
    initial: "M",
    date: "Aug 20, 2024",
    time: "2:00 PM (EST)",
    platform: "Teams Link",
  },
];

export default function UpcomingInterviews() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Upcoming Interviews</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Loop through interviews and create a card for each */}
        {interviews.map((interview) => (
          <InterviewCard
            key={interview.role}
            role={interview.role}
            company={interview.company}
            initial={interview.initial}
            date={interview.date}
            time={interview.time}
            platform={interview.platform}
          />
        ))}
      </div>
    </div>
  );
}