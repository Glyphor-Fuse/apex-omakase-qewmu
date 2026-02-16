
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-background-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/40 to-background-900/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground tracking-tight mb-6 drop-shadow-2xl">
          APEX
        </h1>
        <p className="text-xl md:text-2xl text-foreground-200 font-light max-w-2xl mb-12 font-body tracking-wide">
          Luxury Omakase. Submerged.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <Button size="lg" className="bg-background-600 hover:bg-background-500 text-foreground rounded-full px-8 h-12 text-lg">
            Book a Table
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-background hover:text-foreground-950 rounded-full px-8 h-12 text-lg backdrop-blur-sm">
            View Menu
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground animate-bounce">
        <ArrowDown className="w-6 h-6 opacity-70" />
      </div>
    </section>
  );
}

export default Hero;
