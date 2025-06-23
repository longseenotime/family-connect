"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Calendar, Camera, MessageSquare, Users, Bell, Plane, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Photos", href: "/photos", icon: Camera },
  { name: "News", href: "/news", icon: Users },
  { name: "Trips", href: "/trips", icon: Plane },
  { name: "Chat", href: "/chat", icon: MessageSquare },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-r border-gray-100 w-72 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">OB</span>
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-900">
              the ossai brothers
            </span>
            <p className="text-xs text-gray-500 font-medium">Family Connect</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 p-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-100">
        <Button 
          variant="outline" 
          className="w-full justify-start text-gray-600 border-gray-200 hover:bg-gray-50"
        >
          <Settings className="h-4 w-4 mr-3" />
          Settings
        </Button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold">
              R
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">Raymond Ossai</p>
            <p className="text-sm text-gray-500">Online</p>
          </div>
          <Bell className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </nav>
  );
}