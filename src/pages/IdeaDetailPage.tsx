import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Leaf, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getIdea, ideas } from "@/data/ideas";
import ideaHero from "@/assets/idea-hero.jpg";

const IdeaDetailPage = () => {
  const { slug = "" } = useParams();
  const idea = getIdea(slug);

  if (!idea) {
    return (
      <section className="pt-40 pb-32 container text-center">
        <h1 className="text-3xl font-bold mb-4">Idea not found</h1>
        <p className="text-muted-foreground mb-8">We couldn't find that eco app idea it may have moved.</p>
        <Button asChild>
          <Link to="/ideas">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Ideas
          </Link>
        </Button>
      </section>
    );
  }

  const currentIndex = ideas.findIndex((i) => i.slug === idea.slug);
  const next = ideas[(currentIndex + 1) % ideas.length];

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      {/* Blog-Style Header with Background Image */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-black">
        <img
          src={ideaHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover scale-105 opacity-50 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20" />

        <div className="container relative z-10">
          <Link
            to="/ideas"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-bold uppercase tracking-widest">Back</span>
          </Link>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 text-primary-glow text-xs font-bold uppercase tracking-wider">
              Project {idea.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-white">
              {idea.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed italic">
              "{idea.desc}"
            </p>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="container py-16 md:py-24 space-y-24 md:space-y-32">
        {/* Section: The Challenge */}
        <article className="prose prose-lg prose-green max-w-none">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-primary mb-10 flex items-center gap-4">
            The Challenge <span className="h-px flex-1 bg-primary/10" />
          </h2>
          <div className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground/90">
            {idea.problem}
          </div>
        </article>

        {/* Section: The Solution */}
        <article className="prose prose-lg prose-green max-w-none">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-primary mb-10 flex items-center gap-4">
            The Proposal <span className="h-px flex-1 bg-primary/10" />
          </h2>
          <div className="space-y-10">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {idea.solution}
            </p>

            <div className="grid gap-4 mt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Key Features</h3>
              {idea.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-bold tracking-tight text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Section: Environmental Impact */}
        <article className="prose prose-lg prose-green max-w-none">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-primary mb-10 flex items-center gap-4">
            Environmental Impact <span className="h-px flex-1 bg-primary/10" />
          </h2>
          <div className="grid gap-8">
            {idea.impact.map((item) => {
              const ImpactIcon = item.icon;
              return (
                <div key={item.label} className="group relative p-8 rounded-[2rem] bg-card border border-border/60 shadow-soft hover:shadow-card transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <ImpactIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black text-primary tracking-tighter">{item.value}</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{item.label}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        {/* Final CTA */}
        <aside className="text-center py-16 px-8 rounded-[3rem] bg-accent/30 border border-border/50 shadow-soft">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-8">
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic">
            Want to lead this change?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg max-w-md mx-auto">
            This idea is open for anyone to build. Pitch your take or join a team to make it real.
          </p>
          <Button size="lg" className="h-16 px-12 rounded-full text-xl shadow-glow group font-display" asChild>
            <Link to="/contact">
              Start Building
              <TrendingUp className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </aside>

        {/* Improved Footer Navigation */}
        <nav className="pt-16 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-8 opacity-70 hover:opacity-100 transition-opacity">
          <div className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Keep Browsing</div>
          <Link to={`/ideas/${next.slug}`} className="group flex items-center gap-6 text-right transition-all">
            <div>
              <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1">Next Up</div>
              <div className="text-xl font-bold tracking-tight text-foreground/80 group-hover:text-primary transition-colors">{next.title}</div>
            </div>
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
            </div>
          </Link>
        </nav>
      </main>
    </div>
  );
};

export default IdeaDetailPage;
