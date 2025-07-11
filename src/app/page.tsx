"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Camera, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Stay Connected",
      description: "Share moments, coordinate schedules, and keep everyone in the loop effortlessly."
    },
    {
      icon: Calendar,
      title: "Plan Together",
      description: "Shared calendars and trip planning with voting to make family decisions easy."
    },
    {
      icon: Camera,
      title: "Capture Memories",
      description: "Upload and share photos instantly with family members across all devices."
    },
    {
      icon: MessageSquare,
      title: "Family Chat",
      description: "Private family conversations, announcements, and daily check-ins in one place."
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OB</span>
            </div>
            <span className="text-xl font-medium text-gray-900">the ossai brothers</span>
          </div>
          
          
          <Link href="/dashboard">
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6">
              Enter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Keep your family
              <br />
              <span className="text-gray-500">close</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Share photos, plan trips, coordinate schedules, and stay connected with the people who matter most.
            </p>
            
            <div className="flex justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg">
                  Enter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image/Demo */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 md:p-16 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-gray-100 rounded"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                    <div className="h-20 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
              OB
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Made for families
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay connected, organized, and close with your loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`text-center transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OB</span>
              </div>
              <span className="text-xl font-medium text-gray-900">the ossai brothers</span>
            </div>
            <div className="text-gray-600">
              © 2025 The Ossai Brothers. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}