import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Module from "./pages/Module.tsx";
import Resource from "./pages/Resource.tsx";
import Tip from "./pages/Tip.tsx";
import Understanding from "./pages/Understanding.tsx";
import ArticleStory from "./pages/ArticleStory.tsx";
import NotFound from "./pages/NotFound.tsx";
import "@/i18n/config";

const queryClient = new QueryClient();

const LanguageManager = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langInUrl = params.get("lang");
    
    // Always ensure the current i18n language is reflected in the URL parameter
    // This handles persistence during navigation between modules
    if (i18n.language && langInUrl !== i18n.language) {
      const newParams = new URLSearchParams(location.search);
      newParams.set("lang", i18n.language);
      navigate(
        {
          pathname: location.pathname,
          search: newParams.toString(),
        },
        { replace: true }
      );
    }
  }, [i18n.language, location.pathname, location.search, navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/women_wellness_selfcare">
        <LanguageManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/module/:slug" element={<Module />} />
          <Route path="/module/:slug/understanding/:index" element={<Understanding />} />
          <Route path="/module/:slug/:kind/read/:index" element={<ArticleStory />} />
          <Route path="/module/:slug/:resource" element={<Resource />} />
          <Route path="/tips/:slug" element={<Tip />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
