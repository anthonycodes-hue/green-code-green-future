import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-display font-bold">Green Code</span>
        </div>

        <ul className="flex items-center gap-8 text-sm text-muted-foreground">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
        </ul>

        <p className="text-xs text-muted-foreground">© 2025 Green Code. Built for the planet.</p>
      </div>
    </footer>
  );
};

export default Footer;
