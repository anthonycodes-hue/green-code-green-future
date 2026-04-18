import { Check, Leaf, Heart, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import aboutImage from "@/assets/about-eco.jpg";

const values = [
  { icon: Leaf, title: "Nature first", desc: "Every idea on this site exists to protect, restore, or honor the natural world." },
  { icon: Heart, title: "Students welcome", desc: "Beginner-friendly briefs so CS, IT, and self-taught learners can confidently contribute." },
  { icon: Globe2, title: "Open & collaborative", desc: "Anyone, anywhere can pick an idea, build it, share it, and inspire the next maker." },
];

const points = [
  "A library of eco app ideas, ready for students to pick up",
  "Friendly briefs so first-time contributors feel confident",
  "Real environmental problems, real meaningful projects",
  "A community where devs, designers, and learners help each other",
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Apps for nature, built by <span className="text-primary">tomorrow's developers</span>.
          </>
        }
        description="GreenCode is a home for students, devs, and IT learners to pick eco app ideas, contribute, and grow into builders the planet needs."
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
              Inspire the next generation of devs to code for a happier Earth.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We collect simple, meaningful eco app ideas and pair them with friendly briefs — so any
              CS or IT student can pick one, contribute, and ship something that genuinely helps nature.
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
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">Three values, one happy planet.</h2>
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
              <Link to="/contact">Join the community</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
