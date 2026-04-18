import { Check } from "lucide-react";
import aboutImage from "@/assets/about-eco.jpg";

const points = [
  "Open ideas any student or developer can pick up and build",
  "A friendly community of CS, IT, and self-taught makers",
  "Every project aimed at helping nature and people thrive",
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-brand rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src={aboutImage}
              alt="Hands holding a small green seedling sprouting from soil"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating stat badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl animate-float shadow-glow">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Eco Focus</div>
          </div>
        </div>

        <div className="animate-fade-in">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-6 inline-block">Our Collective Mission</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.1]">
            Code that breathes <br />
            <span className="bg-gradient-brand bg-clip-text text-transparent">life into nature.</span>
          </h2>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
            We curate meaningful project briefs so the next generation of developers can skip the "hello world" and jump straight into solving real environmental crises.
          </p>

          <ul className="mt-12 space-y-6">
            {points.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${i * 100 + 400}ms`, animationFillMode: "backwards" }}
              >
                <span className="mt-1 h-7 w-7 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                </span>
                <span className="text-lg font-medium text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
