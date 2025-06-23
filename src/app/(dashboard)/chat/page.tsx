import { Button } from "@/components/ui/button";
import { Send, Phone, Video, MoreVertical, Smile } from "lucide-react";

export default function Chat() {
  const conversations = [
    { id: 1, name: "Family Group", lastMessage: "See you at dinner!", time: "2:30 PM", unread: 2, online: true },
    { id: 2, name: "Mom & Dad", lastMessage: "Thanks for the photos!", time: "1:15 PM", unread: 0, online: true },
    { id: 3, name: "Siblings", lastMessage: "Who's bringing dessert?", time: "12:45 PM", unread: 1, online: false },
    { id: 4, name: "Grandparents", lastMessage: "Love you all ❤️", time: "Yesterday", unread: 0, online: false },
  ];

  const messages = [
    { id: 1, sender: "Mom", content: "Good morning everyone! Beautiful day today ☀️", time: "9:00 AM", isMe: false },
    { id: 2, sender: "You", content: "Good morning! Yes, perfect weather for the park", time: "9:02 AM", isMe: true },
    { id: 3, sender: "Dad", content: "Should we have lunch at the park?", time: "9:05 AM", isMe: false },
    { id: 4, sender: "Emma", content: "That sounds great! I'll bring sandwiches", time: "9:07 AM", isMe: false },
    { id: 5, sender: "You", content: "Perfect! I'll bring drinks and snacks", time: "9:10 AM", isMe: true },
    { id: 6, sender: "Mom", content: "See you all at 12:30 PM at the main entrance!", time: "9:15 AM", isMe: false },
  ];

  return (
    <div className="h-screen bg-gray-50 flex">
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <header className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Messages</h1>
        </header>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                conversation.id === 1 ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-blue-600">
                      {conversation.name[0]}
                    </span>
                  </div>
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                    <span className="text-xs text-gray-500">{conversation.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    {conversation.unread > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-blue-600">F</span>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Family Group</h2>
                <p className="text-sm text-gray-500">4 members • 3 online</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isMe
                    ? "bg-blue-500 text-white"
                    : "bg-white border border-gray-200 text-gray-900"
                }`}
              >
                {!message.isMe && (
                  <p className="text-xs font-semibold mb-1 opacity-70">{message.sender}</p>
                )}
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${message.isMe ? "text-blue-100" : "text-gray-500"}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Smile className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button size="icon">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}