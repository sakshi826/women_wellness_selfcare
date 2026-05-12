import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
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
import "./config/i18n";

const queryClient = new QueryClient();

const LanguageSync = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    } else if (!lang && i18n.language) {
      // Persist language to URL if it's missing but set in i18n
      setSearchParams({ lang: i18n.language }, { replace: true });
    }
  }, [location.pathname, searchParams, i18n.language, setSearchParams]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/women_wellness_selfcare">
        <LanguageSync />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/module/:slug" element={<Module />} />
          <Route path="/module/:slug/understanding/:index" element={<Understanding />} />
          <Route path="/module/:slug/:kind/read/:index" element={<ArticleStory />} />
          <Route path="/module/:slug/:resource" element={<Resource />} />
          <Route path="/tips/:slug" element={<Tip />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
