import { Footprints, Lightbulb, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  { icon: Footprints, title: "Help Nature Heal", desc: "Every app here tackles a real environmental problem from waste to water to wildlife." },
  { icon: Lightbulb, title: "Inspire Young Builders", desc: "Give CS & IT students a meaningful first project that goes beyond the classroom." },
  { icon: Gauge, title: "Open & Contributable", desc: "Pick an idea, contribute features, or launch your own every skill level is welcome." },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 inline-block">Impact · Community · Earth</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
            Build apps that give back to <br />
            <span className="text-primary italic">the Earth</span> and your future.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={cn(
                "group relative rounded-[2rem] bg-card/60 backdrop-blur-md p-10 border border-white/60 shadow-soft",
                "hover:shadow-glow hover:-translate-y-2 transition-all duration-500 animate-fade-in"
              )}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "backwards" }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center mb-8 shadow-glow transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
