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
    { label: "messages today", value: "24", trend: "+12%", color: "text-stone-600" },
    { label: "photos shared", value: "156", trend: "+8%", color: "text-stone-700" },
    { label: "events planned", value: "3", trend: "+50%", color: "text-stone-600" },
    { label: "family score", value: "98%", trend: "+2%", color: "text-stone-700" }
  ];

  const recentActivity = [
    { user: "raymond", action: "shared vacation photos", time: "2h ago", avatar: "R", color: "bg-stone-600" },
    { user: "brother 1", action: "updated calendar event", time: "4h ago", avatar: "B", color: "bg-stone-500" },
    { user: "brother 2", action: "voted on trip destination", time: "6h ago", avatar: "B", color: "bg-stone-700" },
    { user: "raymond", action: "posted family update", time: "1d ago", avatar: "R", color: "bg-stone-400" }
  ];

  const upcomingEvents = [
    { title: "family dinner", date: "today", time: "7:00 PM", color: "bg-stone-600" },
    { title: "movie night", date: "tomorrow", time: "8:30 PM", color: "bg-stone-500" },
    { title: "beach trip", date: "weekend", time: "10:00 AM", color: "bg-stone-700" }
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-stone-800 to-stone-700 bg-clip-text text-transparent mb-2">
              welcome back, raymond
            </h1>
            <p className="text-stone-600 text-lg">
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
            <Button variant="outline" className="border-stone-400 text-stone-600 hover:bg-stone-200">
              <Bell className="w-4 h-4 mr-2" />
              3 new
            </Button>
            <Button className="bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-stone-100">
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
              className="bg-stone-100/30 backdrop-blur-sm border border-stone-300/50 rounded-2xl p-6 hover:bg-stone-200/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-stone-500 font-medium">{stat.label}</span>
                <TrendingUp className="w-4 h-4 text-stone-500" />
              </div>
              <div className="flex items-end justify-between">
                <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-sm text-stone-500">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity - Large Card */}
        <div className="col-span-12 lg:col-span-8 bg-stone-100/30 backdrop-blur-sm border border-stone-300/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-stone-800">recent family activity</h3>
            <Button variant="ghost" size="sm" className="text-stone-600 hover:text-stone-800">
              view all
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-stone-200/30 rounded-xl hover:bg-stone-300/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center text-stone-100 font-semibold`}>
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-stone-800">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-sm text-stone-600">{activity.time}</p>
                </div>
                <Heart className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-span-12 lg:col-span-4 bg-stone-100/30 backdrop-blur-sm border border-stone-300/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-stone-800 mb-6">quick actions</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-20 border-stone-400 hover:bg-stone-200/50 hover:border-stone-500/50 flex-col gap-2 group"
            >
              <MessageCircle className="w-6 h-6 text-stone-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">chat</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 border-stone-400 hover:bg-stone-200/50 hover:border-stone-500/50 flex-col gap-2 group"
            >
              <Camera className="w-6 h-6 text-stone-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">photos</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 border-stone-400 hover:bg-stone-200/50 hover:border-stone-500/50 flex-col gap-2 group"
            >
              <Calendar className="w-6 h-6 text-stone-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">calendar</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 border-stone-400 hover:bg-stone-200/50 hover:border-stone-500/50 flex-col gap-2 group"
            >
              <Plane className="w-6 h-6 text-stone-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">trips</span>
            </Button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="col-span-12 lg:col-span-6 bg-stone-100/30 backdrop-blur-sm border border-stone-300/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-stone-800 mb-6">upcoming events</h3>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-stone-200/30 rounded-xl hover:bg-stone-300/50 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-3 h-3 ${event.color} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform`} />
                <div className="flex-1">
                  <h4 className="text-stone-800 font-medium">{event.title}</h4>
                  <p className="text-sm text-stone-600">{event.date} • {event.time}</p>
                </div>
                <Clock className="w-4 h-4 text-stone-500 group-hover:text-stone-700 transition-colors" />
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4 border-stone-400 text-stone-600 hover:bg-stone-200"
          >
            view full calendar
          </Button>
        </div>

        {/* Family Map - Visual */}
        <div className="col-span-12 lg:col-span-6 bg-stone-100/30 backdrop-blur-sm border border-stone-300/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-stone-800 mb-6">family locations</h3>
          
          <div className="relative h-48 bg-gradient-to-br from-stone-200/20 to-stone-300/20 rounded-xl overflow-hidden">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,113,108,0.3)_0%,transparent_50%)] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,162,158,0.3)_0%,transparent_50%)] opacity-60" />
            
            {/* Location Pins */}
            <div className="absolute top-8 left-12 flex items-center gap-2">
              <div className="w-3 h-3 bg-stone-600 rounded-full animate-pulse" />
              <span className="text-sm text-stone-800">raymond • home</span>
            </div>
            
            <div className="absolute bottom-12 right-16 flex items-center gap-2">
              <div className="w-3 h-3 bg-stone-500 rounded-full animate-pulse" />
              <span className="text-sm text-stone-800">brother • office</span>
            </div>
            
            <div className="absolute top-20 right-20 flex items-center gap-2">
              <div className="w-3 h-3 bg-stone-700 rounded-full animate-pulse" />
              <span className="text-sm text-stone-800">brother • gym</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-stone-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">3 family members online</span>
            </div>
            <Button variant="ghost" size="sm" className="text-stone-600 hover:text-stone-800">
              full map
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}