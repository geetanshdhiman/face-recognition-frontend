import Link from "next/link";
import "@/styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Menu</h2>

      <nav className="sidebar-nav">
        <Link href="/dashboard" className="sidebar-link">
          Dashboard
        </Link>

        <Link href="/organization" className="sidebar-link">
          Organization Registration
        </Link>

        <Link href="/users" className="sidebar-link">
          User Registration
        </Link>

        <Link href="/face-auth" className="sidebar-link">
          Face Authentication
        </Link>

        <div className="sidebar-divider" />

        <Link href="/announcements" className="sidebar-link">
          Announcement
        </Link>

        <Link href="/faq" className="sidebar-link">
          FAQ
        </Link>

        <Link href="/support" className="sidebar-link">
          Support
        </Link>

        <div className="sidebar-divider" />

        <Link href="/login" className="sidebar-link logout">
          Log Out
        </Link>
      </nav>
    </aside>
  );
}
