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
    }, 6000);
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
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-light mt-4">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center">
            <Quote className="w-8 h-8 text-gold" />
          </div>

          {/* Content */}
          <div className="bg-navy-light/30 border border-gold/20 p-8 lg:p-12 pt-16 min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-text-light leading-relaxed mb-8 font-[family-name:var(--font-playfair)] italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="text-gold font-bold text-lg">
                    {testimonials[current].author}
                  </div>
                  <div className="text-text-muted text-sm">
                    {testimonials[current].title}
                  </div>
                  <div className="text-text-muted text-sm">
                    {testimonials[current].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => navigate(-1)}
                className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`w-2 h-2 transition-all duration-300 ${
                      index === current
                        ? "bg-gold w-8"
                        : "bg-gold/30 hover:bg-gold/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => navigate(1)}
                className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
