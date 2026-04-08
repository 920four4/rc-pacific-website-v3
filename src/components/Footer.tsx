"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Globe } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
  sectors: [
    { label: "Restaurant & Fast Food", href: "/sectors" },
    { label: "Healthcare & Medical", href: "/sectors" },
    { label: "Corporate & Office", href: "/sectors" },
    { label: "Retail & Commercial", href: "/sectors" },
  ],
  services: [
    { label: "New Construction", href: "/services" },
    { label: "Tenant Improvements", href: "/services" },
    { label: "Remodels & Renovations", href: "/services" },
    { label: "ADA Compliance", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "https://linkedin.com/company/rc-pacific-construction", label: "LinkedIn" },
  { icon: Globe, href: "https://facebook.com/rcpacificconstruction", label: "Facebook" },
  { icon: Globe, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/10 relative overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <div className="text-[30rem] font-black text-gold tracking-tighter">
          RC
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gold flex items-center justify-center">
                <span className="text-navy-dark font-bold text-2xl">RC</span>
              </div>
              <div>
                <div className="text-text-light font-bold tracking-wider">RC PACIFIC</div>
                <div className="text-text-muted text-sm tracking-widest">CONSTRUCTION</div>
              </div>
            </Link>

            <p className="text-text-muted leading-relaxed mb-6 max-w-sm">
              Building America&apos;s biggest brands since 1989. Commercial construction 
              specializing in restaurants, healthcare, retail, and corporate spaces across 
              California, Arizona, Nevada, Washington, Texas, and Colorado.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:9167825682" className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                <span>(916) 782-5682</span>
              </a>
              <a href="mailto:info@rcpacific.com" className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@rcpacific.com</span>
              </a>
              <div className="flex items-start gap-3 text-text-muted">
                <MapPin className="w-4 h-4 text-gold mt-1" />
                <span>7070 Galilee Rd<br />Roseville, CA 95678</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-text-light font-bold mb-6 tracking-wider text-sm">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-light font-bold mb-6 tracking-wider text-sm">SECTORS</h4>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-light font-bold mb-6 tracking-wider text-sm">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gold/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-text-light font-bold mb-2">Stay Updated</h4>
              <p className="text-text-muted text-sm">Get project updates and industry insights</p>
            </div>
            <form className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-navy-light border border-gold/20 text-text-light placeholder:text-text-muted focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-navy-dark font-semibold hover:bg-gold-light transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-text-muted text-sm">
              © 2025 RC Pacific Construction. All rights reserved.
            </span>
            <span className="text-gold/30 hidden md:inline">|</span>
            <span className="text-text-muted text-sm">
              Licensed Contractor • CA License #XXX
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Large Since Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-12 hidden xl:block"
        >
          <div className="bg-gold/5 border border-gold/20 p-6 text-center">
            <div className="text-gold text-xs tracking-widest mb-2">SERVING CLIENTS SINCE</div>
            <div className="text-5xl font-black text-text-light">1989</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}