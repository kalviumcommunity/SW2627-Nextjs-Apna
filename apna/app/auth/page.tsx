import AuthLeftPanel from "../components/AuthLeftPanel";
import AuthCard from "../components/AuthCard";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 flex overflow-hidden">
        <AuthLeftPanel />
        <AuthCard />
      </div>

      {/* Footer note */}
      <p className="absolute bottom-6 text-xs text-gray-400">
        © 2026 Apna Candidate Portal. Meow Ghop Ghop.
      </p>
    </div>
  );
}