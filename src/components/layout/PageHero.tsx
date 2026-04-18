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
    <section className="relative pt-28 md:pt-48 pb-16 md:pb-20 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://media.gettyimages.com/id/1325079217/video/super-raindrops-falling-on-green-plant.jpg?s=640x640&k=20&c=PTyQ4eN6vJvU9S3NkgD5HUzNxz7N0UtomA4yieiBeSE="
        alt="Raindrops on plant"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Darkened Overlays for readability */}

      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl opacity-30" />

      <div className={cn("container relative z-10", align === "center" && "text-center")}>
        {eyebrow && (
          <span className="inline-block text-xs font-bold text-primary-glow uppercase tracking-[0.3em] animate-fade-in mb-4">
            {eyebrow}
          </span>
        )}
        <h1
          className={cn(
            "font-display text-4xl sm:text-5xl md:text-7xl font-black leading-[1] text-white tracking-tighter animate-fade-in",
            align === "center" && "max-w-4xl mx-auto",
          )}
          style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-8 text-lg md:text-2xl text-white/80 font-medium leading-relaxed animate-fade-in",
              align === "center" && "max-w-2xl mx-auto",
            )}
            style={{ animationDelay: "160ms", animationFillMode: "backwards" }}
          >
            {description}
          </p>
        )}
        {children && (
          <div
            className="mt-10 animate-fade-in"
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
