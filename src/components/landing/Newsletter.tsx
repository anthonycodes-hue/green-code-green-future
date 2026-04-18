import { useState } from "react";
import { Mail, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const emailSchema = z
  .string()
  .trim()
  .nonempty({ message: "Please enter your email" })
  .email({ message: "Please enter a valid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Hmm, that doesn't look right",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Local-only subscription stub — replace with backend later
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubscribed(true);
    setEmail("");
    toast({
      title: "You're on the list 🌱",
      description: "We'll send you fresh eco app ideas — no spam, ever.",
    });
  };

  return (
    <section id="newsletter" className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
          {/* Decorative gradient blobs */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-14 items-center">
            {/* Left: Copy */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                Stay in the loop
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                New eco app ideas,
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  straight to your inbox.
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed max-w-md">
                Subscribe to get fresh project briefs, contributor spotlights, and ways to help nature — once a month, no fluff.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {["Monthly drop of new ideas", "Beginner-friendly project picks", "Unsubscribe anytime"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="animate-fade-in [animation-delay:120ms]">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur p-6 md:p-8 shadow-soft"
              >
                <label htmlFor="newsletter-email" className="text-sm font-medium">
                  Email address
                </label>
                <div className="mt-3 flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="you@planet.earth"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={255}
                      className="pl-9 h-12 rounded-xl"
                      aria-label="Email address"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="h-12 rounded-xl px-6 group"
                  >
                    {loading ? (
                      "Subscribing…"
                    ) : (
                      <>
                        Subscribe
                        <Send className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  By subscribing you agree to receive occasional emails from GreenCode. We respect your inbox.
                </p>

                {subscribed && (
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary animate-fade-in">
                    <CheckCircle2 className="h-4 w-4" />
                    You're subscribed — welcome to the community!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
