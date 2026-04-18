import { Leaf, Github, Twitter, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/ideas", label: "Ideas" },
  { to: "/about", label: "About" },
  { to: "/benefits", label: "Benefits" },
  { to: "/contact", label: "Contact" },
];

const resourceLinks = [
  { to: "/ideas", label: "Browse all ideas" },
  { to: "/benefits", label: "Why contribute" },
  { to: "/contact", label: "Get in touch" },
  { to: "/#newsletter", label: "Newsletter" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-gradient-soft overflow-hidden">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative container py-16 md:py-20">
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <span className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display font-bold text-xl">GreenCode</span>
            </Link>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              A home for developers, CS &amp; IT students, and curious makers to pick eco app ideas, contribute, and build a happier Earth — one project at a time.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-xl border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground/80">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground/80">
              Resources
            </h3>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-14 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GreenCode. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            Made with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> by students &amp; devs, for the Earth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
