"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { TrendingUp, Clock, Users, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 500,
    suffix: "+",
    label: "PROJECTS COMPLETED",
    sublabel: "Across 6 states",
  },
  {
    icon: Clock,
    value: 37,
    suffix: "",
    label: "YEARS IN BUSINESS",
    sublabel: "Since 1989",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "YEARS TEAM EXPERIENCE",
    sublabel: "Combined expertise",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "ON-TIME DELIVERY",
    sublabel: "Track record",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-32 lg:py-40 bg-navy relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />
      
      {/* Animated Gold Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">By The Numbers</span>
          <h2 className="text-5xl lg:text-7xl font-black text-text-light mt-4">
            TRUSTED <span className="text-gold">RESULTS</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-8 lg:p-12 border border-gold/10 bg-navy-light/20 backdrop-blur-sm hover:border-gold/30 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>

                {/* Value */}
                <div className="text-5xl lg:text-7xl font-black text-text-light mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-gold text-sm tracking-wider font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-text-muted text-xs">
                  {stat.sublabel}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Connector Line */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-gold/20" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl lg:text-2xl text-text-light/80 font-light">
            <span className="text-gold font-semibold">Numbers don't lie.</span> Neither do 37 years of 
            <span className="text-gold font-semibold"> on-time, on-budget</span> deliveries.
          </p>
        </motion.div>
      </div>

      {/* Bottom Gold Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </section>
  );
}
