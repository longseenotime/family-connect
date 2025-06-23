"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Camera, Users, MessageCircle, Plane, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "dynamic calendar",
      description: "smart scheduling with family sync",
      gradient: "from-blue-400 to-cyan-300",
      delay: "0ms"
    },
    {
      icon: Camera,
      title: "memory vault",
      description: "ai-organized photo experiences",
      gradient: "from-purple-400 to-pink-300",
      delay: "100ms"
    },
    {
      icon: Users,
      title: "brothers feed",
      description: "real-time family updates",
      gradient: "from-green-400 to-emerald-300",
      delay: "200ms"
    },
    {
      icon: Plane,
      title: "trip planner",
      description: "collaborative vacation voting",
      gradient: "from-orange-400 to-red-300",
      delay: "300ms"
    },
    {
      icon: MessageCircle,
      title: "instant connect",
      description: "seamless family messaging",
      gradient: "from-indigo-400 to-blue-300",
      delay: "400ms"
    },
    {
      icon: Sparkles,
      title: "smart insights",
      description: "family activity analytics",
      gradient: "from-yellow-400 to-orange-300",
      delay: "500ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      {/* Header */}
      <header className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`flex items-center gap-3 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl rotate-45 flex items-center justify-center">
                <span className="text-white font-bold text-lg -rotate-45">OB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 -z-10" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                the ossai brothers
              </h1>
              <p className="text-xs text-slate-400 font-medium">family connect • 2025</p>
            </div>
          </div>
          
          <Link href="/dashboard">
            <Button 
              className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Enter Hub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">state-of-the-art family platform</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                family
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                reimagined
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              experience the future of family connection. dynamic interfaces, intelligent features, 
              and seamless collaboration for the modern ossai brothers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">explore dashboard</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg backdrop-blur-sm"
              >
                watch demo
              </Button>
            </div>
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:border-slate-600/50 cursor-pointer"
                style={{ animationDelay: feature.delay }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-lg opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow Icon */}
                <ArrowRight className="absolute top-8 right-8 w-5 h-5 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center pb-20 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">ready to connect?</h3>
            <p className="text-slate-400 mb-8 text-lg">
              join the ossai brothers in experiencing the future of family communication
            </p>
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg"
              >
                get started now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}