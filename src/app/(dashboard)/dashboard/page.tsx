"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, Camera, Plane, MessageCircle, Bell, Plus, TrendingUp, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "messages today", value: "24", trend: "+12%", color: "text-blue-400" },
    { label: "photos shared", value: "156", trend: "+8%", color: "text-purple-400" },
    { label: "events planned", value: "3", trend: "+50%", color: "text-green-400" },
    { label: "family score", value: "98%", trend: "+2%", color: "text-yellow-400" }
  ];

  const recentActivity = [
    { user: "raymond", action: "shared vacation photos", time: "2h ago", avatar: "R", color: "bg-blue-500" },
    { user: "brother 1", action: "updated calendar event", time: "4h ago", avatar: "B", color: "bg-green-500" },
    { user: "brother 2", action: "voted on trip destination", time: "6h ago", avatar: "B", color: "bg-purple-500" },
    { user: "raymond", action: "posted family update", time: "1d ago", avatar: "R", color: "bg-orange-500" }
  ];

  const upcomingEvents = [
    { title: "family dinner", date: "today", time: "7:00 PM", color: "bg-red-500" },
    { title: "movie night", date: "tomorrow", time: "8:30 PM", color: "bg-blue-500" },
    { title: "beach trip", date: "weekend", time: "10:00 AM", color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
              welcome back, raymond
            </h1>
            <p className="text-slate-400 text-lg">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Bell className="w-4 h-4 mr-2" />
              3 new
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              add content
            </Button>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className={`grid grid-cols-12 gap-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
        
        {/* Stats Row */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400 font-medium">{stat.label}</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex items-end justify-between">
                <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-sm text-green-400">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity - Large Card */}
        <div className="col-span-12 lg:col-span-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">recent family activity</h3>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              view all
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-white">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-sm text-slate-400">{activity.time}</p>
                </div>
                <Heart className="w-5 h-5 text-slate-600 group-hover:text-red-400 transition-colors cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-span-12 lg:col-span-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">quick actions</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-20 border-slate-600 hover:bg-blue-600/10 hover:border-blue-500/50 flex-col gap-2 group"
            >
              <MessageCircle className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">chat</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 border-slate-600 hover:bg-purple-600/10 hover:border-purple-500/50 flex-col gap-2 group"
            >
              <Camera className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">photos</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 border-slate-600 hover:bg-green-600/10 hover:border-green-500/50 flex-col gap-2 group"
            >
              <Calendar className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">calendar</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 border-slate-600 hover:bg-orange-600/10 hover:border-orange-500/50 flex-col gap-2 group"
            >
              <Plane className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">trips</span>
            </Button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="col-span-12 lg:col-span-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">upcoming events</h3>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-3 h-3 ${event.color} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform`} />
                <div className="flex-1">
                  <h4 className="text-white font-medium">{event.title}</h4>
                  <p className="text-sm text-slate-400">{event.date} • {event.time}</p>
                </div>
                <Clock className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            view full calendar
          </Button>
        </div>

        {/* Family Map - Visual */}
        <div className="col-span-12 lg:col-span-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">family locations</h3>
          
          <div className="relative h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3)_0%,transparent_50%)] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.3)_0%,transparent_50%)] opacity-60" />
            
            {/* Location Pins */}
            <div className="absolute top-8 left-12 flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm text-white">raymond • home</span>
            </div>
            
            <div className="absolute bottom-12 right-16 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white">brother • office</span>
            </div>
            
            <div className="absolute top-20 right-20 flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm text-white">brother • gym</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">3 family members online</span>
            </div>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              full map
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}