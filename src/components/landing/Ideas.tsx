import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { ideas } from "@/data/ideas";

const Ideas = () => {
  return (
    <section id="ideas" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
            <Leaf className="h-4 w-4" /> Ideas
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-balance">
            Eco apps that <span className="text-primary">help nature</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nine open project ideas waiting for students and developers to bring them to life — pick one, fork it, and start building for the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, i) => {
            const Icon = idea.icon;
            return (
              <Link
                key={idea.slug}
                to={`/ideas/${idea.slug}`}
                className="group relative rounded-2xl bg-card p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-gradient-brand group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-accent/60 px-2.5 py-1 rounded-full">
                    {idea.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{idea.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{idea.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-70 group-hover:opacity-100 group-hover:gap-2.5 transition-all duration-300">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/ideas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Browse all ideas to contribute <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ideas;
