"use client";

import { motion } from "framer-motion";
import { Utensils, HeartPulse, Building2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const sectors = [
  {
    icon: Utensils,
    title: "Restaurant & Fast Food",
    shortDesc: "Quick-service & full dining",
    fullDesc: "From drive-thru optimization to commercial kitchen precision, we build the spaces where millions eat every day. Our team understands health codes, brand standards, and the tight timelines restaurant rollouts demand.",
    clients: ["Taco Bell", "Krispy Kreme", "Habit Burger", "El Pollo Loco"],
    stats: { projects: "200+", avgTimeline: "90 days" },
    color: "orange",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    shortDesc: "Veterinary & urgent care",
    fullDesc: "Medical-grade construction for veterinary hospitals, urgent care clinics, and wellness centers. We specialize in sterile environments, ADA compliance, and complex MEP coordination that healthcare demands.",
    clients: ["Banfield Pet Hospital", "Carbon Health"],
    stats: { projects: "50+", avgTimeline: "120 days" },
    color: "gold",
  },
  {
    icon: Building2,
    title: "Corporate & Office",
    shortDesc: "Productive workspaces",
    fullDesc: "Office environments designed for modern workforce productivity. We build for sustainability, flexibility, and minimal disruption to your operations during construction.",
    clients: ["Ducati", "Various Tech Companies"],
    stats: { projects: "75+", avgTimeline: "60 days" },
    color: "gold",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commercial",
    shortDesc: "Customer-facing spaces",
    fullDesc: "Retail spaces that drive foot traffic and sales. From flagship stores to multi-location rollouts, we maintain brand consistency while delivering on time and on budget.",
    clients: ["Ducati Showrooms", "Mixed-Use Retail"],
    stats: { projects: "100+", avgTimeline: "75 days" },
    color: "orange",
  },
];

export default function SectorCards() {
  return (
    <section className="py-24 lg:py-32 bg-navy-dark grid-pattern">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-light mt-4">
            Specialized By Sector
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Each industry has unique demands. RC Pacific brings specialized expertise 
            to every project type, ensuring compliance, efficiency, and results.
          </p>
        </motion.div>

        {/* Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href="/sectors" className="block">
                <div className="relative h-[320px] bg-navy-light/30 border border-gold/20 overflow-hidden transition-all duration-500 group-hover:border-gold/50 group-hover:bg-navy-light/50">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    sector.color === "orange" 
                      ? "from-orange/5 to-transparent" 
                      : "from-gold/5 to-transparent"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                  />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${sector.color === "orange" ? "bg-orange/10" : "bg-gold/10"} border ${sector.color === "orange" ? "border-orange/30" : "border-gold/30"} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                      <sector.icon className={`w-8 h-8 ${sector.color === "orange" ? "text-orange" : "text-gold"}`} />
                    </div>

                    {/* Title - Always Visible */}
                    <h3 className="text-2xl font-bold text-text-light mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-4">
                      {sector.shortDesc}
                    </p>

                    {/* Expanded Content - Shows on Hover */}
                    <div className="flex-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-text-light/80 text-sm leading-relaxed mb-4">
                        {sector.fullDesc}
                      </p>
                      
                      {/* Client Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sector.clients.map((client) => (
                          <span
                            key={client}
                            className={`px-2 py-1 text-xs ${sector.color === "orange" ? "bg-orange/10 text-orange" : "bg-gold/10 text-gold"} border ${sector.color === "orange" ? "border-orange/20" : "border-gold/20"}`}
                          >
                            {client}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className={`${sector.color === "orange" ? "text-orange" : "text-gold"} font-bold`}>{sector.stats.projects}</span>
                          <span className="text-text-muted ml-1">Projects</span>
                        </div>
                        <div>
                          <span className={`${sector.color === "orange" ? "text-orange" : "text-gold"} font-bold`}>{sector.stats.avgTimeline}</span>
                          <span className="text-text-muted ml-1">Avg Timeline</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow - Shows on Hover */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className={`w-12 h-12 ${sector.color === "orange" ? "bg-orange" : "bg-gold"} flex items-center justify-center`}>
                        <ArrowRight className="w-5 h-5 text-navy-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/sectors"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-lg font-semibold group"
          >
            Explore All Sectors
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
