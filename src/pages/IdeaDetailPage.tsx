import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertCircle, Lightbulb, CheckCircle2, Sparkles } from "lucide-react";
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
        <p className="text-muted-foreground mb-8">We couldn't find that concept in our catalog.</p>
        <Button asChild>
          <Link to="/ideas">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Ideas
          </Link>
        </Button>
      </section>
    );
  }

  const Icon = idea.icon;
  const currentIndex = ideas.findIndex((i) => i.slug === idea.slug);
  const next = ideas[(currentIndex + 1) % ideas.length];
  const prev = ideas[(currentIndex - 1 + ideas.length) % ideas.length];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <img
          src={ideaHero}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-foreground/40" />

        <div className="container relative z-10">
          <Link
            to="/ideas"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors animate-fade-in"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all ideas
          </Link>

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "80ms", animationFillMode: "backwards" }}>
              <span className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <Icon className="h-7 w-7 text-white" />
              </span>
              <span className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <Sparkles className="h-3 w-3" /> {idea.category}
              </span>
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] text-balance animate-fade-in"
              style={{ animationDelay: "160ms", animationFillMode: "backwards" }}
            >
              {idea.title}
            </h1>
            <p
              className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-in"
              style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
            >
              {idea.desc}
            </p>

            <div
              className="mt-10 inline-flex items-center gap-4 glass rounded-2xl px-6 py-4 animate-fade-in"
              style={{ animationDelay: "320ms", animationFillMode: "backwards" }}
            >
              <div>
                <div className="font-display text-3xl font-extrabold text-white leading-none">{idea.stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{idea.stat.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container grid lg:grid-cols-2 gap-6 lg:gap-10">
          <article
            className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 shadow-soft animate-fade-in"
            style={{ animationFillMode: "backwards" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">The Problem</h2>
            </div>
            <p className="text-xl leading-relaxed text-foreground/90">{idea.problem}</p>
          </article>

          <article
            className="rounded-3xl border border-primary/20 bg-gradient-to-br from-accent/60 to-card p-8 md:p-10 shadow-soft animate-fade-in"
            style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-primary" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Our Solution</h2>
            </div>
            <p className="text-xl leading-relaxed text-foreground/90">{idea.solution}</p>
          </article>
        </div>
      </section>

      {/* Features */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Capabilities</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">Key features that make it work.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {idea.features.map((feature, i) => (
              <div
                key={feature}
                className="group rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
              >
                <span className="inline-flex h-10 w-10 rounded-xl bg-accent items-center justify-center mb-4 group-hover:bg-gradient-brand group-hover:shadow-glow transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </span>
                <h3 className="text-base font-semibold leading-snug">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next nav */}
      <section className="pb-24">
        <div className="container">
          <div className="rounded-3xl border border-border/60 bg-gradient-soft p-6 md:p-8 grid sm:grid-cols-2 gap-4">
            <Link
              to={`/ideas/${prev.slug}`}
              className="group flex items-center gap-4 rounded-2xl bg-card p-5 border border-border/60 hover:shadow-card transition-all"
            >
              <ArrowLeft className="h-5 w-5 text-primary shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Previous</div>
                <div className="font-semibold truncate">{prev.title}</div>
              </div>
            </Link>
            <Link
              to={`/ideas/${next.slug}`}
              className="group flex items-center gap-4 rounded-2xl bg-card p-5 border border-border/60 hover:shadow-card transition-all sm:text-right sm:flex-row-reverse"
            >
              <ArrowRight className="h-5 w-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Next</div>
                <div className="font-semibold truncate">{next.title}</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IdeaDetailPage;
