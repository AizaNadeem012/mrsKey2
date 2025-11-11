import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // <- add this
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Home | Your Website Name</title>
                  <meta name="description" content="Welcome to Your Website Name, offering the best services in [your niche]." />
                  <meta property="og:title" content="Home | Your Website Name" />
                  <meta property="og:description" content="Welcome to Your Website Name, offering the best services in [your niche]." />
                  <meta property="og:type" content="website" />
                </Helmet>
                <Index />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Us | Your Website Name</title>
                  <meta name="description" content="Learn more about Your Website Name, our mission, vision, and team." />
                </Helmet>
                <About />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Helmet>
                  <title>Services | Your Website Name</title>
                  <meta name="description" content="Discover the range of services offered by Your Website Name." />
                </Helmet>
                <Services />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us | Your Website Name</title>
                  <meta name="description" content="Get in touch with Your Website Name for inquiries or support." />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>404 Not Found | Your Website Name</title>
                  <meta name="description" content="Page not found. Return to Home Page of Your Website Name." />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
