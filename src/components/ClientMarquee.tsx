"use client";

import { motion } from "framer-motion";

const clients = [
  "TACO BELL",
  "KRISPY KREME",
  "HABIT BURGER",
  "BANFIELD",
  "CARBON HEALTH",
  "DUCATI",
  "EL POLLO LOCO",
  "JACK IN THE BOX",
  "CARL'S JR",
  "BUFFALO WILD WINGS",
  "DUNKIN'",
  "TACO BELL",
  "KRISPY KREME",
  "HABIT BURGER",
  "BANFIELD",
];

export default function ClientMarquee() {
  return (
    <section className="py-16 lg:py-24 bg-navy border-y border-gold/10 overflow-hidden relative">
      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">
            Trusted by America&apos;s Biggest Brands
          </span>
        </motion.div>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-2xl lg:text-4xl font-bold text-gold/20 hover:text-gold/40 transition-colors duration-300"
            >
              <span>{client}</span>
              <span className="text-orange/40">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-2xl lg:text-4xl font-bold text-gold/10 hover:text-gold/30 transition-colors duration-300"
            >
              <span>{client}</span>
              <span className="text-orange/30">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
