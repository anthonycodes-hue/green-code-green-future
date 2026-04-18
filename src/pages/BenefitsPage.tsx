import { Footprints, Lightbulb, Gauge, Battery, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";

const benefits = [
  { icon: Footprints, title: "Help Nature Heal", desc: "Every idea on the site addresses a real environmental issue from waste to water to wildlife." },
  { icon: Lightbulb, title: "Inspire Young Builders", desc: "Give CS and IT students a meaningful first project that goes beyond the classroom." },
  { icon: Gauge, title: "Open to Contribute", desc: "Pick an idea, add features, or remix it into your own every skill level is welcome." },
  { icon: Battery, title: "Real-World Skills", desc: "Practice React, APIs, design, and teamwork on projects that actually matter." },
  { icon: Users, title: "Community of Makers", desc: "Connect with devs, designers, and learners who care about the planet as much as the code." },
  { icon: ShieldCheck, title: "Portfolio That Matters", desc: "Ship something meaningful eco impact looks great in any application or interview." },
];

const stats = [
  { value: "9+", label: "Open eco app ideas to pick from" },
  { value: "All", label: "Skill levels welcome beginner to advanced" },
  { value: "1", label: "Happy Earth we're all building for" },
];

const BenefitsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Why Join Us"
        title={
          <>
            Build apps that <span className="text-primary">help the Earth</span> and your future.
          </>
        }
        description="Six real reasons developers, CS &amp; IT students, and curious learners are picking eco ideas from GreenCode."
      />

      {/* Stats strip */}
      <section className="pb-16 ">
        <div className="container mt-10">
          <div className="rounded-3xl bg-gradient-brand p-8 md:p-10 grid sm:grid-cols-3 gap-6 shadow-glow">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center text-white animate-fade-in"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{s.value}</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of benefits */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex gap-6 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
                >
                  <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 shadow-soft">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="rounded-3xl border border-border/60 bg-gradient-soft p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to build for the planet?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Pick an idea, message us, or just say hi  we'd love to help you start your eco project.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full">
              <Link to="/contact">
                Join the Community <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsPage;
