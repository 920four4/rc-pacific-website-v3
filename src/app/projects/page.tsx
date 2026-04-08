import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight, Building } from "lucide-react";

export const metadata = {
  title: "Projects | RC Pacific Construction Portfolio",
  description: "View our portfolio of commercial construction projects for Taco Bell, Krispy Kreme, Habit Burger, Banfield Pet Hospital and more across 6 states.",
};

const projects = [
  {
    client: "Taco Bell",
    title: "Multi-Location Rollout",
    location: "CA & NV",
    sector: "Restaurant",
    year: "2023",
    value: "$8.2M",
    description: "12 new locations completed 3 weeks ahead of schedule",
  },
  {
    client: "Banfield Pet Hospital",
    title: "Healthcare Facility",
    location: "Arizona",
    sector: "Healthcare",
    year: "2023",
    value: "$1.8M",
    description: "Medical-grade veterinary hospital with sterile suites",
  },
  {
    client: "Krispy Kreme",
    title: "Flagship Store",
    location: "Concord, CA",
    sector: "Restaurant",
    year: "2022",
    value: "$2.1M",
    description: "Showcase location with production kitchen optimization",
  },
  {
    client: "Habit Burger",
    title: "Multi-Unit Expansion",
    location: "CA & AZ",
    sector: "Restaurant",
    year: "2022",
    value: "$3.5M",
    description: "8 new locations with drive-thru optimization",
  },
  {
    client: "Carbon Health",
    title: "Urgent Care Clinic",
    location: "California",
    sector: "Healthcare",
    year: "2023",
    value: "$1.2M",
    description: "Modern urgent care with advanced MEP systems",
  },
  {
    client: "Ducati",
    title: "Showroom Build",
    location: "California",
    sector: "Retail",
    year: "2022",
    value: "$850K",
    description: "Premium motorcycle showroom with customer experience focus",
  },
  {
    client: "El Pollo Loco",
    title: "Renovation Project",
    location: "Nevada",
    sector: "Restaurant",
    year: "2023",
    value: "$450K",
    description: "Full restaurant renovation with kitchen upgrade",
  },
  {
    client: "Jack in the Box",
    title: "Drive-Thru Optimization",
    location: "Texas",
    sector: "Restaurant",
    year: "2023",
    value: "$320K",
    description: "Drive-thru enhancement for improved throughput",
  },
];

const filters = ["All", "Restaurant", "Healthcare", "Retail", "Corporate"];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-gold text-sm tracking-widest uppercase">Portfolio</span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-text-light mt-6 leading-tight">
              Featured
              <span className="block text-gold">Projects</span>
            </h1>
            <p className="text-xl text-text-muted mt-8 leading-relaxed">
              A selection of our most impactful builds, showcasing the range 
              and quality that leading brands expect from RC Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-6 py-3 font-semibold text-sm transition-colors ${
                  filter === "All"
                    ? "bg-gold text-navy-dark"
                    : "bg-navy-light/50 text-text-muted border border-gold/20 hover:border-gold/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <div className="bg-navy-light/30 border border-gold/20 overflow-hidden hover:border-gold/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-navy border-b border-gold/10 flex items-center justify-center relative overflow-hidden">
                    <div className="w-20 h-20 bg-gold/10 border border-gold/30 flex items-center justify-center relative z-10">
                      <Building className="w-10 h-10 text-gold" />
                    </div>
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: 'linear-gradient(45deg, transparent 48%, #C9A962 49%, #C9A962 51%, transparent 52%)',
                      backgroundSize: '20px 20px',
                    }} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-gold/10 text-gold text-xs border border-gold/20">
                        {project.sector}
                      </span>
                      <span className="text-gold font-bold">{project.value}</span>
                    </div>

                    <h3 className="text-xl font-bold text-text-light mb-2">{project.title}</h3>
                    <p className="text-gold text-sm mb-3">{project.client}</p>
                    <p className="text-text-muted text-sm mb-4 flex-1">{project.description}</p>

                    <div className="flex items-center gap-4 text-xs text-text-muted pt-4 border-t border-gold/10">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gold" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 font-bold hover:bg-gold-light transition-colors">
              Load More Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
