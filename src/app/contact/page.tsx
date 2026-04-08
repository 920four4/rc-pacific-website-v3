import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, ArrowRight, Building2, Users, Briefcase } from "lucide-react";

export const metadata = {
  title: "Contact RC Pacific | Get Your Construction Quote",
  description: "Contact RC Pacific Construction for restaurant, healthcare, retail, and commercial construction projects. Located in Roseville, CA with operations in 6 states.",
};

const contactTypes = [
  {
    icon: Building2,
    title: "I'm a Client",
    subtitle: "Looking for a construction partner",
    description: "For new construction, remodels, or multi-location rollouts. We work with brands and franchise groups.",
    formFields: ["Name", "Company", "Email", "Phone", "Project Type", "Project Details"],
  },
  {
    icon: Users,
    title: "I'm a Subcontractor",
    subtitle: "Want to join our network",
    description: "We're always looking for qualified tradespeople across our 6-state coverage area.",
    formFields: ["Company Name", "Trade", "License Number", "Coverage Area", "Email", "Phone"],
  },
  {
    icon: Briefcase,
    title: "I'm Looking for a Career",
    subtitle: "Join the RC Pacific team",
    description: "We're hiring project managers, superintendents, and skilled tradespeople.",
    formFields: ["Name", "Position", "Experience", "Email", "Phone", "Resume"],
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-gold text-sm tracking-widest uppercase">Get in Touch</span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-text-light mt-6 leading-tight">
              Let&apos;s Build
              <span className="block text-gold">Something Great</span>
            </h1>
            <p className="text-xl text-text-muted mt-8 leading-relaxed">
              Whether you&apos;re launching one location or rolling out twenty, RC Pacific brings 
              the expertise, resources, and commitment to make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactTypes.map((type) => (
              <div key={type.title} className="group">
                <div className="bg-navy-light/30 border border-gold/20 p-8 h-full hover:border-gold/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <type.icon className="w-8 h-8 text-gold" />
                  </div>

                  <h3 className="text-2xl font-bold text-text-light mb-2">{type.title}</h3>
                  <p className="text-gold text-sm mb-4">{type.subtitle}</p>
                  <p className="text-text-muted mb-6">{type.description}</p>

                  {/* Form Preview */}
                  <div className="space-y-3">
                    {type.formFields.map((field) => (
                      <div key={field} className="px-4 py-3 bg-navy border border-gold/10 text-text-muted text-sm">
                        {field}
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-gold text-navy-dark py-4 font-bold hover:bg-gold-light transition-colors flex items-center justify-center gap-2 group/btn">
                    Submit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Info & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="bg-navy-light/30 border border-gold/20 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-text-light mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
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
              <div className="pt-8 border-t border-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="text-gold text-sm tracking-wider">BUSINESS HOURS</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Monday - Friday</span>
                    <span className="text-text-light">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Saturday</span>
                    <span className="text-text-light">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Sunday</span>
                    <span className="text-text-light">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="mt-8 p-4 bg-orange/10 border border-orange/30">
                <div className="text-orange font-semibold mb-1">24/7 Emergency Services</div>
                <div className="text-text-muted text-sm">
                  For urgent repairs and emergency construction needs
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-navy border border-gold/20 aspect-square lg:aspect-auto flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-text-light mb-2">Roseville, CA</h3>
                <p className="text-text-muted mb-4">7070 Galilee Rd</p>
                <p className="text-text-muted text-sm max-w-xs mx-auto">
                  Serving California, Arizona, Nevada, Washington, Texas, and Colorado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
