import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; // We'll assume this helper exists or create inline if strictly needed, but standard routing scrolls to top usually. Wouter doesn't auto-scroll.

// Page Imports
import Home from "@/pages/Home";
import About from "@/pages/About";
import Yacht from "@/pages/Yacht";
import Charters from "@/pages/Charters";
import Booking from "@/pages/Booking";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Scroll to top component for Wouter
function ScrollToTopWrapper() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopWrapper />
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/yacht" component={Yacht} />
          <Route path="/charters" component={Charters} />
          <Route path="/booking" component={Booking} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
