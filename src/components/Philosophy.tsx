
import { Waves } from "lucide-react";

export function Philosophy() {
  return (
    <section className="py-32 bg-background-950 text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Waves className="w-12 h-12 text-foreground-500 mx-auto opacity-80" />
        <h2 className="text-3xl md:text-5xl font-display text-foreground-100 leading-tight">
          "To eat here is to dine within the pulse of the ocean. 
          Silent. Powerful. Elemental."
        </h2>
        <div className="h-1 w-24 bg-background-800 mx-auto" />
        <p className="text-lg md:text-xl text-foreground-400 font-light leading-relaxed max-w-2xl mx-auto">
          Apex Omakase fuses the precision of Edomae sushi with the tranquility of the deep sea. 
          Surrounded by 2 million gallons of water, our guests are not just observers, but part of the reef's rhythm. 
          Designed for those who seek silence in a noisy world.
        </p>
      </div>
    </section>
  );
}

export default Philosophy;
