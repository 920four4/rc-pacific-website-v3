import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export const metadata = {
  title: "About RC Pacific | 35 Years of Building Trust",
  description: "Founded in 1989, RC Pacific Construction brings 100+ years of combined experience to commercial construction projects across California, Arizona, Nevada, Washington, Texas, and Colorado.",
};

export default function AboutPage() {
  const milestones = [
    { year: "1989", title: "Founded", description: "RC Pacific Construction established in Roseville, CA with a focus on restaurant construction" },
    { year: "1995", title: "Expansion", description: "Expanded operations to Nevada and Arizona, first multi-state project completed" },
    { year: "2005", title: "Healthcare Entry", description: "Added healthcare construction capabilities with first veterinary hospital project" },
    { year: "2010", title: "Major Brand Partnerships", description: "Secured contracts with Taco Bell and major QSR brands for multi-location rollouts" },
    { year: "2015", title: "Geographic Growth", description: "Expanded to Washington, Texas, and Colorado - now operating in 6 states" },
    { year: "2020", title: "500 Projects", description: "Completed 500th commercial construction project across all sectors" },
    { year: "2025", title: "Industry Leader", description: "Recognized as top regional contractor for restaurant and healthcare sectors" },
  ];

  const values = [
    {
      title: "Integrity First",
      description: "We do what we say we'll do. Transparent pricing, honest timelines, and no surprises.",
    },
    {
      title: "Client Partnership",
      description: "Your success is our success. We work alongside you, not just for you.",
    },
    {
      title: "Quality Obsession",
      description: "Every detail matters. From foundation to finish, we build to last.",
    },
    {
      title: "Time Sensitivity",
      description: "We understand that every day counts. Our schedules are aggressive but achievable.",
    },
  ];

  return (
    <main className="min-h-screen bg-navy-dark">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-gold text-sm tracking-widest uppercase">Our Story</span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-text-light mt-6 leading-tight">
              35 Years of
              <span className="block text-gold">Building Trust</span>
            </h1>
            <p className="text-xl text-text-muted mt-8 leading-relaxed">
              Founded in 1989, RC Pacific Construction has grown from a small local contractor 
              to a multi-state construction leader. Along the way, we&apos;ve built more than 
              buildings—we&apos;ve built relationships that last.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-navy border-y border-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "37+", label: "Years in Business" },
              { value: "500+", label: "Projects Completed" },
              { value: "100+", label: "Years Team Experience" },
              { value: "18+", label: "Major Brand Clients" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-gold">{stat.value}</div>
                <div className="text-text-muted text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Our Journey</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light mt-4">
              From Local to Regional Leader
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/20" />

            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={milestone.year} className="relative flex items-center mb-12 last:mb-0">
                  {/* Content */}
                  <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : "ml-auto pl-12 text-left"}`}>
                    <div className="bg-navy-light/30 border border-gold/20 p-6 hover:border-gold/50 transition-colors">
                      <div className="text-gold text-sm font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-text-light mb-2">{milestone.title}</h3>
                      <p className="text-text-muted text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold border-4 border-navy-dark rounded-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">What We Stand For</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-navy-light/30 border border-gold/20 p-8 hover:border-gold/50 transition-colors">
                <h3 className="text-2xl font-bold text-text-light mb-4">{value.title}</h3>
                <p className="text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Leadership</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light mt-4">
              Meet the Team
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto">
              RC Pacific is led by experienced construction professionals who understand 
              what it takes to deliver complex projects on time and on budget.
            </p>
          </div>

          {/* Team Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ron Meade", title: "President & Founder", since: "1989" },
              { name: "Operations Team", title: "Project Management", since: "100+ Years Combined" },
              { name: "Field Supervisors", title: "Site Leadership", since: "Experienced & Certified" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <span className="text-gold text-4xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-text-light">{member.name}</h3>
                <p className="text-gold text-sm mt-1">{member.title}</p>
                <p className="text-text-muted text-sm mt-2">Since {member.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
