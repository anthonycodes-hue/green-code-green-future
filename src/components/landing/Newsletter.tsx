import { useState } from "react";
import { Mail, Send, Sparkles, CheckCircle2, Leaf } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

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
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubscribed(true);
    setEmail("");
    toast({
      title: "You're on the list 🌱",
      description: "We'll send you fresh eco app ideas soon.",
    });
  };

  return (
    <section id="newsletter" className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="">
        <div className="">
          <div className="relative overflow-hidden bg-green-950 border border-white/10 shadow-glow p-8 md:p-16 lg:p-20">
            {/* Animated Glow blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow [animation-delay:2s]" />

            <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-glow text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  <Sparkles className="h-3.5 w-3.5" /> Stay Inspired
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Fresh eco-app <br />
                  <span className="text-primary-glow italic">briefs monthly.</span>
                </h2>
                <p className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
                  Join a community of 500+ builders receiving curated project ideas, open-source kits, and planet-saving opportunities.
                </p>

                <div className="mt-10 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-green-900 bg-green-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                      </div>
                    ))}
                    <div className="h-10 w-10 rounded-full border-2 border-green-900 bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                      +12
                    </div>
                  </div>
                  <span className="text-sm text-white/50 font-medium">Joined by developers worldwide</span>
                </div>
              </div>

              <div className="animate-fade-in [animation-delay:200ms]">
                <form
                  onSubmit={handleSubmit}
                  className="glass p-8 md:p-10 rounded-[2rem] border-white/10 shadow-2xl space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="newsletter-email" className="text-sm font-bold text-white/80 ml-1 uppercase tracking-wider">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="coder@earth.org"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 pl-12 rounded-xl focus:ring-primary-glow focus:border-primary-glow"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading || subscribed}
                    className={cn(
                      "w-full h-14 rounded-xl text-lg font-bold transition-all duration-300 shadow-glow",
                      subscribed ? "bg-green-600 hover:bg-green-600" : "bg-primary-glow hover:bg-white hover:text-primary-glow"
                    )}
                  >
                    {loading ? (
                      "Saving your spot..."
                    ) : subscribed ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" /> Subscribed
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Get the briefs <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                  <p className="text-center text-xs text-white/30 pt-2 font-medium">
                    No spam. Unsubscribe anytime with one click.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
