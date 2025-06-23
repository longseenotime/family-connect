import { Button } from "@/components/ui/button";
import { Plus, Heart, MessageCircle, Share, Camera, Calendar, Users } from "lucide-react";

export default function News() {
  const posts = [
    {
      id: 1,
      author: "Mom",
      avatar: "",
      content: "Just uploaded photos from our amazing beach vacation! The kids had such a wonderful time building sandcastles and collecting shells. Can't wait for our next family adventure! 🏖️",
      timestamp: "2 hours ago",
      type: "photos",
      likes: 8,
      comments: 3,
      photos: 5
    },
    {
      id: 2,
      author: "Dad",
      avatar: "",
      content: "Reminder: Family BBQ this Saturday at 3 PM! I'll be grilling burgers and hot dogs. Please let me know if you're bringing anything. Looking forward to seeing everyone!",
      timestamp: "5 hours ago",
      type: "event",
      likes: 6,
      comments: 7,
      event: "Family BBQ"
    },
    {
      id: 3,
      author: "Emma",
      avatar: "",
      content: "Graduated from high school today! Thank you everyone for your support and love. Excited for the next chapter at university! 🎓",
      timestamp: "1 day ago",
      type: "milestone",
      likes: 15,
      comments: 12
    },
    {
      id: 4,
      author: "Grandma",
      avatar: "",
      content: "Made my famous apple pie today! The recipe has been in our family for three generations. I'll share it in our family cookbook section.",
      timestamp: "2 days ago",
      type: "update",
      likes: 12,
      comments: 5
    }
  ];

  const getPostIcon = (type: string) => {
    switch (type) {
      case "photos": return <Camera className="h-4 w-4 text-blue-600" />;
      case "event": return <Calendar className="h-4 w-4 text-green-600" />;
      case "milestone": return <Users className="h-4 w-4 text-purple-600" />;
      default: return <MessageCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Family News</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Share Update
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Share something with your family..."
                  className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Camera className="h-4 w-4 mr-1" />
                      Photos
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Event
                    </Button>
                  </div>
                  <Button size="sm">Post</Button>
                </div>
              </div>
            </div>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-600">
                    {post.author[0]}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    {getPostIcon(post.type)}
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>
                  
                  <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>
                  
                  {post.type === "photos" && post.photos && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Array.from({ length: Math.min(post.photos, 3) }, (_, i) => (
                        <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
                      ))}
                    </div>
                  )}
                  
                  {post.type === "event" && post.event && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">{post.event}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                      <Share className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline">Load More Posts</Button>
        </div>
      </main>
    </div>
  );
}