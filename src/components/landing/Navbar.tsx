import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="container mt-4">
        <nav className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-soft">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display font-bold text-lg">GreenCode</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <li><a href="#ideas" className="hover:text-white transition-colors">Ideas</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
          </ul>

          <Button variant="default" size="sm" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
