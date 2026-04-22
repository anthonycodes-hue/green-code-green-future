import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "./components/layout/SiteLayout";

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
        <Suspense fallback={<div>Loading...</div>}>
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