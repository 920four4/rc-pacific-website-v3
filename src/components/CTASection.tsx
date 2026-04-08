"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} className="relative py-40 lg:py-56 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />
      
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(232,93,4,0.05),transparent_50%)]" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.03 } : {}}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="absolute h-[1px] w-[200%] bg-gold"
            style={{ 
              top: `${10 + i * 10}%`, 
              transform: `rotate(${-20 + i}deg)`,
              left: "-50%",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Pre-title */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-orange rounded-full" 
              />
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">
                Ready to Build?
              </span>
            </motion.div>

            {/* Main Title */}
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black text-text-light leading-[0.9] mb-8">
              LET&apos;S START
              <span 
                className="block"
                style={{
                  background: "linear-gradient(135deg, #C9A962 0%, #E8D5A5 50%, #C9A962 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                YOUR PROJECT
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-lg">
              Whether you&apos;re launching one location or rolling out twenty, RC Pacific brings 
              the expertise, resources, and commitment to make it happen—on time, on budget.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-gold text-navy-dark px-8 py-5 font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10">GET YOUR QUOTE</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <a
                href="tel:9167825682"
                className="group inline-flex items-center gap-3 border-2 border-gold/30 text-gold px-8 py-5 font-semibold text-lg hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                (916) 782-5682
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                37 Years Experience
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange rounded-full" />
                24/7 Emergency Available
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-navy-light/40 backdrop-blur-md border border-gold/20 p-8 lg:p-12">
              {/* Corner Accents */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-gold" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-gold" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold" />

              <h3 className="text-2xl font-bold text-text-light mb-8 tracking-wide">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a href="tel:9167825682" className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">Phone</div>
                    <div className="text-text-light text-2xl font-bold group-hover:text-gold transition-colors">
                      (916) 782-5682
                    </div>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">Email</div>
                    <div className="text-text-light text-xl font-bold">
                      info@rcpacific.com
                    </div>
                  </div>
                </div>

                {/* Address */}
                <a 
                  href="https://maps.google.com/?q=7070+Galilee+Rd+Roseville+CA+95678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">Headquarters</div>
                    <div className="text-text-light text-xl font-bold group-hover:text-gold transition-colors">
                      7070 Galilee Rd
                    </div>
                    <div className="text-text-muted">
                      Roseville, CA 95678
                    </div>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">Hours</div>
                    <div className="text-text-light font-bold">
                      Mon - Fri: 7AM - 5PM
                    </div>
                    <div className="text-text-muted text-sm">
                      24/7 Emergency Available
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage Badge */}
              <div className="mt-8 pt-8 border-t border-gold/10">
                <div className="text-gold text-xs tracking-wider mb-3">COVERAGE AREA</div>
                <div className="flex flex-wrap gap-2">
                  {["CA", "AZ", "NV", "WA", "TX", "CO"].map((state) => (
                    <span key={state} className="px-3 py-1 bg-gold/10 text-gold text-sm font-semibold border border-gold/20">
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Giant Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full">
        <div className="text-[25vw] font-black text-gold/[0.02] tracking-tighter whitespace-nowrap leading-none translate-y-1/3">
          BUILD
        </div>
      </div>
    </section>
  );
}
