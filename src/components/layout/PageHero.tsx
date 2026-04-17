import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
};

const PageHero = ({ eyebrow, title, description, children, align = "center" }: Props) => {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden bg-gradient-soft">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary-glow/10 blur-3xl" />

      <div className={cn("container relative", align === "center" && "text-center")}>
        {eyebrow && (
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] animate-fade-in">
            {eyebrow}
          </span>
        )}
        <h1
          className={cn(
            "mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-balance animate-fade-in",
            align === "center" && "max-w-4xl mx-auto",
          )}
          style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in",
              align === "center" && "max-w-2xl mx-auto",
            )}
            style={{ animationDelay: "160ms", animationFillMode: "backwards" }}
          >
            {description}
          </p>
        )}
        {children && (
          <div
            className="mt-8 animate-fade-in"
            style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
