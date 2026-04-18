import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-[3rem] bg-green-950 p-12 md:p-24 text-center shadow-glow-intense group">
          {/* Background Image */}
          <img
            src="https://media.istockphoto.com/id/537361232/photo/sunlit-natural-spruce-tree-forest.jpg?s=612x612&w=0&k=20&c=PJMrMlVGm7uI4btXIG67z3PZdIk4DqGkaa-LID4u_i8="
            alt="Sunlit forest"
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/40 to-black/60" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />

          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-glow/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-display text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Pick an Idea. <br />
              <span className="text-primary-glow italic">Help the Planet.</span>
            </h2>
            <p className="mt-8 text-lg md:text-2xl text-white/80 max-w-xl mx-auto font-medium leading-relaxed">
              Whether you're a student looking for a meaningful project or a developer ready to give back — there's an idea here with your name on it.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="h-16 px-10 rounded-full text-xl font-bold bg-primary-glow hover:bg-white hover:text-primary-glow shadow-glow transition-all active:scale-95 group/btn">
                  Start Contributing
                  <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
