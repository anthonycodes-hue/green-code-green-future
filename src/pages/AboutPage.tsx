import { Check, Leaf, Heart, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import aboutImage from "@/assets/about-eco.jpg";

const values = [
  { icon: Leaf, title: "Sustainability first", desc: "Every product decision weighed against its environmental cost." },
  { icon: Heart, title: "Human-centered", desc: "Tools that nudge — never shame — toward greener habits." },
  { icon: Globe2, title: "Open & accessible", desc: "We build for everyone, everywhere, on any device." },
];

const points = [
  "Energy-efficient code that lowers compute footprint",
  "Open ecosystems that empower communities",
  "Design that nudges users toward greener choices",
  "Transparent metrics so impact is verifiable",
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Software with a <span className="text-primary">conscience</span>.
          </>
        }
        description="We're a small team of engineers, designers, and naturalists who believe digital products can be a force for ecological good."
      />

      {/* Mission split */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-brand rounded-[2rem] opacity-20 blur-2xl" />
            <img
              src={aboutImage}
              alt="Hands holding a small green seedling"
              width={1280}
              height={1280}
              loading="lazy"
              className="relative rounded-3xl shadow-card w-full h-auto object-cover aspect-square"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "120ms", animationFillMode: "backwards" }}>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Our Mission</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-balance leading-tight">
              We believe great software can grow the planet, not just the bottom line.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every line of code carries a footprint. We help builders ship lean, efficient
              products that respect both performance budgets and the environment.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">What we stand for</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">Three values, one north star.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="rounded-2xl bg-card p-8 border border-border/60 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Work with us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
