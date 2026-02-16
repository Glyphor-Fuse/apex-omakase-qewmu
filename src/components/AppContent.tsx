
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { SharkGallery } from "@/components/SharkGallery";
import { TableSelector } from "@/components/TableSelector";
import { MenuHighlights } from "@/components/MenuHighlights";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-background-500/30">
      <Navbar />
      <Hero />
      <Philosophy />
      <TableSelector />
      <MenuHighlights />
      <SharkGallery />
      <Reviews />
      <Footer />
    </div>
  );
}

export default AppContent;
