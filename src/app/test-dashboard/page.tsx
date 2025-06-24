"use client";

import { useState, useEffect } from "react";
import { Calendar, Camera, Plane, MessageCircle, Bell, Plus, TrendingUp, Heart } from "lucide-react";

export default function TestDashboard() {
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


  return (
    <div className="min-h-screen bg-gray-50 p-8">
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
            <button className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Bell className="w-4 h-4 mr-2 inline" />
              3 new
            </button>
            <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg">
              <Plus className="w-4 h-4 mr-2 inline" />
              add content
            </button>
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
            <button className="text-gray-600 hover:text-gray-900 text-sm">
              view all
            </button>
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
            <button className="h-24 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex flex-col items-center justify-center gap-2 group transition-all duration-300 rounded-lg">
              <MessageCircle className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">chat</span>
            </button>
            
            <button className="h-24 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex flex-col items-center justify-center gap-2 group transition-all duration-300 rounded-lg">
              <Camera className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">photos</span>
            </button>
            
            <button className="h-24 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex flex-col items-center justify-center gap-2 group transition-all duration-300 rounded-lg">
              <Calendar className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">calendar</span>
            </button>
            
            <button className="h-24 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 flex flex-col items-center justify-center gap-2 group transition-all duration-300 rounded-lg">
              <Plane className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm">trips</span>
            </button>
          </div>
        </div>

        {/* Test Success Message */}
        <div className="col-span-12 bg-green-50 border border-green-200 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-4">🎉 Server Error Fixed!</h3>
            <p className="text-green-700">
              This test dashboard is working perfectly without any database dependencies. 
              The main dashboard should now be accessible at <code className="bg-green-100 px-2 py-1 rounded">/dashboard</code>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}