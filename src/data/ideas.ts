import {
  Recycle, Sprout, Sun, Bike, Droplets, TreePine,
  Trash2, Wind, ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export type Idea = {
  slug: string;
  icon: LucideIcon;
  title: string;
  category: string;
  desc: string;
  problem: string;
  solution: string;
  features: string[];
  stat: { value: string; label: string };
  gradient: string;
};

export const ideas: Idea[] = [
  {
    slug: "recycling-guide",
    icon: Recycle,
    title: "Recycling Guide App",
    category: "Waste",
    desc: "Scan any product and learn how to properly recycle it.",
    problem: "Most people throw recyclables in the wrong bin, causing 25% of recycling to end up in landfills.",
    solution: "An AI-powered scanner that instantly identifies materials and gives location-specific recycling instructions.",
    features: ["Barcode & image recognition", "Local recycling rules database", "Gamified weekly challenges"],
    stat: { value: "25%", label: "Recycling diverted from landfill" },
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    slug: "urban-garden-planner",
    icon: Sprout,
    title: "Urban Garden Planner",
    category: "Food",
    desc: "Grow food in tiny spaces with smart, AI-led guidance.",
    problem: "City dwellers want to grow food but lack space, time, and horticultural knowledge.",
    solution: "Personalized garden plans for balconies and windowsills with daily care reminders.",
    features: ["Space-aware plant suggestions", "Smart watering schedule", "Harvest yield predictions"],
    stat: { value: "10×", label: "More food per square meter" },
    gradient: "from-lime-500/20 to-green-500/10",
  },
  {
    slug: "solar-yield-tracker",
    icon: Sun,
    title: "Solar Yield Tracker",
    category: "Energy",
    desc: "Predict and optimize your solar production in real-time.",
    problem: "Solar panel owners rarely know if their system is underperforming or how to improve output.",
    solution: "Real-time monitoring with weather-based forecasts and actionable optimization tips.",
    features: ["Live production dashboard", "Weather-adjusted forecasts", "Anomaly detection alerts"],
    stat: { value: "+18%", label: "Avg. yield improvement" },
    gradient: "from-amber-400/20 to-yellow-500/10",
  },
  {
    slug: "eco-commute",
    icon: Bike,
    title: "Eco Commute",
    category: "Mobility",
    desc: "Plan greener routes that minimize your carbon footprint.",
    problem: "Standard map apps optimize for speed, ignoring the carbon cost of every trip.",
    solution: "Multimodal routing that surfaces low-carbon alternatives and tracks emissions saved.",
    features: ["Carbon-aware routing", "Multimodal trip planning", "Monthly impact reports"],
    stat: { value: "−40%", label: "Commute emissions" },
    gradient: "from-sky-500/20 to-emerald-500/10",
  },
  {
    slug: "water-saver",
    icon: Droplets,
    title: "Water Saver",
    category: "Water",
    desc: "Track household water usage and discover conservation tips.",
    problem: "Households waste an average of 30 gallons of water daily without realizing it.",
    solution: "Smart meter integration with leak detection and behavior-based saving tips.",
    features: ["Leak alerts in real-time", "Per-fixture usage breakdown", "Family saving challenges"],
    stat: { value: "30 gal", label: "Wasted daily per home" },
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    slug: "reforest-together",
    icon: TreePine,
    title: "Reforest Together",
    category: "Nature",
    desc: "Plant a tree with every milestone you complete.",
    problem: "People want to offset their footprint but don't trust opaque carbon credit programs.",
    solution: "Transparent tree-planting tied to personal milestones with verified GPS-tracked forests.",
    features: ["Verified planting partners", "GPS-tracked forest map", "Shareable impact badges"],
    stat: { value: "1M+", label: "Trees pledged" },
    gradient: "from-green-600/20 to-emerald-700/10",
  },
  {
    slug: "zero-waste-coach",
    icon: Trash2,
    title: "Zero Waste Coach",
    category: "Waste",
    desc: "Build sustainable habits one weekly challenge at a time.",
    problem: "Going zero-waste feels overwhelming and unattainable for most beginners.",
    solution: "Bite-sized weekly challenges that build sustainable habits without burnout.",
    features: ["Personalized habit roadmap", "Community accountability", "Waste audit tracker"],
    stat: { value: "12 wk", label: "To form lasting habits" },
    gradient: "from-stone-400/20 to-emerald-500/10",
  },
  {
    slug: "air-quality-hub",
    icon: Wind,
    title: "Air Quality Hub",
    category: "Health",
    desc: "Hyperlocal air data so you can breathe smarter.",
    problem: "Air quality varies block by block, but most apps only show city-wide averages.",
    solution: "Crowdsourced sensor network delivering street-level air quality forecasts.",
    features: ["Hyperlocal AQI map", "Health-based activity advice", "Pollution source alerts"],
    stat: { value: "50m", label: "Sensor resolution" },
    gradient: "from-sky-400/20 to-indigo-500/10",
  },
  {
    slug: "conscious-cart",
    icon: ShoppingBag,
    title: "Conscious Cart",
    category: "Lifestyle",
    desc: "Discover ethical alternatives while you shop online.",
    problem: "Shoppers want sustainable products but can't easily verify brand ethics at checkout.",
    solution: "A browser extension that scores products and suggests greener alternatives instantly.",
    features: ["Ethical brand scoring", "Greener alternative finder", "Carbon-cost at checkout"],
    stat: { value: "A–F", label: "Ethical brand grade" },
    gradient: "from-rose-400/20 to-emerald-500/10",
  },
];

export const getIdea = (slug: string) => ideas.find((i) => i.slug === slug);
