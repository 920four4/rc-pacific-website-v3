"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "RC Pacific completed our 12-store rollout three weeks ahead of schedule. Their 24/7 crews and proactive communication made what should have been stressful feel effortless. They're our go-to for all West Coast expansion.",
    author: "Sarah Mitchell",
    title: "VP of Development",
    company: "Taco Bell Franchise Group",
    rating: 5,
  },
  {
    quote: "In healthcare construction, there's no room for error. RC Pacific understands sterile environments, ADA compliance, and the unique challenges of veterinary facilities. They've built 8 Banfield locations for us—every one on time, on budget.",
    author: "Dr. James Chen",
    title: "Facilities Director",
    company: "Banfield Pet Hospital",
    rating: 5,
  },
  {
    quote: "The RC Pacific team knows quick-service restaurants inside and out. From kitchen flow optimization to drive-thru timing, they think about operational efficiency—not just construction. That's why we keep hiring them.",
    author: "Mike Rodriguez",
    title: "Regional Construction Manager",
    company: "Habit Burger Grill",
    rating: 5,
  },
  {
    quote: "When you're opening a flagship Krispy Kreme, everything has to be perfect—the hot light, the production line, the customer flow. RC Pacific delivered perfection, and they did it during a supply chain crisis.",
    author: "Jennifer Park",
    title: "Real Estate Development",
    company: "Krispy Kreme",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-32 lg:py-40 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange/5 blur-[120px]"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="text-5xl lg:text-7xl font-black text-text-light mt-4 leading-none">
            WHAT THEY <span className="text-gold">SAY</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-20 h-20 bg-gold/10 border border-gold/30 flex items-center justify-center"
            >
              <Quote className="w-10 h-10 text-gold" />
            </motion.div>
          </div>

          {/* Main Content Card */}
          <div className="relative bg-navy-light/30 border border-gold/20 backdrop-blur-sm p-8 lg:p-16 pt-24 min-h-[500px] flex flex-col">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col justify-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl lg:text-3xl xl:text-4xl text-text-light leading-relaxed text-center mb-12 font-light">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="text-gold text-xl font-bold mb-1">
                    {testimonials[current].author}
                  </div>
                  <div className="text-text-muted text-sm mb-1">
                    {testimonials[current].title}
                  </div>
                  <div className="text-text-light/60 text-sm">
                    {testimonials[current].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-gold/10">
              <button
                onClick={() => navigate(-1)}
                className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors group"
              >
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>

              {/* Progress Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className="relative h-2 transition-all duration-500"
                    style={{ width: index === current ? 48 : 16 }}
                  >
                    <div className={`absolute inset-0 ${index === current ? "bg-gold" : "bg-gold/20"} hover:bg-gold/40 transition-colors`} />
                    {index === current && (
                      <motion.div
                        layoutId="progress"
                        className="absolute inset-0 bg-orange"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => navigate(1)}
                className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors group"
              >
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 -translate-x-4 -translate-y-4" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/30 translate-x-4 -translate-y-4" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/30 -translate-x-4 translate-y-4" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 translate-x-4 translate-y-4" />
        </div>
      </div>
    </section>
  );
}
