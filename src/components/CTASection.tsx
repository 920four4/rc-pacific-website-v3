"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Shield, BadgeCheck, Award } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange/10 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm tracking-wider mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              READY TO START?
            </span>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-light leading-tight mb-6">
              Let&apos;s Build
              <span className="block text-gold">Something Great.</span>
            </h2>

            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
              Whether you&apos;re launching one location or rolling out twenty, RC Pacific brings 
              the expertise, resources, and commitment to make it happen—on time, on budget, 
              and to the standards America&apos;s biggest brands expect.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Shield className="w-4 h-4 text-gold" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <BadgeCheck className="w-4 h-4 text-gold" />
                Bonded Contractor
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Award className="w-4 h-4 text-gold" />
                37 Years Experience
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gold text-navy-dark px-8 py-4 font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,98,0.5)] animate-pulse-glow"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:9167825682"
                className="inline-flex items-center justify-center gap-3 border border-gold/50 text-gold px-8 py-4 font-semibold text-lg hover:bg-gold/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                (916) 782-5682
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-navy-light/50 backdrop-blur-sm border border-gold/30 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-text-light mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a href="tel:9167825682" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">Phone</div>
                    <div className="text-text-light font-semibold text-lg group-hover:text-gold transition-colors">
                      (916) 782-5682
                    </div>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">Email</div>
                    <div className="text-text-light font-semibold text-lg">
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
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">Headquarters</div>
                    <div className="text-text-light font-semibold group-hover:text-gold transition-colors">
                      7070 Galilee Rd
                    </div>
                    <div className="text-text-light">
                      Roseville, CA 95678
                    </div>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="mt-8 pt-6 border-t border-gold/20">
                <div className="text-gold text-sm tracking-wider mb-2">BUSINESS HOURS</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-text-muted">Monday - Friday</div>
                  <div className="text-text-light text-right">7:00 AM - 5:00 PM</div>
                  <div className="text-text-muted">Saturday</div>
                  <div className="text-text-light text-right">By Appointment</div>
                  <div className="text-text-muted">Sunday</div>
                  <div className="text-text-light text-right">Closed</div>
                </div>
              </div>

              {/* Emergency */}
              <div className="mt-6 p-4 bg-orange/10 border border-orange/30">
                <div className="text-orange text-sm font-semibold mb-1">24/7 Emergency Services</div>
                <div className="text-text-muted text-sm">
                  For urgent repairs and emergency construction needs
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
