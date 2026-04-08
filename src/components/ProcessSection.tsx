"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, HardHat, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "PLANNING",
    subtitle: "& PERMITS",
    description: "We handle every detail from initial site assessment through permit acquisition. Our pre-construction team identifies potential issues before they become problems.",
    color: "gold",
  },
  {
    number: "02",
    icon: HardHat,
    title: "CONSTRUCTION",
    subtitle: "& MANAGEMENT",
    description: "Dedicated project managers oversee every phase. Real-time progress tracking, strict quality controls, and aggressive scheduling keep your project on track.",
    color: "orange",
  },
  {
    number: "03",
    icon: Wrench,
    title: "FINISHING",
    subtitle: "& DETAILS",
    description: "The details make the difference. Final inspections, brand-standard compliance verification, and comprehensive documentation for handover.",
    color: "gold",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "DELIVERY",
    subtitle: "& BEYOND",
    description: "On-time completion is just the start. We provide full documentation, warranty support, and ongoing maintenance partnerships for your peace of mind.",
    color: "orange",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 lg:py-40 bg-navy-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,98,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(232,93,4,0.02),transparent_50%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">How We Work</span>
          <h2 className="text-5xl lg:text-7xl font-black text-text-light mt-4 leading-none">
            THE <span className="text-gold">PROCESS</span>
          </h2>
          <p className="text-text-muted mt-6 max-w-2xl mx-auto text-lg">
            Four decades of refinement. A battle-tested approach that delivers 
            consistent results, project after project.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gold/10 lg:-translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold via-orange to-gold"
            />
          </div>

          {/* Steps */}
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isOrange = step.color === "orange";

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? "lg:pr-16" : "lg:pl-16"} pl-20 lg:pl-0`}>
                    <div className={`group relative p-8 lg:p-10 border ${isOrange ? "border-orange/20 hover:border-orange/50" : "border-gold/20 hover:border-gold/50"} bg-navy-light/30 backdrop-blur-sm transition-all duration-500`}>
                      {/* Number */}
                      <div className={`absolute -top-6 ${isLeft ? "left-8" : "right-8"} text-7xl font-black ${isOrange ? "text-orange/10" : "text-gold/10"} select-none`}>
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-14 h-14 ${isOrange ? "bg-orange/10" : "bg-gold/10"} border ${isOrange ? "border-orange/30" : "border-gold/30"} flex items-center justify-center mb-6`}>
                        <step.icon className={`w-7 h-7 ${isOrange ? "text-orange" : "text-gold"}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl font-black text-text-light leading-none mb-1">
                        {step.title}
                      </h3>
                      <span className={`text-xl font-bold ${isOrange ? "text-orange" : "text-gold"}`}>
                        {step.subtitle}
                      </span>

                      {/* Description */}
                      <p className="text-text-muted mt-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Hover Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${isOrange ? "from-orange/5" : "from-gold/5"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 bg-navy-dark border-4 border-gold/30 flex items-center justify-center z-10">
                    <span className={`text-2xl font-black ${isOrange ? "text-orange" : "text-gold"}`}>{step.number}</span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-gold/30 bg-gold/5 backdrop-blur-sm">
            <span className="text-gold text-sm tracking-wider">READY TO START YOUR PROJECT?</span>
            <span className="w-px h-6 bg-gold/30" />
            <a href="/contact" className="text-text-light hover:text-gold transition-colors font-semibold">
              GET A QUOTE →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
