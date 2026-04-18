import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Leaf, Globe, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import posterImage from "@/assets/hero-forest.jpg";

const Hero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    // Safety fallback: If video takes too long, reveal content anyway
    const timer = setTimeout(() => setIsVideoReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    // Add a tiny extra delay for maximum smoothness
    setTimeout(() => setIsVideoReady(true), 200);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060B08]">
      {/* Premium Loader Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060B08] transition-all duration-1000 ease-in-out pointer-events-none ${isVideoReady ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse rounded-full" />
          <Leaf className="h-16 w-16 text-primary-glow animate-bounce relative z-10" />
        </div>
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-primary-glow font-display font-bold tracking-[0.2em] uppercase text-xs animate-pulse">
            Gathering Nature's Pixels
          </span>
          <div className="h-0.5 w-24 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary-glow animate-[shimmer_2s_infinite] w-full" />
          </div>
        </div>
      </div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterImage}
        onLoadedData={handleVideoLoad}
        className={`absolute inset-0 h-full w-full object-cover scale-105 transition-opacity duration-1000 ${isVideoReady ? "opacity-100" : "opacity-0"
          }`}
      >
        <source src="/vids/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Sophisticated Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 md:to-black/30" />
      <div className="absolute inset-0 bg-gradient-hero mix-blend-multiply opacity-80" />

      {/* Content */}
      <div className={`relative z-10 container text-center text-white px-4 transition-all duration-1000 delay-300 ${isVideoReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 shadow-glow-small">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase">Apps for a Happy Earth</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-extrabold leading-[0.95] text-balance drop-shadow-2xl">
          Green Code,
          <br />
          <span className="bg-gradient-to-r from-primary-glow via-accent to-primary-glow bg-clip-text text-green-500 [background-size:200%]">
            Green Future.
          </span>
        </h1>

        <p className="mt-8 text-lg font-medium text-white/90 max-w-2xl mx-auto leading-relaxed">
          Real apps, real impact helping nature, one project at a time.
        </p>

        <p className="mt-5 text-base md:text- text-white/70 max-w-xl mx-auto leading-relaxed italic">
          A home for developers, CS &amp; IT students, and curious makers to pick an idea, contribute, and build something the planet will thank you for.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
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
    </section>
  );
};

export default Hero;
