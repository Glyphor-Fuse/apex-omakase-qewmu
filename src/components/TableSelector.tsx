
import { motion } from "framer-motion";
import { Fish, Info, MapPin, Star } from 'lucide-react';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const tables = [
  { id: 1, name: "Table 1", view: "Reef Edge", species: "Blacktip Reef Shark", seats: 2, status: "available" },
  { id: 2, name: "Table 2", view: "Open Water", species: "Great White (Rare)", seats: 4, status: "booked" },
  { id: 3, name: "Table 3", view: "Coral Arch", species: "Hammerhead", seats: 2, status: "available" },
  { id: 4, name: "Table 4", view: "The Drop-off", species: "Tiger Shark", seats: 6, status: "available" },
  { id: 5, name: "Table 5", view: "Reef Edge", species: "Ray School", seats: 2, status: "available" },
  { id: 6, name: "Chef's Counter", view: "Prep & Tank", species: "All Views", seats: 8, status: "available" },
];

export function TableSelector() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background-900/20 via-background-900 to-background-950 pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Select Your Perspective
          </h2>
          <p className="text-lg text-foreground-300 font-light">
            Every seat offers a unique window into the deep. Choose your table to preview the aquatic visitors most frequent to that zone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 bg-background-950/50 p-8 rounded-3xl border border-border-800 backdrop-blur-sm shadow-2xl">
            <div className="flex justify-between items-center mb-6 text-foreground-400 text-sm tracking-widest uppercase">
              <span>Aquarium Glass Wall</span>
              <span>Entry</span>
            </div>
            
            <div className="w-full h-4 bg-gradient-to-r from-background-500/50 via-background-400/50 to-background-500/50 rounded-full mb-8 shadow-[0_0_30px_rgba(20,184,166,0.3)] animate-pulse" />

            <div className="grid grid-cols-3 gap-6 relative">
              {tables.map((table) => (
                <TooltipProvider key={table.id}>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <motion.button
                        onClick={() => table.status === 'available' && setSelectedTable(table.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "relative group aspect-square rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-300",
                          selectedTable === table.id 
                            ? "bg-background-900/40 border-border-400 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                            : table.status === 'booked'
                            ? "bg-background-900/50 border-border-800 opacity-50 cursor-not-allowed"
                            : "bg-background-800/50 border-border-700 hover:border-border-500 hover:bg-background-800"
                        )}
                      >
                        <Star className={cn(
                          "w-8 h-8 mb-2 transition-colors",
                          selectedTable === table.id ? "text-foreground-400" : "text-foreground-400"
                        )} />
                        <span className="text-xs font-medium text-foreground-300">{table.name}</span>
                        {table.status === 'booked' && (
                          <span className="absolute inset-0 flex items-center justify-center bg-background-950/80 rounded-xl backdrop-blur-[1px]">
                            <span className="text-xs text-red-400 font-bold uppercase tracking-wide">Booked</span>
                          </span>
                        )}
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-background-900 border-border-700 text-foreground-200 p-3">
                      <p className="font-display text-lg text-foreground-400">{table.view}</p>
                      <p className="text-xs text-foreground-400">Best for: {table.species}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-6 text-sm text-foreground-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-background-800 border border-border-600" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-background-900/40 border border-border-400" />
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-background-900 border border-border-800 opacity-50" />
                <span>Reserved</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={false}
                animate={{ opacity: selectedTable ? 1 : 0.5, y: selectedTable ? 0 : 10 }}
                className={cn(
                  "p-8 rounded-3xl border transition-colors duration-500",
                  selectedTable 
                    ? "bg-background-900 border-border-900/50 shadow-2xl" 
                    : "bg-background-900/50 border-border-800 border-dashed"
                )}
              >
                {!selectedTable ? (
                  <div className="h-64 flex flex-col items-center justify-center text-foreground-500 text-center">
                    <MapPin className="w-12 h-12 mb-4 opacity-50" />
                    <p>Select a table on the floor plan<br/>to view details</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-foreground-500 font-semibold mb-2">Selected Table</h3>
                      <h4 className="text-3xl font-display text-foreground">{tables.find(t => t.id === selectedTable)?.name}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background-800 rounded-lg text-foreground-400">
                          <Fish className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground-400">Primary Sighting</p>
                          <p className="text-foreground-200 font-medium">{tables.find(t => t.id === selectedTable)?.species}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background-800 rounded-lg text-foreground-400">
                          <Info className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground-400">Vantage Point</p>
                          <p className="text-foreground-200 font-medium">{tables.find(t => t.id === selectedTable)?.view}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border-800">
                      <Button className="w-full bg-background-600 hover:bg-background-500 text-foreground font-medium h-12 text-lg rounded-xl">
                        Confirm Reservation
                      </Button>
                      <p className="text-center text-xs text-foreground-500 mt-4">
                        $50 deposit required per guest.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableSelector;
