import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import CityPage from "./pages/CityPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Emergency from "./pages/services/Emergency";
import Residential from "./pages/services/Residential";
import Commercial from "./pages/services/Commercial";
import Automotive from "./pages/services/Automotive";
import Rekeying from "./pages/services/Rekeying";
import SmartLocks from "./pages/services/SmartLocks";
import KeyDuplication from "./pages/services/KeyDuplication";
import Safes from "./pages/services/Safes";
import ScrollToTop from "./components/common/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
          <Route path="/services/emergency" element={<Emergency />} />
          <Route path="/services/residential" element={<Residential />} />
          <Route path="/services/commercial" element={<Commercial />} />
          <Route path="/services/automotive" element={<Automotive />} />
          <Route path="/services/rekeying" element={<Rekeying />} />
          <Route path="/services/smart-locks" element={<SmartLocks />} />
          <Route path="/services/key-duplication" element={<KeyDuplication />} />
          <Route path="/services/safes" element={<Safes />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:citySlug" element={<CityPage />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
