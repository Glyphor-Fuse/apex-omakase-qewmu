
import { FocusCards } from "@/components/ui/focus-cards";

export function MenuHighlights() {
  const cards = [
    {
      title: "Bluefin Otoro with Caviar",
      src: "/images/sushi-otoro.png",
    },
    {
      title: "Uni & Truffle Gunkan",
      src: "/images/sushi-uni.png",
    },
    {
      title: "Seared Wagyu Nigiri",
      src: "/images/sushi-wagyu.png",
    },
    {
      title: "Chef's Sashimi Selection",
      src: "/images/sushi-sashimi.png",
    },
    {
      title: "Lobster Tempura",
      src: "/images/sushi-tempura.png",
    },
    {
      title: "Sake Steamed Abalone",
      src: "/images/sushi-abalone.png",
    },
  ];

  return (
    <section className="py-24 bg-background-900" id="menu">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-display text-foreground text-center mb-6">
          Culinary Artistry
        </h2>
        <p className="text-center text-foreground-400 max-w-2xl mx-auto">
          Traditional Edomae techniques meet modern luxury. Our fish is flown in daily from Toyosu Market, Tokyo.
        </p>
      </div>
      <FocusCards cards={cards} />
    </section>
  );
}

export default MenuHighlights;
