import { Button } from "@/components/ui/button";
import { Calendar, Camera, Users, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="p-6 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">the ossai brothers</h1>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="text-center py-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            the ossai brothers hub
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            the private communication hub for the ossai brothers to share moments, plan adventures, 
            and stay connected no matter where life takes us.
          </p>
          <Button size="lg" className="px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div className="text-center p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">brothers calendar</h3>
            <p className="text-muted-foreground">keep all the ossai brothers in sync with shared events and plans</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">photo albums</h3>
            <p className="text-muted-foreground">share and preserve precious memories from the ossai brothers</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">brothers news</h3>
            <p className="text-muted-foreground">share updates and stay informed about what each brother is up to</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">brothers chat</h3>
            <p className="text-muted-foreground">simple messaging for the ossai brothers to stay in touch</p>
          </div>
        </div>
      </main>
    </div>
  );
}