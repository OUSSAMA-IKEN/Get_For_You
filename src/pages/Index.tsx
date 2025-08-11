import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductHero from "@/components/ProductHero";
import ProductDescription from "@/components/ProductDescription";
import { MarqueeDemo } from "@/components/MarqueeBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import "../App.css";

import { useTranslationContext } from "../contexts/i18n.context";

const Index = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [language, setLanguage] = useTranslationContext();

  return (
    <div
      className="min-h-screen  bg-backgroud text-foreground relative overclass"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background spots */}
      <div className="spot-1" />
      <div className="spot-2" />
      <div className="spot-3" />

      <Navbar />

      <main>
        <section id="home" className="pt-10">
          <ProductHero
            onOrderClick={() => setIsOrderModalOpen(true)}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </section>

        <MarqueeDemo />

        <ProductDescription />

        <section id="reviews" >
          <TestimonialsSection />
        </section>

        <FAQSection />
      </main>

      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        quantity={quantity}
      />
    </div>
  );
};

export default Index;
