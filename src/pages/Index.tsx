import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Ideas from "@/components/landing/Ideas";
import About from "@/components/landing/About";
import Benefits from "@/components/landing/Benefits";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Ideas />
      <About />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
