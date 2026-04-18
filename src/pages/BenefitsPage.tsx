import { Footprints, Lightbulb, Gauge, Battery, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";

const benefits = [
  { icon: Footprints, title: "Help Nature Heal", desc: "Every idea on the site addresses a real environmental issue — from waste to water to wildlife." },
  { icon: Lightbulb, title: "Inspire Young Builders", desc: "Give CS and IT students a meaningful first project that goes beyond the classroom." },
  { icon: Gauge, title: "Open to Contribute", desc: "Pick an idea, add features, or remix it into your own — every skill level is welcome." },
  { icon: Battery, title: "Real-World Skills", desc: "Practice React, APIs, design, and teamwork on projects that actually matter." },
  { icon: Users, title: "Community of Makers", desc: "Connect with devs, designers, and learners who care about the planet as much as the code." },
  { icon: ShoppingBag.prototype === undefined ? ShieldCheck : ShieldCheck, title: "Portfolio That Matters", desc: "Ship something meaningful — eco impact looks great in any application or interview." },
];

const stats = [
  { value: "9+", label: "Open eco app ideas to pick from" },
  { value: "All", label: "Skill levels welcome — beginner to advanced" },
  { value: "1", label: "Happy Earth we're all building for" },
];

const BenefitsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Why Join Us"
        title={
          <>
            Build apps that <span className="text-primary">help the Earth</span> — and your future.
          </>
        }
        description="Six real reasons developers, CS &amp; IT students, and curious learners are picking eco ideas from GreenCode."
      />

      {/* Stats strip */}
      <section className="pb-16">
        <div className="container">
          <div className="rounded-3xl bg-gradient-brand p-8 md:p-10 grid sm:grid-cols-3 gap-6 shadow-glow">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center text-primary-foreground animate-fade-in"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
              >
                <div className="font-display text-4xl md:text-5xl font-extrabold leading-none">{s.value}</div>
                <div className="mt-2 text-sm opacity-90">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group rounded-2xl bg-card p-8 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 70}ms`, animationFillMode: "backwards" }}
              >
                <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-brand group-hover:shadow-glow transition-all duration-300">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="rounded-3xl border border-border/60 bg-gradient-soft p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to build for the planet?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Pick an idea, message us, or just say hi — we'd love to help you start your eco project.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full">
              <Link to="/contact">
                Join the community <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsPage;
