"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Award } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const stats = [
    { icon: Award, value: "37+", label: "Years in Business" },
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: MapPin, value: "6", label: "States Covered" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Subtle Diagonal Lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" className="text-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm tracking-wider">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              EST. 1989 — 37 YEARS OF EXCELLENCE
            </span>
          </motion.div>

          {/* Main Headline with Word Animation */}
          <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8">
            <motion.span variants={wordVariants} className="block text-text-light">
              BUILDING
            </motion.span>
            <motion.span variants={wordVariants} className="block text-gold text-shimmer">
              AMERICA&apos;S
            </motion.span>
            <motion.span variants={wordVariants} className="block text-text-light">
              BIGGEST
            </motion.span>
            <motion.span variants={wordVariants} className="block text-text-light">
              BRANDS
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"
          >
            For 35 years, RC Pacific has been the construction partner that leading 
            <span className="text-gold"> restaurant</span>, 
            <span className="text-gold"> healthcare</span>, and 
            <span className="text-gold"> retail</span> brands trust when they need it built right, built fast, and built to last.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-gold text-navy-dark px-8 py-4 font-bold text-lg tracking-wide hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,98,0.5)] animate-pulse-glow"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 border border-gold/50 text-gold px-8 py-4 font-semibold text-lg tracking-wide hover:bg-gold/10 transition-all duration-300"
            >
              View Featured Work
            </Link>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 border border-gold/30 mb-3">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-text-light">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Abstract Construction Graphic */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[80%]"
      >
        <div className="relative w-full h-full">
          {/* Abstract Building Shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Gold Frame */}
              <div className="absolute top-10 right-10 w-64 h-96 border-2 border-gold/30" />
              <div className="absolute top-20 right-20 w-64 h-96 border-2 border-gold/20" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-20 left-10 bg-navy-light/80 backdrop-blur-sm border border-gold/30 p-6"
              >
                <div className="text-gold text-sm tracking-wider mb-2">COVERAGE AREA</div>
                <div className="flex flex-wrap gap-2">
                  {["CA", "AZ", "NV", "WA", "TX", "CO"].map((state) => (
                    <span key={state} className="px-2 py-1 bg-gold/10 text-text-light text-xs border border-gold/20">
                      {state}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project Counter Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute top-32 left-0 bg-navy-light/80 backdrop-blur-sm border border-gold/30 p-6"
              >
                <div className="text-gold text-sm tracking-wider mb-1">TRUSTED BY</div>
                <div className="text-3xl font-black text-text-light">18+</div>
                <div className="text-text-muted text-xs">Major Brand Clients</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}