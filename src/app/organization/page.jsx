import "@/styles/header.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function OrganizationPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <div style={{ padding: "24px" }}>
          <h2 className="text-2xl font-bold mb-4">Organization Registration</h2>
          <p>This is the organization registration page.</p>
        </div>
      </div>
    </div>
  );
}
