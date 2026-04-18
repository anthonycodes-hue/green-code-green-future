import { Footprints, Lightbulb, Gauge } from "lucide-react";

const benefits = [
  { icon: Footprints, title: "Help Nature Heal", desc: "Every app here tackles a real environmental problem — from waste to water to wildlife." },
  { icon: Lightbulb, title: "Inspire Young Builders", desc: "Give CS & IT students a meaningful first project that goes beyond the classroom." },
  { icon: Gauge, title: "Open & Contributable", desc: "Pick an idea, contribute features, or launch your own — every skill level is welcome." },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why join us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-balance">
            Build apps that give back to the Earth — and to your future.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-card p-8 border border-border/60 shadow-soft hover:shadow-card transition-all duration-300 text-center"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
