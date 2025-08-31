import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import ScrollToTop from './ScrollToTop';
// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Careers = lazy(() => import("./pages/Careers"));
const JobDetail = lazy(() => import("./pages/JobDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BusinessIntelligence = lazy(() => import("./pages/services/BusinessIntelligence"));
const DataEngineering = lazy(() => import("./pages/services/DataEngineering"));
const CloudMigration = lazy(() => import("./pages/services/CloudMigration"));
const DeltekCostpoint = lazy(() => import("./pages/services/DeltekCostpoint"));
const YardiProperty = lazy(() => import("./pages/services/YardiProperty"));
const WebSiteDevelopment = lazy(() => import("./pages/services/WebSiteDevelopment"));
const UkAccounting = lazy(() => import("./pages/services/UkAccounting"));
const YardiResidential = lazy(() => import("./pages/services/YardiResidential"));
const YardiCommercial = lazy(() => import("./pages/services/YardiCommercial"));

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <ScrollToTop />
      <main className="flex-grow">
        <PageTransition>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
              <Route path="/services/data-engineering" element={<DataEngineering />} />
              <Route path="/services/cloud-migration" element={<CloudMigration />} />
              <Route path="/services/deltek-costpoint" element={<DeltekCostpoint />} />
              <Route path="/services/yardi-property-management-software" element={<YardiProperty />} />
              <Route path="/yardi/residential" element={<YardiResidential />} />
              <Route path="/yardi/commercial" element={<YardiCommercial />} />
              <Route path="/services/software-development" element={<WebSiteDevelopment />} />
              <Route path="/services/uk-accounting-and-payroll" element={<UkAccounting />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:jobId" element={<JobDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;