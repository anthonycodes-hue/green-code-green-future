import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertCircle, Lightbulb, CheckCircle2, Sparkles, Leaf, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getIdea, ideas } from "@/data/ideas";
import ideaHero from "@/assets/idea-hero.jpg";
import { cn } from "@/lib/utils";

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

  const Icon = idea.icon;
  const currentIndex = ideas.findIndex((i) => i.slug === idea.slug);
  const next = ideas[(currentIndex + 1) % ideas.length];

  return (
    <div className="bg-background min-h-screen">
      {/* Cinematic Cover Header */}
      <header className="relative h-[60vh] md:h-[75vh] flex items-end overflow-hidden">
        <img
          src={ideaHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="container relative z-10 pb-16 md:pb-24">
          <Link
            to="/ideas"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-all animate-fade-in"
          >
            <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back to Library</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-glow text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" /> Project {idea.category}
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter animate-fade-in [animation-delay:100ms]">
              {idea.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container max-w-4xl py-20 md:py-32">
        {/* Intro Summary */}
        <div className="relative mb-20 md:mb-32">
          <div className="absolute -left-12 top-0 h-full w-1 bg-gradient-vertical hidden md:block opacity-30" />
          <p className="text-2xl md:text-4xl font-medium text-foreground leading-[1.3] tracking-tight animate-fade-in">
             "{idea.desc}"
          </p>
          
          <div className="mt-10 flex items-center gap-6 animate-fade-in [animation-delay:200ms]">
            <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-glow">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{idea.stat.label}</div>
              <div className="text-xl font-black text-primary uppercase">{idea.stat.value} Level</div>
            </div>
          </div>
        </div>

        {/* Section: The Crisis */}
        <section className="mb-24 md:mb-40 group">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-border group-hover:bg-destructive/20 transition-colors" />
            <span className="text-xs font-bold text-destructive uppercase tracking-[0.4em]">The Critical Problem</span>
            <span className="h-px flex-1 bg-border group-hover:bg-destructive/20 transition-colors" />
          </div>
          
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                Nature is struggling to heal itself.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {idea.problem}
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="glass p-8 rounded-[2.5rem] bg-destructive/5 border-destructive/10">
                <AlertCircle className="h-10 w-10 text-destructive mb-6" />
                <div className="text-xs font-bold text-destructive uppercase tracking-widest mb-2">Warning</div>
                <p className="text-sm font-medium leading-relaxed italic">
                   Current systems are failing to address this gap at the household level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Innovation */}
        <section className="mb-24 md:mb-40 group">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-border group-hover:bg-primary/20 transition-colors" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.4em]">The Digital Solution</span>
            <span className="h-px flex-1 bg-border group-hover:bg-primary/20 transition-colors" />
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
              A smarter way to foster <span className="italic text-primary">environmental safe</span> habits.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              {idea.solution}
            </p>

            <div className="grid gap-4">
              {idea.features.map((feature, i) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-6 p-6 rounded-3xl bg-muted/50 border border-border/50 hover:bg-white hover:shadow-soft transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-bold tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Global Impact */}
        <section className="mb-24 md:mb-40">
           <div className="rounded-[3rem] bg-green-950 p-8 md:p-16 text-white relative overflow-hidden shadow-glow-intense">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/20 rounded-full blur-[100px] animate-pulse" />
             
             <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-glow text-xs font-bold uppercase tracking-[0.2em] mb-10">
                 <Globe className="h-4 w-4" /> Global Impact Ledger
               </div>
               
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16">
                 Measuring our return to <span className="text-primary-glow">the Earth.</span>
               </h2>

               <div className="grid md:grid-cols-3 gap-8">
                 {idea.impact.map((item, i) => (
                   <div key={item.label} className="space-y-4">
                     <div className="text-5xl md:text-7xl font-black text-primary-glow leading-none tracking-tighter">{item.value}</div>
                     <div className="text-sm font-bold uppercase tracking-widest text-white/60">{item.label}</div>
                     <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </section>

        {/* Call to action */}
        <section className="text-center py-20 border-t border-border">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent mb-10 shadow-soft">
            <Leaf className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic">
            Ready to lead this change?
          </h2>
          <Button size="lg" className="h-16 px-12 rounded-full text-xl shadow-glow group" asChild>
            <Link to="/contact">
               Start Building Now
               <TrendingUp className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </section>

        {/* Footer Navigation */}
        <nav className="mt-32 pt-16 border-t border-border flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Keep Exploring</div>
           <Link to={`/ideas/${next.slug}`} className="group flex items-center gap-6 text-right max-w-sm">
             <div>
               <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Next Project</div>
               <div className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{next.title}</div>
             </div>
             <div className="h-16 w-16 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
               <ArrowRight className="h-6 w-6 text-foreground group-hover:text-white transition-colors" />
             </div>
           </Link>
        </nav>
      </main>
    </div>
  );
};

export default IdeaDetailPage;
