import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductHero from '@/components/ProductHero';
import ProductDescription from '@/components/ProductDescription';
import MarqueeBanner from '@/components/MarqueeBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';

const Index = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Background spots */}
      <div className="spot-1" />
      <div className="spot-2" />
      <div className="spot-3" />
      
      <Navbar />
      
      <main>
        <section id="home">
          <ProductHero onOrderClick={() => setIsOrderModalOpen(true)} />
        </section>
        
        <MarqueeBanner />
        
        <ProductDescription />
        
        <TestimonialsSection />
        
        <FAQSection />
      </main>
      
      <Footer />
      
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
