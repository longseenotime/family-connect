import { Button } from "@/components/ui/button";
import { Plus, MapPin, Calendar, ThumbsUp, Clock, Plane, Car, Home } from "lucide-react";

export default function Trips() {
  const activeTrips = [
    {
      id: 1,
      title: "Summer Beach Vacation 2025",
      status: "voting",
      createdBy: "Mom",
      createdAt: "2 days ago",
      voteDeadline: "5 days left",
      destinations: [
        { name: "Malibu, CA", votes: 3, voted: true },
        { name: "Hawaii", votes: 2, voted: false },
        { name: "Florida Keys", votes: 1, voted: false }
      ],
      totalVotes: 6,
      members: 4
    },
    {
      id: 2,
      title: "Spring Break Adventure",
      status: "planning",
      createdBy: "Dad",
      createdAt: "1 week ago",
      selectedDestination: "Grand Canyon, AZ",
      budget: "$2,500",
      dates: "March 15-22, 2025"
    }
  ];

  const pastTrips = [
    {
      id: 3,
      title: "Thanksgiving Family Reunion",
      destination: "Grandma's House",
      dates: "Nov 23-26, 2024",
      photos: 45,
      status: "completed"
    },
    {
      id: 4,
      title: "Summer Lake House",
      destination: "Lake Tahoe, CA",
      dates: "July 10-17, 2024",
      photos: 127,
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Family Trips</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Plan New Trip
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Active Trip Plans</h2>
              <div className="space-y-4">
                {activeTrips.map((trip) => (
                  <div key={trip.id} className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{trip.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>Created by {trip.createdBy}</span>
                          <span>{trip.createdAt}</span>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            trip.status === 'voting' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {trip.status === 'voting' ? 'Voting' : 'Planning'}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>

                    {trip.status === 'voting' && trip.destinations && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Vote for destination:</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            {trip.voteDeadline}
                          </div>
                        </div>
                        <div className="space-y-3">
                          {trip.destinations.map((dest, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                              <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-gray-400" />
                                <span className="font-medium">{dest.name}</span>
                                {dest.voted && (
                                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    Your vote
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                  <ThumbsUp className="h-4 w-4" />
                                  {dest.votes}
                                </div>
                                {!dest.voted && (
                                  <Button size="sm" variant="outline">Vote</Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 text-sm text-gray-600">
                          {trip.totalVotes} votes from {trip.members} family members
                        </div>
                      </div>
                    )}

                    {trip.status === 'planning' && (
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{trip.selectedDestination}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{trip.dates}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Budget: {trip.budget}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Past Trips</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {pastTrips.map((trip) => (
                  <div key={trip.id} className="bg-white rounded-xl p-4 shadow-sm border">
                    <h3 className="font-semibold text-gray-900 mb-2">{trip.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {trip.destination}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {trip.dates}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{trip.photos} photos</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      View Memories
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plane className="h-4 w-4 mr-2" />
                  Plan Flight Trip
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Car className="h-4 w-4 mr-2" />
                  Plan Road Trip
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Home className="h-4 w-4 mr-2" />
                  Plan Staycation
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Trip Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Trips this year</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total memories</span>
                  <span className="font-semibold">312 photos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Favorite destination</span>
                  <span className="font-semibold">Beach</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Family Preferences</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Beach destinations</span>
                  <div className="flex items-center gap-1">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-12"></div>
                    </div>
                    <span className="text-xs">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mountain adventures</span>
                  <div className="flex items-center gap-1">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-10"></div>
                    </div>
                    <span className="text-xs">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">City exploration</span>
                  <div className="flex items-center gap-1">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-6"></div>
                    </div>
                    <span className="text-xs">40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}