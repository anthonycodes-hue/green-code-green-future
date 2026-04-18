import { Check } from "lucide-react";
import aboutImage from "@/assets/about-eco.jpg";

const points = [
  "Open ideas any student or developer can pick up and build",
  "A friendly community of CS, IT, and self-taught makers",
  "Every project aimed at helping nature and people thrive",
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-brand rounded-[2rem] opacity-20 blur-2xl" />
          <img
            src={aboutImage}
            alt="Hands holding a small green seedling sprouting from soil"
            width={1280}
            height={1280}
            loading="lazy"
            className="relative rounded-3xl shadow-card w-full h-auto object-cover aspect-square"
          />
        </div>

        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-balance leading-tight">
            Apps built by students and developers, made to help nature breathe again.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We curate eco-friendly app ideas and invite the next generation of devs, CS &amp; IT
            students, and curious tinkerers to bring them to life — together, one commit at a time.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
