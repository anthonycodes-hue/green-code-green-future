import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-display font-bold">Green Code</span>
        </Link>

        <ul className="flex items-center gap-8 text-sm text-muted-foreground">
          <li><Link to="/ideas" className="hover:text-primary transition-colors">Ideas</Link></li>
          <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link to="/benefits" className="hover:text-primary transition-colors">Benefits</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>

        <p className="text-xs text-muted-foreground">© 2025 Green Code. Built for the planet.</p>
      </div>
    </footer>
  );
};

export default Footer;
