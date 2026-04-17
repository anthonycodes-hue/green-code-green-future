import { useState } from "react";
import {
  Recycle, Sprout, Sun, Bike, Droplets, TreePine,
  Trash2, Wind, ShoppingBag, Leaf, ArrowRight, CheckCircle2, AlertCircle, Lightbulb,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

type Idea = {
  icon: typeof Recycle;
  title: string;
  desc: string;
  problem: string;
  solution: string;
  features: string[];
};

const ideas: Idea[] = [
  {
    icon: Recycle,
    title: "Recycling Guide App",
    desc: "Scan any product and learn how to properly recycle it.",
    problem: "Most people throw recyclables in the wrong bin, causing 25% of recycling to end up in landfills.",
    solution: "An AI-powered scanner that instantly identifies materials and gives location-specific recycling instructions.",
    features: ["Barcode & image recognition", "Local recycling rules database", "Gamified weekly challenges"],
  },
  {
    icon: Sprout,
    title: "Urban Garden Planner",
    desc: "Grow food in tiny spaces with smart, AI-led guidance.",
    problem: "City dwellers want to grow food but lack space, time, and horticultural knowledge.",
    solution: "Personalized garden plans for balconies and windowsills with daily care reminders.",
    features: ["Space-aware plant suggestions", "Smart watering schedule", "Harvest yield predictions"],
  },
  {
    icon: Sun,
    title: "Solar Yield Tracker",
    desc: "Predict and optimize your solar production in real-time.",
    problem: "Solar panel owners rarely know if their system is underperforming or how to improve output.",
    solution: "Real-time monitoring with weather-based forecasts and actionable optimization tips.",
    features: ["Live production dashboard", "Weather-adjusted forecasts", "Anomaly detection alerts"],
  },
  {
    icon: Bike,
    title: "Eco Commute",
    desc: "Plan greener routes that minimize your carbon footprint.",
    problem: "Standard map apps optimize for speed, ignoring the carbon cost of every trip.",
    solution: "Multimodal routing that surfaces low-carbon alternatives and tracks emissions saved.",
    features: ["Carbon-aware routing", "Multimodal trip planning", "Monthly impact reports"],
  },
  {
    icon: Droplets,
    title: "Water Saver",
    desc: "Track household water usage and discover conservation tips.",
    problem: "Households waste an average of 30 gallons of water daily without realizing it.",
    solution: "Smart meter integration with leak detection and behavior-based saving tips.",
    features: ["Leak alerts in real-time", "Per-fixture usage breakdown", "Family saving challenges"],
  },
  {
    icon: TreePine,
    title: "Reforest Together",
    desc: "Plant a tree with every milestone you complete.",
    problem: "People want to offset their footprint but don't trust opaque carbon credit programs.",
    solution: "Transparent tree-planting tied to personal milestones with verified GPS-tracked forests.",
    features: ["Verified planting partners", "GPS-tracked forest map", "Shareable impact badges"],
  },
  {
    icon: Trash2,
    title: "Zero Waste Coach",
    desc: "Build sustainable habits one weekly challenge at a time.",
    problem: "Going zero-waste feels overwhelming and unattainable for most beginners.",
    solution: "Bite-sized weekly challenges that build sustainable habits without burnout.",
    features: ["Personalized habit roadmap", "Community accountability", "Waste audit tracker"],
  },
  {
    icon: Wind,
    title: "Air Quality Hub",
    desc: "Hyperlocal air data so you can breathe smarter.",
    problem: "Air quality varies block by block, but most apps only show city-wide averages.",
    solution: "Crowdsourced sensor network delivering street-level air quality forecasts.",
    features: ["Hyperlocal AQI map", "Health-based activity advice", "Pollution source alerts"],
  },
  {
    icon: ShoppingBag,
    title: "Conscious Cart",
    desc: "Discover ethical alternatives while you shop online.",
    problem: "Shoppers want sustainable products but can't easily verify brand ethics at checkout.",
    solution: "A browser extension that scores products and suggests greener alternatives instantly.",
    features: ["Ethical brand scoring", "Greener alternative finder", "Carbon-cost at checkout"],
  },
];

const Ideas = () => {
  const [selected, setSelected] = useState<Idea | null>(null);

  return (
    <section id="ideas" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
            <Leaf className="h-4 w-4" /> Ideas
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-balance">
            Software ideas that <span className="text-primary">heal the planet</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nine eco-conscious concepts designed to make sustainability effortless and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, i) => {
            const Icon = idea.icon;
            return (
              <button
                key={idea.title}
                onClick={() => setSelected(idea)}
                className="group relative text-left rounded-2xl bg-card p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
              >
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-brand group-hover:shadow-glow transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{idea.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{idea.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <div className="animate-fade-in">
              <DialogHeader>
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-4 shadow-glow animate-scale-in">
                  <selected.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                <DialogDescription className="text-base">{selected.desc}</DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-5">
                <div className="rounded-xl border border-border/60 bg-background/50 p-4 animate-fade-in" style={{ animationDelay: "80ms", animationFillMode: "backwards" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">The Problem</h4>
                  </div>
                  <p className="text-sm leading-relaxed">{selected.problem}</p>
                </div>

                <div className="rounded-xl border border-border/60 bg-accent/40 p-4 animate-fade-in" style={{ animationDelay: "160ms", animationFillMode: "backwards" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">The Solution</h4>
                  </div>
                  <p className="text-sm leading-relaxed">{selected.solution}</p>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "240ms", animationFillMode: "backwards" }}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selected.features.map((f, idx) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm animate-fade-in"
                        style={{ animationDelay: `${300 + idx * 80}ms`, animationFillMode: "backwards" }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Ideas;
