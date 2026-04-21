import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartHere from "./pages/StartHere";
import About from "./pages/About";
import SCPMethod from "./pages/SCPMethod";
import Services from "./pages/Services";
import TheStudio from "./pages/TheStudio";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import SCPFoundation from "./pages/SCPFoundation";
import SCPControl from "./pages/SCPControl";
import SCPPerformance from "./pages/SCPPerformance";
import SCPReform from "./pages/SCPReform";
import PrivateTraining from "./pages/PrivateTraining";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/about" element={<About />} />
          <Route path="/scp-method" element={<SCPMethod />} />
          <Route path="/services" element={<Services />} />
          <Route path="/the-studio" element={<TheStudio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scp-foundation" element={<SCPFoundation />} />
          <Route path="/scp-control" element={<SCPControl />} />
          <Route path="/scp-performance" element={<SCPPerformance />} />
          <Route path="/scp-reform" element={<SCPReform />} />
          <Route path="/private-training" element={<PrivateTraining />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
