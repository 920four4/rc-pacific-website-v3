"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const titleWords = ["WE", "BUILD", "AMERICA'S"];
  const titleWords2 = ["BIGGEST", "BRANDS"];

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[800px] w-full overflow-hidden bg-navy-dark"
    >
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ y }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #C9A962 1px, transparent 1px),
            linear-gradient(to bottom, #C9A962 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </motion.div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#0A1628_70%)]" />

      {/* Animated Gold Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold blur-[150px]"
      />

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.05 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="absolute h-[2px] w-[200%] bg-gold origin-left"
            style={{ 
              top: `${20 + i * 15}%`, 
              transform: `rotate(${-15 + i * 2}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-gold to-transparent" />
          <span className="text-gold text-sm tracking-[0.3em] font-medium">
            EST. 1989 — 37 YEARS
          </span>
        </motion.div>

        {/* Massive Title - Line 1 */}
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black text-text-light leading-[0.9] tracking-tight"
                style={{ 
                  fontFamily: "var(--font-inter)",
                  textShadow: "0 0 80px rgba(201,169,98,0.3)"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Massive Title - Line 2 (GOLD) */}
        <div className="overflow-hidden mb-12">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {titleWords2.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black leading-[0.9] tracking-tight"
                style={{ 
                  fontFamily: "var(--font-inter)",
                  background: "linear-gradient(135deg, #C9A962 0%, #E8D5A5 50%, #C9A962 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 100px rgba(201,169,98,0.5)"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl"
        >
          <div className="backdrop-blur-md bg-navy-light/30 border-l-4 border-gold p-6 lg:p-8">
            <p className="text-lg lg:text-xl text-text-light/90 leading-relaxed">
              Commercial construction for restaurants, healthcare, retail, and corporate spaces. 
              <span className="text-gold font-semibold"> Trusted by Taco Bell, Krispy Kreme, Habit Burger</span> and 15+ major brands across 6 states.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-gold text-navy-dark px-8 py-5 font-bold text-lg overflow-hidden"
          >
            <span className="relative z-10">START YOUR PROJECT</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <button className="group inline-flex items-center gap-3 border-2 border-gold/50 text-gold px-8 py-5 font-semibold text-lg hover:bg-gold/10 hover:border-gold transition-all">
            <Play className="w-5 h-5" />
            WATCH SHOWREEL
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {[
            { value: "37", suffix: "+", label: "YEARS" },
            { value: "500", suffix: "+", label: "PROJECTS" },
            { value: "18", suffix: "", label: "BRANDS" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl lg:text-5xl font-black text-gold">
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-text-muted text-xs tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gold/50"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-8 right-8 w-32 h-32 border-t-2 border-r-2 border-gold/20" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-b-2 border-l-2 border-gold/20" />
    </section>
  );
}
