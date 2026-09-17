import type { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50 lg:pl-64">
        <Sidebar />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
