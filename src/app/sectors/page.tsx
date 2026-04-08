import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Utensils, HeartPulse, Building2, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Sectors | Restaurant, Healthcare, Corporate & Retail Construction",
  description: "Specialized commercial construction expertise for restaurants, healthcare facilities, corporate offices, and retail spaces. Trusted by Taco Bell, Krispy Kreme, Banfield and more.",
};

const sectors = [
  {
    icon: Utensils,
    title: "Restaurant & Fast Food",
    subtitle: "Where America Eats",
    description: "From quick-service rollouts to full-service dining, we construct the spaces where millions of meals are served every day. Our restaurant construction expertise spans drive-thrus, commercial kitchens, dining areas, and brand-standard compliance.",
    clients: ["Taco Bell", "Krispy Kreme", "Habit Burger", "El Pollo Loco", "Jack in the Box", "Carl's Jr.", "Buffalo Wild Wings", "Dunkin'"],
    capabilities: [
      "Drive-thru optimization",
      "Commercial kitchen construction",
      "Brand standard compliance",
      "Health department coordination",
      "24/7 construction scheduling",
      "Multi-location rollouts",
    ],
    stats: { projects: "200+", avgTimeline: "90 days", onTime: "95%" },
    color: "orange",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    subtitle: "Healing Spaces Built Right",
    description: "Medical-grade construction for veterinary hospitals, urgent care clinics, and wellness centers. We understand the critical requirements of healthcare construction: sterile environments, ADA compliance, MEP coordination, and regulatory adherence.",
    clients: ["Banfield Pet Hospital", "Carbon Health"],
    capabilities: [
      "Sterile environment construction",
      "ADA compliance expertise",
      "MEP system coordination",
      "Medical equipment integration",
      "Regulatory compliance",
      "Infection control protocols",
    ],
    stats: { projects: "50+", avgTimeline: "120 days", onTime: "98%" },
    color: "gold",
  },
  {
    icon: Building2,
    title: "Corporate & Office",
    subtitle: "Spaces That Work",
    description: "Office environments designed for modern workforce productivity. We build for sustainability, flexibility, and minimal disruption to your operations during construction. From tenant improvements to ground-up office buildings.",
    clients: ["Ducati", "Corporate Headquarters", "Tech Offices"],
    capabilities: [
      "Office build-outs",
      "Tenant improvements",
      "Conference & collaboration spaces",
      "Sustainable construction",
      "Phased construction for minimal disruption",
      "Technology infrastructure",
    ],
    stats: { projects: "75+", avgTimeline: "60 days", onTime: "97%" },
    color: "gold",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commercial",
    subtitle: "Spaces That Sell",
    description: "Retail spaces that drive foot traffic and sales. From flagship stores to multi-location rollouts, we maintain brand consistency while delivering on time and on budget. Showrooms, customer service centers, and mixed-use developments.",
    clients: ["Ducati Showrooms", "Retail Chains", "Mixed-Use Developments"],
    capabilities: [
      "Storefront construction",
      "Brand-compliant rollouts",
      "Customer experience optimization",
      "High-traffic durability",
      "Visual merchandising support",
      "Multi-state coordination",
    ],
    stats: { projects: "100+", avgTimeline: "75 days", onTime: "96%" },
    color: "orange",
  },
];

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold text-sm tracking-widest uppercase">Our Expertise</span>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-text-light mt-6 leading-tight">
            Specialized by
            <span className="block text-gold">Sector</span>
          </h1>
          <p className="text-xl text-text-muted mt-8 max-w-3xl mx-auto leading-relaxed">
            Each industry has unique demands. RC Pacific brings specialized expertise 
            to every project type, ensuring compliance, efficiency, and results that 
            exceed expectations.
          </p>
        </div>
      </section>

      {/* Sectors Detail */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32">
          {sectors.map((sector, index) => (
            <div key={sector.title} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20`}>
              {/* Content */}
              <div className="flex-1">
                <div className={`w-20 h-20 ${sector.color === "orange" ? "bg-orange/10" : "bg-gold/10"} border ${sector.color === "orange" ? "border-orange/30" : "border-gold/30"} flex items-center justify-center mb-6`}>
                  <sector.icon className={`w-10 h-10 ${sector.color === "orange" ? "text-orange" : "text-gold"}`} />
                </div>

                <span className={`inline-block px-3 py-1 ${sector.color === "orange" ? "bg-orange/10 text-orange" : "bg-gold/10 text-gold"} text-xs tracking-wider border ${sector.color === "orange" ? "border-orange/30" : "border-gold/30"} mb-4`}>
                  {sector.subtitle}
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-text-light mb-6">
                  {sector.title}
                </h2>

                <p className="text-text-muted leading-relaxed mb-8 text-lg">
                  {sector.description}
                </p>

                {/* Capabilities */}
                <div className="mb-8">
                  <h3 className="text-text-light font-bold mb-4">Key Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sector.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 text-text-muted">
                        <CheckCircle2 className={`w-5 h-5 ${sector.color === "orange" ? "text-orange" : "text-gold"} flex-shrink-0`} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clients */}
                <div className="mb-8">
                  <h3 className="text-text-light font-bold mb-4">Featured Clients</h3>
                  <div className="flex flex-wrap gap-2">
                    {sector.clients.map((client) => (
                      <span
                        key={client}
                        className={`px-3 py-1 ${sector.color === "orange" ? "bg-orange/10 text-orange" : "bg-gold/10 text-gold"} border ${sector.color === "orange" ? "border-orange/20" : "border-gold/20"} text-sm`}
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mb-8 p-4 bg-navy-light/50 border border-gold/20">
                  <div>
                    <div className={`text-2xl font-black ${sector.color === "orange" ? "text-orange" : "text-gold"}`}>{sector.stats.projects}</div>
                    <div className="text-text-muted text-sm">Projects</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-black ${sector.color === "orange" ? "text-orange" : "text-gold"}`}>{sector.stats.avgTimeline}</div>
                    <div className="text-text-muted text-sm">Avg Timeline</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-black ${sector.color === "orange" ? "text-orange" : "text-gold"}`}>{sector.stats.onTime}</div>
                    <div className="text-text-muted text-sm">On-Time Rate</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 ${sector.color === "orange" ? "text-orange" : "text-gold"} hover:text-text-light transition-colors font-semibold group`}
                >
                  Start a {sector.title.split(" ")[0]} Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>

              {/* Visual Placeholder */}
              <div className="flex-1">
                <div className={`aspect-[4/3] bg-navy-light border ${sector.color === "orange" ? "border-orange/20" : "border-gold/20"} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(${index % 2 === 0 ? '45deg' : '-45deg'}, transparent 48%, ${sector.color === 'orange' ? '#E85D04' : '#C9A962'} 49%, ${sector.color === 'orange' ? '#E85D04' : '#C9A962'} 51%, transparent 52%)`,
                    backgroundSize: '40px 40px',
                  }} />
                  <div className={`w-24 h-24 ${sector.color === "orange" ? "bg-orange/10" : "bg-gold/10"} border ${sector.color === "orange" ? "border-orange/30" : "border-gold/30"} flex items-center justify-center relative z-10`}>
                    <sector.icon className={`w-12 h-12 ${sector.color === "orange" ? "text-orange" : "text-gold"}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
