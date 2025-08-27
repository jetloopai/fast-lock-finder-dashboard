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
import StorageUnits from "./pages/services/StorageUnits";
import Mailboxes from "./pages/services/Mailboxes";
import FileCabinets from "./pages/services/FileCabinets";
import Padlocks from "./pages/services/Padlocks";
import ScrollToTop from "./components/common/ScrollToTop";

// Admin Pages
import Auth from "./pages/Auth";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Locksmiths from "./pages/admin/Locksmiths";
import Leads from "./pages/admin/Leads";
import Jobs from "./pages/admin/Jobs";
import DispatchCodes from "./pages/admin/DispatchCodes";
import CallLogs from "./pages/admin/CallLogs";

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
          <Route path="/services/storage-units" element={<StorageUnits />} />
          <Route path="/services/mailboxes" element={<Mailboxes />} />
          <Route path="/services/file-cabinets" element={<FileCabinets />} />
          <Route path="/services/padlocks" element={<Padlocks />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:citySlug" element={<CityPage />} />
            <Route path="/about" element={<About />} />
            
            {/* Admin Routes */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
            <Route path="/admin/locksmiths" element={<AdminLayout><Locksmiths /></AdminLayout>} />
            <Route path="/admin/leads" element={<AdminLayout><Leads /></AdminLayout>} />
            <Route path="/admin/jobs" element={<AdminLayout><Jobs /></AdminLayout>} />
            <Route path="/admin/dispatch-codes" element={<AdminLayout><DispatchCodes /></AdminLayout>} />
            <Route path="/admin/call-logs" element={<AdminLayout><CallLogs /></AdminLayout>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
