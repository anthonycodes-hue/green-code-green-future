import { Footprints, Lightbulb, Gauge, Battery, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";

const benefits = [
  { icon: Footprints, title: "Reduce Carbon Footprint", desc: "Ship leaner apps that consume less energy at every layer of the stack." },
  { icon: Lightbulb, title: "Promote Eco Awareness", desc: "Educate users with thoughtful, beautiful experiences that change behavior." },
  { icon: Gauge, title: "Smart Resource Usage", desc: "Optimize compute, bandwidth, and storage by default — no extra config." },
  { icon: Battery, title: "Longer Device Lifespans", desc: "Efficient code keeps older hardware viable, slashing e-waste over time." },
  { icon: Users, title: "Community-Powered", desc: "Open data and shared tools amplify impact across thousands of teams." },
  { icon: ShieldCheck, title: "Verifiable Impact", desc: "Track and prove your environmental wins with transparent metrics." },
];

const stats = [
  { value: "−62%", label: "Avg. energy use vs. legacy stacks" },
  { value: "1.2M", label: "kg CO₂ avoided to date" },
  { value: "9k+", label: "Builders shipping greener" },
];

const BenefitsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="The Impact"
        title={
          <>
            Build software that <span className="text-primary">gives more</span> than it takes.
          </>
        }
        description="Six concrete benefits your team — and the planet — will feel from day one."
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
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to measure your impact?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Let's talk about how Green Code can fit into your team's roadmap.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full">
              <Link to="/contact">
                Get in touch <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsPage;
