"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Utensils, HeartPulse, Building2, ShoppingBag, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const sectors = [
  {
    id: "restaurant",
    icon: Utensils,
    title: "RESTAURANT",
    subtitle: "& FAST FOOD",
    shortDesc: "Quick-service & full dining",
    fullDesc: "From drive-thru optimization to commercial kitchen precision. We build the spaces where millions eat every day.",
    clients: ["Taco Bell", "Krispy Kreme", "Habit Burger", "El Pollo Loco"],
    stat: "200+",
    statLabel: "Projects",
    color: "orange",
    gradient: "from-orange/20 via-orange/5 to-transparent",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "HEALTHCARE",
    subtitle: "& MEDICAL",
    shortDesc: "Veterinary & urgent care",
    fullDesc: "Medical-grade construction for veterinary hospitals and urgent care clinics. Sterile environments, ADA compliance, complex MEP.",
    clients: ["Banfield Pet Hospital", "Carbon Health"],
    stat: "50+",
    statLabel: "Projects",
    color: "gold",
    gradient: "from-gold/20 via-gold/5 to-transparent",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "CORPORATE",
    subtitle: "& OFFICE",
    shortDesc: "Productive workspaces",
    fullDesc: "Office environments designed for modern workforce productivity. Sustainable, flexible, minimal disruption.",
    clients: ["Ducati", "Tech Companies"],
    stat: "75+",
    statLabel: "Projects",
    color: "gold",
    gradient: "from-gold/20 via-gold/5 to-transparent",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "RETAIL",
    subtitle: "& COMMERCIAL",
    shortDesc: "Customer-facing spaces",
    fullDesc: "Retail spaces that drive foot traffic and sales. Flagship stores to multi-location rollouts with brand consistency.",
    clients: ["Ducati Showrooms", "Mixed-Use Retail"],
    stat: "100+",
    statLabel: "Projects",
    color: "orange",
    gradient: "from-orange/20 via-orange/5 to-transparent",
  },
];

function TiltCard({ sector, index }: { sector: typeof sectors[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isOrange = sector.color === "orange";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[420px] cursor-pointer"
    >
      <Link href="/sectors" className="block h-full">
        {/* Card Container */}
        <div className={`relative h-full bg-navy-light/40 border border-gold/10 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-${sector.color}/50`}
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Animated Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
          
          {/* Corner Accent */}
          <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${isOrange ? "from-orange/20" : "from-gold/20"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col" style={{ transform: "translateZ(75px)" }}>
            {/* Icon with Glow */}
            <div className={`w-16 h-16 ${isOrange ? "bg-orange/10" : "bg-gold/10"} border ${isOrange ? "border-orange/30" : "border-gold/30"} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-${sector.color}`}>
              <sector.icon className={`w-8 h-8 ${isOrange ? "text-orange" : "text-gold"}`} />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-black text-text-light tracking-tight leading-none mb-1">
              {sector.title}
            </h3>
            <span className={`text-2xl font-black ${isOrange ? "text-orange" : "text-gold"} tracking-tight mb-4`}>
              {sector.subtitle}
            </span>

            {/* Short Desc */}
            <p className="text-text-muted text-sm mb-6">{sector.shortDesc}</p>

            {/* Expanded Content */}
            <div className="flex-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-text-light/80 text-sm leading-relaxed mb-4">
                {sector.fullDesc}
              </p>
              
              {/* Client Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {sector.clients.slice(0, 3).map((client) => (
                  <span
                    key={client}
                    className={`px-2 py-1 text-xs ${isOrange ? "bg-orange/10 text-orange" : "bg-gold/10 text-gold"} border ${isOrange ? "border-orange/20" : "border-gold/20"}`}
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-auto pt-4 border-t border-gold/10 flex items-center justify-between">
              <div>
                <span className={`text-3xl font-black ${isOrange ? "text-orange" : "text-gold"}`}>{sector.stat}</span>
                <span className="text-text-muted text-xs ml-2">{sector.statLabel}</span>
              </div>
              
              <div className={`w-12 h-12 border ${isOrange ? "border-orange/30 group-hover:bg-orange" : "border-gold/30 group-hover:bg-gold"} flex items-center justify-center transition-all duration-300 group-hover:border-transparent`}>
                <ArrowUpRight className={`w-5 h-5 ${isOrange ? "text-orange group-hover:text-navy-dark" : "text-gold group-hover:text-navy-dark"} transition-colors`} />
              </div>
            </div>
          </div>

          {/* Number Watermark */}
          <div className="absolute -bottom-8 -right-4 text-[12rem] font-black text-gold/[0.02] pointer-events-none select-none">
            0{index + 1}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function SectorCards() {
  return (
    <section className="py-32 lg:py-40 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Giant Text Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-black text-gold/[0.02] tracking-tighter whitespace-nowrap">
          SECTORS
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Our Expertise</span>
            <h2 className="text-5xl lg:text-7xl font-black text-text-light mt-4 leading-none">
              SPECIALIZED
              <span className="block text-gold">BY SECTOR</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 lg:mt-0 max-w-sm"
          >
            <p className="text-text-muted leading-relaxed">
              Each industry has unique demands. RC Pacific brings specialized expertise 
              to every project type.
            </p>
            <Link 
              href="/sectors"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mt-4 font-semibold group"
            >
              Explore All Sectors
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Sector Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
          {sectors.map((sector, index) => (
            <TiltCard key={sector.id} sector={sector} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
