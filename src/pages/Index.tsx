
import { useToast } from "@/components/ui/use-toast";
import { ShoppingBag, MessageSquare, Award, Lock, Copy, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("PLAY.BRUTALPRISON.COM");
    setCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "Server IP has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-between p-6">
      {/* Header Section */}
      <header className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in">
        <button
          onClick={handleCopy}
          className="glass-card px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105"
        >
          <span className="text-sm md:text-base">PLAY.BRUTALPRISON.COM</span>
          <Copy className="w-4 h-4" />
        </button>

        <div className="flex-1 flex justify-center">
          <img
            src="/lovable-uploads/e4b6e285-189f-49e6-814e-413820d38fc1.png"
            alt="Brutal Prison Logo"
            className="h-32 md:h-48 object-contain"
          />
        </div>

        <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm md:text-base">41 Online</span>
        </div>
      </header>

      {/* Navigation Grid */}
      <nav className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 my-12 animate-scale-in">
        <button className="nav-button">
          <ShoppingBag className="w-12 h-12" />
          <span className="text-lg font-medium">Store</span>
        </button>
        <button className="nav-button">
          <MessageSquare className="w-12 h-12" />
          <span className="text-lg font-medium">Discord</span>
        </button>
        <button className="nav-button">
          <Award className="w-12 h-12" />
          <span className="text-lg font-medium">Vote</span>
        </button>
        <button className="nav-button">
          <Lock className="w-12 h-12" />
          <span className="text-lg font-medium">Rules</span>
        </button>
      </nav>

      {/* Footer */}
      <footer className="w-full max-w-6xl flex flex-col items-center gap-4 animate-fade-in">
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary/80 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary/80 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary/80 transition-colors">
            <MessageSquare className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>Copyright © Brutal Prison 2021. All Rights Reserved.</p>
          <p className="mt-1">We are not affiliated with Mojang AB.</p>
        </div>
      </footer>
    </div>
  );
}
