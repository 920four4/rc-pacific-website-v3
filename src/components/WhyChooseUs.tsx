"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Award, CheckCircle2, MapPin, Users, TrendingUp, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Clock,
    title: "Time Sensitive",
    description: "We understand that every day your project isn't complete is revenue lost. Our accelerated timelines and 24/7 scheduling options keep your project on track.",
    stat: "On-Time",
    statValue: "95%",
  },
  {
    icon: DollarSign,
    title: "Price Competitive",
    description: "Transparent pricing with no surprises. Our established subcontractor network and bulk purchasing power deliver premium results at competitive rates.",
    stat: "Budget Adherence",
    statValue: "98%",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "From permits to final inspection, we maintain the highest standards. Our work stands the test of time—just ask the brands that keep coming back.",
    stat: "Client Retention",
    statValue: "85%",
  },
];

const coverageStates = [
  { code: "CA", name: "California", active: true },
  { code: "AZ", name: "Arizona", active: true },
  { code: "NV", name: "Nevada", active: true },
  { code: "WA", name: "Washington", active: true },
  { code: "TX", name: "Texas", active: true },
  { code: "CO", name: "Colorado", active: true },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-navy-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Why RC Pacific</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-light mt-4">
            Built Different. Built Better.
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Three decades of construction excellence distilled into three core principles 
            that drive every project we touch.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-navy-light/30 border border-gold/20 p-8 h-full hover:border-gold/50 transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon with Animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6"
                  >
                    <item.icon className="w-8 h-8 text-gold" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text-light mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gold/20">
                    <div className="text-3xl font-black text-gold">{item.statValue}</div>
                    <div className="text-text-muted text-sm">{item.stat}</div>
                  </div>

                  {/* Checkmarks Animation */}
                  <div className="mt-6 space-y-2">
                    {[
                      "Dedicated project management",
                      "Real-time progress tracking",
                      "Quality assurance protocols",
                    ].slice(0, 3).map((point, i) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-text-light/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                        {point}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy border border-gold/20 p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <span className="text-gold text-sm tracking-widest uppercase">Coverage Area</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-text-light mb-4">
                Multi-State Execution
              </h3>
              <p className="text-text-muted leading-relaxed mb-8">
                From California to Colorado, RC Pacific delivers consistent quality across 
                six states. One contractor, one standard, nationwide capabilities. 
                Whether you need a single location or a 20-store rollout, we scale to meet 
                your ambitions.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-light font-bold">100+</div>
                    <div className="text-text-muted text-sm">Combined Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-light font-bold">500+</div>
                    <div className="text-text-muted text-sm">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - States Grid */}
            <div>
              <div className="grid grid-cols-3 gap-4">
                {coverageStates.map((state, index) => (
                  <motion.div
                    key={state.code}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 border text-center transition-all duration-300 cursor-default ${
                      state.active
                        ? "bg-gold/10 border-gold/40 hover:border-gold"
                        : "bg-navy-light/30 border-gold/10"
                    }`}
                  >
                    <div className="text-2xl lg:text-3xl font-black text-gold mb-1">
                      {state.code}
                    </div>
                    <div className="text-text-muted text-xs">{state.name}</div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-8 flex items-center justify-center gap-6 p-4 bg-navy-light/50 border border-gold/20">
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Shield className="w-4 h-4 text-gold" />
                  <span>Licensed</span>
                </div>
                <div className="w-px h-4 bg-gold/30" />
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Shield className="w-4 h-4 text-gold" />
                  <span>Bonded</span>
                </div>
                <div className="w-px h-4 bg-gold/30" />
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Shield className="w-4 h-4 text-gold" />
                  <span>Insured</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
