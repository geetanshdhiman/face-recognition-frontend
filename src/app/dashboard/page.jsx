import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to Dashboard
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="card">Users: 0</div>
            <div className="card">Faces Stored: 0</div>
            <div className="card">Last Scan: --</div>
          </div>
        </div>
      </div>
    </div>
  );
}
