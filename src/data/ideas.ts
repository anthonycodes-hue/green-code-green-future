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
    desc: "Help neighbors recycle right by scanning any product.",
    problem: "Most people throw recyclables in the wrong bin, sending huge amounts of reusable material straight to landfills and polluting nature.",
    solution: "A friendly mobile app that scans a product and instantly explains how to recycle it correctly in your town — perfect first project for a student team.",
    features: ["Barcode & image recognition", "Local recycling rules database", "Gamified weekly challenges"],
    stat: { value: "Beginner", label: "Great for first-year CS students" },
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    slug: "urban-garden-planner",
    icon: Sprout,
    title: "Urban Garden Planner",
    category: "Food",
    desc: "Bring greenery back to cities, one balcony at a time.",
    problem: "City life disconnects people from nature, and many would grow food at home if they only knew how to start.",
    solution: "A planner app that turns any balcony or windowsill into a small green oasis — a wonderful project to learn APIs, scheduling, and UX.",
    features: ["Space-aware plant suggestions", "Smart watering schedule", "Harvest yield predictions"],
    stat: { value: "Intermediate", label: "Practice React + light AI" },
    gradient: "from-lime-500/20 to-green-500/10",
  },
  {
    slug: "solar-yield-tracker",
    icon: Sun,
    title: "Solar Yield Tracker",
    category: "Energy",
    desc: "Help families get the most out of clean solar energy.",
    problem: "Many solar panel owners have no idea how much clean energy they produce or how to improve it — so the planet misses out on greener power.",
    solution: "A dashboard that shows real-time solar production with friendly tips — a fantastic IoT + data project for IT students.",
    features: ["Live production dashboard", "Weather-adjusted forecasts", "Anomaly detection alerts"],
    stat: { value: "Intermediate", label: "Learn data viz & APIs" },
    gradient: "from-amber-400/20 to-yellow-500/10",
  },
  {
    slug: "eco-commute",
    icon: Bike,
    title: "Eco Commute",
    category: "Mobility",
    desc: "Make every trip a little kinder to the air we breathe.",
    problem: "Standard map apps optimize for speed, ignoring the carbon cost of every trip and the toll on our air quality.",
    solution: "A routing app that surfaces walking, cycling, and transit options — and shows the CO₂ you saved. Great for learning maps APIs.",
    features: ["Carbon-aware routing", "Multimodal trip planning", "Monthly impact reports"],
    stat: { value: "Intermediate", label: "Maps API + mobile-first" },
    gradient: "from-sky-500/20 to-emerald-500/10",
  },
  {
    slug: "water-saver",
    icon: Droplets,
    title: "Water Saver",
    category: "Water",
    desc: "Protect our most precious resource at home.",
    problem: "Households quietly waste thousands of liters every year through leaks and habits — water our rivers and ecosystems desperately need.",
    solution: "A simple tracker that helps families notice leaks and adopt small saving habits — a perfect beginner full-stack project.",
    features: ["Leak alerts in real-time", "Per-fixture usage breakdown", "Family saving challenges"],
    stat: { value: "Beginner", label: "CRUD + notifications" },
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    slug: "reforest-together",
    icon: TreePine,
    title: "Reforest Together",
    category: "Nature",
    desc: "Turn everyday wins into real trees in real forests.",
    problem: "People want to give back to nature, but planting a tree often feels distant or untrustworthy.",
    solution: "An app where personal milestones translate into verified tree planting on a live map — a meaningful capstone or hackathon idea.",
    features: ["Verified planting partners", "GPS-tracked forest map", "Shareable impact badges"],
    stat: { value: "Advanced", label: "Maps, auth, partner APIs" },
    gradient: "from-green-600/20 to-emerald-700/10",
  },
  {
    slug: "zero-waste-coach",
    icon: Trash2,
    title: "Zero Waste Coach",
    category: "Waste",
    desc: "Build greener habits that stick, one tiny step at a time.",
    problem: "Living waste-free feels overwhelming, so most people give up before they ever start helping the planet.",
    solution: "A gentle coach app with bite-sized weekly challenges — a perfect community-driven project for a student team.",
    features: ["Personalized habit roadmap", "Community accountability", "Waste audit tracker"],
    stat: { value: "Beginner", label: "Great UX & gamification" },
    gradient: "from-stone-400/20 to-emerald-500/10",
  },
  {
    slug: "air-quality-hub",
    icon: Wind,
    title: "Air Quality Hub",
    category: "Health",
    desc: "Help families and kids breathe a little safer.",
    problem: "Air quality changes street by street, but most apps only show city-wide averages — leaving vulnerable people in the dark.",
    solution: "A community-powered air quality map that shares hyperlocal readings — a powerful open-data project for CS students.",
    features: ["Hyperlocal AQI map", "Health-based activity advice", "Pollution source alerts"],
    stat: { value: "Advanced", label: "Open data + sensors" },
    gradient: "from-sky-400/20 to-indigo-500/10",
  },
  {
    slug: "conscious-cart",
    icon: ShoppingBag,
    title: "Conscious Cart",
    category: "Lifestyle",
    desc: "Make every online purchase a vote for the planet.",
    problem: "Shoppers want to support ethical, eco-friendly brands but rarely have the time to research at checkout.",
    solution: "A browser extension that scores products and suggests greener alternatives — a fun web project to learn extensions and APIs.",
    features: ["Ethical brand scoring", "Greener alternative finder", "Carbon-cost at checkout"],
    stat: { value: "Intermediate", label: "Browser extension basics" },
    gradient: "from-rose-400/20 to-emerald-500/10",
  },
];

export const getIdea = (slug: string) => ideas.find((i) => i.slug === slug);
