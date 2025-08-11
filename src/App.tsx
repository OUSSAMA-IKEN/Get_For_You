import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TranslationContext from "./contexts/i18n.context";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationContext>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/Get_For_You">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" element={<Test />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </TranslationContext>
  </QueryClientProvider>
);

export default App;
