import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { ideas } from "@/data/ideas";
import { Input } from "@/components/ui/input";

const categories = ["All", ...Array.from(new Set(ideas.map((i) => i.category)))];

const IdeasPage = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return ideas.filter((i) => {
      const inCat = active === "All" || i.category === active;
      const q = query.trim().toLowerCase();
      const inQuery =
        !q ||
        i.title.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [active, query]);

  return (
    <>
      <PageHero
        eyebrow="Open Project Catalog"
        title={
          <>
            Pick an idea. Help <span className="text-primary">nature</span>. Grow as a builder.
          </>
        }
        description="A growing library of eco app ideas — open for students, devs, and IT learners to fork, contribute, or launch as their own."
      >
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ideas to contribute…"
            className="pl-11 h-12 rounded-full bg-card border-border/60 shadow-soft"
          />
        </div>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container">
          {/* Category chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-soft"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No ideas match your search — try a different keyword.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((idea, i) => {
                const Icon = idea.icon;
                return (
                  <Link
                    key={idea.slug}
                    to={`/ideas/${idea.slug}`}
                    className="group relative rounded-2xl bg-card p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms`, animationFillMode: "backwards" }}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${idea.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    <div className="relative">
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
                        See the full project <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default IdeasPage;
