import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-forest.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Sunlight filtering through a lush green forest canopy"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
          <span className="text-xs font-medium tracking-wide">Sustainable Tech · 2025</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-balance animate-fade-in-slow">
          Green Code,
          <br />
          <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
            Green Future.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto animate-fade-in-slow [animation-delay:200ms]">
          Building sustainable software solutions through innovation.
        </p>

        <p className="mt-4 text-base text-white/70 max-w-xl mx-auto animate-fade-in-slow [animation-delay:400ms]">
          Discover ten eco-friendly app ideas reshaping how technology serves our planet.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow [animation-delay:600ms]">
          <Button size="lg" variant="hero" asChild>
            <a href="#ideas">
              Explore Ideas
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="heroOutline" asChild>
            <a href="#cta">Get Started</a>
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
