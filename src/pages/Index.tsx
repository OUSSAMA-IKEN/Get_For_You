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

const Index = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen  bg-backgroud text-foreground relative overclass">
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

        <TestimonialsSection />

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
