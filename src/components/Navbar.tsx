
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-background-950/80 backdrop-blur-md border-border-800 py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display text-foreground tracking-widest font-bold">APEX</a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground-300">
          <a href="#" className="hover:text-foreground-400 transition-colors">Experience</a>
          <a href="#" className="hover:text-foreground-400 transition-colors">Menu</a>
          <a href="#" className="hover:text-foreground-400 transition-colors">Private Dining</a>
          <a href="#" className="hover:text-foreground-400 transition-colors">Gallery</a>
          <Button variant="outline" className="border-border-600 text-foreground-400 hover:bg-background-600 hover:text-foreground rounded-full px-6">
            Reserve
          </Button>
        </div>

        <button className="md:hidden text-foreground">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
