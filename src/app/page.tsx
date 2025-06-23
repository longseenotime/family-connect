import { Button } from "@/components/ui/button";
import { Calendar, Camera, Users, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="p-6 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Family Connect</h1>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="text-center py-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Stay Connected with Family
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A private, secure space for your family to share moments, plan events, 
            and stay in touch with the people who matter most.
          </p>
          <Button size="lg" className="px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Calendar</h3>
            <p className="text-gray-600">Keep everyone in sync with shared events and schedules</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Photo Albums</h3>
            <p className="text-gray-600">Share and preserve precious family memories</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family News</h3>
            <p className="text-gray-600">Share updates and stay informed about family happenings</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Group Chat</h3>
            <p className="text-gray-600">Simple messaging for family conversations</p>
          </div>
        </div>
      </main>
    </div>
  );
}