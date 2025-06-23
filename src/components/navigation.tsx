"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Calendar, Camera, MessageSquare, Users, Bell, Plane, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "dashboard", href: "/dashboard", icon: Home },
  { name: "calendar", href: "/calendar", icon: Calendar },
  { name: "photos", href: "/photos", icon: Camera },
  { name: "news", href: "/news", icon: Users },
  { name: "trips", href: "/trips", icon: Plane },
  { name: "chat", href: "/chat", icon: MessageSquare },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-stone-100/50 backdrop-blur-sm border-r border-stone-300/50 w-72 flex flex-col">
      {/* Logo Section */}
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-stone-700 to-stone-800 rounded-xl rotate-45 flex items-center justify-center group-hover:rotate-[50deg] transition-transform duration-300">
              <span className="text-stone-100 font-bold text-lg -rotate-45">OB</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-stone-700 to-stone-800 rounded-xl blur-lg opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-stone-800 to-stone-700 bg-clip-text text-transparent">
              the ossai brothers
            </span>
            <p className="text-xs text-stone-500 font-medium">family connect • 2025</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative",
                    isActive
                      ? "bg-gradient-to-r from-stone-200/20 to-stone-300/20 text-stone-800 border border-stone-400/30"
                      : "text-stone-500 hover:bg-stone-200/50 hover:text-stone-800"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-stone-600 to-stone-700 rounded-r-full" />
                  )}
                  <Icon className={cn(
                    "h-5 w-5 transition-all duration-300",
                    isActive 
                      ? "text-stone-600 scale-110" 
                      : "group-hover:scale-110"
                  )} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-stone-600 rounded-full animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-6">
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start border-stone-400 text-stone-600 hover:bg-stone-200 hover:border-stone-500"
          >
            <Settings className="h-4 w-4 mr-3" />
            settings
          </Button>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-stone-300/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-200/30 hover:bg-stone-300/50 transition-all duration-300 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full flex items-center justify-center text-stone-100 font-semibold">
              R
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-stone-100" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-stone-800">raymond ossai</p>
            <p className="text-sm text-stone-500">online</p>
          </div>
          <Bell className="h-4 w-4 text-stone-500 group-hover:text-stone-700 transition-colors" />
        </div>
      </div>
    </nav>
  );
}