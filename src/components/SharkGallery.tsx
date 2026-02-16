
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Anchor, Fish, Search, Star, Waves } from 'lucide-react';

export function SharkGallery() {
  const items = [
    {
      title: "Great Hammerhead",
      description: "Distinctive silhouette. Known to patrol the upper reef line near tables 3 and 4.",
      header: <Skeleton img="/images/shark-hammerhead.png" alt="Hammerhead Shark" />,
      icon: <Search className="h-4 w-4 text-foreground-500" />,
    },
    {
      title: "Sustainable Ecosystem",
      description: "Our habitat mimics the natural currents of the Pacific, ensuring vitality for over 500 species.",
      header: <Skeleton img="/images/shark-reef.png" alt="Reef Ecosystem" />,
      icon: <Waves className="h-4 w-4 text-foreground-500" />,
    },
    {
      title: "Blacktip Reef Shark",
      description: "Agile hunters often seen darting through the coral formations.",
      header: <Skeleton img="/images/shark-blacktip.png" alt="Blacktip Shark" />,
      icon: <Fish className="h-4 w-4 text-foreground-500" />,
    },
    {
      title: "The Midnight Zone",
      description: "Special lighting mimics moonlight, encouraging nocturnal behavior from our rare deep-sea rays and sleeper sharks.",
      header: <Skeleton img="/images/shark-dark.png" alt="Dark Aquarium View" />,
      icon: <Star className="h-4 w-4 text-foreground-500" />,
    },
    {
      title: "Tiger Shark: 'Titan'",
      description: "The tank's true apex. 12 feet of silent power. best viewed from the Chef's Counter.",
      header: <Skeleton img="/images/shark-tiger.png" alt="Tiger Shark" />,
      icon: <Star className="h-4 w-4 text-foreground-500" />,
    },
  ];

  return (
    <section className="py-24 bg-background-950">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-display text-foreground text-center mb-6">
          Apex Residents
        </h2>
        <p className="text-center text-foreground-400 max-w-2xl mx-auto">
          Our dining room is submerged within a 2-million-gallon habitat. 
          Meet the majestic predators you may encounter during your meal.
        </p>
      </div>
      
      <BentoGrid className="max-w-6xl mx-auto px-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = ({ img, alt }: { img: string, alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 overflow-hidden relative">
    <img src={img} alt={alt} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/bento:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-background/20 group-hover/bento:bg-transparent transition-colors" />
  </div>
);

export default SharkGallery;
