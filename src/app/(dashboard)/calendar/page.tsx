import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Family Calendar</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-semibold">December 2024</h2>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Month</Button>
              <Button variant="ghost" size="sm">Week</Button>
              <Button variant="ghost" size="sm">Day</Button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
              {days.map((day) => (
                <div key={day} className="bg-gray-100 p-3 text-center font-semibold text-sm">
                  {day}
                </div>
              ))}
              {daysInMonth.map((day) => (
                <div key={day} className="bg-white p-3 min-h-[100px] relative">
                  <span className="text-sm font-medium">{day}</span>
                  {day === 15 && (
                    <div className="mt-1 p-1 bg-blue-100 text-blue-800 text-xs rounded">
                      Family Dinner
                    </div>
                  )}
                  {day === 22 && (
                    <div className="mt-1 p-1 bg-green-100 text-green-800 text-xs rounded">
                      Soccer Game
                    </div>
                  )}
                  {day === 25 && (
                    <div className="mt-1 p-1 bg-red-100 text-red-800 text-xs rounded">
                      Christmas
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}