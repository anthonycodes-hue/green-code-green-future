import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "./components/layout/SiteLayout";
import { Leaf } from "lucide-react";

// Lazy imports
const Index = lazy(() => import("./pages/Index"));
const IdeasPage = lazy(() => import("./pages/IdeasPage"));
const IdeaDetailPage = lazy(() => import("./pages/IdeaDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BenefitsPage = lazy(() => import("./pages/BenefitsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={

          <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060B08] transition-all duration-1000 ease-in-out pointer-events-none`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse rounded-full" />
              <Leaf className="h-16 w-16 text-primary-glow animate-bounce relative z-10" />
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="text-primary-glow font-display font-bold tracking-[0.2em] uppercase text-xs animate-pulse">
                Gathering Nature's Pixels
              </span>
              <div className="h-0.5 w-24 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary-glow animate-[shimmer_2s_infinite] w-full" />
              </div>
            </div>
          </div>
        }>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/ideas" element={<IdeasPage />} />
              <Route path="/ideas/:slug" element={<IdeaDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/benefits" element={<BenefitsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;