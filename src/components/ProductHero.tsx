import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import productImage from '@/assets/product-hero.jpg';

interface ProductHeroProps {
  onOrderClick: () => void;
}

const ProductHero = ({ onOrderClick }: ProductHeroProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: number) => {
    setQuantity(prev => Math.max(1, prev + increment));
  };

  return (
    <section id="product" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background spots */}
      <div className="spot-1" />
      <div className="spot-2" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="gradient-border gradient-border-animated glow rounded-3xl overflow-hidden">
              <img
                src={productImage}
                alt="SoundWave Pro Headphones"
                className="w-full h-auto rounded-3xl"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/30 rounded-full blur-xl"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                SoundWave
              </span>
              <br />
              <span className="text-foreground">Pro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Découvrez une qualité audio exceptionnelle avec nos écouteurs premium. 
              Technologie de pointe, design élégant et confort ultime pour une expérience sonore inégalée.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-4xl font-bold text-primary"
            >
              299€
            </motion.div>

            {/* Quantity Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-4"
            >
              <span className="text-lg font-medium">Quantité:</span>
              <div className="flex items-center space-x-2 glass rounded-lg p-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-bold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Order Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onOrderClick}
                size="lg"
                className="w-full sm:w-auto px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 glow"
              >
                Demander maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;