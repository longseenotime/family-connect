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
      gradient: "from-stone-500 to-stone-600",
      delay: "0ms"
    },
    {
      icon: Camera,
      title: "memory vault",
      description: "ai-organized photo experiences",
      gradient: "from-stone-600 to-stone-700",
      delay: "100ms"
    },
    {
      icon: Users,
      title: "brothers feed",
      description: "real-time family updates",
      gradient: "from-stone-400 to-stone-500",
      delay: "200ms"
    },
    {
      icon: Plane,
      title: "trip planner",
      description: "collaborative vacation voting",
      gradient: "from-stone-500 to-stone-600",
      delay: "300ms"
    },
    {
      icon: MessageCircle,
      title: "instant connect",
      description: "seamless family messaging",
      gradient: "from-stone-600 to-stone-700",
      delay: "400ms"
    },
    {
      icon: Sparkles,
      title: "smart insights",
      description: "family activity analytics",
      gradient: "from-stone-400 to-stone-500",
      delay: "500ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-stone-300/20 to-stone-400/15 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-stone-300/10 to-stone-400/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-stone-200/10 to-stone-300/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,113,108,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      {/* Header */}
      <header className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`flex items-center gap-3 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-stone-700 to-stone-800 rounded-xl rotate-45 flex items-center justify-center">
                <span className="text-stone-100 font-bold text-lg -rotate-45">OB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-stone-700 to-stone-800 rounded-xl blur-lg opacity-30 -z-10" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-stone-800 to-stone-700 bg-clip-text text-transparent">
                the ossai brothers
              </h1>
              <p className="text-xs text-stone-500 font-medium">family connect • 2025</p>
            </div>
          </div>
          
          <Link href="/dashboard">
            <Button 
              className={`bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-stone-100 border-0 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
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
            <div className="inline-flex items-center gap-2 bg-stone-200/50 backdrop-blur-sm border border-stone-300/50 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-stone-600" />
              <span className="text-sm text-stone-600">state-of-the-art family platform</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600 bg-clip-text text-transparent">
                family
              </span>
              <br />
              <span className="bg-gradient-to-r from-stone-600 via-stone-500 to-stone-400 bg-clip-text text-transparent">
                reimagined
              </span>
            </h2>
            
            <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              experience the future of family connection. dynamic interfaces, intelligent features, 
              and seamless collaboration for the modern ossai brothers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-stone-100 px-8 py-4 text-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-600 to-stone-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">explore dashboard</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-stone-400 text-stone-600 hover:bg-stone-200 px-8 py-4 text-lg backdrop-blur-sm"
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
                className="group relative p-8 bg-stone-100/30 backdrop-blur-sm border border-stone-300/50 rounded-2xl hover:bg-stone-200/50 transition-all duration-500 hover:scale-105 hover:border-stone-400/50 cursor-pointer"
                style={{ animationDelay: feature.delay }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-stone-100" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-lg opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-stone-800 mb-3 group-hover:text-stone-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-stone-600 group-hover:text-stone-700 transition-colors leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow Icon */}
                <ArrowRight className="absolute top-8 right-8 w-5 h-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center pb-20 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-stone-200/50 to-stone-300/50 backdrop-blur-sm border border-stone-400/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-stone-800 mb-4">ready to connect?</h3>
            <p className="text-stone-600 mb-8 text-lg">
              join the ossai brothers in experiencing the future of family communication
            </p>
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-stone-100 px-12 py-4 text-lg"
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