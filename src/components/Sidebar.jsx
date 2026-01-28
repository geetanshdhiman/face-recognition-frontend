"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/sidebar.css";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Menu</h2>

      <nav className="sidebar-nav">
        <Link
          href="/dashboard"
          className={`sidebar-link ${isActive("/dashboard") ? "active" : ""}`}
        >
          Dashboard
        </Link>

        <Link
          href="/organization"
          className={`sidebar-link ${isActive("/organization") ? "active" : ""}`}
        >
          Organization Registration
        </Link>

        <Link
          href="/users"
          className={`sidebar-link ${isActive("/users") ? "active" : ""}`}
        >
          User Registration
        </Link>

        <Link
          href="/face-auth"
          className={`sidebar-link ${isActive("/face-auth") ? "active" : ""}`}
        >
          Face Authentication
        </Link>

        <div className="sidebar-divider" />

        <Link
          href="/announcements"
          className={`sidebar-link ${isActive("/announcements") ? "active" : ""}`}
        >
          Announcement
        </Link>

        <Link
          href="/faq"
          className={`sidebar-link ${isActive("/faq") ? "active" : ""}`}
        >
          FAQ
        </Link>

        <Link
          href="/support"
          className={`sidebar-link ${isActive("/support") ? "active" : ""}`}
        >
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
