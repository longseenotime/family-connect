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
    { label: "messages today", value: "24", trend: "+12%", color: "text-gray-900" },
    { label: "photos shared", value: "156", trend: "+8%", color: "text-gray-900" },
    { label: "events planned", value: "3", trend: "+50%", color: "text-gray-900" },
    { label: "family score", value: "98%", trend: "+2%", color: "text-gray-900" }
  ];

  const recentActivity = [
    { user: "raymond", action: "shared vacation photos", time: "2h ago", avatar: "R", color: "bg-gray-800" },
    { user: "brother 1", action: "updated calendar event", time: "4h ago", avatar: "B", color: "bg-gray-700" },
    { user: "brother 2", action: "voted on trip destination", time: "6h ago", avatar: "B", color: "bg-gray-600" },
    { user: "raymond", action: "posted family update", time: "1d ago", avatar: "R", color: "bg-gray-500" }
  ];

  const upcomingEvents = [
    { title: "family dinner", date: "today", time: "7:00 PM", color: "bg-gray-800" },
    { title: "movie night", date: "tomorrow", time: "8:30 PM", color: "bg-gray-700" },
    { title: "beach trip", date: "weekend", time: "10:00 AM", color: "bg-gray-600" }
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              welcome back, raymond
            </h1>
            <p className="text-gray-600 text-xl font-light">
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
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
              <Bell className="w-4 h-4 mr-2" />
              3 new
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white">
              <Plus className="w-4 h-4 mr-2" />
              add content
            </Button>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className={`grid grid-cols-12 gap-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
        
        {/* Stats Row */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</span>
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-end justify-between">
                <span className={`text-4xl font-bold ${stat.color} tracking-tight`}>{stat.value}</span>
                <span className="text-sm text-green-600 font-medium">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity - Large Card */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-gray-100 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">recent family activity</h3>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              view all
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
                <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">quick actions</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-24 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex-col gap-2 group transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">chat</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-24 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex-col gap-2 group transition-all duration-300"
            >
              <Camera className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">photos</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-24 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex-col gap-2 group transition-all duration-300"
            >
              <Calendar className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">calendar</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-24 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex-col gap-2 group transition-all duration-300"
            >
              <Plane className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">trips</span>
            </Button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="col-span-12 lg:col-span-6 bg-white border border-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">upcoming events</h3>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-3 h-3 ${event.color} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                <div className="flex-1">
                  <h4 className="text-gray-900 font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                </div>
                <Clock className="w-4 h-4 text-gray-500 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300" />
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4 border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            view full calendar
          </Button>
        </div>

        {/* Family Map - Visual */}
        <div className="col-span-12 lg:col-span-6 bg-white border border-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">family locations</h3>
          
          <div className="relative h-52 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200">
            {/* Professional Map Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(156,163,175,0.15)_0%,transparent_60%)] opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(209,213,219,0.15)_0%,transparent_60%)] opacity-80" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `linear-gradient(rgba(156,163,175,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            
            {/* Enhanced Location Pins */}
            <div className="absolute top-8 left-12 flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-4 h-4 bg-black rounded-full shadow-lg animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-black rounded-full animate-ping opacity-20" />
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-200 group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm font-medium text-gray-900">raymond • home</span>
              </div>
            </div>
            
            <div className="absolute bottom-12 right-16 flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-4 h-4 bg-gray-700 rounded-full shadow-lg animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-gray-700 rounded-full animate-ping opacity-20" />
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-200 group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm font-medium text-gray-900">brother • office</span>
              </div>
            </div>
            
            <div className="absolute top-20 right-20 flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-4 h-4 bg-gray-600 rounded-full shadow-lg animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-gray-600 rounded-full animate-ping opacity-20" />
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-200 group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm font-medium text-gray-900">brother • gym</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">3 family members online</span>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              full map
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}