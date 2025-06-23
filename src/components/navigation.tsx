"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Calendar, Camera, MessageSquare, Users, Bell, Plane } from "lucide-react";
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
    <nav className="bg-card border-r border-border w-64 flex flex-col">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">FC</span>
          </div>
          <span className="text-xl font-bold text-foreground">Family Connect</span>
        </Link>
      </div>

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
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3">
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-muted-foreground">U</span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">User Name</p>
            <p className="text-sm text-muted-foreground">user@family.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}