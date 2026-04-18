import { ArrowRight, Sparkles, Leaf, Globe, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-forest.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source src="/vids/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Sophisticated Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 md:to-black/30" />
      <div className="absolute inset-0 bg-gradient-hero mix-blend-multiply opacity-80" />

      {/* Floating Decorative Elements */}
      {/* <div className="absolute top-[20%] left-[10%] animate-float pointer-events-none opacity-40 hidden lg:block">
        <div className="glass p-4 rounded-2xl rotate-12">
          <Leaf className="h-10 w-10 text-primary-glow" />
        </div>
      </div>
      <div className="absolute top-[15%] right-[15%] animate-float-delayed pointer-events-none opacity-30 hidden lg:block">
        <div className="glass p-5 rounded-3xl -rotate-6">
          <Globe className="h-12 w-12 text-blue-300" />
        </div>
      </div>
      <div className="absolute bottom-[25%] left-[15%] animate-float-delayed pointer-events-none opacity-30 hidden lg:block">
        <div className="glass p-4 rounded-2xl -rotate-12">
          <Trees className="h-8 w-8 text-green-200" />
        </div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in shadow-glow-small">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase">Apps for a Happy Earth · Open to Students</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-extrabold leading-[0.95] text-balance animate-fade-in-slow drop-shadow-2xl">
          Green Code,
          <br />
          <span className="bg-gradient-to-r from-primary-glow via-accent to-primary-glow bg-clip-text text-green-500 [background-size:200%] animate-pulse-slow">
            Green Future.
          </span>
        </h1>

        <p className="mt-8 text-lg font-medium text-white/90 max-w-2xl mx-auto animate-fade-in-slow [animation-delay:200ms] leading-relaxed">
          Real apps, real impact helping nature, one project at a time.
        </p>

        <p className="mt-5 text-base md:text- text-white/70 max-w-xl mx-auto animate-fade-in-slow [animation-delay:400ms] leading-relaxed italic">
          A home for developers, CS &amp; IT students, and curious makers to pick an idea, contribute, and build something the planet will thank you for.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-slow [animation-delay:600ms]">
          <Button size="lg" variant="hero" asChild className="h-14 px-10 rounded-full text-lg shadow-glow-intense group">
            <a href="#ideas">
              Pick an Idea
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="heroOutline" asChild className="h-14 px-10 rounded-full text-lg backdrop-blur-sm border-white/30 hover:bg-white/10">
            <a href="#cta">Contribute</a>
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-fade-in [animation-delay:1200ms]">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Explore</span>
          <div className="h-12 w-7 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="h-2 w-1 rounded-full bg-white/80 animate-bounce" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
