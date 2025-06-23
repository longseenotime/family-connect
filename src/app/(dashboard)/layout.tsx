"use client";

import { Navigation } from "@/components/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}