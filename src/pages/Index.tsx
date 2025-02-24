import { useToast } from "@/components/ui/use-toast";
import { Copy, Twitter, Instagram, MessageSquare } from "lucide-react";
import { useState } from "react";
export default function Index() {
  const {
    toast
  } = useToast();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("PLAY.BRUTALPRISON.COM");
    setCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "Server IP has been copied to your clipboard."
    });
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?q=80&w=2532&auto=format&fit=crop")'
    }} />
      <div className="fixed inset-0 z-0 bg-black/75" /> {/* Dark overlay */}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between p-6">
        {/* Header Section */}
        <header className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in">
          <button onClick={handleCopy} className="glass-card px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105">
            <span className="text-sm md:text-base">PLAY.BRUTALPRISON.COM</span>
            <Copy className="w-4 h-4" />
          </button>

          <div className="flex-1 flex justify-center">
            <img alt="Brutal Prison Logo" className="h-32 md:h-48 object-contain animate-float" src="https://brutalprison.com/assets/logo.png" />
          </div>

          <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm md:text-base">41 Online</span>
          </div>
        </header>

        {/* Navigation Grid */}
        <nav className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 my-12 animate-scale-in">
          <button className="nav-button">
            <img src="https://img.freepik.com/premium-vector/bag-gold-coins-vector-illustration_96037-185.jpg?w=1380" alt="Store" className="w-28 h-28 object-cover" />
            <span className="text-lg font-medium">Store</span>
          </button>
          <button className="nav-button">
            <img src="https://img.freepik.com/premium-vector/bag-gold-coins-vector-illustration_96037-185.jpg?w=1380" alt="Discord" className="w-12 h-12 object-contain" />
            <span className="text-lg font-medium">Discord</span>
          </button>
          <button className="nav-button">
            <img src="https://img.freepik.com/premium-vector/bag-gold-coins-vector-illustration_96037-185.jpg?w=1380" alt="Vote" className="w-12 h-12 object-contain" />
            <span className="text-lg font-medium">Vote</span>
          </button>
          <button className="nav-button">
            <img src="https://img.freepik.com/premium-vector/bag-gold-coins-vector-illustration_96037-185.jpg?w=1380" alt="Rules" className="w-12 h-12 object-contain" />
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
    </div>;
}