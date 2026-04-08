"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, ArrowRight, Building } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    client: "Taco Bell",
    title: "Multi-Location Rollout",
    location: "California & Nevada",
    description: "Fast-track construction of 12 new Taco Bell locations across CA and NV, completed 3 weeks ahead of schedule despite supply chain challenges.",
    stats: { timeline: "8 months", locations: "12 stores", value: "$8.2M" },
    highlights: ["Drive-thru optimization", "24/7 construction schedule", "Brand standard compliance"],
    color: "purple",
  },
  {
    client: "Banfield Pet Hospital",
    title: "Healthcare Facility Expansion",
    location: "Arizona",
    description: "Medical-grade construction for veterinary hospital chain, featuring sterile surgical suites and advanced HVAC systems.",
    stats: { timeline: "4 months", sqft: "4,500", value: "$1.8M" },
    highlights: ["Sterile environment construction", "ADA compliance", "MEP coordination"],
    color: "blue",
  },
  {
    client: "Krispy Kreme",
    title: "Flagship Store Build",
    location: "Concord, CA",
    description: "Showcase Krispy Kreme location with iconic hot light signage, optimized production kitchen, and customer experience design.",
    stats: { timeline: "6 months", sqft: "3,200", value: "$2.1M" },
    highlights: ["Production kitchen setup", "Iconic signage installation", "Customer flow optimization"],
    color: "orange",
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Featured Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-light mt-4 max-w-2xl">
            Projects That Define Excellence
          </h2>
          <p className="text-text-muted mt-4 max-w-xl">
            A selection of our most impactful builds, showcasing the range and quality 
            that leading brands expect from RC Pacific.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <ProjectCard
                key={project.client}
                project={project}
                index={index}
                isEven={isEven}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-gold text-navy-dark px-8 py-4 font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,98,0.4)]"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  index, 
  isEven,
  scrollYProgress 
}: { 
  project: typeof projects[0]; 
  index: number; 
  isEven: boolean;
  scrollYProgress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -50]
  );

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
    orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30" },
  };
  
  const colors = colorClasses[project.color];

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
    >
      {/* Visual Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] bg-navy-light border border-gold/20 overflow-hidden group">
          {/* Abstract Project Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full p-8">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full striped-bg" style={{ backgroundSize: '60px 60px' }} data-color={project.color} data-direction={isEven ? '45deg' : '-45deg'} />
              </div>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-32 h-32 ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                  <Building className={`w-16 h-16 ${colors.text}`} />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute top-4 left-4 bg-navy-dark/80 backdrop-blur-sm border border-gold/30 p-3">
                <div className="text-gold text-xs tracking-wider">VALUE</div>
                <div className="text-text-light font-bold">{project.stats.value}</div>
              </div>

              <div className="absolute bottom-4 right-4 bg-navy-dark/80 backdrop-blur-sm border border-gold/30 p-3">
                <div className="text-gold text-xs tracking-wider">TIMELINE</div>
                <div className="text-text-light font-bold">{project.stats.timeline}</div>
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-navy-dark/80 backdrop-blur-sm border border-gold/30 px-3 py-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-text-light text-sm">{project.location}</span>
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <div className={`${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
          <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} text-xs tracking-wider border ${colors.border} mb-4`}>
            {project.client}
          </span>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-text-light mb-4">
            {project.title}
          </h3>
          
          <p className="text-text-muted leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="flex items-center gap-2 text-sm text-text-light/80 bg-navy-light/50 border border-gold/20 px-3 py-2"
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                {highlight}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 mb-8">
            {Object.entries(project.stats).filter(([key]) => key !== 'value').map(([key, value]) => (
              <div key={key}>
                <div className="text-text-muted text-xs uppercase tracking-wider mb-1">
                  {key}
                </div>
                <div className="text-gold font-bold text-lg">
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold group"
          >
            View Project Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}