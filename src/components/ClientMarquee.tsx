"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Taco Bell", category: "Restaurant" },
  { name: "Krispy Kreme", category: "Restaurant" },
  { name: "Habit Burger", category: "Restaurant" },
  { name: "El Pollo Loco", category: "Restaurant" },
  { name: "Jack in the Box", category: "Restaurant" },
  { name: "Carl's Jr.", category: "Restaurant" },
  { name: "Buffalo Wild Wings", category: "Restaurant" },
  { name: "Banfield", category: "Healthcare" },
  { name: "Carbon Health", category: "Healthcare" },
  { name: "Ducati", category: "Retail" },
  { name: "Dunkin'", category: "Restaurant" },
  { name: "Capriotti's", category: "Restaurant" },
  { name: "Johnny Rockets", category: "Restaurant" },
  { name: "Old Spaghetti Factory", category: "Restaurant" },
  { name: "Wow Wow", category: "Restaurant" },
  { name: "Baja Fresh", category: "Restaurant" },
  { name: "Chili's", category: "Restaurant" },
  { name: "IHOP", category: "Restaurant" },
];

// Double the array for seamless loop
const doubledClients = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="py-20 bg-navy border-y border-gold/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Trusted By</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-light mt-4">
            The Brands That Feed America
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            From quick-service rollouts to complex healthcare facilities, RC Pacific delivers 
            for the nation&apos;s most demanding brands.
          </p>
        </motion.div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8 group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {doubledClients.map((client, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-6 bg-navy-light/50 border border-gold/20 hover:border-gold/50 transition-all duration-300 group/item cursor-default"
            >
              <div className="text-lg lg:text-xl font-bold text-text-light whitespace-nowrap group-hover/item:text-gold transition-colors">
                {client.name}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                {client.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />
        
        <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...doubledClients].reverse().map((client, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-6 bg-navy-light/50 border border-gold/20 hover:border-gold/50 transition-all duration-300 group/item cursor-default"
            >
              <div className="text-lg lg:text-xl font-bold text-text-light whitespace-nowrap group-hover/item:text-gold transition-colors">
                {client.name}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                {client.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16"
      >
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-black text-gold">18+</div>
            <div className="text-text-muted text-sm mt-2">Major Brand Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-black text-gold">6</div>
            <div className="text-text-muted text-sm mt-2">States Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-black text-gold">37+</div>
            <div className="text-text-muted text-sm mt-2">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-black text-gold">500+</div>
            <div className="text-text-muted text-sm mt-2">Projects Delivered</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
