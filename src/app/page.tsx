import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import SectorCards from "@/components/SectorCards";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "RC Pacific Construction | 35+ Years Building America's Biggest Brands",
  description: "Commercial construction specializing in restaurants, healthcare, retail, and corporate spaces. Trusted by Taco Bell, Krispy Kreme, Habit Burger and 15+ major brands across California, Arizona, Nevada, Washington, Texas, and Colorado.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-dark">
      <Navigation />
      <Hero />
      <ClientMarquee />
      <SectorCards />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
