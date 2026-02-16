
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Reviews() {
  const testimonials = [
    {
      quote:
        "Dining at Apex isn't just a meal; it's a descent into another world. The silence of the sharks gliding by while I enjoyed the best otoro of my life was spiritual.",
      name: "Elena V.",
      designation: "Food Critic, The Daily Plate",
      src: "/images/review-1.png",
    },
    {
      quote:
        "We reserved Table 4 for the drop-off view. Seeing a Tiger Shark emerge from the darkness as our sashimi arrived was terrifyingly beautiful. Unforgettable.",
      name: "Marcus Chen",
      designation: "Verified Guest",
      src: "/images/review-2.png",
    },
    {
      quote:
        "The Modern Zen architecture frames the aquatic life perfectly. It doesn't feel like a theme park; it feels like a Bond villain's private lair in the best way possible.",
      name: "Sarah Jenkins",
      designation: "Architectural Digest",
      src: "/images/review-3.png",
    },
  ];

  return (
    <section className="py-24 bg-background-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-foreground text-center mb-16">
          Guest Impressions
        </h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}

export default Reviews;
