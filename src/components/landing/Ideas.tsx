import {
  Recycle, Sprout, Sun, Bike, Droplets, TreePine,
  Trash2, Wind, ShoppingBag, Leaf,
} from "lucide-react";

const ideas = [
  { icon: Recycle, title: "Recycling Guide App", desc: "Scan any product and learn how to properly recycle it." },
  { icon: Sprout, title: "Urban Garden Planner", desc: "Grow food in tiny spaces with smart, AI-led guidance." },
  { icon: Sun, title: "Solar Yield Tracker", desc: "Predict and optimize your solar production in real-time." },
  { icon: Bike, title: "Eco Commute", desc: "Plan greener routes that minimize your carbon footprint." },
  { icon: Droplets, title: "Water Saver", desc: "Track household water usage and discover conservation tips." },
  { icon: TreePine, title: "Reforest Together", desc: "Plant a tree with every milestone you complete." },
  { icon: Trash2, title: "Zero Waste Coach", desc: "Build sustainable habits one weekly challenge at a time." },
  { icon: Wind, title: "Air Quality Hub", desc: "Hyperlocal air data so you can breathe smarter." },
  { icon: ShoppingBag, title: "Conscious Cart", desc: "Discover ethical alternatives while you shop online." },
];

const Ideas = () => {
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
          {ideas.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative rounded-2xl bg-card p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-brand group-hover:shadow-glow transition-all duration-300">
                <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ideas;
