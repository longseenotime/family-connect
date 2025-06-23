"use client";

import { Navigation } from "@/components/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 flex">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}