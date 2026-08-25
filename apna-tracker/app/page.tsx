import Link from "next/link";
import Image from "next/image";
import { dashboardSummary, companyApplications } from "./data";
import "./dashboard.css";

const STATUS_LABELS = {
  pending: "Pending",
  viewed: "Viewed",
  shortlisted: "Shortlisted",
  rejected: "Rejected",
  total: "Total",
};

// Replace with a real data fetch, e.g.:
// const { user, summary, companies } = await getApplicantDashboard(userId);
export default function DashboardPage() {
  const user = { name: "User Name" };
  const summary = dashboardSummary;
  const companies = companyApplications;

  return (
    <div className="dashboard">
      {/* Top bar */}
      <header className="topbar">
        <div className="topbar-left">
          <span className="logo">Apna</span>
          <nav className="topnav">
            <Link href="/dashboard" className="topnav-link active">
              Dashboard
            </Link>
            <Link href="/applications" className="topnav-link">
              Applications
            </Link>
            <Link href="/inbox" className="topnav-link">
              Inbox
            </Link>
            <Link href="/settings" className="topnav-link">
              Settings
            </Link>
          </nav>
        </div>
        <div className="topbar-right">
          <button className="icon-button" aria-label="Notifications">
            🔔
          </button>
          <div className="user-menu">
            <div className="avatar" />
            <span className="user-name">{user.name}</span>
            <span className="chevron">▾</span>
          </div>
        </div>
      </header>

      <div className="body">
        {/* Sidebar */}
        <aside className="sidebar">
          <Link href="/dashboard" className="sidebar-link active">
            Home
          </Link>
          <Link href="/applications" className="sidebar-link">
            Applications
          </Link>
          <Link href="/saved-jobs" className="sidebar-link">
            Saved Jobs
          </Link>
          <Link href="/resume" className="sidebar-link">
            Resume
          </Link>
          <Link href="/profile" className="sidebar-link">
            Profile
          </Link>
        </aside>

        {/* Main content */}
        <main className="main">
          <h1 className="welcome">Welcome back, {user.name.split(" ")[0]}!</h1>
          <p className="subtitle">Here's an overview of your job applications.</p>

          {/* Stat cards */}
          <div className="stats-grid">
            <StatCard type="pending" label="Pending" value={summary.pending} />
            <StatCard type="viewed" label="Viewed" value={summary.viewed} />
            <StatCard
              type="shortlisted"
              label="Shortlisted"
              value={summary.shortlisted}
            />
            <StatCard type="rejected" label="Rejected" value={summary.rejected} />
            <StatCard type="total" label="Total" value={summary.total} />
          </div>

          {/* Applications by company */}
          <div className="section-header">
            <h2>Applications by Company</h2>
            <Link href="/applications" className="view-all-link">
              View all applications →
            </Link>
          </div>

          <div className="company-grid">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>

          {/* Apply to more jobs banner */}
          <div className="banner">
            <div className="banner-left">
              <div className="banner-icon">＋</div>
              <div>
                <h3>Apply to more jobs</h3>
                <p>Find jobs that match your profile and boost your chances.</p>
              </div>
            </div>
            <Link href="/jobs" className="browse-jobs-button">
              Browse Jobs
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ type, label, value }) {
  const icons = {
    pending: "🕐",
    viewed: "👁",
    shortlisted: "✅",
    rejected: "✕",
    total: "💼",
  };

  return (
    <div className="stat-card">
      <div className={`stat-icon stat-icon-${type}`}>{icons[type]}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-sub">applications</div>
    </div>
  );
}

function CompanyCard({ company }) {
  return (
    <Link href={`/applications?company=${company.id}`} className="company-card">
      <div className="company-card-logo">
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={28}
          height={28}
        />
      </div>

      <div className="company-card-body">
        <h3>{company.name}</h3>
        <p className="company-role">{company.role}</p>
        <p className="company-count">
          {company.applicationCount}{" "}
          {company.applicationCount === 1 ? "application" : "applications"}
        </p>

        <div className="status-badges">
          {company.statuses.map((s) => (
            <span key={s.type} className={`status-badge status-badge-${s.type}`}>
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <span className="company-card-arrow">›</span>
    </Link>
  );
}
