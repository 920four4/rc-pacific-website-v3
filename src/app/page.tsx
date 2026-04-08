import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import SectorCards from "@/components/SectorCards";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "RC Pacific Construction | 37+ Years Building America's Biggest Brands",
  description: "Commercial construction specializing in restaurants, healthcare, retail, and corporate spaces. Trusted by Taco Bell, Krispy Kreme, Habit Burger and 15+ major brands across California, Arizona, Nevada, Washington, Texas, and Colorado.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-dark overflow-x-hidden">
      <Navigation />
      <Hero />
      <ClientMarquee />
      <SectorCards />
      <StatsSection />
      <ProcessSection />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
