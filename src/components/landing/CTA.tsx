import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-20 text-center shadow-glow">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground text-balance">
              Pick an Idea. Help the Planet.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/85 max-w-xl mx-auto">
              Whether you're a student looking for a meaningful project or a developer ready to give back — there's an idea here with your name on it.
            </p>
            <Button size="lg" variant="hero" className="mt-10 bg-white text-primary hover:bg-white/90 hover:shadow-2xl">
              Start Contributing
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
