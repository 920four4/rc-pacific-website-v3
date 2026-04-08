"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, ArrowUpRight, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    client: "TACO BELL",
    title: "MULTI-LOCATION ROLLOUT",
    location: "California & Nevada",
    year: "2023",
    description: "12 new locations completed 3 weeks ahead of schedule. Drive-thru optimization, 24/7 construction crews, brand-standard precision.",
    stats: [
      { label: "TIMELINE", value: "8 MONTHS" },
      { label: "LOCATIONS", value: "12 STORES" },
      { label: "VALUE", value: "$8.2M" },
    ],
    highlights: ["Drive-thru optimization", "24/7 construction", "Brand compliance"],
    color: "purple",
    accent: "#a855f7",
  },
  {
    client: "BANFIELD",
    title: "PET HOSPITAL",
    location: "Arizona",
    year: "2023",
    description: "Medical-grade veterinary construction. Sterile surgical suites, advanced HVAC, ADA compliance—built to healthcare standards.",
    stats: [
      { label: "TIMELINE", value: "4 MONTHS" },
      { label: "SQFT", value: "4,500" },
      { label: "VALUE", value: "$1.8M" },
    ],
    highlights: ["Sterile environment", "ADA compliance", "MEP coordination"],
    color: "blue",
    accent: "#3b82f6",
  },
  {
    client: "KRISPY KREME",
    title: "FLAGSHIP STORE",
    location: "Concord, CA",
    year: "2022",
    description: "Showcase location with iconic hot light signage. Production kitchen optimization and customer experience design.",
    stats: [
      { label: "TIMELINE", value: "6 MONTHS" },
      { label: "SQFT", value: "3,200" },
      { label: "VALUE", value: "$2.1M" },
    ],
    highlights: ["Production kitchen", "Iconic signage", "Customer flow"],
    color: "orange",
    accent: "#E85D04",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;
  const isOrange = project.color === "orange";

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-0 items-stretch min-h-[600px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Side */}
      <motion.div 
        style={{ y: isEven ? y : undefined }}
        className="lg:w-1/2 relative"
      >
        <div className="relative h-full min-h-[400px] lg:min-h-[600px] bg-navy-light border border-gold/10 overflow-hidden group">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: isHovered 
                ? `radial-gradient(circle at 50% 50%, ${project.accent}15, transparent 70%)`
                : "radial-gradient(circle at 50% 50%, transparent, transparent)"
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Giant Client Name */}
              <div className="text-[6rem] lg:text-[10rem] font-black text-gold/[0.05] tracking-tighter select-none whitespace-nowrap">
                {project.client}
              </div>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-24 h-24 border flex items-center justify-center"
                  style={{ borderColor: `${project.accent}40`, backgroundColor: `${project.accent}10` }}
                >
                  <Building2 className="w-12 h-12" style={{ color: project.accent }} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <div className="absolute top-6 left-6 bg-navy-dark/80 backdrop-blur-sm border border-gold/20 p-4">
            <div className="text-gold text-xs tracking-wider mb-1">VALUE</div>
            <div className="text-text-light text-2xl font-bold">{project.stats[2].value}</div>
          </div>

          <div className="absolute bottom-6 right-6 bg-navy-dark/80 backdrop-blur-sm border border-gold/20 p-4">
            <div className="text-gold text-xs tracking-wider mb-1">YEAR</div>
            <div className="text-text-light text-2xl font-bold">{project.year}</div>
          </div>

          {/* Location Badge */}
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-navy-dark/80 backdrop-blur-sm border border-gold/20 px-4 py-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-text-light text-sm">{project.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <div className={`lg:w-1/2 flex items-center ${isEven ? "lg:pl-16" : "lg:pr-16"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Client Tag */}
          <div 
            className="inline-block px-4 py-2 text-sm font-bold tracking-wider mb-6"
            style={{ 
              backgroundColor: `${project.accent}15`,
              color: project.accent,
              border: `1px solid ${project.accent}40`
            }}
          >
            {project.client}
          </div>

          {/* Title */}
          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black text-text-light leading-none mb-6">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
            {project.description}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold/20 pl-4">
                <div className="text-gold text-xs tracking-wider mb-1">{stat.label}</div>
                <div className="text-text-light font-bold text-lg">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-4 py-2 bg-navy-light border border-gold/20 text-text-light text-sm"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-gold hover:text-gold-light transition-colors font-semibold text-lg"
          >
            View Case Study
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section className="py-32 lg:py-40 bg-navy overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="max-w-[1400px] mx-auto mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase">Selected Work</span>
              <h2 className="text-5xl lg:text-7xl font-black text-text-light mt-4 leading-none">
                FEATURED
                <span className="block text-gold">PROJECTS</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 border-2 border-gold/30 text-gold px-8 py-4 font-semibold hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                View All Projects
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.client} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
