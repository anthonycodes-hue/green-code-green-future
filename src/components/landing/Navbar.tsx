import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/ideas", label: "Ideas" },
  { to: "/about", label: "About" },
  { to: "/benefits", label: "Benefits" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // On non-home pages, navbar always uses light style (since no hero behind it)
  const useLight = !isHome || scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="container mt-4">
        <nav
          className={cn(
            "rounded-2xl px-5 py-3 flex items-center justify-between shadow-soft transition-colors duration-300",
            useLight ? "glass-light" : "glass",
          )}
        >
          <Link to="/" className={cn("flex items-center gap-2", useLight ? "text-foreground" : "text-white")}>
            <span className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display font-bold text-lg">GreenCode</span>
          </Link>

          <ul
            className={cn(
              "hidden md:flex items-center gap-8 text-sm font-medium",
              useLight ? "text-muted-foreground" : "text-white/90",
            )}
          >
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "transition-colors hover:text-primary",
                      useLight ? "" : "hover:text-white",
                      isActive && (useLight ? "text-primary" : "text-white"),
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="default"
              size="sm"
              className={cn(
                "hidden sm:inline-flex rounded-full font-semibold",
                useLight
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90",
              )}
            >
              <Link to="/contact">Get Started</Link>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className={cn(
                "md:hidden h-9 w-9 rounded-lg flex items-center justify-center",
                useLight ? "text-foreground" : "text-white",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden glass-light mt-2 rounded-2xl p-4 shadow-soft animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      cn(
                        "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive ? "bg-accent text-primary" : "text-foreground hover:bg-accent/60",
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full rounded-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
