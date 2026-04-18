import { useState } from "react";
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import PageHero from "@/components/layout/PageHero";
import contactImage from "@/assets/contact-leaf.jpg";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "Message sent", description: "We'll get back to you within 48 hours." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Say Hello"
        title={
          <>
            Want to <span className="text-primary">contribute</span>? Let's talk.
          </>
        }
        description="Pitch an idea, ask to join a project, or just share what you're learning. Students, devs, and the eco-curious — you're all welcome here."
      />

      <section className="pb-24 md:pb-32">
        <div className="container grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: contact info + image */}
          <aside className="lg:col-span-2 space-y-6 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={contactImage}
                alt="Green leaf with morning dew drops"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display text-xl font-semibold leading-tight">
                  "Never doubt that a small group of thoughtful students can change the world."
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-4 rounded-2xl bg-card p-5 border border-border/60 shadow-soft">
                <span className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:hello@greencode.eco" className="font-medium hover:text-primary transition-colors">
                    hello@greencode.eco
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card p-5 border border-border/60 shadow-soft">
                <span className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Where</div>
                  <p className="font-medium">Open & remote — anywhere on Earth 🌍</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card p-5 border border-border/60 shadow-soft">
                <span className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Response time</div>
                  <p className="font-medium">Within 48 hours</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: form */}
          <div
            className="lg:col-span-3 rounded-3xl bg-card border border-border/60 shadow-card p-8 md:p-10 animate-fade-in"
            style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
          >
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow">
                  <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Thanks for reaching out!</h2>
                <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                  Your message is in our inbox. We'll be in touch soon — usually within 48 hours.
                </p>
                <Button variant="outline" className="mt-8 rounded-full" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Jane Appleseed" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">I'd like to…</Label>
                  <Input id="subject" name="subject" required placeholder="Contribute to an idea / share my own / just say hi" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us a bit about you</Label>
                  <Textarea id="message" name="message" required rows={6} placeholder="Are you a student, a developer, just curious? What eco topic excites you?" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full" disabled={loading}>
                  {loading ? "Sending…" : (<>Send message <Send className="h-4 w-4 ml-1" /></>)}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By sending, you agree to our friendly, no-spam policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
