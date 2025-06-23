import { Button } from "@/components/ui/button";
import { Plus, Upload, Heart, Download, Share } from "lucide-react";

export default function Photos() {
  const albums = [
    { id: 1, name: "Summer Vacation 2024", photos: 24, cover: "", recent: true },
    { id: 2, name: "Birthday Celebrations", photos: 12, cover: "", recent: false },
    { id: 3, name: "Family Gatherings", photos: 36, cover: "", recent: false },
    { id: 4, name: "Holiday Memories", photos: 18, cover: "", recent: false },
  ];

  const recentPhotos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    caption: `Photo ${i + 1}`,
    likes: Math.floor(Math.random() * 10),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Family Photos</h1>
          <div className="flex gap-3">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Photos
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Album
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Albums</h2>
              <div className="space-y-3">
                {albums.map((album) => (
                  <div key={album.id} className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg"></div>
                      <div>
                        <p className="font-medium text-sm">{album.name}</p>
                        <p className="text-xs text-gray-600">{album.photos} photos</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Recent Photos</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Grid</Button>
                  <Button variant="ghost" size="sm">List</Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recentPhotos.map((photo) => (
                  <div key={photo.id} className="group relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Photo {photo.id}
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg">
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-1">
                          <Button size="icon" variant="secondary" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8">
                            <Share className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm text-gray-600">{photo.caption}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Heart className="h-3 w-3" />
                        {photo.likes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline">Load More Photos</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}